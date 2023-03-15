import{_ as t,p,q as r,Q as n,t as a,v as e,a1 as o}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-generators",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-generators","aria-hidden":"true"},"#",-1),m={class:"command-title"},b=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: sequence values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sequence 1 to 10</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span>
╭───┬────╮
│ <span class="token number">0</span> │  <span class="token number">1</span> │
│ <span class="token number">1</span> │  <span class="token number">2</span> │
│ <span class="token number">2</span> │  <span class="token number">3</span> │
│ <span class="token number">3</span> │  <span class="token number">4</span> │
│ <span class="token number">4</span> │  <span class="token number">5</span> │
│ <span class="token number">5</span> │  <span class="token number">6</span> │
│ <span class="token number">6</span> │  <span class="token number">7</span> │
│ <span class="token number">7</span> │  <span class="token number">8</span> │
│ <span class="token number">8</span> │  <span class="token number">9</span> │
│ <span class="token number">9</span> │ <span class="token number">10</span> │
╰───┴────╯

</code></pre></div><p>sequence 1.0 to 2.0 by 0.1s</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token number">1.0</span> <span class="token number">0.1</span> <span class="token number">2.0</span>
╭────┬────────╮
│  <span class="token number">0</span> │ <span class="token number">1.0000</span> │
│  <span class="token number">1</span> │ <span class="token number">1.1000</span> │
│  <span class="token number">2</span> │ <span class="token number">1.2000</span> │
│  <span class="token number">3</span> │ <span class="token number">1.3000</span> │
│  <span class="token number">4</span> │ <span class="token number">1.4000</span> │
│  <span class="token number">5</span> │ <span class="token number">1.5000</span> │
│  <span class="token number">6</span> │ <span class="token number">1.6000</span> │
│  <span class="token number">7</span> │ <span class="token number">1.7000</span> │
│  <span class="token number">8</span> │ <span class="token number">1.8000</span> │
│  <span class="token number">9</span> │ <span class="token number">1.9000</span> │
│ <span class="token number">10</span> │ <span class="token number">2.0000</span> │
╰────┴────────╯

</code></pre></div><p>sequence 1 to 5, then convert to a string with a pipe separator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token operator">|</span> str <span class="token function">join</span> <span class="token string">&#39;|&#39;</span>

</code></pre></div>`,11);function k(s,d){return p(),r("div",null,[n("h1",l,[u,a(),n("code",null,e(s.$frontmatter.title),1),a(" for generators")]),n("div",m,e(s.$frontmatter.generators),1),b])}const h=t(c,[["render",k],["__file","seq.html.vue"]]);export{h as default};
