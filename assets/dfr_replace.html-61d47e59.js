import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const p={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr replace </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Replaces string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abc abc abc<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr replace <span class="token parameter variable">-p</span> ab <span class="token parameter variable">-r</span> AB
╭───┬─────╮
│ <span class="token comment"># │  0  │</span>
├───┼─────┤
│ <span class="token number">0</span> │ ABc │
│ <span class="token number">1</span> │ ABc │
│ <span class="token number">2</span> │ ABc │
╰───┴─────╯

</code></pre></div>`,5);function h(e,m){return r(),o("div",null,[a("h1",d,[l,s(),a("code",null,n(e.$frontmatter.title),1),s(" for dataframe")]),a("div",i,n(e.$frontmatter.dataframe),1),f])}const _=t(p,[["render",h],["__file","dfr_replace.html.vue"]]);export{_ as default};
