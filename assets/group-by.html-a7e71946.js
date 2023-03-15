import{_ as t,p as r,q as o,Q as a,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-default",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; group-by (grouper)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>grouper</code>: the grouper value to use</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Group items by the &quot;type&quot; column&#39;s values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> group-by <span class="token builtin class-name">type</span>

</code></pre></div><p>You can also group by raw values by leaving out the argument</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span> <span class="token string">&#39;3&#39;</span> <span class="token string">&#39;1&#39;</span> <span class="token string">&#39;3&#39;</span> <span class="token string">&#39;2&#39;</span> <span class="token string">&#39;1&#39;</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> group-by
╭───┬───────────╮
│   │ ╭───┬───╮ │
│ <span class="token number">1</span> │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">2</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">3</span> │ <span class="token number">1</span> │ │
│   │ ╰───┴───╯ │
│   │ ╭───┬───╮ │
│ <span class="token number">3</span> │ │ <span class="token number">0</span> │ <span class="token number">3</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">3</span> │ │
│   │ ╰───┴───╯ │
│   │ ╭───┬───╮ │
│ <span class="token number">2</span> │ │ <span class="token number">0</span> │ <span class="token number">2</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯
</code></pre></div>`,9);function h(s,m){return r(),o("div",null,[a("h1",c,[u,n(),a("code",null,e(s.$frontmatter.title),1),n(" for default")]),a("div",i,e(s.$frontmatter.default),1),d])}const b=t(l,[["render",h],["__file","group-by.html.vue"]]);export{b as default};
