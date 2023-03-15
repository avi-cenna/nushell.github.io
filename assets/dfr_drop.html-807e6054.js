import{_ as t,p as o,q as p,Q as a,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr drop </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>drop column a</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr drop a
╭───┬───╮
│ <span class="token comment"># │ b │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">4</span> │
╰───┴───╯

</code></pre></div>`,5);function m(n,f){return o(),p("div",null,[a("h1",d,[l,s(),a("code",null,e(n.$frontmatter.title),1),s(" for dataframe")]),a("div",i,e(n.$frontmatter.dataframe),1),u])}const k=t(c,[["render",m],["__file","dfr_drop.html.vue"]]);export{k as default};
