import{_ as t,p as r,q as o,Q as a,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe-or-lazyframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe-or-lazyframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr shift </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Shifts the values by a given period</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr <span class="token builtin class-name">shift</span> <span class="token number">2</span> <span class="token operator">|</span> dfr drop-nulls
╭───┬───╮
│ <span class="token comment"># │ 0 │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div>`,5);function f(s,h){return r(),o("div",null,[a("h1",l,[d,n(),a("code",null,e(s.$frontmatter.title),1),n(" for dataframe or lazyframe")]),a("div",i,e(s.$frontmatter.dataframe_or_lazyframe),1),m])}const k=t(c,[["render",f],["__file","dfr_shift.html.vue"]]);export{k as default};
