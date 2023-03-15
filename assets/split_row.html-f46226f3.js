import{_ as t,p as r,q as o,Q as a,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},i={id:"frontmatter-title-for-strings",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split row (separator) --number</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: the character that denotes what separates rows</li><li><code>--number {int}</code>: Split into maximum number of items</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a string into rows of char</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;abc&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&#39;&#39;</span>
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

</code></pre></div>`,11);function u(s,m){return r(),o("div",null,[a("h1",i,[l,n(),a("code",null,e(s.$frontmatter.title),1),n(" for strings")]),a("div",d,e(s.$frontmatter.strings),1),h])}const g=t(c,[["render",u],["__file","split_row.html.vue"]]);export{g as default};
