import{_ as t,p,q as o,Q as n,t as a,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),m={class:"command-title"},i=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr summary </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>list dataframe descriptives</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr summary
╭───┬────────────┬─────────┬─────────╮
│ <span class="token comment"># │ descriptor │ a (i64) │ b (i64) │</span>
├───┼────────────┼─────────┼─────────┤
│ <span class="token number">0</span> │ count      │  <span class="token number">2.0000</span> │  <span class="token number">2.0000</span> │
│ <span class="token number">1</span> │ <span class="token function">sum</span>        │  <span class="token number">2.0000</span> │  <span class="token number">2.0000</span> │
│ <span class="token number">2</span> │ mean       │  <span class="token number">1.0000</span> │  <span class="token number">1.0000</span> │
│ <span class="token number">3</span> │ median     │  <span class="token number">1.0000</span> │  <span class="token number">1.0000</span> │
│ <span class="token number">4</span> │ std        │  <span class="token number">0.0000</span> │  <span class="token number">0.0000</span> │
│ <span class="token number">5</span> │ min        │  <span class="token number">1.0000</span> │  <span class="token number">1.0000</span> │
│ <span class="token number">6</span> │ <span class="token number">25</span>%        │  <span class="token number">1.0000</span> │  <span class="token number">1.0000</span> │
│ <span class="token number">7</span> │ <span class="token number">50</span>%        │  <span class="token number">1.0000</span> │  <span class="token number">1.0000</span> │
│ <span class="token number">8</span> │ <span class="token number">75</span>%        │  <span class="token number">1.0000</span> │  <span class="token number">1.0000</span> │
│ <span class="token number">9</span> │ max        │  <span class="token number">1.0000</span> │  <span class="token number">1.0000</span> │
╰───┴────────────┴─────────┴─────────╯

</code></pre></div>`,5);function k(s,d){return p(),o("div",null,[n("h1",l,[u,a(),n("code",null,e(s.$frontmatter.title),1),a(" for dataframe")]),n("div",m,e(s.$frontmatter.dataframe),1),i])}const f=t(c,[["render",k],["__file","dfr_summary.html.vue"]]);export{f as default};
