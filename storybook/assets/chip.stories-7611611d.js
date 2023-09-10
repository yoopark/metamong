import{c as x,j as r,V as b,H as o,C as i,a as M}from"./stack-d96e340c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var t=x({defaultClassName:"jz9vfg0",variantClassNames:{border:{true:"jz9vfg1"},borderRadius:{none:"jz9vfg2",sm:"jz9vfg3",md:"jz9vfg4"},color:{white:"jz9vfg5",black:"jz9vfg6",gray:"jz9vfg7",error:"jz9vfg8"}},defaultVariants:{border:!1,borderRadius:"md",color:"black"},compoundVariants:[]});function e({variants:c,children:j}){return r.jsx("span",{className:t(c),children:j})}try{t.displayName="chip",t.__docgenInfo={description:"",displayName:"chip",props:{variants:{defaultValue:null,description:"",name:"variants",required:!1,type:{name:"VariantSelection<{ border: { true: { border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`; }; }; borderRadius: { none: { borderRadius: number; }; sm: { borderRadius: number; }; md: { borderRadius: number; }; }; color: { ...; }; }>"}}}}}catch{}const k={title:"Components/Chip",component:e},n={name:"기본",args:{children:"Metamong"}},a={name:"모두",render:()=>r.jsxs(b,{children:[r.jsxs(o,{children:[r.jsx(e,{children:"Metamong"}),r.jsx(e,{variants:{color:"white"},children:"Metamong"}),r.jsx(e,{variants:{color:"gray"},children:"Metamong"}),r.jsx(e,{variants:{color:"error"},children:"Metamong"})]}),r.jsxs(o,{children:[r.jsx(e,{variants:{color:"white",border:!0},children:"Metamong"}),r.jsx(e,{variants:{color:"gray",border:!0},children:"Metamong"}),r.jsx(e,{variants:{color:"error",border:!0},children:"Metamong"})]}),r.jsxs(o,{children:[r.jsx(e,{variants:{borderRadius:"none"},children:"Metamong"}),r.jsx(e,{variants:{borderRadius:"sm"},children:"Metamong"}),r.jsx(e,{variants:{borderRadius:"md"},children:"Metamong"})]})]})},s={name:"아이콘과 함께",render:()=>r.jsxs(o,{children:[r.jsxs(e,{children:[r.jsx(i,{size:12}),"Metamong"]}),r.jsxs(e,{children:["Metamong",r.jsx(i,{size:12})]}),r.jsxs(e,{children:[r.jsx(i,{size:12}),"Metamong",r.jsx(M,{size:12})]})]})};var d,m,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '기본',
  args: {
    children: 'Metamong'
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,h,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '모두',
  render: () => <VStack>
      <HStack>
        <Chip>Metamong</Chip>
        <Chip variants={{
        color: 'white'
      }}>Metamong</Chip>
        <Chip variants={{
        color: 'gray'
      }}>Metamong</Chip>
        <Chip variants={{
        color: 'error'
      }}>Metamong</Chip>
      </HStack>
      <HStack>
        <Chip variants={{
        color: 'white',
        border: true
      }}>Metamong</Chip>
        <Chip variants={{
        color: 'gray',
        border: true
      }}>Metamong</Chip>
        <Chip variants={{
        color: 'error',
        border: true
      }}>Metamong</Chip>
      </HStack>
      <HStack>
        <Chip variants={{
        borderRadius: 'none'
      }}>Metamong</Chip>
        <Chip variants={{
        borderRadius: 'sm'
      }}>Metamong</Chip>
        <Chip variants={{
        borderRadius: 'md'
      }}>Metamong</Chip>
      </HStack>
    </VStack>
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,C,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '아이콘과 함께',
  render: () => <HStack>
      <Chip>
        <Camera size={12} />
        Metamong
      </Chip>
      <Chip>
        Metamong
        <Camera size={12} />
      </Chip>
      <Chip>
        <Camera size={12} />
        Metamong
        <Code2 size={12} />
      </Chip>
    </HStack>
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const R=["Default","All","WithIcon"];export{a as All,n as Default,s as WithIcon,R as __namedExportsOrder,k as default};
//# sourceMappingURL=chip.stories-7611611d.js.map
