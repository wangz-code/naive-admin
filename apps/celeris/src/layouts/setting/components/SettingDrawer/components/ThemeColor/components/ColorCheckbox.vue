<script lang="ts" setup>
import { Checkmark } from '@vicons/ionicons5';

defineOptions({
  name: 'ColorCheckbox',
});

withDefaults(defineProps<Props>(), {});

interface Props {
  /**
   * 颜色
   * Color
   */
  color: string;
  /**
   * 是否选中
   * Whether it is checked
   */
  checked: boolean;
}
</script>

<template>
  <div class="flex justify-center items-center p-0 w-5 h-5 rounded shadow cursor-pointer hover:border" :style="{ backgroundColor: color }">
    <Iconx v-if="checked" :component="Checkmark" color="white" />
  </div>
</template>

<style scoped></style>
