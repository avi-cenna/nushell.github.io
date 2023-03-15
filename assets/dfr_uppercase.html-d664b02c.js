import{_ as n,p as r,q as o,Q as a,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const p={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),l={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr uppercase </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Modifies strings to uppercase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>Abc aBc abC<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr uppercase
╭───┬─────╮
│ <span class="token comment"># │  0  │</span>
├───┼─────┤
│ <span class="token number">0</span> │ ABC │
│ <span class="token number">1</span> │ ABC │
│ <span class="token number">2</span> │ ABC │
╰───┴─────╯

</code></pre></div>`,5);function h(e,u){return r(),o("div",null,[a("h1",d,[i,s(),a("code",null,t(e.$frontmatter.title),1),s(" for dataframe")]),a("div",l,t(e.$frontmatter.dataframe),1),f])}const _=n(p,[["render",h],["__file","dfr_uppercase.html.vue"]]);export{_ as default};
