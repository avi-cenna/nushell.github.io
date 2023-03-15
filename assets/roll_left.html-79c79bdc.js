import{_ as t,p as o,q as p,Q as n,t as a,v as e,a1 as l}from"./framework-344bb0e4.js";const c={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},k=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; roll left --by --cells-only</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--by {int}</code>: Number of columns to roll</li><li><code>--cells-only</code> <code>(-c)</code>: rotates columns leaving headers fixed</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rolls columns of a record to the left</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a:1 b:2 c:3<span class="token punctuation">}</span> <span class="token operator">|</span> roll left
╭───┬───╮
│ b │ <span class="token number">2</span> │
│ c │ <span class="token number">3</span> │
│ a │ <span class="token number">1</span> │
╰───┴───╯
</code></pre></div><p>Rolls columns of a table to the left</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> roll left
╭───┬───┬───┬───╮
│ <span class="token comment"># │ b │ c │ a │</span>
├───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">5</span> │ <span class="token number">6</span> │ <span class="token number">4</span> │
╰───┴───┴───┴───╯

</code></pre></div><p>Rolls columns to the left without changing column names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> roll left --cells-only
╭───┬───┬───┬───╮
│ <span class="token comment"># │ a │ b │ c │</span>
├───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">5</span> │ <span class="token number">6</span> │ <span class="token number">4</span> │
╰───┴───┴───┴───╯

</code></pre></div>`,11);function m(s,d){return o(),p("div",null,[n("h1",r,[u,a(),n("code",null,e(s.$frontmatter.title),1),a(" for filters")]),n("div",i,e(s.$frontmatter.filters),1),k])}const h=t(c,[["render",m],["__file","roll_left.html.vue"]]);export{h as default};
