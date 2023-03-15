import{_ as t,p as r,q as o,Q as a,t as e,v as n,a1 as l}from"./framework-344bb0e4.js";const c={},p={id:"frontmatter-title-for-formats",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),m={class:"command-title"},i=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from yml </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts yaml formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a: 1&#39;</span> <span class="token operator">|</span> from yaml
╭───┬───╮
│ a │ <span class="token number">1</span> │
╰───┴───╯
</code></pre></div><p>Converts yaml formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;[ a: 1, b: [1, 2] ]&#39;</span> <span class="token operator">|</span> from yaml
╭───┬────┬───────────╮
│ <span class="token comment"># │ a  │     b     │</span>
├───┼────┼───────────┤
│ <span class="token number">0</span> │  <span class="token number">1</span> │    ❎     │
│ <span class="token number">1</span> │ ❎ │ ╭───┬───╮ │
│   │    │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │    │ │ <span class="token number">1</span> │ <span class="token number">2</span> │ │
│   │    │ ╰───┴───╯ │
╰───┴────┴───────────╯

</code></pre></div>`,7);function h(s,f){return r(),o("div",null,[a("h1",p,[d,e(),a("code",null,n(s.$frontmatter.title),1),e(" for formats")]),a("div",m,n(s.$frontmatter.formats),1),i])}const _=t(c,[["render",h],["__file","from_yml.html.vue"]]);export{_ as default};
