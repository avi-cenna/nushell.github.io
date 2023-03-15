import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},i={id:"frontmatter-title-for-filters",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; skip (n)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>n</code>: the number of elements to skip</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>To skip specific numbered rows, try <code>drop nth</code>. To skip specific named columns, try <code>reject</code>.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Skip the first value of a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> skip <span class="token number">1</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">4</span> │
│ <span class="token number">1</span> │ <span class="token number">6</span> │
│ <span class="token number">2</span> │ <span class="token number">8</span> │
╰───┴───╯

</code></pre></div><p>Skip two rows of a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>editions<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">2015</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2018</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2021</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> skip <span class="token number">2</span>
╭───┬──────────╮
│ <span class="token comment"># │ editions │</span>
├───┼──────────┤
│ <span class="token number">0</span> │     <span class="token number">2021</span> │
╰───┴──────────╯

</code></pre></div>`,11);function k(s,h){return p(),o("div",null,[a("h1",i,[l,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",u,e(s.$frontmatter.filters),1),d])}const b=t(r,[["render",k],["__file","skip.html.vue"]]);export{b as default};
