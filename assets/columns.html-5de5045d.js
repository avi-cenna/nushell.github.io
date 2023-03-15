import{_ as t,p as o,q as p,Q as a,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; columns </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This is a counterpart to <code>values</code>, which produces a list of columns&#39; values.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the columns from the record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> acronym:<span class="token environment constant">PWD</span>, meaning:<span class="token string">&#39;Print Working Directory&#39;</span> <span class="token punctuation">}</span> <span class="token operator">|</span> columns
╭───┬─────────╮
│ <span class="token number">0</span> │ acronym │
│ <span class="token number">1</span> │ meaning │
╰───┴─────────╯

</code></pre></div><p>Get the columns from the table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns
╭───┬───────╮
│ <span class="token number">0</span> │ name  │
│ <span class="token number">1</span> │ age   │
│ <span class="token number">2</span> │ grade │
╰───┴───────╯

</code></pre></div><p>Get the first column from the table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> first

</code></pre></div><p>Get the second column from the table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token number">1</span>

</code></pre></div>`,13);function h(n,k){return o(),p("div",null,[a("h1",r,[u,s(),a("code",null,e(n.$frontmatter.title),1),s(" for filters")]),a("div",i,e(n.$frontmatter.filters),1),d])}const g=t(l,[["render",h],["__file","columns.html.vue"]]);export{g as default};
