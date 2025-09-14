import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as m,c as d,E as p}from"./ReamgifBox-1o-0IZSQ.js";import{r}from"./iframe-aXJ6WYej.js";import"./preload-helper-D9Z9MdNV.js";const h="playgrounddemo",u=({children:n})=>{const[t,i]=r.useState(null),a=r.useMemo(()=>s=>{if(!s)return;const c=d({key:h,container:s});i(c)},[]);return o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{display:"none"},ref:a}),t?o.jsx(p,{emotionInstance:t,children:n}):null]})},x={component:m},e={parameters:{docs:{description:{story:"This demo shows how to use a custom Emotion instance with Reamgif components. The custom Emotion instance is created with a specific key and container, and is provided to the Reamgif components using the `EmotionInstanceProvider`."}}},args:{css:{border:"1px solid red",padding:8},children:"With Custom Emotion Provider"},decorators:n=>o.jsx(u,{children:o.jsx(n,{})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "This demo shows how to use a custom Emotion instance with Reamgif components. The custom Emotion instance is created with a specific key and container, and is provided to the Reamgif components using the \`EmotionInstanceProvider\`."
      }
    }
  },
  args: {
    css: {
      border: "1px solid red",
      padding: 8
    },
    children: "With Custom Emotion Provider"
  },
  decorators: Story => <Provider>
      <Story />
    </Provider>
}`,...e.parameters?.docs?.source}}};const v=["Demo"];export{e as Demo,v as __namedExportsOrder,x as default};
