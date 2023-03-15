import{_ as e,p,q as o,Q as n,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-dataframe-or-lazyframe",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe-or-lazyframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr with-column </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Adds a series to the dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr into-df
    <span class="token operator">|</span> dfr with-column <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span> <span class="token parameter variable">--name</span> c
╭───┬───┬───┬───╮
│ <span class="token comment"># │ a │ b │ c │</span>
├───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">5</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │ <span class="token number">6</span> │
╰───┴───┴───┴───╯

</code></pre></div><p>Adds a series to the dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr into-lazy
    <span class="token operator">|</span> dfr with-column <span class="token punctuation">[</span>
        <span class="token punctuation">((</span>dfr col a<span class="token punctuation">)</span> * <span class="token number">2</span> <span class="token operator">|</span> dfr as <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">((</span>dfr col a<span class="token punctuation">)</span> * <span class="token number">3</span> <span class="token operator">|</span> dfr as <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr collect
╭───┬───┬───┬───┬───╮
│ <span class="token comment"># │ a │ b │ c │ d │</span>
├───┼───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │ <span class="token number">6</span> │ <span class="token number">9</span> │
╰───┴───┴───┴───┴───╯

</code></pre></div>`,7);function d(a,m){return p(),o("div",null,[n("h1",l,[u,s(),n("code",null,t(a.$frontmatter.title),1),s(" for dataframe or lazyframe")]),n("div",i,t(a.$frontmatter.dataframe_or_lazyframe),1),k])}const f=e(r,[["render",d],["__file","dfr_with-column.html.vue"]]);export{f as default};
