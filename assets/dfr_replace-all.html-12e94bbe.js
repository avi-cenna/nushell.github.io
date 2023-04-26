import{_ as s,p as r,q as c,Q as a,t,v as n,a1 as o}from"./framework-344bb0e4.js";const l={},p={id:"frontmatter-title-for-dataframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr replace-all --pattern --replace</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pattern {string}</code>: Regex pattern to be matched</li><li><code>--replace {string}</code>: replacing string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Replaces string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abac abac abac<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr replace-all <span class="token parameter variable">-p</span> a <span class="token parameter variable">-r</span> A
╭───┬──────╮
│ <span class="token comment"># │  0   │</span>
├───┼──────┤
│ <span class="token number">0</span> │ AbAc │
│ <span class="token number">1</span> │ AbAc │
│ <span class="token number">2</span> │ AbAc │
╰───┴──────╯

</code></pre></div>`,7);function m(e,f){return r(),c("div",null,[a("h1",p,[d,t(),a("code",null,n(e.$frontmatter.title),1),t(" for dataframe")]),a("div",i,n(e.$frontmatter.dataframe),1),h])}const _=s(l,[["render",m],["__file","dfr_replace-all.html.vue"]]);export{_ as default};
