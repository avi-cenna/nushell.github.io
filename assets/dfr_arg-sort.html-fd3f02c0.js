import{_ as t,p as r,q as p,Q as a,t as n,v as e,a1 as o}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u={class:"command-title"},m=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr arg-sort </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns indexes for a sorted series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr arg-sort
╭───┬──────────╮
│ <span class="token comment"># │ arg_sort │</span>
├───┼──────────┤
│ <span class="token number">0</span> │        <span class="token number">0</span> │
│ <span class="token number">1</span> │        <span class="token number">1</span> │
│ <span class="token number">2</span> │        <span class="token number">2</span> │
│ <span class="token number">3</span> │        <span class="token number">3</span> │
│ <span class="token number">4</span> │        <span class="token number">4</span> │
╰───┴──────────╯

</code></pre></div><p>Returns indexes for a sorted series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr arg-sort <span class="token parameter variable">-r</span>
╭───┬──────────╮
│ <span class="token comment"># │ arg_sort │</span>
├───┼──────────┤
│ <span class="token number">0</span> │        <span class="token number">3</span> │
│ <span class="token number">1</span> │        <span class="token number">4</span> │
│ <span class="token number">2</span> │        <span class="token number">1</span> │
│ <span class="token number">3</span> │        <span class="token number">2</span> │
│ <span class="token number">4</span> │        <span class="token number">0</span> │
╰───┴──────────╯

</code></pre></div>`,7);function i(s,k){return r(),p("div",null,[a("h1",l,[d,n(),a("code",null,e(s.$frontmatter.title),1),n(" for dataframe")]),a("div",u,e(s.$frontmatter.dataframe),1),m])}const f=t(c,[["render",i],["__file","dfr_arg-sort.html.vue"]]);export{f as default};
