import{_ as t,p,q as o,Q as a,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-math",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),m={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math mode </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Compute the mode(s) of a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">3</span> <span class="token number">9</span> <span class="token number">12</span> <span class="token number">12</span> <span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">|</span> math mode
╭───┬────╮
│ <span class="token number">0</span> │  <span class="token number">3</span> │
│ <span class="token number">1</span> │ <span class="token number">12</span> │
╰───┴────╯

</code></pre></div><p>Compute the mode(s) of the columns of a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: <span class="token number">1</span> b: <span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">2</span> b: -1<span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">1</span> b: <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> math mode
╭───┬────────────╮
│   │ ╭───┬───╮  │
│ a │ │ <span class="token number">0</span> │ <span class="token number">1</span> │  │
│   │ ╰───┴───╯  │
│   │ ╭───┬────╮ │
│ b │ │ <span class="token number">0</span> │ <span class="token parameter variable">-1</span> │ │
│   │ │ <span class="token number">1</span> │  <span class="token number">3</span> │ │
│   │ │ <span class="token number">2</span> │  <span class="token number">5</span> │ │
│   │ ╰───┴────╯ │
╰───┴────────────╯
</code></pre></div>`,7);function i(n,h){return p(),o("div",null,[a("h1",l,[u,s(),a("code",null,e(n.$frontmatter.title),1),s(" for math")]),a("div",m,e(n.$frontmatter.math),1),d])}const b=t(r,[["render",i],["__file","math_mode.html.vue"]]);export{b as default};
