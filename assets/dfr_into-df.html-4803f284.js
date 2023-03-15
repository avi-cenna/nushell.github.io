import{_ as t,p,q as o,Q as a,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr into-df </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Takes a dictionary and creates a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df
╭───┬───┬───╮
│ <span class="token comment"># │ a │ b │</span>
├───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │
╰───┴───┴───╯

</code></pre></div><p>Takes a list of tables and creates a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> a<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span> b<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> c<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df
╭───┬───┬───┬───╮
│ <span class="token comment"># │ 0 │ 1 │ 2 │</span>
├───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ a │
│ <span class="token number">1</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │ b │
│ <span class="token number">2</span> │ <span class="token number">5</span> │ <span class="token number">6</span> │ c │
╰───┴───┴───┴───╯

</code></pre></div><p>Takes a list and creates a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a b c<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df
╭───┬───╮
│ <span class="token comment"># │ 0 │</span>
├───┼───┤
│ <span class="token number">0</span> │ a │
│ <span class="token number">1</span> │ b │
│ <span class="token number">2</span> │ c │
╰───┴───╯

</code></pre></div><p>Takes a list of booleans and creates a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>true <span class="token boolean">true</span> false<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df
╭───┬───────╮
│ <span class="token comment"># │   0   │</span>
├───┼───────┤
│ <span class="token number">0</span> │ <span class="token boolean">true</span>  │
│ <span class="token number">1</span> │ <span class="token boolean">true</span>  │
│ <span class="token number">2</span> │ <span class="token boolean">false</span> │
╰───┴───────╯

</code></pre></div>`,11);function i(n,m){return p(),o("div",null,[a("h1",l,[u,s(),a("code",null,e(n.$frontmatter.title),1),s(" for dataframe")]),a("div",d,e(n.$frontmatter.dataframe),1),k])}const f=t(r,[["render",i],["__file","dfr_into-df.html.vue"]]);export{f as default};
