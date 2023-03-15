import{_ as t,p as o,q as p,Q as n,t as a,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; values </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This is a counterpart to <code>columns</code>, which produces a list of columns&#39; names.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the values from the record (produce a list)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> mode:normal userid:31415 <span class="token punctuation">}</span> <span class="token operator">|</span> values
╭───┬────────╮
│ <span class="token number">0</span> │ normal │
│ <span class="token number">1</span> │  <span class="token number">31415</span> │
╰───┴────────╯

</code></pre></div><p>Values are ordered by the column order of the record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> f:250 g:191 c:128 d:1024 e:2000 a:16 b:32 <span class="token punctuation">}</span> <span class="token operator">|</span> values
╭───┬──────╮
│ <span class="token number">0</span> │  <span class="token number">250</span> │
│ <span class="token number">1</span> │  <span class="token number">191</span> │
│ <span class="token number">2</span> │  <span class="token number">128</span> │
│ <span class="token number">3</span> │ <span class="token number">1024</span> │
│ <span class="token number">4</span> │ <span class="token number">2000</span> │
│ <span class="token number">5</span> │   <span class="token number">16</span> │
│ <span class="token number">6</span> │   <span class="token number">32</span> │
╰───┴──────╯

</code></pre></div><p>Get the values from the table (produce a list of lists)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name meaning<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>ls list<span class="token punctuation">]</span> <span class="token punctuation">[</span>mv move<span class="token punctuation">]</span> <span class="token punctuation">[</span>cd <span class="token string">&#39;change directory&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> values
╭───┬──────────────────────────╮
│ <span class="token number">0</span> │ ╭───┬────╮               │
│   │ │ <span class="token number">0</span> │ <span class="token function">ls</span> │               │
│   │ │ <span class="token number">1</span> │ <span class="token function">mv</span> │               │
│   │ │ <span class="token number">2</span> │ <span class="token builtin class-name">cd</span> │               │
│   │ ╰───┴────╯               │
│ <span class="token number">1</span> │ ╭───┬──────────────────╮ │
│   │ │ <span class="token number">0</span> │ list             │ │
│   │ │ <span class="token number">1</span> │ move             │ │
│   │ │ <span class="token number">2</span> │ change directory │ │
│   │ ╰───┴──────────────────╯ │
╰───┴──────────────────────────╯

</code></pre></div>`,11);function m(s,k){return o(),p("div",null,[n("h1",l,[u,a(),n("code",null,e(s.$frontmatter.title),1),a(" for filters")]),n("div",i,e(s.$frontmatter.filters),1),d])}const b=t(r,[["render",m],["__file","values.html.vue"]]);export{b as default};
