import{_ as t,p,q as o,Q as n,t as a,v as e,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; roll right --by --cells-only</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--by {int}</code>: Number of columns to roll</li><li><code>--cells-only</code> <code>(-c)</code>: rotates columns leaving headers fixed</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rolls columns of a record to the right</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a:1 b:2 c:3<span class="token punctuation">}</span> <span class="token operator">|</span> roll right
╭───┬───╮
│ c │ <span class="token number">3</span> │
│ a │ <span class="token number">1</span> │
│ b │ <span class="token number">2</span> │
╰───┴───╯
</code></pre></div><p>Rolls columns to the right</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> roll right
╭───┬───┬───┬───╮
│ <span class="token comment"># │ c │ a │ b │</span>
├───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">3</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">6</span> │ <span class="token number">4</span> │ <span class="token number">5</span> │
╰───┴───┴───┴───╯

</code></pre></div><p>Rolls columns to the right with fixed headers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> roll right --cells-only
╭───┬───┬───┬───╮
│ <span class="token comment"># │ a │ b │ c │</span>
├───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">3</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">6</span> │ <span class="token number">4</span> │ <span class="token number">5</span> │
╰───┴───┴───┴───╯

</code></pre></div>`,11);function k(s,m){return p(),o("div",null,[n("h1",r,[u,a(),n("code",null,e(s.$frontmatter.title),1),a(" for filters")]),n("div",i,e(s.$frontmatter.filters),1),d])}const b=t(l,[["render",k],["__file","roll_right.html.vue"]]);export{b as default};
