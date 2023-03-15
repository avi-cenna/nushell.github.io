import{_ as s,p as r,q as o,Q as e,t,v as n,a1 as c}from"./framework-344bb0e4.js";const i={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; enumerate </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Add an index to each element of a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a, b, c<span class="token punctuation">]</span> <span class="token operator">|</span> enumerate
╭───┬──────╮
│ <span class="token comment"># │ item │</span>
├───┼──────┤
│ <span class="token number">0</span> │ a    │
│ <span class="token number">1</span> │ b    │
│ <span class="token number">2</span> │ c    │
╰───┴──────╯

</code></pre></div>`,5);function m(a,u){return r(),o("div",null,[e("h1",l,[d,t(),e("code",null,n(a.$frontmatter.title),1),t(" for filters")]),e("div",p,n(a.$frontmatter.filters),1),h])}const _=s(i,[["render",m],["__file","enumerate.html.vue"]]);export{_ as default};
