<template>
  <n-card title="menu">
    <n-space vertical>
      <n-switch v-model:value="accordion">
        <template #checked> 手风琴 </template>
        <template #unchecked> 普通 </template>
      </n-switch>
      <n-button @click="selectAndExpand('难吃')"> 选中第一项 </n-button>
      <n-button @click="selectAndExpand('/components/headlessTable/basic')"> 选中第二项 </n-button>
      <n-button @click="selectAndExpand('依然难吃')"> 选中第三项 </n-button>
      <n-menu ref="menuInstRef" v-model:value="selectedKey" :options="options" :accordion="accordion" />
    </n-space>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { MenuInst } from 'naive-ui';

export default defineComponent({
  setup() {
    const accordionRef = ref(false);
    const selectedKeyRef = ref('难吃');
    const menuInstRef = ref<MenuInst | null>(null);
    const selectAndExpand = (key: string) => {
      selectedKeyRef.value = key;
      menuInstRef.value?.showOption(key);
    };
    return {
      menuInstRef,
      selectAndExpand,
      accordion: accordionRef,
      selectedKey: selectedKeyRef,
      options: [
        {
          label: '学五',
          key: '学五',
          children: [
            {
              label: '难吃',
              key: '难吃',
            },
          ],
        },
        {
          label: '学一',
          key: '/components',
          children: [
            {
              label: '也难吃',
              key: '/components/headlessTable/basic',
            },
          ],
        },
        {
          label: '燕南',
          key: '燕南',
          children: [
            {
              label: '依然难吃',
              key: '依然难吃',
            },
          ],
        },
      ],
    };
  },
});
</script>
