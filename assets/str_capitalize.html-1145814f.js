import{_ as n,p as o,q as r,Q as a,t as e,v as t,a1 as p}from"./framework-344bb0e4.js";const c={},i={id:"frontmatter-title-for-strings",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str capitalize ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: For a data structure input, convert strings at the given cell paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Capitalize contents</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;good day&#39;</span> <span class="token operator">|</span> str capitalize
Good day
</code></pre></div><p>Capitalize contents</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;anton&#39;</span> <span class="token operator">|</span> str capitalize
Anton
</code></pre></div><p>Capitalize a column in a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu_test, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str capitalize lang
╭───┬─────────┬──────╮
│ <span class="token comment"># │  lang   │ gems │</span>
├───┼─────────┼──────┤
│ <span class="token number">0</span> │ Nu_test │  <span class="token number">100</span> │
╰───┴─────────┴──────╯

</code></pre></div>`,11);function h(s,g){return o(),r("div",null,[a("h1",i,[l,e(),a("code",null,t(s.$frontmatter.title),1),e(" for strings")]),a("div",d,t(s.$frontmatter.strings),1),u])}const _=n(c,[["render",h],["__file","str_capitalize.html.vue"]]);export{_ as default};
