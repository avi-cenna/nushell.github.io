import{_ as o,p as t,q as p,Q as n,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-conversions",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d={class:"command-title"},i=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into record </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert from one row table to record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>false<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into record
╭───────┬───────╮
│ value │ <span class="token boolean">false</span> │
╰───────┴───────╯
</code></pre></div><p>Convert from list to record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into record
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token number">3</span> │
╰───┴───╯
</code></pre></div><p>Convert from range to record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">..</span><span class="token number">2</span> <span class="token operator">|</span> into record
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">2</span> │
╰───┴───╯
</code></pre></div><p>convert duration to record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token parameter variable">-500day</span> <span class="token operator">|</span> into record
╭───────┬───╮
│ year  │ <span class="token number">1</span> │
│ month │ <span class="token number">4</span> │
│ week  │ <span class="token number">2</span> │
│ day   │ <span class="token number">1</span> │
│ sign  │ - │
╰───────┴───╯
</code></pre></div><p>convert record to record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token number">1</span>, b: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> into record
╭───┬───╮
│ a │ <span class="token number">1</span> │
│ b │ <span class="token number">2</span> │
╰───┴───╯
</code></pre></div><p>convert date to record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">2020</span>-04-12T22:10:57+02:00 <span class="token operator">|</span> into record
╭──────────┬────────╮
│ year     │ <span class="token number">2020</span>   │
│ month    │ <span class="token number">4</span>      │
│ day      │ <span class="token number">12</span>     │
│ hour     │ <span class="token number">22</span>     │
│ minute   │ <span class="token number">10</span>     │
│ second   │ <span class="token number">57</span>     │
│ timezone │ +02:00 │
╰──────────┴────────╯
</code></pre></div>`,15);function k(a,m){return t(),p("div",null,[n("h1",l,[u,s(),n("code",null,e(a.$frontmatter.title),1),s(" for conversions")]),n("div",d,e(a.$frontmatter.conversions),1),i])}const h=o(c,[["render",k],["__file","into_record.html.vue"]]);export{h as default};
