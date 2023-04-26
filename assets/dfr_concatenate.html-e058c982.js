import{_ as s,p as o,q as r,Q as a,t as n,v as t,a1 as c}from"./framework-344bb0e4.js";const p={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr concatenate (other)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: Other array with string to be concatenated</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Concatenate string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>za xs cd<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>abc abc abc<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr concatenate <span class="token variable">$other</span>
╭───┬───────╮
│ <span class="token comment"># │   0   │</span>
├───┼───────┤
│ <span class="token number">0</span> │ abcza │
│ <span class="token number">1</span> │ abcxs │
│ <span class="token number">2</span> │ abccd │
╰───┴───────╯

</code></pre></div>`,7);function u(e,f){return o(),r("div",null,[a("h1",d,[i,n(),a("code",null,t(e.$frontmatter.title),1),n(" for dataframe")]),a("div",l,t(e.$frontmatter.dataframe),1),h])}const k=s(p,[["render",u],["__file","dfr_concatenate.html.vue"]]);export{k as default};
