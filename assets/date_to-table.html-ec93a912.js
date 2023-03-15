import{_ as s,p as o,q as r,Q as a,t as n,v as t,a1 as c}from"./framework-344bb0e4.js";const p={},d={id:"frontmatter-title-for-date",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-date","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date to-table </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the current date into a table.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> to-table

</code></pre></div><p>Convert the date into a table.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table

</code></pre></div><p>Convert a given date into a table.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">2020</span>-04-12T22:10:57.000000789+02:00 <span class="token operator">|</span> <span class="token function">date</span> to-table
╭───┬──────┬───────┬─────┬──────┬────────┬────────┬────────────┬──────────╮
│ <span class="token comment"># │ year │ month │ day │ hour │ minute │ second │ nanosecond │ timezone │</span>
├───┼──────┼───────┼─────┼──────┼────────┼────────┼────────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">2020</span> │     <span class="token number">4</span> │  <span class="token number">12</span> │   <span class="token number">22</span> │     <span class="token number">10</span> │     <span class="token number">57</span> │        <span class="token number">789</span> │ +02:00   │
╰───┴──────┴───────┴─────┴──────┴────────┴────────┴────────────┴──────────╯

</code></pre></div>`,9);function u(e,m){return o(),r("div",null,[a("h1",d,[l,n(),a("code",null,t(e.$frontmatter.title),1),n(" for date")]),a("div",i,t(e.$frontmatter.date),1),h])}const f=s(p,[["render",u],["__file","date_to-table.html.vue"]]);export{f as default};
