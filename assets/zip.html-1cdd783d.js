import{_ as t,p,q as o,Q as n,t as a,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; zip (other)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: the other input</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Zip two lists</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">zip</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span>
╭───┬───────────╮
│ <span class="token number">0</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">3</span> │ │
│   │ ╰───┴───╯ │
│ <span class="token number">1</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">2</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">4</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

</code></pre></div><p>Zip two ranges</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span> <span class="token operator">|</span> <span class="token function">zip</span> <span class="token number">4</span><span class="token punctuation">..</span><span class="token number">6</span>
╭───┬───────────╮
│ <span class="token number">0</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">4</span> │ │
│   │ ╰───┴───╯ │
│ <span class="token number">1</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">2</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">5</span> │ │
│   │ ╰───┴───╯ │
│ <span class="token number">2</span> │ ╭───┬───╮ │
│   │ │ <span class="token number">0</span> │ <span class="token number">3</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">6</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

</code></pre></div><p>Rename .ogg files to match an existing list of filenames</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> glob *.ogg <span class="token operator">|</span> <span class="token function">zip</span> <span class="token punctuation">[</span><span class="token string">&#39;bang.ogg&#39;</span>, <span class="token string">&#39;fanfare.ogg&#39;</span>, <span class="token string">&#39;laser.ogg&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">||</span> <span class="token function">mv</span> <span class="token variable">$in</span>.0 <span class="token variable">$in</span>.1 <span class="token punctuation">}</span>

</code></pre></div>`,11);function m(s,d){return p(),o("div",null,[n("h1",l,[i,a(),n("code",null,e(s.$frontmatter.title),1),a(" for filters")]),n("div",u,e(s.$frontmatter.filters),1),k])}const h=t(c,[["render",m],["__file","zip.html.vue"]]);export{h as default};
