import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReamgifBox } from "@crescendolab-open/reamgif";

type Args = ReamgifBox.Props;

const meta = {
  component: ReamgifBox,
} satisfies Meta<Args>;

export default meta;

type Story = StoryObj<Args>;

export const Default: Story = {
  args: {
    children: "This is a ReamgifBox",
  },
};

export const CustomComponent: Story = {
  args: {
    component: "button",
    children: "This is a ReamgifBox as a button",
  },
};

export const WithCustomStyles: Story = {
  args: {
    css: {
      backgroundColor: "#f0f0f0",
      border: "2px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
    },
    children: "This is a styled ReamgifBox",
  },
};

export const CornerRadius: Story = {
  args: {
    component: "button",
    cornerRadius: 999,
    children: "This is a button with cornerRadius=999",
  },
};
