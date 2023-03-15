import{_ as e,p,q as o,Q as n,t as s,v as t,a1 as r}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-default",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split-by (splitter)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>splitter</code>: the splitter value to use</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>split items by column named &quot;lang&quot;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;2019&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> name: <span class="token string">&#39;andres&#39;</span>, lang: <span class="token string">&#39;rb&#39;</span>, year: <span class="token string">&#39;2019&#39;</span> <span class="token punctuation">}</span>,
          <span class="token punctuation">{</span> name: <span class="token string">&#39;jt&#39;</span>, lang: <span class="token string">&#39;rs&#39;</span>, year: <span class="token string">&#39;2019&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&#39;2021&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> name: <span class="token string">&#39;storm&#39;</span>, lang: <span class="token string">&#39;rs&#39;</span>, <span class="token string">&#39;year&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;2021&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token operator">|</span> split-by lang
╭────┬─────────────────────────────────────────╮
│    │ ╭──────┬──────────────────────────────╮ │
│ rb │ │      │ ╭───┬────────┬──────┬──────╮ │ │
│    │ │ <span class="token number">2019</span> │ │ <span class="token comment"># │  name  │ lang │ year │ │ │</span>
│    │ │      │ ├───┼────────┼──────┼──────┤ │ │
│    │ │      │ │ <span class="token number">0</span> │ andres │ rb   │ <span class="token number">2019</span> │ │ │
│    │ │      │ ╰───┴────────┴──────┴──────╯ │ │
│    │ ╰──────┴──────────────────────────────╯ │
│    │ ╭──────┬─────────────────────────────╮  │
│ rs │ │      │ ╭───┬──────┬──────┬──────╮  │  │
│    │ │ <span class="token number">2019</span> │ │ <span class="token comment"># │ name │ lang │ year │  │  │</span>
│    │ │      │ ├───┼──────┼──────┼──────┤  │  │
│    │ │      │ │ <span class="token number">0</span> │ jt   │ rs   │ <span class="token number">2019</span> │  │  │
│    │ │      │ ╰───┴──────┴──────┴──────╯  │  │
│    │ │      │ ╭───┬───────┬──────┬──────╮ │  │
│    │ │ <span class="token number">2021</span> │ │ <span class="token comment"># │ name  │ lang │ year │ │  │</span>
│    │ │      │ ├───┼───────┼──────┼──────┤ │  │
│    │ │      │ │ <span class="token number">0</span> │ storm │ rs   │ <span class="token number">2021</span> │ │  │
│    │ │      │ ╰───┴───────┴──────┴──────╯ │  │
│    │ ╰──────┴─────────────────────────────╯  │
╰────┴─────────────────────────────────────────╯
</code></pre></div>`,7);function m(a,k){return p(),o("div",null,[n("h1",c,[i,s(),n("code",null,t(a.$frontmatter.title),1),s(" for default")]),n("div",u,t(a.$frontmatter.default),1),d])}const g=e(l,[["render",m],["__file","split-by.html.vue"]]);export{g as default};
