<script setup lang="ts">
import type { Menu } from 'celeris-types';
import { renderIcon } from '#/components/Iconx';
import { mapTreeStructure } from '#/utils';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { REDIRECT_NAME } from '#/router/constant';
import { getMenus } from '#/router/menus';
import { listenToRouteChange } from '#/router/mitt/routeChange';
import { usePermissionStore } from '#/store/modules/permission';
import { h } from 'vue';
import { iconMap } from '#/router/routes';
import { Components } from '@vicons/tabler';
import type { MenuInst } from 'naive-ui';

defineOptions({
  name: 'MenuLayout',
});
const props = withDefaults(
  defineProps<{
    mode?: 'vertical' | 'horizontal';
    collapsed?: boolean;
  }>(),
  { mode: 'vertical', collapsed: false },
);
const { mode, collapsed } = toRefs(props);

const { te, t } = useI18n();
const activeMenu = ref();
const permissionStore = usePermissionStore();
const { currentRoute } = useRouter();
const menuList = ref<any[]>([]);

const menuInstRef = ref<MenuInst | null>(null);

listenToRouteChange((route) => {
  if (route.name === REDIRECT_NAME) {
    return;
  }
  const currentActiveMenu = route.meta?.currentActiveMenu;
  handleMenuChange(route as RouteLocationNormalizedLoaded);
  if (currentActiveMenu) {
    activeMenu.value = currentActiveMenu;
  }
});
async function handleMenuChange(route?: RouteLocationNormalizedLoaded) {
  const menu = route || unref(currentRoute);
  activeMenu.value = menu.path;
}
function i18nRender(key: string) {
  return te(key) ? t(key) : key;
}

function transformProjectMenuToNaiveUIMenu(menu: Menu) {
  const { path, children, title } = menu;
  let icon = Components;
  if (iconMap.get(title)) icon = iconMap.get(title).icon;
  return {
    label: () => {
      if (children) {
        return i18nRender(title as string);
      }
      return h(
        RouterLink,
        {
          to: {
            path,
          },
        },
        { default: () => i18nRender(title as string) },
      );
    },
    key: path,
    icon: renderIcon(icon), // || meta?.icon as string
    collapseTitle: i18nRender(title),
  };
}
// Generate menu
function generateMenu() {
  const menus = getMenus();
  menuList.value = mapTreeStructure(menus, (menu) => transformProjectMenuToNaiveUIMenu(menu));
  nextTick(() => {
    menuInstRef.value?.showOption();
  });
}
// Menu changes
watch(
  [() => permissionStore.getLastMenuBuildTime, () => permissionStore.getBackendMenuList],
  () => {
    generateMenu();
  },
  {
    immediate: true,
  },
);
const collapsedWidth = computed<number>(() => (collapsed.value ? 64 : 300));
</script>

<template>
  <div :class="collapsed ? 'w-16' : 'w-60'" class="transition-width h-full shrink-0 flex-col overflow-hidden duration-75">
    <NScrollbar class="max-h-[calc(100vh_-_4rem)]">
      <NMenu ref="menuInstRef" accordion v-model:value="activeMenu" :collapsed="collapsed" :collapsed-width="collapsedWidth" :mode="mode" :options="menuList" />
    </NScrollbar>
  </div>
</template>

<style scoped></style>
