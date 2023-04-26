import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr cumulative (type) --reverse</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>type</code>: rolling operation</li><li><code>--reverse</code> <code>(-r)</code>: Reverse cumulative calculation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Cumulative sum for a series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr cumulative <span class="token function">sum</span>
╭───┬──────────────────╮
│ <span class="token comment"># │ 0_cumulative_sum │</span>
├───┼──────────────────┤
│ <span class="token number">0</span> │                <span class="token number">1</span> │
│ <span class="token number">1</span> │                <span class="token number">3</span> │
│ <span class="token number">2</span> │                <span class="token number">6</span> │
│ <span class="token number">3</span> │               <span class="token number">10</span> │
│ <span class="token number">4</span> │               <span class="token number">15</span> │
╰───┴──────────────────╯

</code></pre></div>`,7);function m(e,h){return r(),o("div",null,[a("h1",l,[d,s(),a("code",null,n(e.$frontmatter.title),1),s(" for dataframe")]),a("div",i,n(e.$frontmatter.dataframe),1),u])}const k=t(p,[["render",m],["__file","dfr_cumulative.html.vue"]]);export{k as default};
