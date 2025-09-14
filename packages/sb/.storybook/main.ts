import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import url from "node:url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const reamgifPath = path.resolve(__dirname, "../../reamgif/src");

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false,
    skipCompiler: true,
  },
  viteFinal: async (config) => {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@crescendolab/reamgif": reamgifPath,
          "@crescendolab/reamgif/dist": reamgifPath,
        },
      },
    };
  },
};
export default config;
