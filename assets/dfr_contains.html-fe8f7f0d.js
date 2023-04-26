import{_ as s,p as r,q as o,Q as a,t as n,v as t,a1 as c}from"./framework-344bb0e4.js";const d={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr contains (pattern)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: Regex pattern to be searched</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns boolean indicating if pattern was found</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abc acb acb<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr contains ab
╭───┬───────╮
│ <span class="token comment"># │   0   │</span>
├───┼───────┤
│ <span class="token number">0</span> │ <span class="token boolean">true</span>  │
│ <span class="token number">1</span> │ <span class="token boolean">false</span> │
│ <span class="token number">2</span> │ <span class="token boolean">false</span> │
╰───┴───────╯

</code></pre></div>`,7);function f(e,m){return r(),o("div",null,[a("h1",i,[l,n(),a("code",null,t(e.$frontmatter.title),1),n(" for dataframe")]),a("div",p,t(e.$frontmatter.dataframe),1),h])}const _=s(d,[["render",f],["__file","dfr_contains.html.vue"]]);export{_ as default};
