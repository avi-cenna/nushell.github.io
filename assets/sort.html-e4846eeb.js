import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sort --reverse --ignore-case --values --natural</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--reverse</code> <code>(-r)</code>: Sort in reverse order</li><li><code>--ignore-case</code> <code>(-i)</code>: Sort string-based data case-insensitively</li><li><code>--values</code> <code>(-v)</code>: If input is a single record, sort the record by values; ignored if input is not a single record</li><li><code>--natural</code> <code>(-n)</code>: Sort alphanumeric string-based values naturally (1, 9, 10, 99, 100, ...)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sort the list by increasing value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div><p>sort the list by decreasing value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">0</span> │
╰───┴───╯

</code></pre></div><p>sort a list of strings</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span>
╭───┬───────╮
│ <span class="token number">0</span> │ amy   │
│ <span class="token number">1</span> │ betty │
│ <span class="token number">2</span> │ sarah │
╰───┴───────╯

</code></pre></div><p>sort a list of strings in reverse</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
╭───┬───────╮
│ <span class="token number">0</span> │ sarah │
│ <span class="token number">1</span> │ betty │
│ <span class="token number">2</span> │ amy   │
╰───┴───────╯

</code></pre></div><p>Sort strings (case-insensitive)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-i</span>
╭───┬──────────╮
│ <span class="token number">0</span> │ airplane │
│ <span class="token number">1</span> │ Car      │
│ <span class="token number">2</span> │ Truck    │
╰───┴──────────╯

</code></pre></div><p>Sort strings (reversed case-insensitive)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span>
╭───┬──────────╮
│ <span class="token number">0</span> │ Truck    │
│ <span class="token number">1</span> │ Car      │
│ <span class="token number">2</span> │ airplane │
╰───┴──────────╯

</code></pre></div><p>Sort record by key (case-insensitive)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>b: <span class="token number">3</span>, a: <span class="token number">4</span><span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">sort</span>
╭───┬───╮
│ a │ <span class="token number">4</span> │
│ b │ <span class="token number">3</span> │
╰───┴───╯
</code></pre></div><p>Sort record by value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>b: <span class="token number">4</span>, a: <span class="token number">3</span>, c:1<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-v</span>
╭───┬───╮
│ c │ <span class="token number">1</span> │
│ a │ <span class="token number">3</span> │
│ b │ <span class="token number">4</span> │
╰───┴───╯
</code></pre></div>`,21);function k(s,b){return p(),o("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",u,e(s.$frontmatter.filters),1),d])}const h=t(c,[["render",k],["__file","sort.html.vue"]]);export{h as default};
