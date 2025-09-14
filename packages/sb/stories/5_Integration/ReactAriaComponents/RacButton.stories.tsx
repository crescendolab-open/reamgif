/* eslint-disable no-alert */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "react-aria-components";
import { tooltipDecorator } from "../../_utils/tooltipDecorator";
import { RacButton } from "./RacButton";

type Args = RacButton.Props;

const meta = {
  component: RacButton,
} satisfies Meta<Args>;

export default meta;

type Story = StoryObj<Args>;

export const Default: Story = {
  args: {
    children: "This is a RacButton",
  },
};

export const Danger: Story = {
  args: {
    children: "This is a danger RacButton",
    danger: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "This is a disabled RacButton",
    isDisabled: true,
  },
};

export const SharperCorners: Story = {
  args: {
    children: "This is a RacButton with cornerRadius=4",
    cornerRadius: 4,
  },
};

export const WithTooltip: Story = {
  args: {
    children: "This is a RacButton with a tooltip",
  },
  decorators: [tooltipDecorator],
};

export const DisabledWithTooltip: Story = {
  args: {
    children: "Tootip does not work on disabled RacButton",
    isDisabled: true,
  },
  decorators: [tooltipDecorator],
};

export const DisabledLikeWithTooltip: Story = {
  args: {
    children: "Tooltip works on disabled-like RacButton",
    disabledLike: true,
  },
  decorators: [tooltipDecorator],
};

export const AsLink: Story = {
  args: {
    children: "This is a RacButton rendered as an anchor",
  },
  render: (args) => (
    <RacButton
      component={Link}
      {...args}
      href="#"
      onClick={(e) => e.preventDefault()}
      onPress={(e) => alert(`href: ${e.target.getAttribute("href")}`)}
    />
  ),
};

export const AsAnchor: Story = {
  args: {
    children: "This is a RacButton rendered as an anchor",
  },
  render: (args) => (
    <RacButton
      component="a"
      {...args}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        alert(`href: ${e.currentTarget.getAttribute("href")}`);
      }}
    />
  ),
};
