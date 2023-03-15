import{_ as e,p,q as o,Q as n,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const l={},u={id:"frontmatter-title-for-filters",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; flatten ...rest --all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally flatten data by column</li><li><code>--all</code> <code>(-a)</code>: flatten inner table one level out</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>flatten a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>N, u, s, h, e, l, l<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten
╭───┬───╮
│ <span class="token number">0</span> │ N │
│ <span class="token number">1</span> │ u │
│ <span class="token number">2</span> │ s │
│ <span class="token number">3</span> │ h │
│ <span class="token number">4</span> │ e │
│ <span class="token number">5</span> │ l │
│ <span class="token number">6</span> │ l │
╰───┴───╯

</code></pre></div><p>flatten a table, get the first item</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>N, u, s, h, e, l, l<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token operator">|</span> first

</code></pre></div><p>flatten a column having a nested table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>origin, people<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Ecuador, <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>name, meal<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;Andres&#39;</span>, <span class="token string">&#39;arepa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token parameter variable">--all</span> <span class="token operator">|</span> get meal

</code></pre></div><p>restrict the flattening by passing column names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>origin, crate, versions<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>World, <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu-cli&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>, <span class="token punctuation">[</span><span class="token string">&#39;0.21&#39;</span>, <span class="token string">&#39;0.22&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten versions <span class="token parameter variable">--all</span> <span class="token operator">|</span> last <span class="token operator">|</span> get versions

</code></pre></div><p>Flatten inner table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> a: b, d: <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token punctuation">]</span>,  e: <span class="token punctuation">[</span> <span class="token number">4</span> <span class="token number">3</span>  <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">|</span> flatten d <span class="token parameter variable">--all</span>
╭───┬───┬───┬───────────╮
│ <span class="token comment"># │ a │ d │     e     │</span>
├───┼───┼───┼───────────┤
│ <span class="token number">0</span> │ b │ <span class="token number">1</span> │ ╭───┬───╮ │
│   │   │   │ │ <span class="token number">0</span> │ <span class="token number">4</span> │ │
│   │   │   │ │ <span class="token number">1</span> │ <span class="token number">3</span> │ │
│   │   │   │ ╰───┴───╯ │
│ <span class="token number">1</span> │ b │ <span class="token number">2</span> │ ╭───┬───╮ │
│   │   │   │ │ <span class="token number">0</span> │ <span class="token number">4</span> │ │
│   │   │   │ │ <span class="token number">1</span> │ <span class="token number">3</span> │ │
│   │   │   │ ╰───┴───╯ │
│ <span class="token number">2</span> │ b │ <span class="token number">3</span> │ ╭───┬───╮ │
│   │   │   │ │ <span class="token number">0</span> │ <span class="token number">4</span> │ │
│   │   │   │ │ <span class="token number">1</span> │ <span class="token number">3</span> │ │
│   │   │   │ ╰───┴───╯ │
│ <span class="token number">3</span> │ b │ <span class="token number">4</span> │ ╭───┬───╮ │
│   │   │   │ │ <span class="token number">0</span> │ <span class="token number">4</span> │ │
│   │   │   │ │ <span class="token number">1</span> │ <span class="token number">3</span> │ │
│   │   │   │ ╰───┴───╯ │
╰───┴───┴───┴───────────╯

</code></pre></div>`,15);function d(a,m){return p(),o("div",null,[n("h1",u,[r,s(),n("code",null,t(a.$frontmatter.title),1),s(" for filters")]),n("div",i,t(a.$frontmatter.filters),1),k])}const h=e(l,[["render",d],["__file","flatten.html.vue"]]);export{h as default};
