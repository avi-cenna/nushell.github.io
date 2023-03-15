import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr set-with-idx </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set value in selected rows from series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> series <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$series</span> <span class="token operator">|</span> dfr set-with-idx <span class="token number">6</span> <span class="token parameter variable">-i</span> <span class="token variable">$indices</span>
╭───┬───╮
│ <span class="token comment"># │ 0 │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">6</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">6</span> │
│ <span class="token number">3</span> │ <span class="token number">2</span> │
│ <span class="token number">4</span> │ <span class="token number">4</span> │
│ <span class="token number">5</span> │ <span class="token number">3</span> │
╰───┴───╯

</code></pre></div>`,5);function m(s,k){return p(),o("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for dataframe")]),a("div",u,e(s.$frontmatter.dataframe),1),d])}const h=t(c,[["render",m],["__file","dfr_set-with-idx.html.vue"]]);export{h as default};
