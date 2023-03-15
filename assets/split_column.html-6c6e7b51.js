import{_ as t,p as o,q as c,Q as a,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split column (separator) ...rest --collapse-empty</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: the character or string that denotes what separates columns</li><li><code>...rest</code>: column names to give the new columns</li><li><code>--collapse-empty</code> <code>(-c)</code>: remove empty columns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a string into columns by the specified separator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a--b--c&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&#39;--&#39;</span>
╭───┬─────────┬─────────┬─────────╮
│ <span class="token comment"># │ column1 │ column2 │ column3 │</span>
├───┼─────────┼─────────┼─────────┤
│ <span class="token number">0</span> │ a       │ b       │ c       │
╰───┴─────────┴─────────┴─────────╯

</code></pre></div><p>Split a string into columns of char and remove the empty columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;abc&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;&#39;</span>
╭───┬─────────┬─────────┬─────────╮
│ <span class="token comment"># │ column1 │ column2 │ column3 │</span>
├───┼─────────┼─────────┼─────────┤
│ <span class="token number">0</span> │ a       │ b       │ c       │
╰───┴─────────┴─────────┴─────────╯

</code></pre></div><p>Split a list of strings into a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;a-b&#39;</span> <span class="token string">&#39;c-d&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> -
╭───┬─────────┬─────────╮
│ <span class="token comment"># │ column1 │ column2 │</span>
├───┼─────────┼─────────┤
│ <span class="token number">0</span> │ a       │ b       │
│ <span class="token number">1</span> │ c       │ d       │
╰───┴─────────┴─────────╯

</code></pre></div>`,11);function u(s,h){return o(),c("div",null,[a("h1",r,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for strings")]),a("div",d,e(s.$frontmatter.strings),1),m])}const k=t(l,[["render",u],["__file","split_column.html.vue"]]);export{k as default};
