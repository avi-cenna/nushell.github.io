import{_ as n,p as r,q as o,Q as a,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const d={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),p={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr lowercase </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Modifies strings to lowercase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>Abc aBc abC<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr lowercase
╭───┬─────╮
│ <span class="token comment"># │  0  │</span>
├───┼─────┤
│ <span class="token number">0</span> │ abc │
│ <span class="token number">1</span> │ abc │
│ <span class="token number">2</span> │ abc │
╰───┴─────╯

</code></pre></div>`,5);function h(e,m){return r(),o("div",null,[a("h1",l,[i,s(),a("code",null,t(e.$frontmatter.title),1),s(" for dataframe")]),a("div",p,t(e.$frontmatter.dataframe),1),f])}const _=n(d,[["render",h],["__file","dfr_lowercase.html.vue"]]);export{_ as default};
