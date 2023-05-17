import{_ as t,p,q as r,Q as a,t as s,v as e,a1 as o}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-math",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math round --precision</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--precision {number}</code>: digits of precision</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply the round function to a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1.5</span> <span class="token number">2.3</span> -3.1<span class="token punctuation">]</span> <span class="token operator">|</span> math round
╭───┬────╮
│ <span class="token number">0</span> │  <span class="token number">2</span> │
│ <span class="token number">1</span> │  <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token parameter variable">-3</span> │
╰───┴────╯

</code></pre></div><p>Apply the round function with precision specified</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1.555</span> <span class="token number">2.333</span> -3.111<span class="token punctuation">]</span> <span class="token operator">|</span> math round <span class="token parameter variable">-p</span> <span class="token number">2</span>
╭───┬─────────╮
│ <span class="token number">0</span> │  <span class="token number">1.5600</span> │
│ <span class="token number">1</span> │  <span class="token number">2.3300</span> │
│ <span class="token number">2</span> │ <span class="token parameter variable">-3.1100</span> │
╰───┴─────────╯

</code></pre></div><p>Apply negative precision to a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">123</span>, <span class="token number">123.3</span>, -123.4<span class="token punctuation">]</span> <span class="token operator">|</span> math round <span class="token parameter variable">-p</span> <span class="token parameter variable">-1</span>
╭───┬──────╮
│ <span class="token number">0</span> │  <span class="token number">120</span> │
│ <span class="token number">1</span> │  <span class="token number">120</span> │
│ <span class="token number">2</span> │ <span class="token parameter variable">-120</span> │
╰───┴──────╯

</code></pre></div>`,11);function m(n,h){return p(),r("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for math")]),a("div",u,e(n.$frontmatter.math),1),d])}const b=t(c,[["render",m],["__file","math_round.html.vue"]]);export{b as default};
