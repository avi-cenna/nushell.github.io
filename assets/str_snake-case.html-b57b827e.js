import{_ as t,p as o,q as r,Q as a,t as e,v as n,a1 as c}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str snake-case ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: For a data structure input, convert strings at the given cell paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert a string to snake_case</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&quot;NuShell&quot;</span> <span class="token operator">|</span> str snake-case
nu_shell
</code></pre></div><p>convert a string to snake_case</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&quot;this_is_the_second_case&quot;</span> <span class="token operator">|</span> str snake-case
this_is_the_second_case
</code></pre></div><p>convert a string to snake_case</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;this-is-the-first-case&quot;</span> <span class="token operator">|</span> str snake-case
this_is_the_first_case
</code></pre></div><p>convert a column from a table to snake_case</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nuTest, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str snake-case lang
╭───┬─────────┬──────╮
│ <span class="token comment"># │  lang   │ gems │</span>
├───┼─────────┼──────┤
│ <span class="token number">0</span> │ nu_test │  <span class="token number">100</span> │
╰───┴─────────┴──────╯

</code></pre></div>`,13);function u(s,g){return o(),r("div",null,[a("h1",l,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for strings")]),a("div",d,n(s.$frontmatter.strings),1),h])}const k=t(p,[["render",u],["__file","str_snake-case.html.vue"]]);export{k as default};
