import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-math",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math abs </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Compute absolute value of each number in a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>-50 <span class="token parameter variable">-100.0</span> <span class="token number">25</span><span class="token punctuation">]</span> <span class="token operator">|</span> math abs
╭───┬──────────╮
│ <span class="token number">0</span> │       <span class="token number">50</span> │
│ <span class="token number">1</span> │ <span class="token number">100.0000</span> │
│ <span class="token number">2</span> │       <span class="token number">25</span> │
╰───┴──────────╯

</code></pre></div>`,5);function m(e,u){return r(),o("div",null,[a("h1",l,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for math")]),a("div",d,n(e.$frontmatter.math),1),h])}const _=t(p,[["render",m],["__file","math_abs.html.vue"]]);export{_ as default};
