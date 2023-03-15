import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as i}from"./framework-344bb0e4.js";const c={},d={id:"frontmatter-title-for-expression",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr as </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates and alias expression</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> dfr col a <span class="token operator">|</span> dfr as new_a <span class="token operator">|</span> dfr into-nu
╭───────┬────────────────────╮
│       │ ╭───────┬────────╮ │
│ <span class="token function">expr</span>  │ │ <span class="token function">expr</span>  │ <span class="token function">column</span> │ │
│       │ │ value │ a      │ │
│       │ ╰───────┴────────╯ │
│ <span class="token builtin class-name">alias</span> │ new_a              │
╰───────┴────────────────────╯
</code></pre></div>`,5);function f(e,_){return r(),o("div",null,[a("h1",d,[l,s(),a("code",null,n(e.$frontmatter.title),1),s(" for expression")]),a("div",p,n(e.$frontmatter.expression),1),h])}const m=t(c,[["render",f],["__file","dfr_as.html.vue"]]);export{m as default};
