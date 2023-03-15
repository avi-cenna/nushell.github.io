import{_ as t,p,q as o,Q as n,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; rename ...rest --column</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the new names for the columns</li><li><code>--column {list&lt;string&gt;}</code>: column name to be changed</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rename a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">rename</span> my_column
╭───┬───────────┬───╮
│ <span class="token comment"># │ my_column │ b │</span>
├───┼───────────┼───┤
│ <span class="token number">0</span> │         <span class="token number">1</span> │ <span class="token number">2</span> │
╰───┴───────────┴───╯

</code></pre></div><p>Rename many columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b, c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">rename</span> eggs ham bacon
╭───┬──────┬─────┬───────╮
│ <span class="token comment"># │ eggs │ ham │ bacon │</span>
├───┼──────┼─────┼───────┤
│ <span class="token number">0</span> │    <span class="token number">1</span> │   <span class="token number">2</span> │     <span class="token number">3</span> │
╰───┴──────┴─────┴───────╯

</code></pre></div><p>Rename a specific column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b, c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">rename</span> <span class="token parameter variable">-c</span> <span class="token punctuation">[</span>a ham<span class="token punctuation">]</span>
╭───┬─────┬───┬───╮
│ <span class="token comment"># │ ham │ b │ c │</span>
├───┼─────┼───┼───┤
│ <span class="token number">0</span> │   <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │
╰───┴─────┴───┴───╯

</code></pre></div><p>Rename the fields of a record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token number">1</span> b: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">rename</span> x y
╭───┬───╮
│ x │ <span class="token number">1</span> │
│ y │ <span class="token number">2</span> │
╰───┴───╯
</code></pre></div>`,13);function k(a,d){return p(),o("div",null,[n("h1",r,[u,s(),n("code",null,e(a.$frontmatter.title),1),s(" for filters")]),n("div",i,e(a.$frontmatter.filters),1),m])}const b=t(l,[["render",k],["__file","rename.html.vue"]]);export{b as default};
