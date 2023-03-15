import{_ as t,p,q as o,Q as n,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; append (row)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>row</code>: the row, list, or table to append</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Be aware that this command &#39;unwraps&#39; lists passed to it. So, if you pass a variable to it, and you want the variable&#39;s contents to be appended without being unwrapped, it&#39;s wise to pre-emptively wrap the variable in a list, like so: <code>append [$val]</code>. This way, <code>append</code> will only unwrap the outer list, and leave the variable&#39;s contents untouched.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Append one Int item</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> append <span class="token number">4</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">2</span> │
│ <span class="token number">3</span> │ <span class="token number">3</span> │
│ <span class="token number">4</span> │ <span class="token number">4</span> │
╰───┴───╯

</code></pre></div><p>Append three Int items</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span><span class="token punctuation">]</span> <span class="token operator">|</span> append <span class="token punctuation">[</span><span class="token number">2,3</span>,4<span class="token punctuation">]</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">2</span> │
│ <span class="token number">3</span> │ <span class="token number">3</span> │
│ <span class="token number">4</span> │ <span class="token number">4</span> │
╰───┴───╯

</code></pre></div><p>Append Ints and Strings</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span><span class="token punctuation">]</span> <span class="token operator">|</span> append <span class="token punctuation">[</span><span class="token number">2</span>,nu,4,shell<span class="token punctuation">]</span>
╭───┬───────╮
│ <span class="token number">0</span> │     <span class="token number">0</span> │
│ <span class="token number">1</span> │     <span class="token number">1</span> │
│ <span class="token number">2</span> │     <span class="token number">2</span> │
│ <span class="token number">3</span> │ nu    │
│ <span class="token number">4</span> │     <span class="token number">4</span> │
│ <span class="token number">5</span> │ shell │
╰───┴───────╯

</code></pre></div>`,13);function m(a,h){return p(),o("div",null,[n("h1",l,[u,s(),n("code",null,e(a.$frontmatter.title),1),s(" for filters")]),n("div",i,e(a.$frontmatter.filters),1),d])}const b=t(c,[["render",m],["__file","append.html.vue"]]);export{b as default};
