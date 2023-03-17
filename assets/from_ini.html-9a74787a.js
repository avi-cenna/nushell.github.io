import{_ as s,p as r,q as o,Q as a,t,v as n,a1 as i}from"./framework-344bb0e4.js";const c={},d={id:"frontmatter-title-for-formats",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),f={class:"command-title"},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ini </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ini formatted string to record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;[foo]
a=1
b=2&#39;</span> <span class="token operator">|</span> from ini
╭─────┬───────────╮
│     │ ╭───┬───╮ │
│ foo │ │ a │ <span class="token number">1</span> │ │
│     │ │ b │ <span class="token number">2</span> │ │
│     │ ╰───┴───╯ │
╰─────┴───────────╯
</code></pre></div>`,5);function p(e,m){return r(),o("div",null,[a("h1",d,[l,t(),a("code",null,n(e.$frontmatter.title),1),t(" for formats")]),a("div",f,n(e.$frontmatter.formats),1),h])}const u=s(c,[["render",p],["__file","from_ini.html.vue"]]);export{u as default};
