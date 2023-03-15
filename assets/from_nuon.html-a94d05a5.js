import{_ as t,p as r,q as o,Q as a,t as n,v as s,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-experimental",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-experimental","aria-hidden":"true"},"#",-1),d={class:"command-title"},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from nuon </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts nuon formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ a:1 }&#39;</span> <span class="token operator">|</span> from nuon
╭───┬───╮
│ a │ <span class="token number">1</span> │
╰───┴───╯
</code></pre></div><p>Converts nuon formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ a:1, b: [1, 2] }&#39;</span> <span class="token operator">|</span> from nuon
╭───┬───────────╮
│ a │ <span class="token number">1</span>         │
│   │ ╭───┬───╮ │
│ b │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">2</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯
</code></pre></div>`,7);function h(e,u){return r(),o("div",null,[a("h1",l,[i,n(),a("code",null,s(e.$frontmatter.title),1),n(" for experimental")]),a("div",d,s(e.$frontmatter.experimental),1),m])}const _=t(c,[["render",h],["__file","from_nuon.html.vue"]]);export{_ as default};
