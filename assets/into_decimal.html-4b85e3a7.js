import{_ as t,p as o,q as r,Q as a,t as n,v as e,a1 as c}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-conversions",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into decimal ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: for a data structure input, convert data at the given cell paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to decimal in table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;5.01&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into decimal num
╭───┬────────╮
│ <span class="token comment"># │  num   │</span>
├───┼────────┤
│ <span class="token number">0</span> │ <span class="token number">5.0100</span> │
╰───┴────────╯

</code></pre></div><p>Convert string to decimal</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1.345&#39;</span> <span class="token operator">|</span> into decimal
<span class="token number">1.345</span>
</code></pre></div><p>Convert decimal to decimal</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;-5.9&#39;</span> <span class="token operator">|</span> into decimal
<span class="token parameter variable">-5.9</span>
</code></pre></div><p>Convert boolean to decimal</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token boolean">true</span> <span class="token operator">|</span> into decimal
<span class="token number">1</span>
</code></pre></div>`,13);function h(s,m){return o(),r("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for conversions")]),a("div",d,e(s.$frontmatter.conversions),1),u])}const k=t(p,[["render",h],["__file","into_decimal.html.vue"]]);export{k as default};
