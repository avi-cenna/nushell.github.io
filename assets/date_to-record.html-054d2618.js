import{_ as t,p as o,q as r,Q as a,t as n,v as s,a1 as c}from"./framework-344bb0e4.js";const d={},p={id:"frontmatter-title-for-date",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-date","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date to-record </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the current date into a record.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> to-record

</code></pre></div><p>Convert the current date into a record.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-record

</code></pre></div><p>Convert a date string into a record.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;2020-04-12T22:10:57.123+02:00&#39;</span> <span class="token operator">|</span> <span class="token function">date</span> to-record
╭────────────┬───────────╮
│ year       │ <span class="token number">2020</span>      │
│ month      │ <span class="token number">4</span>         │
│ day        │ <span class="token number">12</span>        │
│ hour       │ <span class="token number">22</span>        │
│ minute     │ <span class="token number">10</span>        │
│ second     │ <span class="token number">57</span>        │
│ nanosecond │ <span class="token number">123000000</span> │
│ timezone   │ +02:00    │
╰────────────┴───────────╯
</code></pre></div>`,9);function u(e,m){return o(),r("div",null,[a("h1",p,[l,n(),a("code",null,s(e.$frontmatter.title),1),n(" for date")]),a("div",i,s(e.$frontmatter.date),1),h])}const f=t(d,[["render",u],["__file","date_to-record.html.vue"]]);export{f as default};
