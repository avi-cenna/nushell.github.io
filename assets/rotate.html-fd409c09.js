import{_ as t,p,q as o,Q as n,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const l={},u={id:"frontmatter-title-for-filters",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),k={class:"command-title"},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; rotate ...rest --ccw</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the names to give columns once rotated</li><li><code>--ccw</code> <code>(-)</code>: rotate counter clockwise</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rotate a record clockwise, producing a table (like <code>transpose</code> but with column order reversed)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a:1, b:2<span class="token punctuation">}</span> <span class="token operator">|</span> rotate
╭───┬─────────┬─────────╮
│ <span class="token comment"># │ column0 │ column1 │</span>
├───┼─────────┼─────────┤
│ <span class="token number">0</span> │       <span class="token number">1</span> │ a       │
│ <span class="token number">1</span> │       <span class="token number">2</span> │ b       │
╰───┴─────────┴─────────╯

</code></pre></div><p>Rotate 2x3 table clockwise</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate
╭───┬─────────┬─────────┬─────────┬─────────╮
│ <span class="token comment"># │ column0 │ column1 │ column2 │ column3 │</span>
├───┼─────────┼─────────┼─────────┼─────────┤
│ <span class="token number">0</span> │       <span class="token number">5</span> │       <span class="token number">3</span> │       <span class="token number">1</span> │ a       │
│ <span class="token number">1</span> │       <span class="token number">6</span> │       <span class="token number">4</span> │       <span class="token number">2</span> │ b       │
╰───┴─────────┴─────────┴─────────┴─────────╯

</code></pre></div><p>Rotate table clockwise and change columns names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate col_a col_b
╭───┬───────┬───────╮
│ <span class="token comment"># │ col_a │ col_b │</span>
├───┼───────┼───────┤
│ <span class="token number">0</span> │     <span class="token number">1</span> │ a     │
│ <span class="token number">1</span> │     <span class="token number">2</span> │ b     │
╰───┴───────┴───────╯

</code></pre></div><p>Rotate table counter clockwise</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate <span class="token parameter variable">--ccw</span>
╭───┬─────────┬─────────╮
│ <span class="token comment"># │ column0 │ column1 │</span>
├───┼─────────┼─────────┤
│ <span class="token number">0</span> │ b       │       <span class="token number">2</span> │
│ <span class="token number">1</span> │ a       │       <span class="token number">1</span> │
╰───┴─────────┴─────────╯

</code></pre></div><p>Rotate table counter-clockwise</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate <span class="token parameter variable">--ccw</span>
╭───┬─────────┬─────────┬─────────┬─────────╮
│ <span class="token comment"># │ column0 │ column1 │ column2 │ column3 │</span>
├───┼─────────┼─────────┼─────────┼─────────┤
│ <span class="token number">0</span> │ b       │       <span class="token number">2</span> │       <span class="token number">4</span> │       <span class="token number">6</span> │
│ <span class="token number">1</span> │ a       │       <span class="token number">1</span> │       <span class="token number">3</span> │       <span class="token number">5</span> │
╰───┴─────────┴─────────┴─────────┴─────────╯

</code></pre></div><p>Rotate table counter-clockwise and change columns names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate <span class="token parameter variable">--ccw</span> col_a col_b
╭───┬───────┬───────╮
│ <span class="token comment"># │ col_a │ col_b │</span>
├───┼───────┼───────┤
│ <span class="token number">0</span> │ b     │     <span class="token number">2</span> │
│ <span class="token number">1</span> │ a     │     <span class="token number">1</span> │
╰───┴───────┴───────╯

</code></pre></div>`,17);function m(a,b){return p(),o("div",null,[n("h1",u,[r,s(),n("code",null,e(a.$frontmatter.title),1),s(" for filters")]),n("div",k,e(a.$frontmatter.filters),1),i])}const h=t(l,[["render",m],["__file","rotate.html.vue"]]);export{h as default};
