import{_ as t,p,q as o,Q as n,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; find ...rest --regex --ignore-case --multiline --dotall --columns --invert</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: terms to search</li><li><code>--regex {string}</code>: regex to match with</li><li><code>--ignore-case</code> <code>(-i)</code>: case-insensitive regex mode; equivalent to (?i)</li><li><code>--multiline</code> <code>(-m)</code>: multi-line regex mode: ^ and $ match begin/end of line; equivalent to (?m)</li><li><code>--dotall</code> <code>(-s)</code>: dotall regex mode: allow a dot . to match newlines \\n; equivalent to (?s)</li><li><code>--columns {list&lt;string&gt;}</code>: column names to be searched (with rest parameter, not regex yet)</li><li><code>--invert</code> <code>(-v)</code>: invert the match</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Search for multiple terms in a command output</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">find</span> toml md <span class="token function">sh</span>

</code></pre></div><p>Search for a term in a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Cargo.toml&#39;</span> <span class="token operator">|</span> <span class="token function">find</span> toml
Cargo.toml
</code></pre></div><p>Search a number or a file size in a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">5</span> 3kb <span class="token number">4</span> 3Mb<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> <span class="token number">5</span> 3kb
╭───┬─────────╮
│ <span class="token number">0</span> │       <span class="token number">5</span> │
│ <span class="token number">1</span> │ <span class="token number">2.9</span> KiB │
╰───┴─────────╯

</code></pre></div><p>Search a char in a list of string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>moe larry curly<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> l
╭───┬───────╮
│ <span class="token number">0</span> │ larry │
│ <span class="token number">1</span> │ curly │
╰───┴───────╯

</code></pre></div><p>Find using regex</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abc bde arc abf<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> <span class="token parameter variable">--regex</span> <span class="token string">&quot;ab&quot;</span>
╭───┬─────╮
│ <span class="token number">0</span> │ abc │
│ <span class="token number">1</span> │ abf │
╰───┴─────╯

</code></pre></div><p>Find using regex case insensitive</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>aBc bde Arc abf<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> <span class="token parameter variable">--regex</span> <span class="token string">&quot;ab&quot;</span> <span class="token parameter variable">-i</span>
╭───┬─────╮
│ <span class="token number">0</span> │ aBc │
│ <span class="token number">1</span> │ abf │
╰───┴─────╯

</code></pre></div><p>Find value in records using regex</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>version name<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;0.1.0&#39;</span> nushell<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;0.1.1&#39;</span> fish<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;0.2.0&#39;</span> zsh<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;nu&quot;</span>
╭───┬─────────┬─────────╮
│ <span class="token comment"># │ version │  name   │</span>
├───┼─────────┼─────────┤
│ <span class="token number">0</span> │ <span class="token number">0.1</span>.0   │ nushell │
╰───┴─────────┴─────────╯

</code></pre></div><p>Find inverted values in records using regex</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>version name<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;0.1.0&#39;</span> nushell<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;0.1.1&#39;</span> fish<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;0.2.0&#39;</span> zsh<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;nu&quot;</span> <span class="token parameter variable">--invert</span>
╭───┬─────────┬──────╮
│ <span class="token comment"># │ version │ name │</span>
├───┼─────────┼──────┤
│ <span class="token number">0</span> │ <span class="token number">0.1</span>.1   │ fish │
│ <span class="token number">1</span> │ <span class="token number">0.2</span>.0   │ <span class="token function">zsh</span>  │
╰───┴─────────┴──────╯

</code></pre></div><p>Find value in list using regex</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Larry&quot;</span>, <span class="token string">&quot;Moe&quot;</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token string">&quot;Victor&quot;</span>, <span class="token string">&quot;Marina&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;rr&quot;</span>
╭───┬───────────────╮
│ <span class="token number">0</span> │ ╭───┬───────╮ │
│   │ │ <span class="token number">0</span> │ Larry │ │
│   │ │ <span class="token number">1</span> │ Moe   │ │
│   │ ╰───┴───────╯ │
╰───┴───────────────╯

</code></pre></div><p>Find inverted values in records using regex</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Larry&quot;</span>, <span class="token string">&quot;Moe&quot;</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token string">&quot;Victor&quot;</span>, <span class="token string">&quot;Marina&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;rr&quot;</span> <span class="token parameter variable">--invert</span>
╭───┬────────────────╮
│ <span class="token number">0</span> │ ╭───┬────────╮ │
│   │ │ <span class="token number">0</span> │ Victor │ │
│   │ │ <span class="token number">1</span> │ Marina │ │
│   │ ╰───┴────────╯ │
╰───┴────────────────╯

</code></pre></div><p>Remove ANSI sequences from result</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>abc <span class="token number">123</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>def <span class="token number">456</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> <span class="token number">123</span> <span class="token operator">|</span> get bar <span class="token operator">|</span> ansi strip

</code></pre></div><p>Find and highlight text in specific columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>col1 col2 col3<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>moe larry curly<span class="token punctuation">]</span> <span class="token punctuation">[</span>larry curly moe<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> moe <span class="token parameter variable">-c</span> <span class="token punctuation">[</span>col1<span class="token punctuation">]</span>
╭───┬──────┬───────┬───────╮
│ <span class="token comment"># │ col1 │ col2  │ col3  │</span>
├───┼──────┼───────┼───────┤
│ <span class="token number">0</span> │ moe  │ larry │ curly │
╰───┴──────┴───────┴───────╯

</code></pre></div>`,29);function d(a,g){return p(),o("div",null,[n("h1",r,[i,s(),n("code",null,e(a.$frontmatter.title),1),s(" for filters")]),n("div",u,e(a.$frontmatter.filters),1),k])}const h=t(l,[["render",d],["__file","find.html.vue"]]);export{h as default};
