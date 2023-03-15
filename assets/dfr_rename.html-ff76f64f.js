import{_ as t,p,q as o,Q as n,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-dataframe-or-lazyframe",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe-or-lazyframe","aria-hidden":"true"},"#",-1),m={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr rename </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Renames a series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr <span class="token function">rename</span> <span class="token string">&#39;0&#39;</span> new_name
╭───┬──────────╮
│ <span class="token comment"># │ new_name │</span>
├───┼──────────┤
│ <span class="token number">0</span> │        <span class="token number">5</span> │
│ <span class="token number">1</span> │        <span class="token number">6</span> │
│ <span class="token number">2</span> │        <span class="token number">7</span> │
│ <span class="token number">3</span> │        <span class="token number">8</span> │
╰───┴──────────╯

</code></pre></div><p>Renames a dataframe column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr <span class="token function">rename</span> a a_new
╭───┬───────┬───╮
│ <span class="token comment"># │ a_new │ b │</span>
├───┼───────┼───┤
│ <span class="token number">0</span> │     <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │     <span class="token number">3</span> │ <span class="token number">4</span> │
╰───┴───────┴───╯

</code></pre></div><p>Renames two dataframe columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr <span class="token function">rename</span> <span class="token punctuation">[</span>a b<span class="token punctuation">]</span> <span class="token punctuation">[</span>a_new b_new<span class="token punctuation">]</span>
╭───┬───────┬───────╮
│ <span class="token comment"># │ a_new │ b_new │</span>
├───┼───────┼───────┤
│ <span class="token number">0</span> │     <span class="token number">1</span> │     <span class="token number">2</span> │
│ <span class="token number">1</span> │     <span class="token number">3</span> │     <span class="token number">4</span> │
╰───┴───────┴───────╯

</code></pre></div>`,9);function i(a,d){return p(),o("div",null,[n("h1",l,[u,s(),n("code",null,e(a.$frontmatter.title),1),s(" for dataframe or lazyframe")]),n("div",m,e(a.$frontmatter.dataframe_or_lazyframe),1),k])}const f=t(r,[["render",i],["__file","dfr_rename.html.vue"]]);export{f as default};
