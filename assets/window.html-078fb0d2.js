import{_ as t,p,q as o,Q as n,t as a,v as e,a1 as r}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; window (window_size) --stride --remainder</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>window_size</code>: the size of each window</li><li><code>--stride {int}</code>: the number of rows to slide over between windows</li><li><code>--remainder</code> <code>(-r)</code>: yield last chunks even if they have fewer elements than size</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>A sliding window of two elements</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> window <span class="token number">2</span>
╭───┬───────────╮
│ <span class="token number">0</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">2</span> │ │
│   │ ╰───┴───╯ │
│ <span class="token number">1</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">2</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">3</span> │ │
│   │ ╰───┴───╯ │
│ <span class="token number">2</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">3</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">4</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

</code></pre></div><p>A sliding window of two elements, with a stride of 3</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">4</span>, <span class="token number">5</span>, <span class="token number">6</span>, <span class="token number">7</span>, <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> window <span class="token number">2</span> <span class="token parameter variable">--stride</span> <span class="token number">3</span>
╭───┬───────────╮
│ <span class="token number">0</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">2</span> │ │
│   │ ╰───┴───╯ │
│ <span class="token number">1</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">4</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">5</span> │ │
│   │ ╰───┴───╯ │
│ <span class="token number">2</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">7</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">8</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

</code></pre></div><p>A sliding window of equal stride that includes remainder. Equivalent to chunking</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">4</span>, <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> window <span class="token number">3</span> <span class="token parameter variable">--stride</span> <span class="token number">3</span> <span class="token parameter variable">--remainder</span>
╭───┬───────────╮
│ <span class="token number">0</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">2</span> │ │
│   │ │ <span class="token number">2</span> │ <span class="token number">3</span> │ │
│   │ ╰───┴───╯ │
│ <span class="token number">1</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">4</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">5</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

</code></pre></div>`,11);function d(s,k){return p(),o("div",null,[n("h1",c,[u,a(),n("code",null,e(s.$frontmatter.title),1),a(" for filters")]),n("div",i,e(s.$frontmatter.filters),1),m])}const h=t(l,[["render",d],["__file","window.html.vue"]]);export{h as default};
