import type { StoryObj } from "@storybook/react-vite";
import { css } from "@emotion/css";
import { OverlayArrow, Tooltip, TooltipTrigger } from "react-aria-components";

const tooltipClassName = css({
  "--highlight-background": "black",
  "--highlight-foreground": "white",
  boxShadow: "0 8px 20px rgba(0 0 0 / 0.1)",
  borderRadius: "4px",
  background: "var(--highlight-background)",
  color: "var(--highlight-foreground)",
  forcedColorAdjust: "none",
  outline: "none",
  padding: "2px 8px",
  maxWidth: "150px",
  transform: "translate3d(0, 0, 0)",
  transition: "transform 200ms, opacity 200ms",
  transformOrigin: "var(--trigger-anchor-point)",

  "&[data-entering], &[data-exiting]": {
    transform: "scale(0.9) var(--origin)",
    opacity: 0,
  },

  "&[data-placement=top]": {
    marginBottom: "8px",
    "--origin": "translateY(4px)",
  },

  "&[data-placement=bottom]": {
    marginTop: "8px",
    "--origin": "translateY(-4px)",
    "& .react-aria-OverlayArrow svg": {
      transform: "rotate(180deg)",
    },
  },

  "&[data-placement=right]": {
    marginLeft: "8px",
    "--origin": "translateX(-4px)",
    "& .react-aria-OverlayArrow svg": {
      transform: "rotate(90deg)",
    },
  },

  "&[data-placement=left]": {
    marginRight: "8px",
    "--origin": "translateX(4px)",
    "& .react-aria-OverlayArrow svg": {
      transform: "rotate(-90deg)",
    },
  },

  "& .react-aria-OverlayArrow svg": {
    display: "block",
    fill: "var(--highlight-background)",
  },
});

export const tooltipDecorator: Extract<
  StoryObj["decorators"],
  Array<any>
>[number] = (Story) => (
  <TooltipTrigger>
    <Story />
    <Tooltip className={tooltipClassName}>
      <OverlayArrow>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      <span>Tooltip content</span>
    </Tooltip>
  </TooltipTrigger>
);
