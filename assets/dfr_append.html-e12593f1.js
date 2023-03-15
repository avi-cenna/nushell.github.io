import{_ as p,p as t,q as o,Q as a,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-dataframe",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),k={class:"command-title"},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr append </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Appends a dataframe as new columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$a</span> <span class="token operator">|</span> dfr append <span class="token variable">$a</span>
╭───┬───┬───┬─────┬─────╮
│ <span class="token comment"># │ a │ b │ a_x │ b_x │</span>
├───┼───┼───┼─────┼─────┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │   <span class="token number">1</span> │   <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │   <span class="token number">3</span> │   <span class="token number">4</span> │
╰───┴───┴───┴─────┴─────╯

</code></pre></div><p>Appends a dataframe merging at the end of columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$a</span> <span class="token operator">|</span> dfr append <span class="token variable">$a</span> <span class="token parameter variable">--col</span>
╭───┬───┬───╮
│ <span class="token comment"># │ a │ b │</span>
├───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │
│ <span class="token number">2</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">3</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │
╰───┴───┴───╯

</code></pre></div>`,7);function d(n,m){return t(),o("div",null,[a("h1",r,[u,s(),a("code",null,e(n.$frontmatter.title),1),s(" for dataframe")]),a("div",k,e(n.$frontmatter.dataframe),1),i])}const f=p(l,[["render",d],["__file","dfr_append.html.vue"]]);export{f as default};
