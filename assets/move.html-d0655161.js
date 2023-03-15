import{_ as t,p as o,q as p,Q as a,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; move ...rest --after --before</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the columns to move</li><li><code>--after {string}</code>: the column that will precede the columns moved</li><li><code>--before {string}</code>: the column that will be the next after the columns moved</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Move a column before the first column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>foo a <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>bar b <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>baz c <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> move index <span class="token parameter variable">--before</span> name
╭───┬──────┬───────╮
│ <span class="token comment"># │ name │ value │</span>
├───┼──────┼───────┤
│ <span class="token number">1</span> │ foo  │ a     │
│ <span class="token number">2</span> │ bar  │ b     │
│ <span class="token number">3</span> │ baz  │ c     │
╰───┴──────┴───────╯

</code></pre></div><p>Move multiple columns after the last column and reorder them</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>foo a <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>bar b <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>baz c <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> move value name <span class="token parameter variable">--after</span> index
╭───┬───────┬──────╮
│ <span class="token comment"># │ value │ name │</span>
├───┼───────┼──────┤
│ <span class="token number">1</span> │ a     │ foo  │
│ <span class="token number">2</span> │ b     │ bar  │
│ <span class="token number">3</span> │ c     │ baz  │
╰───┴───────┴──────╯

</code></pre></div><p>Move columns of a record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> name: foo, value: a, index: <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token operator">|</span> move name <span class="token parameter variable">--before</span> index
╭───────┬─────╮
│ value │ a   │
│ name  │ foo │
│ index │ <span class="token number">1</span>   │
╰───────┴─────╯
</code></pre></div>`,11);function m(n,k){return o(),p("div",null,[a("h1",l,[u,s(),a("code",null,e(n.$frontmatter.title),1),s(" for filters")]),a("div",i,e(n.$frontmatter.filters),1),d])}const b=t(r,[["render",m],["__file","move.html.vue"]]);export{b as default};
