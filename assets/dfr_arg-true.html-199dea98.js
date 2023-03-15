import{_ as n,p as r,q as o,Q as a,t,v as s,a1 as d}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),p={class:"command-title"},f=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr arg-true </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns indexes where values are true</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>false <span class="token boolean">true</span> false<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr arg-true
╭───┬──────────╮
│ <span class="token comment"># │ arg_true │</span>
├───┼──────────┤
│ <span class="token number">0</span> │        <span class="token number">1</span> │
╰───┴──────────╯

</code></pre></div>`,5);function u(e,h){return r(),o("div",null,[a("h1",l,[i,t(),a("code",null,s(e.$frontmatter.title),1),t(" for dataframe")]),a("div",p,s(e.$frontmatter.dataframe),1),f])}const _=n(c,[["render",u],["__file","dfr_arg-true.html.vue"]]);export{_ as default};
