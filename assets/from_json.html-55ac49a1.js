import{_ as n,p as o,q as r,Q as a,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const d={},l={id:"frontmatter-title-for-formats",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from json --objects</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--objects</code> <code>(-o)</code>: treat each line as a separate value</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts json formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1 }&#39;</span> <span class="token operator">|</span> from json
╭───┬───╮
│ a │ <span class="token number">1</span> │
╰───┴───╯
</code></pre></div><p>Converts json formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1, &quot;b&quot;: [1, 2] }&#39;</span> <span class="token operator">|</span> from json
╭───┬───────────╮
│ a │ <span class="token number">1</span>         │
│   │ ╭───┬───╮ │
│ b │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">2</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯
</code></pre></div>`,9);function m(e,u){return o(),r("div",null,[a("h1",l,[p,s(),a("code",null,t(e.$frontmatter.title),1),s(" for formats")]),a("div",i,t(e.$frontmatter.formats),1),h])}const b=n(d,[["render",m],["__file","from_json.html.vue"]]);export{b as default};
