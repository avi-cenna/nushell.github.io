import{_ as t,p as r,q as o,Q as a,t as n,v as s,a1 as p}from"./framework-344bb0e4.js";const c={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr arg-unique </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns indexes for unique values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr arg-unique
╭───┬────────────╮
│ <span class="token comment"># │ arg_unique │</span>
├───┼────────────┤
│ <span class="token number">0</span> │          <span class="token number">0</span> │
│ <span class="token number">1</span> │          <span class="token number">1</span> │
│ <span class="token number">2</span> │          <span class="token number">3</span> │
╰───┴────────────╯

</code></pre></div>`,5);function m(e,f){return r(),o("div",null,[a("h1",d,[l,n(),a("code",null,s(e.$frontmatter.title),1),n(" for dataframe")]),a("div",i,s(e.$frontmatter.dataframe),1),u])}const _=t(c,[["render",m],["__file","dfr_arg-unique.html.vue"]]);export{_ as default};
