import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: The number of items to remove</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Remove the last item of a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> drop
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div><p>Remove zero item of a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> drop <span class="token number">0</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">2</span> │
│ <span class="token number">3</span> │ <span class="token number">3</span> │
╰───┴───╯

</code></pre></div><p>Remove the last two items of a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> drop <span class="token number">2</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
╰───┴───╯

</code></pre></div><p>Remove the last row in a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span>, <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> drop <span class="token number">1</span>
╭───┬───┬───╮
│ <span class="token comment"># │ a │ b │</span>
├───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │
╰───┴───┴───╯

</code></pre></div>`,13);function m(s,k){return p(),o("div",null,[a("h1",l,[u,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",i,e(s.$frontmatter.filters),1),d])}const h=t(c,[["render",m],["__file","drop.html.vue"]]);export{h as default};
