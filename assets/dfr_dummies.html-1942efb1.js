import{_ as t,p,q as o,Q as n,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),m={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr dummies </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create new dataframe with dummy variables from a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr dummies
╭───┬─────┬─────┬─────┬─────╮
│ <span class="token comment"># │ a_1 │ a_3 │ b_2 │ b_4 │</span>
├───┼─────┼─────┼─────┼─────┤
│ <span class="token number">0</span> │   <span class="token number">1</span> │   <span class="token number">0</span> │   <span class="token number">1</span> │   <span class="token number">0</span> │
│ <span class="token number">1</span> │   <span class="token number">0</span> │   <span class="token number">1</span> │   <span class="token number">0</span> │   <span class="token number">1</span> │
╰───┴─────┴─────┴─────┴─────╯

</code></pre></div><p>Create new dataframe with dummy variables from a series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr dummies
╭───┬─────┬─────┬─────╮
│ <span class="token comment"># │ 0_1 │ 0_2 │ 0_3 │</span>
├───┼─────┼─────┼─────┤
│ <span class="token number">0</span> │   <span class="token number">1</span> │   <span class="token number">0</span> │   <span class="token number">0</span> │
│ <span class="token number">1</span> │   <span class="token number">0</span> │   <span class="token number">1</span> │   <span class="token number">0</span> │
│ <span class="token number">2</span> │   <span class="token number">0</span> │   <span class="token number">1</span> │   <span class="token number">0</span> │
│ <span class="token number">3</span> │   <span class="token number">0</span> │   <span class="token number">0</span> │   <span class="token number">1</span> │
│ <span class="token number">4</span> │   <span class="token number">0</span> │   <span class="token number">0</span> │   <span class="token number">1</span> │
╰───┴─────┴─────┴─────╯

</code></pre></div>`,7);function k(a,i){return p(),o("div",null,[n("h1",l,[u,s(),n("code",null,e(a.$frontmatter.title),1),s(" for dataframe")]),n("div",m,e(a.$frontmatter.dataframe),1),d])}const f=t(c,[["render",k],["__file","dfr_dummies.html.vue"]]);export{f as default};
