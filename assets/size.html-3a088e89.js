import{_ as t,p as r,q as o,Q as s,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; size </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Count the number of words in a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;There are seven words in this sentence&quot;</span> <span class="token operator">|</span> size
╭───────────┬────╮
│ lines     │ <span class="token number">1</span>  │
│ words     │ <span class="token number">7</span>  │
│ bytes     │ <span class="token number">38</span> │
│ chars     │ <span class="token number">38</span> │
│ graphemes │ <span class="token number">38</span> │
╰───────────┴────╯
</code></pre></div><p>Counts unicode characters</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;今天天气真好&#39;</span> <span class="token operator">|</span> size
╭───────────┬────╮
│ lines     │ <span class="token number">1</span>  │
│ words     │ <span class="token number">6</span>  │
│ bytes     │ <span class="token number">18</span> │
│ chars     │ <span class="token number">6</span>  │
│ graphemes │ <span class="token number">6</span>  │
╰───────────┴────╯
</code></pre></div><p>Counts Unicode characters correctly in a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;Amélie Amelie&quot;</span> <span class="token operator">|</span> size
╭───────────┬────╮
│ lines     │ <span class="token number">1</span>  │
│ words     │ <span class="token number">2</span>  │
│ bytes     │ <span class="token number">15</span> │
│ chars     │ <span class="token number">14</span> │
│ graphemes │ <span class="token number">13</span> │
╰───────────┴────╯
</code></pre></div>`,9);function u(a,m){return r(),o("div",null,[s("h1",l,[i,n(),s("code",null,e(a.$frontmatter.title),1),n(" for strings")]),s("div",d,e(a.$frontmatter.strings),1),h])}const b=t(c,[["render",u],["__file","size.html.vue"]]);export{b as default};
