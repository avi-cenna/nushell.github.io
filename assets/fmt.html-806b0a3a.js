import{_ as t,p as r,q as o,Q as e,t as n,v as s,a1 as c}from"./framework-344bb0e4.js";const i={},l={id:"frontmatter-title-for-conversions",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fmt </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get a record containing multiple formats for the number 42</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">42</span> <span class="token operator">|</span> <span class="token function">fmt</span>
╭──────────┬──────────╮
│ binary   │ 0b101010 │
│ debug    │ <span class="token number">42</span>       │
│ display  │ <span class="token number">42</span>       │
│ lowerexp │ <span class="token number">4</span>.2e1    │
│ lowerhex │ 0x2a     │
│ octal    │ 0o52     │
│ upperexp │ <span class="token number">4</span>.2E1    │
│ upperhex │ 0x2A     │
╰──────────┴──────────╯
</code></pre></div>`,5);function m(a,u){return r(),o("div",null,[e("h1",l,[p,n(),e("code",null,s(a.$frontmatter.title),1),n(" for conversions")]),e("div",d,s(a.$frontmatter.conversions),1),h])}const _=t(i,[["render",m],["__file","fmt.html.vue"]]);export{_ as default};
