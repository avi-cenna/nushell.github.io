import{_ as l,M as p,p as c,q as i,Q as n,t as s,N as t,U as e,a1 as o}from"./framework-344bb0e4.js";const u={},d=n("h1",{id:"加载数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#加载数据","aria-hidden":"true"},"#"),s(" 加载数据")],-1),r=n("code",null,"ls",-1),m=n("code",null,"ps",-1),g=n("code",null,"date",-1),k=n("code",null,"sys",-1),h=n("h2",{id:"打开文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打开文件","aria-hidden":"true"},"#"),s(" 打开文件")],-1),_=n("code",null,"open",-1),v=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> editors/vscode/package.json <span class="token operator">|</span> table
──────────────────┬───────────────────────────────────────────────────────────────────────────────
 name             │ lark
 description      │ Lark support <span class="token keyword">for</span> VS Code
 author           │ Lark developers
 license          │ MIT
 version          │ <span class="token number">1.0</span>.0
 repository       │ <span class="token punctuation">[</span>row <span class="token builtin class-name">type</span> url<span class="token punctuation">]</span>
 publisher        │ vscode
 categories       │ <span class="token punctuation">[</span>table <span class="token number">0</span> rows<span class="token punctuation">]</span>
 keywords         │ <span class="token punctuation">[</span>table <span class="token number">1</span> rows<span class="token punctuation">]</span>
 engines          │ <span class="token punctuation">[</span>row vscode<span class="token punctuation">]</span>
 activationEvents │ <span class="token punctuation">[</span>table <span class="token number">1</span> rows<span class="token punctuation">]</span>
 main             │ ./out/extension
 contributes      │ <span class="token punctuation">[</span>row configuration grammars languages<span class="token punctuation">]</span>
 scripts          │ <span class="token punctuation">[</span>row compile postinstall <span class="token builtin class-name">test</span> vscode:prepublish watch<span class="token punctuation">]</span>
 devDependencies  │ <span class="token punctuation">[</span>row @types/mocha @types/node tslint typescript vscode vscode-languageclient<span class="token punctuation">]</span>
──────────────────┴───────────────────────────────────────────────────────────────────────────────
</code></pre></div>`,1),x=n("code",null,"ls",-1),b=n("code",null,"get",-1),f=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu 目前支持直接从以下格式加载表数据：</p><ul><li>csv</li><li>eml</li><li>ics</li><li>ini</li><li>json</li><li>nuon</li><li>ods</li><li>ssv</li><li>toml</li><li>tsv</li><li>url</li><li>vcf</li><li>xlsx / xls</li><li>xml</li><li>yaml / yml</li></ul><p>但是，当你加载其他的文本文件时会发生什么呢？让我们试一试：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> README.md
</code></pre></div><p>我们会看到该文件的内容。</p><p>本质上，这些文本文件对 Nu 来说就是一个大字符串。接下来，我们将讨论如何处理这些字符串，以便从中获得我们需要的数据。</p><h2 id="处理字符串" tabindex="-1"><a class="header-anchor" href="#处理字符串" aria-hidden="true">#</a> 处理字符串</h2><p>处理来自 Nu 外部数据时一个普遍情况是，它并不总是以 Nu 理解的格式出现。通常这些数据是以字符串的形式提供给我们的。</p><p>想象一下，我们得到了这个数据文件：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>我们想要的数据都由管道（<code>|</code>）符号隔开，每人单独一行。由于 Nu 没有默认的以管道分隔的文件格式，所以我们必须自己来解析。</p><p>当我们引入这个文件时，我们需要做的第一件事是确保后续每次只处理一行：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines
───┬──────────────────────────────
 0 │ Octavia | Butler | Writer
 1 │ Bob | Ross | Painter
 2 │ Antonio | Vivaldi | Composer
───┴──────────────────────────────
</code></pre></div>`,14),y=n("code",null,"split",-1),q=n("code",null,"split",-1),w=n("code",null,"split",-1),N=n("code",null,"column",-1),B=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`> open people.txt | lines | split column "|"
───┬──────────┬───────────┬───────────
 # │ column1  │ column2   │ column3
───┼──────────┼───────────┼───────────
 0 │ Octavia  │  Butler   │  Writer
 1 │ Bob      │  Ross     │  Painter
 2 │ Antonio  │  Vivaldi  │  Composer
───┴──────────┴───────────┴───────────
`)])],-1),C=n("code",null,"trim",-1),R=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`> open people.txt | lines | split column "|" | str trim
───┬─────────┬─────────┬──────────
 # │ column1 │ column2 │ column3
───┼─────────┼─────────┼──────────
 0 │ Octavia │ Butler  │ Writer
 1 │ Bob     │ Ross    │ Painter
 2 │ Antonio │ Vivaldi │ Composer
───┴─────────┴─────────┴──────────
`)])],-1),V=n("code",null,"split",-1),j=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get column1
───┬─────────
 0 │ Octavia
 1 │ Bob
 2 │ Antonio
───┴─────────
</code></pre></div><p>我们也可以用自定义的列名代替默认的：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Octavia    │ Butler    │ Writer
 1 │ Bob        │ Ross      │ Painter
 2 │ Antonio    │ Vivaldi   │ Composer
───┴────────────┴───────────┴──────────
</code></pre></div><p>现在，我们的数据加载到一个表中了，我们可以使用之前对表所用的各种命令来处理它：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim | sort-by first_name
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Antonio    │ Vivaldi   │ Composer
 1 │ Bob        │ Ross      │ Painter
 2 │ Octavia    │ Butler    │ Writer
───┴────────────┴───────────┴──────────
</code></pre></div><p>其他可用于字符串的命令有：</p>`,6),A=n("li",null,[n("code",null,"str")],-1),O=n("code",null,"lines",-1),L=n("code",null,"size",-1),P=o(`<p>如果我们已经知道待处理的数据具有 Nu 能够理解的格式，则可以使用一些辅助命令，例如，我们打开一个 Rust 的 Cargo.lock 文件：</p><div class="language-toml" data-ext="toml"><pre class="language-toml"><code>&gt; open Cargo<span class="token punctuation">.</span>lock
<span class="token comment"># This file is automatically @generated by Cargo.</span>
<span class="token comment"># It is not intended for manual editing.</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">package</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;adhoc_derive&quot;</span>
<span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.2&quot;</span>
</code></pre></div><p>&quot;Cargo.lock&quot; 实际上是一个 .toml 文件，但是文件扩展名不是 .toml。没关系，我们可以使用 <code>from toml</code> 命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.lock <span class="token operator">|</span> from toml <span class="token operator">|</span> table
──────────┬───────────────────
 metadata │ <span class="token punctuation">[</span>row <span class="token number">107</span> columns<span class="token punctuation">]</span>
 package  │ <span class="token punctuation">[</span>table <span class="token number">130</span> rows<span class="token punctuation">]</span>
──────────┴───────────────────
</code></pre></div><p>每种 Nu 能打开并理解的结构化数据文本格式都有对应的 <code>from</code> 命令可以使用，只需要把支持的格式作为子命令传给 <code>from</code> 就可以了。</p><h2 id="以原始模式打开" tabindex="-1"><a class="header-anchor" href="#以原始模式打开" aria-hidden="true">#</a> 以原始模式打开</h2>`,6),W=n("code",null,"open",-1),S=n("code",null,"--raw",-1),T=o(`<div class="language-toml" data-ext="toml"><pre class="language-toml"><code>&gt; open Cargo<span class="token punctuation">.</span>toml --raw
<span class="token punctuation">[</span><span class="token table class-name">package</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;nu&quot;</span>
<span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.3&quot;</span>
<span class="token key property">authors</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Yehuda Katz &lt;wycats@gmail.com&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Jonathan Turner &lt;jonathan.d.turner@gmail.com&gt;&quot;</span><span class="token punctuation">]</span>
<span class="token key property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;A shell for the GitHub era&quot;</span>
<span class="token key property">license</span> <span class="token punctuation">=</span> <span class="token string">&quot;MIT&quot;</span>
</code></pre></div><h2 id="获取-urls" tabindex="-1"><a class="header-anchor" href="#获取-urls" aria-hidden="true">#</a> 获取 URLs</h2>`,2),E=n("code",null,"http get",-1),J=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> http get https://blog.rust-lang.org/feed.xml <span class="token operator">|</span> table
╭────────────┬──────────────────╮
│ tag        │ feed             │
│ attributes │ <span class="token punctuation">{</span>record <span class="token number">1</span> field<span class="token punctuation">}</span> │
│ content    │ <span class="token punctuation">[</span>table <span class="token number">18</span> rows<span class="token punctuation">]</span>  │
╰────────────┴──────────────────╯
</code></pre></div>`,1);function M(U,z){const a=p("RouterLink");return c(),i("div",null,[d,n("p",null,[s("之前我们使用了"),t(a,{to:"/commands/docs/ls.html"},{default:e(()=>[r]),_:1}),s("、"),t(a,{to:"/commands/docs/ps.html"},{default:e(()=>[m]),_:1}),s("、"),t(a,{to:"/commands/docs/date.html"},{default:e(()=>[g]),_:1}),s("和"),t(a,{to:"/commands/docs/sys.html"},{default:e(()=>[k]),_:1}),s("等命令来加载关于文件、进程、日期时间和系统本身的信息。每条命令都会给我们提供一个信息表，以对其进行探索。我们也可以通过其他方式将数据载入表格以供使用。")]),h,n("p",null,[s("Nu 在处理数据方面最强大的能力之一是"),t(a,{to:"/commands/docs/open.html"},{default:e(()=>[_]),_:1}),s("命令。它是一个多功能命令，可以处理许多不同的数据格式。为了说明这一点让我们试着打开一个 JSON 文件：")]),v,n("p",null,[s("与"),t(a,{to:"/commands/docs/ls.html"},{default:e(()=>[x]),_:1}),s('类似，打开一个 Nu 支持的文件类型，会返回一些不仅仅是文本（或一个字节流）的东西。这里我们打开了一个来自 JavaScript 项目的 "package.json" 文件。Nu 可以识别 JSON 文本并将其解析为一个数据表。')]),n("p",null,[s("如果我们想查看当前项目的版本，我们可以使用"),t(a,{to:"/commands/docs/get.html"},{default:e(()=>[b]),_:1}),s("命令：")]),f,n("p",null,[s("可以看到，我们正在处理这些行，因为我们又回到了一个列表中。下一步是看看是否可以把行分割成更有用的东西。为此，我们将使用"),t(a,{to:"/commands/docs/split.html"},{default:e(()=>[y]),_:1}),s("命令。"),t(a,{to:"/commands/docs/split.html"},{default:e(()=>[q]),_:1}),s("，顾名思义，为我们提供了一种分割字符串的方法。我们将使用"),t(a,{to:"/commands/docs/split.html"},{default:e(()=>[w]),_:1}),s("的"),N,s("子命令，将内容分成多列。我们会告诉它分隔符是什么，剩下的就由它来完成：")]),B,n("p",null,[s("这看起来差不多了，只是还有一些额外的空白字符，让我们 "),t(a,{to:"/commands/docs/str_trim.html"},{default:e(()=>[C]),_:1}),s(" 掉这些空格：")]),R,n("p",null,[s("还不错，"),t(a,{to:"/commands/docs/split.html"},{default:e(()=>[V]),_:1}),s("命令返回给我们可以使用的数据，还预设了默认的列名：")]),j,n("ul",null,[A,n("li",null,[t(a,{to:"/commands/docs/lines.html"},{default:e(()=>[O]),_:1})]),n("li",null,[t(a,{to:"/commands/docs/size.html"},{default:e(()=>[L]),_:1})])]),P,n("p",null,[s("虽然能够打开一个文件并立即使用其数据表很有帮助，但这并不总是我们想要的。为了获得原始文本，"),t(a,{to:"/commands/docs/open.html"},{default:e(()=>[W]),_:1}),s("命令可以接受一个可选的"),S,s("标志：")]),T,n("p",null,[s("除了从文件系统中加载文件，你还可以通过使用"),t(a,{to:"/commands/docs/fetch.html"},{default:e(()=>[E]),_:1}),s("命令来加载 URLs。这将从互联网上获取 URL 的内容并返回：")]),J])}const D=l(u,[["render",M],["__file","loading_data.html.vue"]]);export{D as default};
