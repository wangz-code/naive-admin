<script setup lang="ts">
import { createColumnHelper, getCoreRowModel, useVueTable } from '@tanstack/vue-table';

import { AppTable } from '#/components/AppTable';
import type { ChatGPTDemoTableRow } from '#/views/components/headless-table/basic/data';
import { chatGPTDemoTestData } from '#/views/components/headless-table/basic/data';

defineOptions({
  name: 'HeadlessTableBasic',
});
const { t } = useI18n();
const columnHelper = createColumnHelper<ChatGPTDemoTableRow>();
const columns = [
  columnHelper.accessor((row) => row.userInput, {
    id: 'userInput',
    cell: (info) => info.getValue(),
    header: () => ' 用户输入',
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor((row) => row.expectedReply, {
    id: 'expectedReply',
    cell: (info) => info.getValue(),
    header: () => '预期回复',
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor((row) => row.isTestPassed, {
    id: 'isTestPassed',
    cell: (info) => (info.getValue() === true ? '✅' : '❌'),
    header: () => '是否通过测试',
    footer: (props) => props.column.id,
  }),
];
const test: ChatGPTDemoTableRow[] = [];
for (let i = 0; i < 10; i++) {
  test.push(chatGPTDemoTestData[0]);
}
const table = useVueTable({
  get data() {
    return test;
  },
  debugAll: true,
  columns,
  getCoreRowModel: getCoreRowModel(),
});
</script>

<template>
  <NCard :title="t('page.headlessTable.pageTitles.basic')">
    <AppTable :table="table" />
  </NCard>
</template>

<style scoped></style>
