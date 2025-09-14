import type { Emotion } from "@emotion/css/create-instance";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EmotionInstanceProvider,
  ReamgifBox,
} from "@crescendolab-open/reamgif";
import createInstance from "@emotion/css/create-instance";
import { useMemo, useState } from "react";

const emotionKey = "playgrounddemo";

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [emotionInstance, setEmotionInstance] = useState<null | Emotion>(null);
  const setRef = useMemo(
    () =>
      ((element) => {
        if (!element) return;
        const emotionInstance = createInstance({
          key: emotionKey,
          container: element,
        });
        setEmotionInstance(emotionInstance);
      }) satisfies React.ComponentProps<"div">["ref"],
    [],
  );
  return (
    <>
      <div style={{ display: "none" }} ref={setRef} />
      {!emotionInstance ? null : (
        <EmotionInstanceProvider emotionInstance={emotionInstance}>
          {children}
        </EmotionInstanceProvider>
      )}
    </>
  );
};

const meta = {
  component: ReamgifBox,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "This demo shows how to use a custom Emotion instance with Reamgif components. The custom Emotion instance is created with a specific key and container, and is provided to the Reamgif components using the `EmotionInstanceProvider`.",
      },
    },
  },
  args: {
    css: { border: "1px solid red", padding: 8 },
    children: "With Custom Emotion Provider",
  },
  decorators: (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
};
