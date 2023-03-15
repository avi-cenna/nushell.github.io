import{_ as t,p as o,q as p,Q as s,t as n,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; headers </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sets the column names for a table created by <code>split column</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;a b c|1 2 3&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;|&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; &quot;</span> <span class="token operator">|</span> headers
╭───┬───┬───┬───╮
│ <span class="token comment"># │ a │ b │ c │</span>
├───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │
╰───┴───┴───┴───╯

</code></pre></div><p>Columns which don&#39;t have data in their first row are removed</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;a b c|1 2 3|1 2 3 4&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;|&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; &quot;</span> <span class="token operator">|</span> headers
╭───┬───┬───┬───╮
│ <span class="token comment"># │ a │ b │ c │</span>
├───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │
╰───┴───┴───┴───╯

</code></pre></div>`,7);function h(a,m){return o(),p("div",null,[s("h1",l,[i,n(),s("code",null,e(a.$frontmatter.title),1),n(" for filters")]),s("div",d,e(a.$frontmatter.filters),1),u])}const f=t(c,[["render",h],["__file","headers.html.vue"]]);export{f as default};
