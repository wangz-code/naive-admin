<script setup lang="ts">
import DataCard from '#/components/Card/src/DataCard.vue';
import CardInnerIcon from '#/views/dashboard/components/CardInnerIcon.vue';
import { AlertTriangle, Wallet } from '@vicons/tabler';
</script>

<template>
  <NGrid cols="2" item-responsive responsive="screen" :x-gap="16" :y-gap="16">
    <NGridItem>
      <!--  API余额监控：使用 "API Balance Monitoring" 来清晰地表达对API余额的追踪和监控。 -->
      <DataCard title="API余额" centered currency="CNY" :val="64">
        <template #icon>
          <CardInnerIcon :icon-name="Wallet" container />
        </template>
      </DataCard>
    </NGridItem>
    <NGridItem>
      <!--  错误率分析：使用 "Error Rate Analysis" 来表示关注Chatbot互动中的错误率，并进行相应的分析。 -->
      <DataCard title="API错误数" centered :val="32">
        <template #icon>
          <CardInnerIcon :icon-name="AlertTriangle" container />
        </template>
      </DataCard>
    </NGridItem>
  </NGrid>
</template>

<style scoped></style>
