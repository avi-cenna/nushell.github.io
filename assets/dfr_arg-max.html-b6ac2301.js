import{_ as t,p as r,q as o,Q as a,t as n,v as s,a1 as c}from"./framework-344bb0e4.js";const d={},p={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr arg-max </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns index for max value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr arg-max
╭───┬─────────╮
│ <span class="token comment"># │ arg_max │</span>
├───┼─────────┤
│ <span class="token number">0</span> │       <span class="token number">1</span> │
╰───┴─────────╯

</code></pre></div>`,5);function f(e,h){return r(),o("div",null,[a("h1",p,[l,n(),a("code",null,s(e.$frontmatter.title),1),n(" for dataframe")]),a("div",i,s(e.$frontmatter.dataframe),1),m])}const _=t(d,[["render",f],["__file","dfr_arg-max.html.vue"]]);export{_ as default};
