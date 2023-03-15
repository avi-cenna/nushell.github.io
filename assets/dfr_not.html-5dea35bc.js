import{_ as t,p as o,q as r,Q as a,t as n,v as s,a1 as c}from"./framework-344bb0e4.js";const l={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr not </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Inverts boolean mask</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>true <span class="token boolean">false</span> true<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr not
╭───┬───────╮
│ <span class="token comment"># │   0   │</span>
├───┼───────┤
│ <span class="token number">0</span> │ <span class="token boolean">false</span> │
│ <span class="token number">1</span> │ <span class="token boolean">true</span>  │
│ <span class="token number">2</span> │ <span class="token boolean">false</span> │
╰───┴───────╯

</code></pre></div>`,5);function h(e,m){return o(),r("div",null,[a("h1",d,[p,n(),a("code",null,s(e.$frontmatter.title),1),n(" for dataframe")]),a("div",i,s(e.$frontmatter.dataframe),1),f])}const _=t(l,[["render",h],["__file","dfr_not.html.vue"]]);export{_ as default};
