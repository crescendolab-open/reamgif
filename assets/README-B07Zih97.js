import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-D4WTvNsT.js";import"./iframe-aXJ6WYej.js";import"./preload-helper-D9Z9MdNV.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"-crescendolab-openreamgif",children:"🌟 crescendolab-open/reamgif"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`[!WARNING]
Status: Early preview (APIs may evolve). Feedback & issues welcome.`}),`
`]}),`
`,e.jsx(n.p,{children:"🎨 ➡️ ⚛️"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Figma‑compatible styling primitives for React components — powered by ",e.jsx(n.code,{children:"@emotion/css"}),", strongly typed, composable, and friendly with any UI kit (e.g. ",e.jsx(n.code,{children:"react-aria-components"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@crescendolab/reamgif"})," is an experimental foundations layer to let you bring Figma design tokens & per‑element visual props (starting with ",e.jsx(n.code,{children:"cornerRadius"}),") directly into React without building a giant theme object first. Each prop becomes immediate runtime styles with deterministic precedence while remaining type‑safe and easily overridable."]}),`
`,e.jsx(n.h2,{id:"-goals",children:"✨ Goals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["1:1 mental mapping with Figma surface-level properties (radius → ",e.jsx(n.code,{children:"cornerRadius"}),", more coming: spacing, shadows, variables, semantic tokens)"]}),`
`,e.jsx(n.li,{children:"Zero-config emotion instance by default, but overrideable via provider"}),`
`,e.jsxs(n.li,{children:["Strong TypeScript inference for polymorphic components (",e.jsx(n.code,{children:"component"})," prop pattern)"]}),`
`,e.jsxs(n.li,{children:["Props-first styling precedence (",e.jsx(n.code,{children:"css"})," > ",e.jsx(n.code,{children:"className"})," > derived styles) with predictable merge"]}),`
`,e.jsxs(n.li,{children:["Works with any headless/accessibility library (e.g. ",e.jsx(n.code,{children:"react-aria-components"}),")"]}),`
`,e.jsx(n.li,{children:"No runtime theme flattening / no style prop explosion — only explicit supported props"}),`
`]}),`
`,e.jsx(n.h2,{id:"-core-building-blocks",children:"🧱 Core Building Blocks"}),`
`,e.jsx(n.h3,{id:"reamgifbox",children:e.jsx(n.code,{children:"ReamgifBox"})}),`
`,e.jsxs(n.p,{children:["Flexible primitive container. Defaults to a ",e.jsx(n.code,{children:"<div>"})," but can polymorph via the ",e.jsx(n.code,{children:"component"})," prop. Injects a data attribute (",e.jsx(n.code,{children:"data-reamgif-box"}),") for inspection/testing. Combines:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Default base styles (",e.jsx(n.code,{children:"display: flex"})," + label)"]}),`
`,e.jsxs(n.li,{children:["Derived styles from supported reamgif props (currently ",e.jsx(n.code,{children:"cornerRadius"}),")"]}),`
`,e.jsxs(n.li,{children:["User ",e.jsx(n.code,{children:"className"})]}),`
`,e.jsxs(n.li,{children:["User ",e.jsx(n.code,{children:"css"})," (highest visual precedence)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ReamgifBox } from "@crescendolab/reamgif";

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
`})}),`
`,e.jsx(n.h4,{id:"polymorphic-usage",children:"Polymorphic usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ReamgifBox component="button" type="button" cornerRadius={8}>
  Action
</ReamgifBox>
`})}),`
`,e.jsx(n.h3,{id:"usereamgifprops",children:e.jsx(n.code,{children:"useReamgifProps"})}),`
`,e.jsxs(n.p,{children:["Lower-level hook used internally by ",e.jsx(n.code,{children:"ReamgifBox"}),". You can build your own design primitives with it."]}),`
`,e.jsx(n.p,{children:"Responsibilities:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Merges supported visual props (e.g. ",e.jsx(n.code,{children:"cornerRadius"}),") into an emotion class"]}),`
`,e.jsx(n.li,{children:"Computes responsive corner radius (never exceeding half of width/height)"}),`
`,e.jsxs(n.li,{children:["Attaches ",e.jsx(n.code,{children:"data-reamgif"})," marker"]}),`
`,e.jsxs(n.li,{children:["Merges refs (user + internal) and observes element size using ",e.jsx(n.code,{children:"ResizeObserver"})," (throttled)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useReamgifProps } from "@crescendolab/reamgif";

export const Panel = ({
  ref,
  ...props
}: { cornerRadius?: number } & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  const reamgif = useReamgifProps({ ...props, ref });
  return <div {...reamgif} />;
};
`})}),`
`,e.jsx(n.h2,{id:"-styling-precedence",children:"🌀 Styling Precedence"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"css"})," prop (emotion interpolation — last word)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"})," prop (user provided)"]}),`
`,e.jsx(n.li,{children:"Derived internal styles (e.g. generated corner radius)"}),`
`,e.jsxs(n.li,{children:["Default base styles (",e.jsx(n.code,{children:"ReamgifBox.defaultCssInterpolation"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Merging uses emotion's ",e.jsx(n.code,{children:"css"})," + ",e.jsx(n.code,{children:"cx"})," ensuring minimal cascading surprises."]}),`
`,e.jsx(n.h2,{id:"-corner-radius-logic",children:"🧮 Corner Radius Logic"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`effectiveRadius = clamp(requested, 0, floor(min(width/2, height/2)))
`})}),`
`,e.jsx(n.p,{children:"This prevents oval artifacts when components resize. When the element ref updates, the radius is recalculated (throttled to 300ms by default)."}),`
`,e.jsx(n.h2,{id:"-integrating-with-other-ui-kits",children:"🤝 Integrating with Other UI Kits"}),`
`,e.jsxs(n.p,{children:["Because we only output standard ",e.jsx(n.code,{children:"className"})," + ",e.jsx(n.code,{children:"data-*"})," + forwarded props, you can wrap headless/lib components seamlessly:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useReamgifProps } from "@crescendolab/reamgif";
import { Button } from "react-aria-components";

function RacButton(
  props: { cornerRadius?: number } & React.ComponentProps<typeof Button>,
) {
  const reamgif = useReamgifProps(props);
  return <Button {...reamgif} />;
}
`})}),`
`,e.jsxs(n.p,{children:["See Storybook stories under ",e.jsx(n.code,{children:"stories/5_Integration/ReactAriaComponents"})," for a full example."]}),`
`,e.jsx(n.h2,{id:"-building-your-own-primitive",children:"🛠 Building Your Own Primitive"}),`
`,e.jsxs(n.p,{children:["Use the same pattern as ",e.jsx(n.code,{children:"ReamgifBox"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useReamgifProps } from "@crescendolab/reamgif";
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
`})}),`
`,e.jsx(n.h2,{id:"-source-structure-highlights",children:"📂 Source Structure (Highlights)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`packages/reamgif/src/
	ReamgifBox.tsx            // Polymorphic primitive
	useReamgifProps.tsx       // Core prop→style bridge
	EmotionInstanceProvider.* // (override emotion if needed)
	utils.ts                  // helpers (mergeCssInterpolation, etc.)
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: Examples use ",e.jsx(n.code,{children:"React.forwardRef"})," for compatibility. In React 19+ you can pass ",e.jsx(n.code,{children:"ref"})," as a normal prop and omit ",e.jsx(n.code,{children:"forwardRef"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"-storybook",children:"🧪 Storybook"}),`
`,e.jsxs(n.p,{children:["Examples live under ",e.jsx(n.code,{children:"packages/sb/stories"})," grouped by progression:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"1_Getting_Start – Intro & usage"}),`
`,e.jsxs(n.li,{children:["2_Basic – ",e.jsx(n.code,{children:"ReamgifBox"})," scenarios"]}),`
`,e.jsx(n.li,{children:"3_Build_Components – Custom component patterns"}),`
`,e.jsx(n.li,{children:"4_Advanced – Emotion instance provider"}),`
`,e.jsx(n.li,{children:"5_Integration – Third‑party kit interop"}),`
`]}),`
`,e.jsx(n.p,{children:"Run locally (in monorepo root):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm install
pnpm run storybook # (if configured, else check repo scripts)
`})}),`
`,e.jsx(n.h2,{id:"-install",children:"🚀 Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add @crescendolab/reamgif
# or
npm install @crescendolab/reamgif
# or
yarn add @crescendolab/reamgif
`})}),`
`,e.jsx(n.p,{children:"Peer assumptions: React 18+, modern bundler, CSS capable environment."}),`
`,e.jsx(n.h2,{id:"-override-emotion-instance",children:"🔧 Override Emotion Instance"}),`
`,e.jsxs(n.p,{children:["You can wrap part of the tree with your own emotion cache / insertion logic via ",e.jsx(n.code,{children:"EmotionInstanceProvider"})," (see advanced story). This allows scoping, SSR control, or shadow-root injection strategies."]}),`
`,e.jsx(n.h2,{id:"-roadmap-planned",children:"🗺 Roadmap (Planned)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Figma-like spacing props (paddingX, gap, etc.)"}),`
`,e.jsx(n.li,{children:"Shadows & blur"}),`
`,e.jsx(n.li,{children:"Design token variables mapping (theme + dynamic runtime)"}),`
`,e.jsx(n.li,{children:"Variant & recipe helpers"}),`
`,e.jsx(n.li,{children:"Improved SSR integration docs"}),`
`,e.jsx(n.li,{children:"Accessibility patterns cookbook"}),`
`]}),`
`,e.jsx(n.h2,{id:"-type-system-notes",children:"🧩 Type System Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Polymorphic prop pattern ensures intrinsic + component props merge safely"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cornerRadius"})," typed as number (future: per-corner granularity)"]}),`
`,e.jsxs(n.li,{children:["Data attributes: ",e.jsx(n.code,{children:"data-reamgif"})," (generic), ",e.jsx(n.code,{children:"data-reamgif-box"})," (box specific)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"-testing-strategy-internal",children:"🧪 Testing Strategy (Internal)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Runtime style precedence snapshots"}),`
`,e.jsx(n.li,{children:"Ref merging & resize observer behavior"}),`
`,e.jsx(n.li,{children:"Radius clamping logic"}),`
`]}),`
`,e.jsx(n.h2,{id:"-why-not-just-tailwind--styled-system",children:"🤔 Why Not Just Tailwind / Styled-System?"}),`
`,e.jsx(n.p,{children:"Reamgif focuses narrowly on mirroring designer mental models (Figma panels) one prop at a time with deterministic merging and minimal abstraction—use it alongside utility classes or design tokens rather than replacing them."}),`
`,e.jsx(n.h2,{id:"-feedback",children:"📬 Feedback"}),`
`,e.jsx(n.p,{children:"File an issue or open a discussion—early ecosystem feedback will shape the API."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-release-library",children:"🎯 Release Library"}),`
`,e.jsxs(n.p,{children:["This repository uses ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://github.com/changesets/action",rel:"nofollow",children:"changesets/action"})}),", a GitHub Action that automates release management by creating a pull request with version updates and changelog entries whenever changes are pushed to the ",e.jsx(n.code,{children:"main"})," branch."]}),`
`,e.jsx(n.p,{children:"To enable seamless releases, ensure GitHub Actions have sufficient permissions to write to and manage pull requests in your repository. Navigate to:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Settings → Code and automation → Actions → General → Workflow permissions"})," and adjust the following:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["✅ Select ",e.jsx(n.strong,{children:"Read and write permissions"})]}),`
`,e.jsxs(n.li,{children:["✅ Enable ",e.jsx(n.strong,{children:"Allow GitHub Actions to create and approve pull requests"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"-contributing",children:"🤝 Contributing"}),`
`,e.jsxs(n.p,{children:["Contributions are welcome! Please read the ",e.jsx(n.a,{href:"https://github.com/crescendolab-open/reamgif/blob/main/CONTRIBUTING.md",rel:"nofollow",children:"contributing guide"})," for details."]}),`
`,e.jsx(n.h2,{id:"-license",children:"📜 License"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/crescendolab-open/reamgif/blob/main/LICENSE",rel:"nofollow",children:"Apache-2.0"})}),`
`,e.jsxs(n.p,{children:["Copyright (c) 2025 ",e.jsx(n.a,{href:"https://github.com/crescendolab-open/",rel:"nofollow",children:"Crescendo Lab"})]})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default};
