import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as r}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-bits",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-bits","aria-hidden":"true"},"#",-1),u={class:"command-title"},b=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bits not --signed --number-bytes</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--signed</code> <code>(-s)</code>: always treat input number as a signed number</li><li><code>--number-bytes {string}</code>: the size of unsigned number in bytes, it can be 1, 2, 4, 8, auto</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply logical negation to a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits not
╭───┬─────────────────╮
│ <span class="token number">0</span> │ <span class="token number">140737488355323</span> │
│ <span class="token number">1</span> │ <span class="token number">140737488355324</span> │
│ <span class="token number">2</span> │ <span class="token number">140737488355325</span> │
╰───┴─────────────────╯

</code></pre></div><p>Apply logical negation to a list of numbers, treat input as 2 bytes number</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits not <span class="token parameter variable">-n</span> <span class="token string">&#39;2&#39;</span>
╭───┬───────╮
│ <span class="token number">0</span> │ <span class="token number">65531</span> │
│ <span class="token number">1</span> │ <span class="token number">65532</span> │
│ <span class="token number">2</span> │ <span class="token number">65533</span> │
╰───┴───────╯

</code></pre></div><p>Apply logical negation to a list of numbers, treat input as signed number</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits not <span class="token parameter variable">-s</span>
╭───┬────╮
│ <span class="token number">0</span> │ <span class="token parameter variable">-5</span> │
│ <span class="token number">1</span> │ <span class="token parameter variable">-4</span> │
│ <span class="token number">2</span> │ <span class="token parameter variable">-3</span> │
╰───┴────╯

</code></pre></div>`,11);function d(s,m){return p(),o("div",null,[a("h1",c,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for bits")]),a("div",u,e(s.$frontmatter.bits),1),b])}const h=t(l,[["render",d],["__file","bits_not.html.vue"]]);export{h as default};
