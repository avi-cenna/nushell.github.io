import{_ as t,p as o,q as r,Q as a,t as s,v as n,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-default",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path parse --columns --extension</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: For a record or table input, convert strings at the given columns</li><li><code>--extension {string}</code>: Manually supply the extension (without the dot)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Each path is split into a table with &#39;parent&#39;, &#39;stem&#39; and &#39;extension&#39; fields. On Windows, an extra &#39;prefix&#39; column is added.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a path</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking/spam.txt&#39;</span> <span class="token operator">|</span> path parse
╭───────────┬──────────────╮
│ parent    │ /home/viking │
│ stem      │ spam         │
│ extension │ txt          │
╰───────────┴──────────────╯
</code></pre></div><p>Replace a complex extension</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking/spam.tar.gz&#39;</span> <span class="token operator">|</span> path parse <span class="token parameter variable">-e</span> tar.gz <span class="token operator">|</span> upsert extension <span class="token punctuation">{</span> <span class="token string">&#39;txt&#39;</span> <span class="token punctuation">}</span>

</code></pre></div><p>Ignore the extension</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/etc/conf.d&#39;</span> <span class="token operator">|</span> path parse <span class="token parameter variable">-e</span> <span class="token string">&#39;&#39;</span>
╭───────────┬────────╮
│ parent    │ /etc   │
│ stem      │ conf.d │
│ extension │        │
╰───────────┴────────╯
</code></pre></div><p>Parse all paths under the &#39;name&#39; column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path parse <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>

</code></pre></div>`,15);function u(e,g){return o(),r("div",null,[a("h1",l,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for default")]),a("div",d,n(e.$frontmatter.default),1),h])}const x=t(c,[["render",u],["__file","path_parse.html.vue"]]);export{x as default};
