import{_ as t,p as l,q as r,Q as a,t as n,v as e,a1 as o}from"./framework-344bb0e4.js";const p={},c={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr fill-null (fill)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>fill</code>: Expression to use to fill the null values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Fills the null values by 0</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr <span class="token builtin class-name">shift</span> <span class="token number">2</span> <span class="token operator">|</span> dfr fill-null <span class="token number">0</span>
╭───┬───╮
│ <span class="token comment"># │ 0 │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">0</span> │
│ <span class="token number">2</span> │ <span class="token number">1</span> │
│ <span class="token number">3</span> │ <span class="token number">2</span> │
│ <span class="token number">4</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div>`,7);function m(s,f){return l(),r("div",null,[a("h1",c,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for lazyframe")]),a("div",d,e(s.$frontmatter.lazyframe),1),u])}const k=t(p,[["render",m],["__file","dfr_fill-null.html.vue"]]);export{k as default};
