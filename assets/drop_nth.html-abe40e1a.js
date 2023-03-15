import{_ as p,p as t,q as o,Q as n,t as a,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop nth (row number or row range) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>row number or row range</code>: the number of the row to drop or a range to drop consecutive rows</li><li><code>...rest</code>: the number of the row to drop</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Drop the first, second, and third row</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>sam,sarah,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">3</span> │
│ <span class="token number">1</span> │ <span class="token number">4</span> │
│ <span class="token number">2</span> │ <span class="token number">5</span> │
╰───┴───╯

</code></pre></div><p>Drop the first, second, and third row</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">3</span> │
│ <span class="token number">1</span> │ <span class="token number">4</span> │
│ <span class="token number">2</span> │ <span class="token number">5</span> │
╰───┴───╯

</code></pre></div><p>Drop rows 0 2 4</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">0</span> <span class="token number">2</span> <span class="token number">4</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │
│ <span class="token number">2</span> │ <span class="token number">5</span> │
╰───┴───╯

</code></pre></div><p>Drop rows 2 0 4</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">2</span> <span class="token number">0</span> <span class="token number">4</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │
│ <span class="token number">2</span> │ <span class="token number">5</span> │
╰───┴───╯

</code></pre></div><p>Drop range rows from second to fourth</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>first second third fourth fifth<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">)</span>
╭───┬───────╮
│ <span class="token number">0</span> │ first │
│ <span class="token number">1</span> │ fifth │
╰───┴───────╯

</code></pre></div><p>Drop all rows except first row</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">1</span><span class="token punctuation">..</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
╰───┴───╯

</code></pre></div><p>Drop rows 3,4,5</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">3</span><span class="token punctuation">..</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div>`,19);function i(s,m){return t(),o("div",null,[n("h1",l,[u,a(),n("code",null,e(s.$frontmatter.title),1),a(" for filters")]),n("div",d,e(s.$frontmatter.filters),1),k])}const h=p(c,[["render",i],["__file","drop_nth.html.vue"]]);export{h as default};
