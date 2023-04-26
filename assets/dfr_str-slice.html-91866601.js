import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const l={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr str-slice (start) --length</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>start</code>: start of slice</li><li><code>--length {int}</code>: optional length</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates slices from the strings</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abcded abc321 abc123<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr str-slice <span class="token number">1</span> <span class="token parameter variable">-l</span> <span class="token number">2</span>
╭───┬────╮
│ <span class="token comment"># │ 0  │</span>
├───┼────┤
│ <span class="token number">0</span> │ <span class="token function">bc</span> │
│ <span class="token number">1</span> │ <span class="token function">bc</span> │
│ <span class="token number">2</span> │ <span class="token function">bc</span> │
╰───┴────╯

</code></pre></div>`,7);function f(e,m){return r(),o("div",null,[a("h1",i,[d,s(),a("code",null,n(e.$frontmatter.title),1),s(" for dataframe")]),a("div",p,n(e.$frontmatter.dataframe),1),h])}const _=t(l,[["render",f],["__file","dfr_str-slice.html.vue"]]);export{_ as default};
