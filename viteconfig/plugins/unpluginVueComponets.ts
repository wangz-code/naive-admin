import type { ComponentResolver } from "unplugin-vue-components";
import Components from "unplugin-vue-components/vite";
import type { PluginOption } from "vite";
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export function createVueComponentsPluginConfig(): PluginOption {
  return Components({
    extensions: ["vue"],
    include: [/\.vue$/, /\.vue\?vue/],
    dts: "autoResolver/components.d.ts",
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [
      CelerisAdminResolver(),
      NaiveUiResolver()
    ],
  });
}
/**
 * Resolver for CelerisAdmin
 *
 * @author @kirklin
 */
export function CelerisAdminResolver(): ComponentResolver {
  return {
    type: "component",
    resolve: (name: string) => {
      // Resolver for Naive UI
      // @link https://www.naiveui.com/
      if (name.match(/^(N[A-Z]|n-[a-z])/)) {
        return { name, from: "@celeris/ca-components" };
      }
      if (name.match(/^(CA[A-Z]|ca-[a-z])/)) {
        return { name, from: "@celeris/components" };
      }
    },
  };
}