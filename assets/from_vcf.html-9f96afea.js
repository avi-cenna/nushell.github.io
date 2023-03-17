import{_ as t,p as o,q as r,Q as a,t as n,v as s,a1 as c}from"./framework-344bb0e4.js";const i={},l={id:"frontmatter-title-for-formats",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),d={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from vcf </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ics formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;BEGIN:VCARD
N:Foo
FN:Bar
EMAIL:foo@bar.com
END:VCARD&#39;</span> <span class="token operator">|</span> from vcf
╭───┬──────────────────────────────────────╮
│ <span class="token comment"># │              properties              │</span>
├───┼──────────────────────────────────────┤
│ <span class="token number">0</span> │ ╭───┬───────┬─────────────┬────────╮ │
│   │ │ <span class="token comment"># │ name  │    value    │ params │ │</span>
│   │ ├───┼───────┼─────────────┼────────┤ │
│   │ │ <span class="token number">0</span> │ N     │ Foo         │        │ │
│   │ │ <span class="token number">1</span> │ FN    │ Bar         │        │ │
│   │ │ <span class="token number">2</span> │ EMAIL │ foo@bar.com │        │ │
│   │ ╰───┴───────┴─────────────┴────────╯ │
╰───┴──────────────────────────────────────╯

</code></pre></div>`,5);function f(e,h){return o(),r("div",null,[a("h1",l,[p,n(),a("code",null,s(e.$frontmatter.title),1),n(" for formats")]),a("div",d,s(e.$frontmatter.formats),1),m])}const u=t(i,[["render",f],["__file","from_vcf.html.vue"]]);export{u as default};
