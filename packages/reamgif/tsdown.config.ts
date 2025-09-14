import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

const basicConfig = {
  entry: ["src/index.ts"],
  tsconfig: "tsconfig.lib.json",
  dts: true,
} as const satisfies Exclude<UserConfig, Array<any>>;

export default defineConfig([
  {
    ...basicConfig,
    unbundle: true,
    copy: [
      {
        from: "../../README.md",
        to: "./README.md",
      },
      {
        from: "../../LICENSE",
        to: "./LICENSE",
      },
    ],
  },
]);
