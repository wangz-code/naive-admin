<script setup lang="ts">
import { DataInsightCard } from '#/components/Card';
import { isNil } from '#/utils';
import CardInnerIcon from '#/views/dashboard/components/CardInnerIcon.vue';
import { useThemeVars } from 'naive-ui';
import VChart from 'vue-echarts';
import { responseMock } from '../mockResp';
import { ToolTipFormatterParams } from 'celeris-types';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  quota: {
    type: String,
    default: '',
  },
  chartType: {
    type: String,
    default: '',
  },
  icon: {
    type: Object,
    default: '',
  },
});

const { loading, setLoading } = useLoading(true);
const count = ref();
const growth = ref(100);
const chartData = ref<any>([]);
const themeVariables = useThemeVars();
const { chartOption } = useChartOption(() => {
  return {
    grid: {
      left: 5,
      right: 5,
      top: 0,
      bottom: 15,
    },
    xAxis: {
      type: 'category',
      show: false,
    },
    yAxis: {
      show: false,
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter(params) {
        const [firstElement] = params as ToolTipFormatterParams[];
        const getData = () => {
          return firstElement.componentSubType === 'line' ? firstElement.data : (firstElement.data as any)?.value;
        };
        if (!isNil(firstElement)) {
          count.value = getData();
        }
        return `<div>
            <p class="tooltip-title">${getData()}</p>
          </div>`;
      },
    },
    series: [
      {
        data: chartData.value,
        ...(props.chartType === 'bar'
          ? {
              type: 'bar',
              barWidth: 10,
              barGap: '0',
            }
          : {
              type: 'line',
              showSymbol: false,
              smooth: true,
              lineStyle: {
                color: themeVariables.value.primaryColor,
              },
            }),
      },
    ],
  };
});
async function fetchData() {
  try {
    const { data } = await responseMock['user-analysis-data'];
    const { chartData: resChartData } = data;
    count.value = data.count;
    growth.value = data.growth;
    resChartData.data.value.forEach((el: number, idx: number) => {
      if (props.chartType === 'bar') {
        chartData.value.push({
          value: el,
          itemStyle: {
            color: idx % 2 ? themeVariables.value.primaryColor : themeVariables.value.warningColor,
          },
        });
      } else {
        chartData.value.push(el);
      }
    });
  } catch (err) {
    // you can report use errorHandler or other
  } finally {
    setLoading(false);
  }
}
fetchData();
</script>

<template>
  <NSpin :show="loading" class="w-full overflow-hidden">
    <DataInsightCard :title="title" :data-count="count" :chart-height="140">
      <template #icon>
        <CardInnerIcon :icon-name="icon" container />
      </template>
      <template #chart>
        <v-chart :option="chartOption" autoresize />
      </template>
    </DataInsightCard>
  </NSpin>
</template>

<style scoped></style>
