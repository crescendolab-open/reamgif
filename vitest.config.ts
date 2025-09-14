// import path from "node:path";
// import url from "node:url";
// import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

import { defineConfig } from "vitest/config";
// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      "packages/*",
      // {
      //   plugins: [
      //     // The plugin will run tests for the stories defined in your Storybook config
      //     // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      //     storybookTest({
      //       configDir: path.join(__dirname, "packages", "sb", ".storybook"),
      //     }),
      //   ],
      //   test: {
      //     name: "storybook",
      //     browser: {
      //       enabled: true,
      //       headless: true,
      //       provider: "playwright",
      //       instances: [
      //         {
      //           browser: "chromium",
      //         },
      //       ],
      //     },
      //     setupFiles: ["packages/sb/.storybook/vitest.setup.ts"],
      //   },
      // },
    ],
  },
});
