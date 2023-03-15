import{_ as t,p as o,q as r,Q as a,t as e,v as n,a1 as c}from"./framework-344bb0e4.js";const l={},d={id:"frontmatter-title-for-formats",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),p={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ssv --noheaders --aligned-columns --minimum-spaces</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--noheaders</code> <code>(-n)</code>: don&#39;t treat the first row as column names</li><li><code>--aligned-columns</code> <code>(-a)</code>: assume columns are aligned</li><li><code>--minimum-spaces {int}</code>: the minimum spaces to separate columns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ssv formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FOO   BAR
1   2&#39;</span> <span class="token operator">|</span> from ssv
╭───┬─────┬─────╮
│ <span class="token comment"># │ FOO │ BAR │</span>
├───┼─────┼─────┤
│ <span class="token number">0</span> │ <span class="token number">1</span>   │ <span class="token number">2</span>   │
╰───┴─────┴─────╯

</code></pre></div><p>Converts ssv formatted string to table but not treating the first row as column names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FOO   BAR
1   2&#39;</span> <span class="token operator">|</span> from ssv <span class="token parameter variable">-n</span>
╭───┬─────────┬─────────╮
│ <span class="token comment"># │ column1 │ column2 │</span>
├───┼─────────┼─────────┤
│ <span class="token number">0</span> │ FOO     │ BAR     │
│ <span class="token number">1</span> │ <span class="token number">1</span>       │ <span class="token number">2</span>       │
╰───┴─────────┴─────────╯

</code></pre></div>`,9);function h(s,u){return o(),r("div",null,[a("h1",d,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for formats")]),a("div",p,n(s.$frontmatter.formats),1),m])}const g=t(l,[["render",h],["__file","from_ssv.html.vue"]]);export{g as default};
