import{_ as t,p,q as r,Q as a,t as n,v as e,a1 as o}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; reverse </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Reverse a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> reverse
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">3</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token number">1</span> │
│ <span class="token number">3</span> │ <span class="token number">0</span> │
╰───┴───╯

</code></pre></div><p>Reverse a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: <span class="token number">1</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> reverse
╭───┬───╮
│ <span class="token comment"># │ a │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
╰───┴───╯

</code></pre></div>`,7);function m(s,h){return p(),r("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",u,e(s.$frontmatter.filters),1),d])}const b=t(c,[["render",m],["__file","reverse.html.vue"]]);export{b as default};
