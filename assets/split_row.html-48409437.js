import{_ as t,p as r,q as o,Q as a,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split row (separator) --number --regex</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: a character or regex that denotes what separates rows</li><li><code>--number {int}</code>: Split into maximum number of items</li><li><code>--regex</code> <code>(-r)</code>: use regex syntax for separator</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a string into rows of char</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;abc&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&#39;&#39;</span>
╭───┬───╮
│ <span class="token number">0</span> │   │
│ <span class="token number">1</span> │ a │
│ <span class="token number">2</span> │ b │
│ <span class="token number">3</span> │ c │
│ <span class="token number">4</span> │   │
╰───┴───╯

</code></pre></div><p>Split a string into rows by the specified separator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a--b--c&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&#39;--&#39;</span>
╭───┬───╮
│ <span class="token number">0</span> │ a │
│ <span class="token number">1</span> │ b │
│ <span class="token number">2</span> │ c │
╰───┴───╯

</code></pre></div><p>Split a string by &#39;-&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;-a-b-c-&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&#39;-&#39;</span>
╭───┬───╮
│ <span class="token number">0</span> │   │
│ <span class="token number">1</span> │ a │
│ <span class="token number">2</span> │ b │
│ <span class="token number">3</span> │ c │
│ <span class="token number">4</span> │   │
╰───┴───╯

</code></pre></div><p>Split a string by regex</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a   b       c&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token parameter variable">-r</span> <span class="token string">&#39;\\s+&#39;</span>
╭───┬───╮
│ <span class="token number">0</span> │ a │
│ <span class="token number">1</span> │ b │
│ <span class="token number">2</span> │ c │
╰───┴───╯

</code></pre></div>`,13);function h(s,g){return r(),o("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for strings")]),a("div",d,e(s.$frontmatter.strings),1),u])}const m=t(c,[["render",h],["__file","split_row.html.vue"]]);export{m as default};
