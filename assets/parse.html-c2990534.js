import{_ as t,p as r,q as o,Q as a,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; parse (pattern) --regex</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match. Eg) &quot;{foo}: {bar}&quot;</li><li><code>--regex</code> <code>(-r)</code>: use full regex syntax for patterns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a string into two named columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse <span class="token string">&quot;{foo} {bar}&quot;</span>
╭───┬─────┬───────╮
│ <span class="token comment"># │ foo │  bar  │</span>
├───┼─────┼───────┤
│ <span class="token number">0</span> │ hi  │ there │
╰───┴─────┴───────╯

</code></pre></div><p>Parse a string using regex pattern</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;(?P&lt;foo&gt;\\w+) (?P&lt;bar&gt;\\w+)&#39;</span>
╭───┬─────┬───────╮
│ <span class="token comment"># │ foo │  bar  │</span>
├───┼─────┼───────┤
│ <span class="token number">0</span> │ hi  │ there │
╰───┴─────┴───────╯

</code></pre></div><p>Parse a string using fancy-regex named capture group pattern</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;foo bar.&quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;\\s*(?&lt;name&gt;\\w+)(?=\\.)&#39;</span>
╭───┬──────╮
│ <span class="token comment"># │ name │</span>
├───┼──────┤
│ <span class="token number">0</span> │ bar  │
╰───┴──────╯

</code></pre></div><p>Parse a string using fancy-regex capture group pattern</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;foo! bar.&quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;(\\w+)(?=\\.)|(\\w+)(?=!)&#39;</span>
╭───┬──────────┬──────────╮
│ <span class="token comment"># │ capture0 │ capture1 │</span>
├───┼──────────┼──────────┤
│ <span class="token number">0</span> │          │ foo      │
│ <span class="token number">1</span> │ bar      │          │
╰───┴──────────┴──────────╯

</code></pre></div><p>Parse a string using fancy-regex look behind pattern</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot; @another(foo bar)   &quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;\\s*(?&lt;=[() ])(@\\w+)(\\([^)]*\\))?\\s*&#39;</span>
╭───┬──────────┬───────────╮
│ <span class="token comment"># │ capture0 │ capture1  │</span>
├───┼──────────┼───────────┤
│ <span class="token number">0</span> │ @another │ <span class="token punctuation">(</span>foo bar<span class="token punctuation">)</span> │
╰───┴──────────┴───────────╯

</code></pre></div><p>Parse a string using fancy-regex look ahead atomic group pattern</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;abcd&quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;^a(bc(?=d)|b)cd$&#39;</span>
╭───┬──────────╮
│ <span class="token comment"># │ capture0 │</span>
├───┼──────────┤
│ <span class="token number">0</span> │ b        │
╰───┴──────────╯

</code></pre></div>`,17);function u(s,h){return r(),o("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for strings")]),a("div",d,e(s.$frontmatter.strings),1),g])}const k=t(c,[["render",u],["__file","parse.html.vue"]]);export{k as default};
