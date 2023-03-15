import{_ as t,p as o,q as c,Q as a,t as s,v as n,a1 as p}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; reject ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the names of columns to remove from the table</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>To remove a quantity of rows or columns, use <code>skip</code>, <code>drop</code>, or <code>drop column</code>.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Reject a column in the <code>ls</code> table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> reject modified

</code></pre></div><p>Reject a column in a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> reject a
╭───┬───╮
│ <span class="token comment"># │ b │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div><p>Reject the specified field in a record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token number">1</span>, b: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> reject a
╭───┬───╮
│ b │ <span class="token number">2</span> │
╰───┴───╯
</code></pre></div><p>Reject a nested field in a record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token punctuation">{</span>b: <span class="token number">3</span>, c: <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">|</span> reject a.b
╭───┬───────────╮
│   │ ╭───┬───╮ │
│ a │ │ c │ <span class="token number">5</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯
</code></pre></div>`,15);function h(e,m){return o(),c("div",null,[a("h1",l,[d,s(),a("code",null,n(e.$frontmatter.title),1),s(" for filters")]),a("div",i,n(e.$frontmatter.filters),1),u])}const b=t(r,[["render",h],["__file","reject.html.vue"]]);export{b as default};
