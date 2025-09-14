/* eslint-disable no-alert */
import type { Overwrite } from "@mui/types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { MyButton } from "./MyButton";
import { tooltipDecorator } from "../_utils/tooltipDecorator";
import { MyButtonBaseOnBox } from "./MyButton";

interface CustomArgs {}
export type Args = Overwrite<MyButton.Props, CustomArgs>;

const meta = {
  component: MyButtonBaseOnBox,
} satisfies Meta<Args>;

export default meta;

type Story = StoryObj<Args>;

export const Primary: Story = {
  args: {
    children: "My Button",
  },
};

export const WithTooltip: Story = {
  args: {
    children: "Hover Me",
  },
  decorators: [tooltipDecorator],
};

export const Disabled: Story = {
  args: {
    children: "Hover Me (Disabled)",
    disabled: true,
  },
  decorators: [tooltipDecorator],
};

export const DisabledLike: Story = {
  args: {
    children: "Hover Me",
    disabledLike: true,
  },
  decorators: [tooltipDecorator],
};

export const AsDiv: Story = {
  args: {
    children: "My Button",
    component: "div",
  },
};

export const AsAnchor: Story = {
  args: {
    children: "My Button",
  },
  render: (args) => (
    <MyButtonBaseOnBox
      component="a"
      href="#"
      {...args}
      onClick={(e) => {
        e.preventDefault();
        alert(`href: ${e.currentTarget.getAttribute("href")}`);
      }}
    />
  ),
};

export const WithCornerRadius: Story = {
  args: {
    children: "My Button",
    cornerRadius: 4,
  },
};

export const WithCustomCss: Story = {
  args: {
    children: "My Button",
    css: { backgroundColor: "lightgreen", padding: 16 },
  },
};
