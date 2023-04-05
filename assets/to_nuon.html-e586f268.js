import{_ as t,p,q as o,Q as n,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-experimental",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-experimental","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to nuon --raw --indent --tabs</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--raw</code> <code>(-r)</code>: remove all of the whitespace (default behaviour and overwrites -i and -t)</li><li><code>--indent {number}</code>: specify indentation width</li><li><code>--tabs {number}</code>: specify indentation tab quantity</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs a NUON string representing the contents of this list, compact by default</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to nuon
<span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre></div><p>Outputs a NUON array of integers, with pretty indentation</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to nuon <span class="token parameter variable">--indent</span> <span class="token number">2</span>
<span class="token punctuation">[</span>
  <span class="token number">1</span>,
  <span class="token number">2</span>,
  <span class="token number">3</span>
<span class="token punctuation">]</span>
</code></pre></div><p>Overwrite any set option with --raw</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to nuon <span class="token parameter variable">--indent</span> <span class="token number">2</span> <span class="token parameter variable">--raw</span>
<span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre></div><p>A more complex record with multiple data types</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>date: <span class="token number">2000</span>-01-01, data: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">4.56</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">|</span> to nuon <span class="token parameter variable">--indent</span> <span class="token number">2</span>
<span class="token punctuation">{</span>
  date: <span class="token number">2000</span>-01-01T00:00:00+00:00,
  data: <span class="token punctuation">[</span>
    <span class="token number">1</span>,
    <span class="token punctuation">[</span>
      <span class="token number">2</span>,
      <span class="token number">3</span>
    <span class="token punctuation">]</span>,
    <span class="token number">4.56</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13);function k(a,m){return p(),o("div",null,[n("h1",l,[u,s(),n("code",null,e(a.$frontmatter.title),1),s(" for experimental")]),n("div",i,e(a.$frontmatter.experimental),1),d])}const h=t(r,[["render",k],["__file","to_nuon.html.vue"]]);export{h as default};
