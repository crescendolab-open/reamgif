import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{t as i}from"./tooltipDecorator-BF2ERmlj.js";import{a as p}from"./MyButton-BNbELSKO.js";import"./ReamgifBox-1o-0IZSQ.js";import"./iframe-aXJ6WYej.js";import"./preload-helper-D9Z9MdNV.js";import"./index-QaalZJj-.js";import"./index-UGj4l_mz.js";const f={component:p},r={args:{children:"My Button"}},e={args:{children:"Hover Me"},decorators:[i]},o={args:{children:"Hover Me (Disabled)",disabled:!0},decorators:[i]},s={args:{children:"Hover Me",disabledLike:!0},decorators:[i]},a={args:{children:"My Button",component:"div"}},t={args:{children:"My Button"},render:u=>m.jsx(p,{component:"a",href:"#",...u,onClick:d=>{d.preventDefault(),alert(`href: ${d.currentTarget.getAttribute("href")}`)}})},n={args:{children:"My Button",cornerRadius:4}},c={args:{children:"My Button",css:{backgroundColor:"lightgreen",padding:16}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "My Button"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Hover Me"
  },
  decorators: [tooltipDecorator]
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Hover Me (Disabled)",
    disabled: true
  },
  decorators: [tooltipDecorator]
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Hover Me",
    disabledLike: true
  },
  decorators: [tooltipDecorator]
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "My Button",
    component: "div"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "My Button"
  },
  render: args => <MyButtonBaseOnHook component="a" href="#" {...args} onClick={e => {
    e.preventDefault();
    alert(\`href: \${e.currentTarget.getAttribute("href")}\`);
  }} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "My Button",
    cornerRadius: 4
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "My Button",
    css: {
      backgroundColor: "lightgreen",
      padding: 16
    }
  }
}`,...c.parameters?.docs?.source}}};const v=["Primary","WithTooltip","Disabled","DisabledLike","AsDiv","AsAnchor","WithCornerRadius","WithCustomCss"];export{t as AsAnchor,a as AsDiv,o as Disabled,s as DisabledLike,r as Primary,n as WithCornerRadius,c as WithCustomCss,e as WithTooltip,v as __namedExportsOrder,f as default};
