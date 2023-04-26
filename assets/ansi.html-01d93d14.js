import{_ as o,p as t,q as r,Q as e,t as n,v as s,a1 as c}from"./framework-344bb0e4.js";const i={},l={id:"frontmatter-title-for-platform",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-platform","aria-hidden":"true"},"#",-1),p={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ansi (code) --escape --osc --list</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>code</code>: the name of the code to use like &#39;green&#39; or &#39;reset&#39; to reset the color</li><li><code>--escape</code> <code>(-e)</code>: escape sequence without the escape character(s) (&#39;\\x1b[&#39; is not required)</li><li><code>--osc</code> <code>(-o)</code>: operating system command (osc) escape sequence without the escape character(s) (&#39;\\x1b]&#39; is not required)</li><li><code>--list</code> <code>(-l)</code>: list available ansi code names</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>An introduction to what ANSI escape sequences are can be found in the
\x1B]8;;https://en.wikipedia.org/wiki/ANSI_escape_code\x1B\\ANSI escape code\x1B]8;;\x1B\\ Wikipedia page.

Escape sequences usual values:
╭────┬────────────┬────────┬────────┬─────────╮
│  # │    type    │ normal │ bright │  name   │
├────┼────────────┼────────┼────────┼─────────┤
│  0 │ foreground │     30 │     90 │ black   │
│  1 │ foreground │     31 │     91 │ red     │
│  2 │ foreground │     32 │     92 │ green   │
│  3 │ foreground │     33 │     93 │ yellow  │
│  4 │ foreground │     34 │     94 │ blue    │
│  5 │ foreground │     35 │     95 │ magenta │
│  6 │ foreground │     36 │     96 │ cyan    │
│  7 │ foreground │     37 │     97 │ white   │
│  8 │ foreground │     39 │        │ default │
│  9 │ background │     40 │    100 │ black   │
│ 10 │ background │     41 │    101 │ red     │
│ 11 │ background │     42 │    102 │ green   │
│ 12 │ background │     43 │    103 │ yellow  │
│ 13 │ background │     44 │    104 │ blue    │
│ 14 │ background │     45 │    105 │ magenta │
│ 15 │ background │     46 │    106 │ cyan    │
│ 16 │ background │     47 │    107 │ white   │
│ 17 │ background │     49 │        │ default │
╰────┴────────────┴────────┴────────┴─────────╯

Escape sequences attributes:
╭───┬────┬──────────────┬──────────────────────────────╮
│ # │ id │ abbreviation │         description          │
├───┼────┼──────────────┼──────────────────────────────┤
│ 0 │  0 │              │ reset / normal display       │
│ 1 │  1 │ b            │ bold or increased intensity  │
│ 2 │  2 │ d            │ faint or decreased intensity │
│ 3 │  3 │ i            │ italic on (non-mono font)    │
│ 4 │  4 │ u            │ underline on                 │
│ 5 │  5 │ l            │ slow blink on                │
│ 6 │  6 │              │ fast blink on                │
│ 7 │  7 │ r            │ reverse video on             │
│ 8 │  8 │ h            │ nondisplayed (invisible) on  │
│ 9 │  9 │ s            │ strike-through on            │
╰───┴────┴──────────────┴──────────────────────────────╯

Operating system commands:
╭───┬─────┬───────────────────────────────────────╮
│ # │ id  │              description              │
├───┼─────┼───────────────────────────────────────┤
│ 0 │   0 │ Set window title and icon name        │
│ 1 │   1 │ Set icon name                         │
│ 2 │   2 │ Set window title                      │
│ 3 │   4 │ Set/read color palette                │
│ 4 │   9 │ iTerm2 Grown notifications            │
│ 5 │  10 │ Set foreground color (x11 color spec) │
│ 6 │  11 │ Set background color (x11 color spec) │
│ 7 │ ... │ others                                │
╰───┴─────┴───────────────────────────────────────╯
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Change color to green (see how the next example text will be green!)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ansi green

</code></pre></div><p>Reset the color</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ansi reset

</code></pre></div><p>Use different colors and styles in the same text</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">$&#39;(ansi red_bold)Hello(ansi reset) (ansi green_dimmed)Nu(ansi reset) (ansi purple_italic)World(ansi reset)&#39;</span>
Hello Nu World
</code></pre></div><p>The same example as above with short names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">$&#39;(ansi rb)Hello(ansi reset) (ansi gd)Nu(ansi reset) (ansi pi)World(ansi reset)&#39;</span>
Hello Nu World
</code></pre></div><p>Use escape codes, without the &#39;\\x1b[&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> $<span class="token string">&quot;(ansi -e &#39;3;93;41m&#39;)Hello(ansi reset)&quot;</span>  <span class="token comment"># italic bright yellow on red background</span>
Hello
</code></pre></div><p>Use structured escape codes</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> bold_blue_on_red <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment"># \`fg\`, \`bg\`, \`attr\` are the acceptable keys, all other keys are considered invalid and will throw errors.</span>
        fg: <span class="token string">&#39;#0000ff&#39;</span>
        bg: <span class="token string">&#39;#ff0000&#39;</span>
        attr: b
    <span class="token punctuation">}</span>
    $<span class="token string">&quot;(ansi -e <span class="token variable">$bold_blue_on_red</span>)Hello Nu World(ansi reset)&quot;</span>
Hello Nu World
</code></pre></div>`,19);function g(a,h){return t(),r("div",null,[e("h1",l,[d,n(),e("code",null,s(a.$frontmatter.title),1),n(" for platform")]),e("div",p,s(a.$frontmatter.platform),1),u])}const m=o(i,[["render",g],["__file","ansi.html.vue"]]);export{m as default};
