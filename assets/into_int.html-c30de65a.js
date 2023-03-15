import{_ as t,p as o,q as p,Q as a,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-conversions",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d={class:"command-title"},g=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into int ...rest --radix --little-endian</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: for a data structure input, convert data at the given cell paths</li><li><code>--radix {number}</code>: radix of integer</li><li><code>--little-endian</code> <code>(-)</code>: use little-endian byte decoding</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to integer in table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;-5&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1.5</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into int num

</code></pre></div><p>Convert string to integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">|</span> into int
<span class="token number">2</span>
</code></pre></div><p>Convert decimal to integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">5.9</span> <span class="token operator">|</span> into int
<span class="token number">5</span>
</code></pre></div><p>Convert decimal string to integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;5.9&#39;</span> <span class="token operator">|</span> into int
<span class="token number">5</span>
</code></pre></div><p>Convert file size to integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 4KB <span class="token operator">|</span> into int
<span class="token number">4000</span>
</code></pre></div><p>Convert bool to integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>false, true<span class="token punctuation">]</span> <span class="token operator">|</span> into int
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
╰───┴───╯

</code></pre></div><p>Convert date to integer (Unix nanosecond timestamp)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1983</span>-04-13T12:09:14.123456789-05:00 <span class="token operator">|</span> into int
<span class="token number">419101754123456789</span>
</code></pre></div><p>Convert to integer from binary</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1101&#39;</span> <span class="token operator">|</span> into int <span class="token parameter variable">-r</span> <span class="token number">2</span>
<span class="token number">13</span>
</code></pre></div><p>Convert to integer from hex</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FF&#39;</span> <span class="token operator">|</span>  into int <span class="token parameter variable">-r</span> <span class="token number">16</span>
<span class="token number">255</span>
</code></pre></div><p>Convert octal string to integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;0o10132&#39;</span> <span class="token operator">|</span> into int
<span class="token number">4186</span>
</code></pre></div><p>Convert 0 padded string to integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;0010132&#39;</span> <span class="token operator">|</span> into int
<span class="token number">10132</span>
</code></pre></div><p>Convert 0 padded string to integer with radix</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;0010132&#39;</span> <span class="token operator">|</span> into int <span class="token parameter variable">-r</span> <span class="token number">8</span>
<span class="token number">4186</span>
</code></pre></div>`,29);function u(n,k){return o(),p("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for conversions")]),a("div",d,e(n.$frontmatter.conversions),1),g])}const b=t(c,[["render",u],["__file","into_int.html.vue"]]);export{b as default};
