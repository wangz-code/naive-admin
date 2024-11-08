<template>
  <n-popover trigger="click" placement="bottom">
    <template #trigger>
      <i-button title="列设置" :icon="Settings"></i-button>
    </template>
    <n-flex justify="space-between" class="m-t-1 text-gray">
      长按拖动排序
      <n-button size="tiny" type="info" @click="reset">重置</n-button>
    </n-flex>
    <n-divider dashed style="margin: 10px 0px" />
    <VueDraggable ref="el" v-model="colsConfig" @update="refresh" class="cols-box">
      <div v-for="item in colsConfig" :key="item.key">
        <n-flex v-if="item.title" class="m-t-2" align="center">
          <n-icon v-if="item.column.fixed" :component="PinnedOff" @click="fixed(item)" />
          <n-icon v-else :component="Pinned" @click="fixed(item.column as DataTableColumn)" />
          <n-checkbox v-model:checked="item.show" @update:checked="refresh" :label="item.title" />
        </n-flex>
      </div>
    </VueDraggable>
  </n-popover>
</template>

<script lang="ts" setup generic="T extends object">
import { Pinned, PinnedOff, Settings } from '@vicons/tabler';
import { cloneDeep } from 'lodash-es';
import { NFlex, NIcon, type DataTableColumn, type DataTableColumns } from 'naive-ui';
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import { useRoute } from 'vue-router';
import { useTableColStore } from '../../store/table-column';

const { columns } = defineProps<{ columns: DataTableColumns<T> }>();

const emit = defineEmits(['change']);
const { fullPath: uid } = useRoute();

const cloneColumns = cloneDeep(columns);
const { initTableCols, setColsConfig, resetTableCols } = useTableColStore();
const colsConfig = ref(initTableCols(uid, columns));

const refresh = () => {
  const cols = colsConfig.value.filter((item) => item.show).map((item) => item.column);
  setColsConfig(uid, colsConfig.value);
  emit('change', cols);
};

const reset = () => {
  resetTableCols(uid);
  colsConfig.value = initTableCols(uid, cloneDeep(cloneColumns));
  refresh();
};

const fixed = (column: DataTableColumn) => {
  if (column.fixed) {
    delete column.fixed;
  } else {
    column.fixed = 'left';
  }
  refresh();
};

refresh();
</script>

<style scoped>
.cols-box {
  height: 500px;
  overflow: auto;
}
</style>
