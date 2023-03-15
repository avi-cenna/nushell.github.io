import{_ as e,p as o,q as p,Q as a,t as s,v as t,a1 as l}from"./framework-344bb0e4.js";const c={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; compact ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the columns to compact from the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Filter out all records where &#39;Hello&#39; is null (returns nothing)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Hello&quot;</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>null <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> compact Hello

</code></pre></div><p>Filter out all records where &#39;World&#39; is null (Returns the table)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Hello&quot;</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>null <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> compact World
╭───┬───────┬───────╮
│ <span class="token comment"># │ Hello │ World │</span>
├───┼───────┼───────┤
│ <span class="token number">0</span> │       │     <span class="token number">3</span> │
╰───┴───────┴───────╯

</code></pre></div><p>Filter out all instances of nothing from a list (Returns [1,2])</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, null, <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> compact
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div>`,11);function h(n,m){return o(),p("div",null,[a("h1",r,[u,s(),a("code",null,t(n.$frontmatter.title),1),s(" for filters")]),a("div",i,t(n.$frontmatter.filters),1),d])}const g=e(c,[["render",h],["__file","compact.html.vue"]]);export{g as default};
