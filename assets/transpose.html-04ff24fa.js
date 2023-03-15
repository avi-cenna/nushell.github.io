import{_ as t,p as o,q as p,Q as a,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-default",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),d={class:"command-title"},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; transpose ...rest --header-row --ignore-titles --as-record --keep-last --keep-all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the names to give columns once transposed</li><li><code>--header-row</code> <code>(-r)</code>: treat the first row as column names</li><li><code>--ignore-titles</code> <code>(-i)</code>: don&#39;t transpose the column names into values</li><li><code>--as-record</code> <code>(-d)</code>: transfer to record if the result is a table and contains only one row</li><li><code>--keep-last</code> <code>(-l)</code>: on repetition of record fields due to <code>header-row</code>, keep the last value obtained</li><li><code>--keep-all</code> <code>(-a)</code>: on repetition of record fields due to <code>header-row</code>, keep all the values obtained</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Transposes the table contents with default column names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c1 c2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> transpose
╭───┬─────────┬─────────╮
│ <span class="token comment"># │ column0 │ column1 │</span>
├───┼─────────┼─────────┤
│ <span class="token number">0</span> │ c1      │       <span class="token number">1</span> │
│ <span class="token number">1</span> │ c2      │       <span class="token number">2</span> │
╰───┴─────────┴─────────╯

</code></pre></div><p>Transposes the table contents with specified column names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c1 c2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> transpose key val
╭───┬─────┬─────╮
│ <span class="token comment"># │ key │ val │</span>
├───┼─────┼─────┤
│ <span class="token number">0</span> │ c1  │   <span class="token number">1</span> │
│ <span class="token number">1</span> │ c2  │   <span class="token number">2</span> │
╰───┴─────┴─────╯

</code></pre></div><p>Transposes the table without column names and specify a new column name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c1 c2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> transpose <span class="token parameter variable">-i</span> val
╭───┬─────╮
│ <span class="token comment"># │ val │</span>
├───┼─────┤
│ <span class="token number">0</span> │   <span class="token number">1</span> │
│ <span class="token number">1</span> │   <span class="token number">2</span> │
╰───┴─────╯

</code></pre></div><p>Transfer back to record with -d flag</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>c1: <span class="token number">1</span>, c2: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> transpose <span class="token operator">|</span> transpose <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-d</span>
╭────┬───╮
│ c1 │ <span class="token number">1</span> │
│ c2 │ <span class="token number">2</span> │
╰────┴───╯
</code></pre></div>`,13);function k(n,m){return o(),p("div",null,[a("h1",l,[u,s(),a("code",null,e(n.$frontmatter.title),1),s(" for default")]),a("div",d,e(n.$frontmatter.default),1),i])}const b=t(r,[["render",k],["__file","transpose.html.vue"]]);export{b as default};
