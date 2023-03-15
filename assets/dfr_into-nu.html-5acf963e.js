import{_ as o,p,q as r,Q as a,t as s,v as e,a1 as t}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr into-nu </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Shows head rows from dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr into-nu
╭───┬───┬───╮
│ <span class="token comment"># │ a │ b │</span>
├───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │
╰───┴───┴───╯

</code></pre></div><p>Shows tail rows from dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr into-nu <span class="token parameter variable">-t</span> <span class="token parameter variable">-n</span> <span class="token number">1</span>
╭───┬───┬───╮
│ <span class="token comment"># │ a │ b │</span>
├───┼───┼───┤
│ <span class="token number">2</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │
╰───┴───┴───╯

</code></pre></div>`,7),m={id:"frontmatter-title-for-expression",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),k={class:"command-title"},f=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr into-nu </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Convert a col expression into a nushell value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> dfr col a <span class="token operator">|</span> dfr into-nu
╭───────┬────────╮
│ <span class="token function">expr</span>  │ <span class="token function">column</span> │
│ value │ a      │
╰───────┴────────╯
</code></pre></div>`,5);function b(n,_){return p(),r("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for dataframe")]),a("div",u,e(n.$frontmatter.dataframe),1),d,a("h1",m,[h,s(),a("code",null,e(n.$frontmatter.title),1),s(" for expression")]),a("div",k,e(n.$frontmatter.expression),1),f])}const x=o(c,[["render",b],["__file","dfr_into-nu.html.vue"]]);export{x as default};
