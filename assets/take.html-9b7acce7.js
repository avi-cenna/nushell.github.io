import{_ as t,p,q as o,Q as n,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; take (n)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>n</code>: starting from the front, the number of elements to return</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the first item of a list/table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> take <span class="token number">1</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
╰───┴───╯

</code></pre></div><p>Return the first 2 items of a list/table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> take <span class="token number">2</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div><p>Return the first two rows of a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>editions<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">2015</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2018</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2021</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> take <span class="token number">2</span>
╭───┬──────────╮
│ <span class="token comment"># │ editions │</span>
├───┼──────────┤
│ <span class="token number">0</span> │     <span class="token number">2015</span> │
│ <span class="token number">1</span> │     <span class="token number">2018</span> │
╰───┴──────────╯

</code></pre></div><p>Return the first 2 bytes of a binary value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>01 <span class="token number">23</span> <span class="token number">45</span><span class="token punctuation">]</span> <span class="token operator">|</span> take <span class="token number">2</span>
Length: <span class="token number">2</span> <span class="token punctuation">(</span>0x2<span class="token punctuation">)</span> bytes <span class="token operator">|</span> printable whitespace ascii_other non_ascii
00000000:   01 <span class="token number">23</span>                                                •<span class="token comment">#</span>

</code></pre></div><p>Return the first 3 elements of a range</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span> <span class="token operator">|</span> take <span class="token number">3</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token number">3</span> │
╰───┴───╯

</code></pre></div>`,15);function d(a,m){return p(),o("div",null,[n("h1",l,[u,s(),n("code",null,e(a.$frontmatter.title),1),s(" for filters")]),n("div",i,e(a.$frontmatter.filters),1),k])}const h=t(c,[["render",d],["__file","take.html.vue"]]);export{h as default};
