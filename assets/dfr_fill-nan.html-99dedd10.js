import{_ as t,p,q as o,Q as a,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr fill-nan (fill)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>fill</code>: Expression to use to fill the NAN values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Fills the NaN values with 0</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> NaN <span class="token number">3</span> NaN<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr fill-nan <span class="token number">0</span>
╭───┬───╮
│ <span class="token comment"># │ 0 │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token number">0</span> │
│ <span class="token number">3</span> │ <span class="token number">3</span> │
│ <span class="token number">4</span> │ <span class="token number">0</span> │
╰───┴───╯

</code></pre></div><p>Fills the NaN values of a whole dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">0.2</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.1</span> NaN<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr fill-nan <span class="token number">0</span>
╭───┬────────┬───╮
│ <span class="token comment"># │   a    │ b │</span>
├───┼────────┼───┤
│ <span class="token number">0</span> │ <span class="token number">0.2000</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">0.1000</span> │ <span class="token number">0</span> │
╰───┴────────┴───╯

</code></pre></div>`,9);function m(n,k){return p(),o("div",null,[a("h1",c,[u,s(),a("code",null,e(n.$frontmatter.title),1),s(" for lazyframe")]),a("div",i,e(n.$frontmatter.lazyframe),1),d])}const h=t(l,[["render",m],["__file","dfr_fill-nan.html.vue"]]);export{h as default};
