# 🌟 crescendolab-open/reamgif

> [!WARNING]
> Status: Early preview (APIs may evolve). Feedback & issues welcome.

🎨 ➡️ ⚛️

> Figma‑compatible styling primitives for React components — powered by `@emotion/css`, strongly typed, composable, and friendly with any UI kit (e.g. `react-aria-components`).

`@crescendolab-open/reamgif` is an experimental foundations layer to let you bring Figma design tokens & per‑element visual props (starting with `cornerRadius`) directly into React without building a giant theme object first. Each prop becomes immediate runtime styles with deterministic precedence while remaining type‑safe and easily overridable.

## ✨ Goals

- 1:1 mental mapping with Figma surface-level properties (radius → `cornerRadius`, more coming: spacing, shadows, variables, semantic tokens)
- Zero-config emotion instance by default, but overrideable via provider
- Strong TypeScript inference for polymorphic components (`component` prop pattern)
- Props-first styling precedence (`css` > `className` > derived styles) with predictable merge
- Works with any headless/accessibility library (e.g. `react-aria-components`)
- No runtime theme flattening / no style prop explosion — only explicit supported props

## 🧱 Core Building Blocks

### `ReamgifBox`

Flexible primitive container. Defaults to a `<div>` but can polymorph via the `component` prop. Injects a data attribute (`data-reamgif-box`) for inspection/testing. Combines:

- Default base styles (`display: flex` + label)
- Derived styles from supported reamgif props (currently `cornerRadius`)
- User `className`
- User `css` (highest visual precedence)

```tsx
import { ReamgifBox } from "@crescendolab-open/reamgif";

export function Card() {
  return (
    <ReamgifBox
      cornerRadius={16}
      css={{ background: "#18181b", padding: 24, color: "white" }}
    >
      Hello Radius
    </ReamgifBox>
  );
}
```

#### Polymorphic usage

```tsx
<ReamgifBox component="button" type="button" cornerRadius={8}>
  Action
</ReamgifBox>
```

### `useReamgifProps`

Lower-level hook used internally by `ReamgifBox`. You can build your own design primitives with it.

Responsibilities:

- Merges supported visual props (e.g. `cornerRadius`) into an emotion class
- Computes responsive corner radius (never exceeding half of width/height)
- Attaches `data-reamgif` marker
- Merges refs (user + internal) and observes element size using `ResizeObserver` (throttled)

```tsx
import { useReamgifProps } from "@crescendolab-open/reamgif";

export const Panel = ({
  ref,
  ...props
}: { cornerRadius?: number } & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  const reamgif = useReamgifProps({ ...props, ref });
  return <div {...reamgif} />;
};
```

## 🌀 Styling Precedence

1. `css` prop (emotion interpolation — last word)
2. `className` prop (user provided)
3. Derived internal styles (e.g. generated corner radius)
4. Default base styles (`ReamgifBox.defaultCssInterpolation`)

Merging uses emotion's `css` + `cx` ensuring minimal cascading surprises.

## 🧮 Corner Radius Logic

```txt
effectiveRadius = clamp(requested, 0, floor(min(width/2, height/2)))
```

This prevents oval artifacts when components resize. When the element ref updates, the radius is recalculated (throttled to 300ms by default).

## 🤝 Integrating with Other UI Kits

Because we only output standard `className` + `data-*` + forwarded props, you can wrap headless/lib components seamlessly:

```tsx
import { useReamgifProps } from "@crescendolab-open/reamgif";
import { Button } from "react-aria-components";

function RacButton(
  props: { cornerRadius?: number } & React.ComponentProps<typeof Button>,
) {
  const reamgif = useReamgifProps(props);
  return <Button {...reamgif} />;
}
```

See Storybook stories under `stories/5_Integration/ReactAriaComponents` for a full example.

## 🛠 Building Your Own Primitive

Use the same pattern as `ReamgifBox`:

```tsx
import { useReamgifProps } from "@crescendolab-open/reamgif";
import React from "react";

export interface BadgeProps {
  cornerRadius?: number;
  tone?: "neutral" | "accent";
}

export const Badge = ({
  ref,
  tone = "neutral",
  ...rest
}: BadgeProps & { ref?: React.RefObject<HTMLSpanElement | null> }) => {
  const toneCss =
    tone === "accent"
      ? { background: "#2563eb", color: "white" }
      : { background: "#52525b", color: "white" };
  const reamgif = useReamgifProps({ ...rest, ref, css: toneCss });
  return <span {...reamgif} />;
};
```

## 📂 Source Structure (Highlights)

```text
packages/reamgif/src/
	ReamgifBox.tsx            // Polymorphic primitive
	useReamgifProps.tsx       // Core prop→style bridge
	EmotionInstanceProvider.* // (override emotion if needed)
	utils.ts                  // helpers (mergeCssInterpolation, etc.)
```

    > Note: Examples use `React.forwardRef` for compatibility. In React 19+ you can pass `ref` as a normal prop and omit `forwardRef`.

## 🧪 Storybook

Examples live under `packages/sb/stories` grouped by progression:

- 1_Getting_Start – Intro & usage
- 2_Basic – `ReamgifBox` scenarios
- 3_Build_Components – Custom component patterns
- 4_Advanced – Emotion instance provider
- 5_Integration – Third‑party kit interop

Run locally (in monorepo root):

```bash
pnpm install
pnpm run storybook # (if configured, else check repo scripts)
```

## 🚀 Install

```bash
pnpm add @crescendolab-open/reamgif
# or
npm install @crescendolab-open/reamgif
# or
yarn add @crescendolab-open/reamgif
```

Peer assumptions: React 18+, modern bundler, CSS capable environment.

## 🔧 Override Emotion Instance

You can wrap part of the tree with your own emotion cache / insertion logic via `EmotionInstanceProvider` (see advanced story). This allows scoping, SSR control, or shadow-root injection strategies.

## 🗺 Roadmap (Planned)

- Figma-like spacing props (paddingX, gap, etc.)
- Shadows & blur
- Design token variables mapping (theme + dynamic runtime)
- Variant & recipe helpers
- Improved SSR integration docs
- Accessibility patterns cookbook

## 🧩 Type System Notes

- Polymorphic prop pattern ensures intrinsic + component props merge safely
- `cornerRadius` typed as number (future: per-corner granularity)
- Data attributes: `data-reamgif` (generic), `data-reamgif-box` (box specific)

## 🧪 Testing Strategy (Internal)

- Runtime style precedence snapshots
- Ref merging & resize observer behavior
- Radius clamping logic

## 🤔 Why Not Just Tailwind / Styled-System?

Reamgif focuses narrowly on mirroring designer mental models (Figma panels) one prop at a time with deterministic merging and minimal abstraction—use it alongside utility classes or design tokens rather than replacing them.

## 📬 Feedback

File an issue or open a discussion—early ecosystem feedback will shape the API.

---

## 🎯 Release Library

This repository uses **[changesets/action](https://github.com/changesets/action)**, a GitHub Action that automates release management by creating a pull request with version updates and changelog entries whenever changes are pushed to the `main` branch.

To enable seamless releases, ensure GitHub Actions have sufficient permissions to write to and manage pull requests in your repository. Navigate to:

**Settings → Code and automation → Actions → General → Workflow permissions** and adjust the following:

- ✅ Select **Read and write permissions**
- ✅ Enable **Allow GitHub Actions to create and approve pull requests**

## 🤝 Contributing

Contributions are welcome! Please read the [contributing guide](https://github.com/crescendolab-open/reamgif/blob/main/CONTRIBUTING.md) for details.

## 📜 License

[Apache-2.0](https://github.com/crescendolab-open/reamgif/blob/main/LICENSE)

Copyright (c) 2025 [Crescendo Lab](https://github.com/crescendolab-open/)
