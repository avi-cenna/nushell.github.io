import{_ as t,p as r,q as o,Q as s,t as e,v as n,a1 as l}from"./framework-344bb0e4.js";const p={},c={id:"frontmatter-title-for-strings",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split words --min-word-length --grapheme-clusters --utf-8-bytes</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--min-word-length {int}</code>: The minimum word length</li><li><code>--grapheme-clusters</code> <code>(-g)</code>: measure word length in grapheme clusters (requires -l)</li><li><code>--utf-8-bytes</code> <code>(-b)</code>: measure word length in UTF-8 bytes (default; requires -l; non-ASCII chars are length 2+)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split the string&#39;s words into separate rows</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello world&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> words
╭───┬───────╮
│ <span class="token number">0</span> │ hello │
│ <span class="token number">1</span> │ world │
╰───┴───────╯

</code></pre></div><p>Split the string&#39;s words, of at least 3 characters, into separate rows</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello to the world&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> words <span class="token parameter variable">-l</span> <span class="token number">3</span>
╭───┬───────╮
│ <span class="token number">0</span> │ hello │
│ <span class="token number">1</span> │ the   │
│ <span class="token number">2</span> │ world │
╰───┴───────╯

</code></pre></div><p>A real-world example of splitting words</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> http get https://www.gutenberg.org/files/11/11-0.txt <span class="token operator">|</span> str downcase <span class="token operator">|</span> <span class="token function">split</span> words <span class="token parameter variable">-l</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> sort-by count <span class="token parameter variable">--reverse</span> <span class="token operator">|</span> first <span class="token number">10</span>

</code></pre></div>`,11);function u(a,g){return r(),o("div",null,[s("h1",c,[i,e(),s("code",null,n(a.$frontmatter.title),1),e(" for strings")]),s("div",d,n(a.$frontmatter.strings),1),h])}const k=t(p,[["render",u],["__file","split_words.html.vue"]]);export{k as default};
