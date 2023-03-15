import{_ as o,p as t,q as p,Q as a,t as s,v as e,a1 as l}from"./framework-344bb0e4.js";const c={},r={id:"frontmatter-title-for-conversions",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into bool ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: for a data structure input, convert data at the given cell paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert value to boolean in table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;false&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>true<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into bool value
╭───┬───────╮
│ <span class="token comment"># │ value │</span>
├───┼───────┤
│ <span class="token number">0</span> │ <span class="token boolean">false</span> │
│ <span class="token number">1</span> │ <span class="token boolean">true</span>  │
│ <span class="token number">2</span> │ <span class="token boolean">false</span> │
│ <span class="token number">3</span> │ <span class="token boolean">true</span>  │
│ <span class="token number">4</span> │ <span class="token boolean">true</span>  │
╰───┴───────╯

</code></pre></div><p>Convert bool to boolean</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token boolean">true</span> <span class="token operator">|</span> into bool
<span class="token boolean">true</span>
</code></pre></div><p>convert integer to boolean</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> into bool
<span class="token boolean">true</span>
</code></pre></div><p>convert decimal to boolean</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">0.3</span> <span class="token operator">|</span> into bool
<span class="token boolean">true</span>
</code></pre></div><p>convert decimal string to boolean</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;0.0&#39;</span> <span class="token operator">|</span> into bool
<span class="token boolean">false</span>
</code></pre></div><p>convert string to boolean</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;true&#39;</span> <span class="token operator">|</span> into bool
<span class="token boolean">true</span>
</code></pre></div>`,17);function k(n,b){return t(),p("div",null,[a("h1",r,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for conversions")]),a("div",u,e(n.$frontmatter.conversions),1),d])}const g=o(c,[["render",k],["__file","into_bool.html.vue"]]);export{g as default};
