import{_ as t,p as r,q as o,Q as a,t as s,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),m={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; wrap (name)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: the name of the column</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Wrap a list into a table with a given column name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> wrap num
╭───┬─────╮
│ <span class="token comment"># │ num │</span>
├───┼─────┤
│ <span class="token number">0</span> │   <span class="token number">1</span> │
│ <span class="token number">1</span> │   <span class="token number">2</span> │
│ <span class="token number">2</span> │   <span class="token number">3</span> │
╰───┴─────╯

</code></pre></div><p>Wrap a range into a table with a given column name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span> <span class="token operator">|</span> wrap num
╭───┬─────╮
│ <span class="token comment"># │ num │</span>
├───┼─────┤
│ <span class="token number">0</span> │   <span class="token number">1</span> │
│ <span class="token number">1</span> │   <span class="token number">2</span> │
│ <span class="token number">2</span> │   <span class="token number">3</span> │
╰───┴─────╯

</code></pre></div>`,9);function d(n,h){return r(),o("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for filters")]),a("div",m,e(n.$frontmatter.filters),1),u])}const b=t(c,[["render",d],["__file","wrap.html.vue"]]);export{b as default};
