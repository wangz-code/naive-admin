import { router } from '#/router';
import { usePermissionStore } from '#/store/modules/permission';
import { createPathMatcher, filterTree, getAllParentPaths, getFirstMatchingParent, isHttpUrl } from '#/utils';
import type { Menu } from 'celeris-types';
import type { RouteRecordNormalized } from 'vue-router';

const { isRolePermissionMode } = useAppPermission();

// Load all menu modules and transform them into menus

// Filter menus based on the current permission mode
function filterMenusByPermissionMode(): Menu[] {
  const permissionStore = usePermissionStore();

  // Recursively filter out hidden menus
  const filterMenu = (menu: Menu): boolean => {
    const show = !menu.meta?.shouldHideInMenu && !menu.shouldHideMenu;
    if (show && menu.children) {
      menu.children = menu.children.filter(filterMenu);
    }
    return show;
  };
  return permissionStore.getBackendMenuList.filter(filterMenu);
}

// Get all menus, filtered by permission mode and role
export function getMenus(): Menu[] {
  const menus = filterMenusByPermissionMode();
  if (toValue(isRolePermissionMode)) {
    const routes = router.getRoutes();
    return filterTree(menus, basicFilter(routes));
  }
  return menus;
}

// Get the path of the closest parent menu
export function getCurrentParentPath(currentPath: string) {
  const menus = getMenus();
  const allParentPaths = getAllParentPaths<Menu>(menus, currentPath);
  return allParentPaths?.[0];
}

export function getCurrentParent(currentPath: string) {
  const menus = getMenus();
  return getFirstMatchingParent<Menu>(menus, currentPath);
}

// Get a list of top-level menus
export function getShallowMenus(): Menu[] {
  const menus = filterMenusByPermissionMode();
  const shallowMenus = menus.map((menu) => ({ ...menu, children: undefined }));
  if (toValue(isRolePermissionMode)) {
    const routes = router.getRoutes();
    return shallowMenus.filter(basicFilter(routes));
  }
  return shallowMenus;
}

// Get a list of child menus for a given parent path
export function getChildrenMenus(parentPath: string) {
  const menus = getMenus();
  const parent = menus.find((menu) => menu.path === parentPath);
  if (!parent || !parent.children || !!parent?.meta?.shouldHideSubMenuInMenu) {
    return [] as Menu[];
  }
  if (toValue(isRolePermissionMode)) {
    const routes = router.getRoutes();
    return filterTree(parent.children, basicFilter(routes));
  }
  return parent.children;
}

// Basic filter function to match menus with routes
function basicFilter(routes: RouteRecordNormalized[]) {
  return (menu: Menu) => {
    const route = routes.find((route) => {
      if (isHttpUrl(menu.path)) {
        return true;
      }
      if (route.meta?.shouldCarryQueryParams) {
        return createPathMatcher(route.path).test(menu.path);
      }
      if (route.meta?.shouldIgnoreAuth) {
        return true;
      }
      return route.path === menu.path || createPathMatcher(route.path).test(menu.path);
    });
    if (!route) {
      return false;
    }
    menu.icon = (menu.icon || route.meta.icon) as string;
    menu.meta = route.meta;
    return true;
  };
}
