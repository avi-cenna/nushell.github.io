import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; group (group_size)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>group_size</code>: the size of each group</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Group the a list by pairs</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> group <span class="token number">2</span>
╭───┬───────────╮
│ <span class="token number">0</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">2</span> │ │
│   │ ╰───┴───╯ │
│ <span class="token number">1</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">3</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">4</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

</code></pre></div>`,7);function h(e,m){return r(),o("div",null,[a("h1",l,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for filters")]),a("div",u,n(e.$frontmatter.filters),1),d])}const b=t(c,[["render",h],["__file","group.html.vue"]]);export{b as default};
