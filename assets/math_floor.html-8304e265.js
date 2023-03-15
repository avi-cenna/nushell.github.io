import{_ as t,p as o,q as r,Q as a,t as n,v as s,a1 as c}from"./framework-344bb0e4.js";const l={},p={id:"frontmatter-title-for-math",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math floor </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply the floor function to a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1.5</span> <span class="token number">2.3</span> -3.1<span class="token punctuation">]</span> <span class="token operator">|</span> math floor
╭───┬────╮
│ <span class="token number">0</span> │  <span class="token number">1</span> │
│ <span class="token number">1</span> │  <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token parameter variable">-4</span> │
╰───┴────╯

</code></pre></div>`,5);function m(e,u){return o(),r("div",null,[a("h1",p,[i,n(),a("code",null,s(e.$frontmatter.title),1),n(" for math")]),a("div",d,s(e.$frontmatter.math),1),h])}const _=t(l,[["render",m],["__file","math_floor.html.vue"]]);export{_ as default};
