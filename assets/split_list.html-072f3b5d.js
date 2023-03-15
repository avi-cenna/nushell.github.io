import{_ as t,p,q as o,Q as n,t as a,v as e,a1 as l}from"./framework-344bb0e4.js";const c={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split list (separator)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: the value that denotes what separates the list</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a list of chars into two lists</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a, b, c, d, e, f, g<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">split</span> list d
╭───┬───────────╮
│ <span class="token number">0</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ a │ │
│   │ │ <span class="token number">1</span> │ b │ │
│   │ │ <span class="token number">2</span> │ c │ │
│   │ ╰───┴───╯ │
│ <span class="token number">1</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ e │ │
│   │ │ <span class="token number">1</span> │ f │ │
│   │ │ <span class="token number">2</span> │ g │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

</code></pre></div><p>Split a list of lists into two lists of lists</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token number">2,3</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token number">3,4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">split</span> list <span class="token punctuation">[</span><span class="token number">2,3</span><span class="token punctuation">]</span>
╭───┬───────────────────╮
│ <span class="token number">0</span> │ ╭───┬───────────╮ │
│   │ │ <span class="token number">0</span> │ ╭───┬───╮ │ │
│   │ │   │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │ │
│   │ │   │ │ <span class="token number">1</span> │ <span class="token number">2</span> │ │ │
│   │ │   │ ╰───┴───╯ │ │
│   │ ╰───┴───────────╯ │
│ <span class="token number">1</span> │ ╭───┬───────────╮ │
│   │ │ <span class="token number">0</span> │ ╭───┬───╮ │ │
│   │ │   │ │ <span class="token number">0</span> │ <span class="token number">3</span> │ │ │
│   │ │   │ │ <span class="token number">1</span> │ <span class="token number">4</span> │ │ │
│   │ │   │ ╰───┴───╯ │ │
│   │ ╰───┴───────────╯ │
╰───┴───────────────────╯

</code></pre></div><p>Split a list of chars into two lists</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a, b, c, d, a, e, f, g<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">split</span> list a
╭───┬───────────╮
│ <span class="token number">0</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ b │ │
│   │ │ <span class="token number">1</span> │ c │ │
│   │ │ <span class="token number">2</span> │ d │ │
│   │ ╰───┴───╯ │
│ <span class="token number">1</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ e │ │
│   │ │ <span class="token number">1</span> │ f │ │
│   │ │ <span class="token number">2</span> │ g │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

</code></pre></div>`,11);function k(s,m){return p(),o("div",null,[n("h1",r,[i,a(),n("code",null,e(s.$frontmatter.title),1),a(" for filters")]),n("div",u,e(s.$frontmatter.filters),1),d])}const h=t(c,[["render",k],["__file","split_list.html.vue"]]);export{h as default};
