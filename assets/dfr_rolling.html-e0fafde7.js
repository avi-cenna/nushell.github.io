import{_ as t,p as o,q as p,Q as n,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-dataframe",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u={class:"command-title"},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr rolling </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rolling sum for a series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr rolling <span class="token function">sum</span> <span class="token number">2</span> <span class="token operator">|</span> dfr drop-nulls
╭───┬───────────────╮
│ <span class="token comment"># │ 0_rolling_sum │</span>
├───┼───────────────┤
│ <span class="token number">0</span> │             <span class="token number">3</span> │
│ <span class="token number">1</span> │             <span class="token number">5</span> │
│ <span class="token number">2</span> │             <span class="token number">7</span> │
│ <span class="token number">3</span> │             <span class="token number">9</span> │
╰───┴───────────────╯

</code></pre></div><p>Rolling max for a series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr rolling max <span class="token number">2</span> <span class="token operator">|</span> dfr drop-nulls
╭───┬───────────────╮
│ <span class="token comment"># │ 0_rolling_max │</span>
├───┼───────────────┤
│ <span class="token number">0</span> │             <span class="token number">2</span> │
│ <span class="token number">1</span> │             <span class="token number">3</span> │
│ <span class="token number">2</span> │             <span class="token number">4</span> │
│ <span class="token number">3</span> │             <span class="token number">5</span> │
╰───┴───────────────╯

</code></pre></div>`,7);function i(a,k){return o(),p("div",null,[n("h1",c,[d,s(),n("code",null,e(a.$frontmatter.title),1),s(" for dataframe")]),n("div",u,e(a.$frontmatter.dataframe),1),m])}const f=t(l,[["render",i],["__file","dfr_rolling.html.vue"]]);export{f as default};
