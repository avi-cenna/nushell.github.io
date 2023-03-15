import{_ as t,p as r,q as p,Q as a,t as s,v as e,a1 as o}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-generators",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-generators","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq date --output-format --input-format --begin-date --end-date --increment --days --reverse</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--output-format {string}</code>: prints dates in this format (defaults to %Y-%m-%d)</li><li><code>--input-format {string}</code>: give argument dates in this format (defaults to %Y-%m-%d)</li><li><code>--begin-date {string}</code>: beginning date range</li><li><code>--end-date {string}</code>: ending date</li><li><code>--increment {int}</code>: increment dates by this number</li><li><code>--days {int}</code>: number of days to print</li><li><code>--reverse</code> <code>(-r)</code>: print dates in reverse</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>print the next 10 days in YYYY-MM-DD format with newline separator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">--days</span> <span class="token number">10</span>

</code></pre></div><p>print the previous 10 days in YYYY-MM-DD format with newline separator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">--days</span> <span class="token number">10</span> <span class="token parameter variable">-r</span>

</code></pre></div><p>print the previous 10 days starting today in MM/DD/YYYY format with newline separator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">--days</span> <span class="token number">10</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;%m/%d/%Y&#39;</span> <span class="token parameter variable">-r</span>

</code></pre></div><p>print the first 10 days in January, 2020</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">-b</span> <span class="token string">&#39;2020-01-01&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;2020-01-10&#39;</span>
╭───┬────────────╮
│ <span class="token number">0</span> │ <span class="token number">2020</span>-01-01 │
│ <span class="token number">1</span> │ <span class="token number">2020</span>-01-02 │
│ <span class="token number">2</span> │ <span class="token number">2020</span>-01-03 │
│ <span class="token number">3</span> │ <span class="token number">2020</span>-01-04 │
│ <span class="token number">4</span> │ <span class="token number">2020</span>-01-05 │
│ <span class="token number">5</span> │ <span class="token number">2020</span>-01-06 │
│ <span class="token number">6</span> │ <span class="token number">2020</span>-01-07 │
│ <span class="token number">7</span> │ <span class="token number">2020</span>-01-08 │
│ <span class="token number">8</span> │ <span class="token number">2020</span>-01-09 │
│ <span class="token number">9</span> │ <span class="token number">2020</span>-01-10 │
╰───┴────────────╯

</code></pre></div><p>print every fifth day between January 1st 2020 and January 31st 2020</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">-b</span> <span class="token string">&#39;2020-01-01&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;2020-01-31&#39;</span> <span class="token parameter variable">-n</span> <span class="token number">5</span>
╭───┬────────────╮
│ <span class="token number">0</span> │ <span class="token number">2020</span>-01-01 │
│ <span class="token number">1</span> │ <span class="token number">2020</span>-01-06 │
│ <span class="token number">2</span> │ <span class="token number">2020</span>-01-11 │
│ <span class="token number">3</span> │ <span class="token number">2020</span>-01-16 │
│ <span class="token number">4</span> │ <span class="token number">2020</span>-01-21 │
│ <span class="token number">5</span> │ <span class="token number">2020</span>-01-26 │
│ <span class="token number">6</span> │ <span class="token number">2020</span>-01-31 │
╰───┴────────────╯

</code></pre></div>`,15);function m(n,b){return r(),p("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for generators")]),a("div",d,e(n.$frontmatter.generators),1),u])}const h=t(c,[["render",m],["__file","seq_date.html.vue"]]);export{h as default};
