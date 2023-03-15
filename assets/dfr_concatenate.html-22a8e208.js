import{_ as t,p as o,q as c,Q as a,t as e,v as s,a1 as r}from"./framework-344bb0e4.js";const p={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr concatenate </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Concatenate string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>za xs cd<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>abc abc abc<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr concatenate <span class="token variable">$other</span>
╭───┬───────╮
│ <span class="token comment"># │   0   │</span>
├───┼───────┤
│ <span class="token number">0</span> │ abcza │
│ <span class="token number">1</span> │ abcxs │
│ <span class="token number">2</span> │ abccd │
╰───┴───────╯

</code></pre></div>`,5);function f(n,h){return o(),c("div",null,[a("h1",d,[l,e(),a("code",null,s(n.$frontmatter.title),1),e(" for dataframe")]),a("div",i,s(n.$frontmatter.dataframe),1),u])}const k=t(p,[["render",f],["__file","dfr_concatenate.html.vue"]]);export{k as default};
