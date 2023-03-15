import{_ as t,p as o,q as p,Q as n,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; uniq --count --repeated --ignore-case --unique</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--count</code> <code>(-c)</code>: Return a table containing the distinct input values together with their counts</li><li><code>--repeated</code> <code>(-d)</code>: Return the input values that occur more than once</li><li><code>--ignore-case</code> <code>(-i)</code>: Compare input values case-insensitively</li><li><code>--unique</code> <code>(-u)</code>: Return the input values that occur once only</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the distinct values of a list/table (remove duplicates so that each value occurs once only)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │
│ <span class="token number">2</span> │ <span class="token number">4</span> │
╰───┴───╯

</code></pre></div><p>Return the input values that occur more than once</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-d</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div><p>Return the input values that occur once only</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-u</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
╰───┴───╯

</code></pre></div><p>Ignore differences in case when comparing input values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span> <span class="token string">&#39;goodbye&#39;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-i</span>
╭───┬─────────╮
│ <span class="token number">0</span> │ hello   │
│ <span class="token number">1</span> │ goodbye │
╰───┴─────────╯

</code></pre></div><p>Return a table containing the distinct input values together with their counts</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
╭───┬───────┬───────╮
│ <span class="token comment"># │ value │ count │</span>
├───┼───────┼───────┤
│ <span class="token number">0</span> │     <span class="token number">1</span> │     <span class="token number">1</span> │
│ <span class="token number">1</span> │     <span class="token number">2</span> │     <span class="token number">2</span> │
╰───┴───────┴───────╯

</code></pre></div>`,15);function h(a,k){return o(),p("div",null,[n("h1",l,[u,s(),n("code",null,e(a.$frontmatter.title),1),s(" for filters")]),n("div",i,e(a.$frontmatter.filters),1),d])}const b=t(r,[["render",h],["__file","uniq.html.vue"]]);export{b as default};
