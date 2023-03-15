import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as p}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-network",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-network","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; url parse ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally operate by cell path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parses a url</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;http://user123:pass567@www.example.com:8081/foo/bar?param1=section&amp;p2=&amp;f[name]=vldc#hello&#39;</span> <span class="token operator">|</span> url parse
╭──────────┬─────────────────────────────────╮
│ scheme   │ http                            │
│ username │ user123                         │
│ password │ pass567                         │
│ <span class="token function">host</span>     │ www.example.com                 │
│ port     │ <span class="token number">8081</span>                            │
│ path     │ /foo/bar                        │
│ query    │ <span class="token assign-left variable">param1</span><span class="token operator">=</span>section<span class="token operator">&amp;</span><span class="token assign-left variable">p2</span><span class="token operator">=</span><span class="token operator">&amp;</span>f<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">=</span>vldc │
│ fragment │ hello                           │
│          │ ╭─────────┬─────────╮           │
│ params   │ │ param1  │ section │           │
│          │ │ p2      │         │           │
│          │ │ f<span class="token punctuation">[</span>name<span class="token punctuation">]</span> │ vldc    │           │
│          │ ╰─────────┴─────────╯           │
╰──────────┴─────────────────────────────────╯
</code></pre></div>`,7);function m(e,u){return r(),o("div",null,[a("h1",c,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for network")]),a("div",d,n(e.$frontmatter.network),1),h])}const k=t(l,[["render",m],["__file","url_parse.html.vue"]]);export{k as default};
