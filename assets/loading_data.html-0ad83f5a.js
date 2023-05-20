import{_ as c,M as l,p as d,q as r,Q as e,t,N as a,U as s,a1 as o}from"./framework-344bb0e4.js";const u={},p=e("h1",{id:"loading-data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loading-data","aria-hidden":"true"},"#"),t(" Loading data")],-1),h=e("code",null,"ls",-1),m=e("code",null,"ps",-1),g=e("code",null,"date",-1),f=e("code",null,"sys",-1),_=e("h2",{id:"opening-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opening-files","aria-hidden":"true"},"#"),t(" Opening files")],-1),x=e("code",null,"open",-1),b=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> editors/vscode/package.json <span class="token operator">|</span> table
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
</code></pre></div>`,1),w=e("code",null,"ls",-1),k=e("code",null,"get",-1),v=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu currently supports the following formats for loading data directly into tables:</p><ul><li>csv</li><li>eml</li><li>ics</li><li>ini</li><li>json</li><li><a href="#nuon">nuon</a></li><li>ods</li><li><a href="#sqlite">SQLite databases</a></li><li>ssv</li><li>toml</li><li>tsv</li><li>url</li><li>vcf</li><li>xlsx / xls</li><li>xml</li><li>yaml / yml</li></ul><p>But what happens if you load a text file that isn&#39;t one of these? Let&#39;s try it:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open README.md
</code></pre></div><p>We&#39;re shown the contents of the file.</p><p>Below the surface, what Nu sees in these text files is one large string. Next, we&#39;ll talk about how to work with these strings to get the data we need out of them.</p><h2 id="nuon" tabindex="-1"><a class="header-anchor" href="#nuon" aria-hidden="true">#</a> NUON</h2>`,8),y={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},N=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
  menus: [
    # Configuration for default nushell menus
    # Note the lack of source parameter
    {
      name: completion_menu
      only_buffer_difference: false
      marker: "| "
      type: {
          layout: columnar
          columns: 4
          col_width: 20   # Optional value. If missing all the screen width is used to calculate column width
          col_padding: 2
      }
      style: {
          text: green
          selected_text: green_reverse
          description_text: yellow
      }
    }
  ]
}
`)])],-1),O=e("p",null,[t("You might notice it is quite similar to JSON, and you're right. "),e("strong",null,"NUON is a superset of JSON!"),t(' That is, any JSON code is a valid NUON code, therefore a valid Nushell code. Compared to JSON, NUON is more "human-friendly". For example, comments are allowed and commas are not required.')],-1),T=o(`<h2 id="handling-strings" tabindex="-1"><a class="header-anchor" href="#handling-strings" aria-hidden="true">#</a> Handling Strings</h2><p>An important part of working with data coming from outside Nu is that it&#39;s not always in a format that Nu understands. Often this data is given to us as a string.</p><p>Let&#39;s imagine that we&#39;re given this data file:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>Each bit of data we want is separated by the pipe (&#39;|&#39;) symbol, and each person is on a separate line. Nu doesn&#39;t have a pipe-delimited file format by default, so we&#39;ll have to parse this ourselves.</p><p>The first thing we want to do when bringing in the file is to work with it a line at a time:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines
───┬──────────────────────────────
 0 │ Octavia | Butler | Writer
 1 │ Bob | Ross | Painter
 2 │ Antonio | Vivaldi | Composer
───┴──────────────────────────────
</code></pre></div>`,7),q=e("code",null,"split",-1),B=e("code",null,"split",-1),L=e("code",null,"split",-1),C=e("code",null,"column",-1),S=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|"
───┬──────────┬───────────┬───────────
 # │ column1  │ column2   │ column3
───┼──────────┼───────────┼───────────
 0 │ Octavia  │  Butler   │  Writer
 1 │ Bob      │  Ross     │  Painter
 2 │ Antonio  │  Vivaldi  │  Composer
───┴──────────┴───────────┴───────────
`)])],-1),j=e("em",null,"almost",-1),R=e("code",null,"trim",-1),U=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|" | str trim
───┬─────────┬─────────┬──────────
 # │ column1 │ column2 │ column3
───┼─────────┼─────────┼──────────
 0 │ Octavia │ Butler  │ Writer
 1 │ Bob     │ Ross    │ Painter
 2 │ Antonio │ Vivaldi │ Composer
───┴─────────┴─────────┴──────────
`)])],-1),I=e("code",null,"split",-1),W=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get column1
───┬─────────
 0 │ Octavia
 1 │ Bob
 2 │ Antonio
───┴─────────
</code></pre></div><p>We can also name our columns instead of using the default names:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Octavia    │ Butler    │ Writer
 1 │ Bob        │ Ross      │ Painter
 2 │ Antonio    │ Vivaldi   │ Composer
───┴────────────┴───────────┴──────────
</code></pre></div><p>Now that our data is in a table, we can use all the commands we&#39;ve used on tables before:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim | sort-by first_name
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Antonio    │ Vivaldi   │ Composer
 1 │ Bob        │ Ross      │ Painter
 2 │ Octavia    │ Butler    │ Writer
───┴────────────┴───────────┴──────────
</code></pre></div><p>There are other commands you can use to work with strings:</p>`,6),V=e("code",null,"str",-1),A=e("code",null,"lines",-1),J=e("code",null,"size",-1),E=e("p",null,"There is also a set of helper commands we can call if we know the data has a structure that Nu should be able to understand. For example, let's open a Rust lock file:",-1),P=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.lock
# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
[[package]]
name = "adhoc_derive"
version = "0.1.2"
`)])],-1),z=e("code",null,"from",-1),F=e("code",null,"toml",-1),M=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.lock <span class="token operator">|</span> from toml <span class="token operator">|</span> table
──────────┬───────────────────
 metadata │ <span class="token punctuation">[</span>row <span class="token number">107</span> columns<span class="token punctuation">]</span>
 package  │ <span class="token punctuation">[</span>table <span class="token number">130</span> rows<span class="token punctuation">]</span>
──────────┴───────────────────
</code></pre></div>`,1),Q=e("code",null,"from",-1),H=e("h2",{id:"opening-in-raw-mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opening-in-raw-mode","aria-hidden":"true"},"#"),t(" Opening in raw mode")],-1),Y=e("code",null,"open",-1),D=e("code",null,"--raw",-1),G=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml --raw
[package]                                                                                        name = "nu"
version = "0.1.3"
authors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]
description = "A shell for the GitHub era"
license = "MIT"
`)])],-1),K=e("h2",{id:"sqlite",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sqlite","aria-hidden":"true"},"#"),t(" SQLite")],-1),X=e("code",null,"open",-1),Z=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open foo.db
`)])],-1),$=e("code",null,"get",-1),ee=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open foo.db | get some_table
</code></pre></div><p>Or run any SQL query you like:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open foo.db | query db &quot;select * from some_table&quot;
</code></pre></div><p>(Note: some older versions of Nu use <code>into db | query</code> instead of <code>query db</code> )</p><h2 id="fetching-urls" tabindex="-1"><a class="header-anchor" href="#fetching-urls" aria-hidden="true">#</a> Fetching URLs</h2>`,5),te=e("code",null,"http get",-1),ae=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> http get https://blog.rust-lang.org/feed.xml <span class="token operator">|</span> table
╭────────────┬──────────────────╮
│ tag        │ feed             │
│ attributes │ <span class="token punctuation">{</span>record <span class="token number">1</span> field<span class="token punctuation">}</span> │
│ content    │ <span class="token punctuation">[</span>table <span class="token number">18</span> rows<span class="token punctuation">]</span>  │
╰────────────┴──────────────────╯
</code></pre></div>`,1);function ne(se,oe){const n=l("RouterLink"),i=l("ExternalLinkIcon");return d(),r("div",null,[p,e("p",null,[t("Earlier, we saw how you can use commands like "),a(n,{to:"/commands/docs/ls.html"},{default:s(()=>[h]),_:1}),t(", "),a(n,{to:"/commands/docs/ps.html"},{default:s(()=>[m]),_:1}),t(", "),a(n,{to:"/commands/docs/date.html"},{default:s(()=>[g]),_:1}),t(", and "),a(n,{to:"/commands/docs/sys.html"},{default:s(()=>[f]),_:1}),t(" to load information about your files, processes, time of date, and the system itself. Each command gives us a table of information that we can explore. There are other ways we can load in a table of data to work with.")]),_,e("p",null,[t("One of Nu's most powerful assets in working with data is the "),a(n,{to:"/commands/docs/open.html"},{default:s(()=>[x]),_:1}),t(" command. It is a multi-tool that can work with a number of different data formats. To see what this means, let's try opening a json file:")]),b,e("p",null,[t("In a similar way to "),a(n,{to:"/commands/docs/ls.html"},{default:s(()=>[w]),_:1}),t(', opening a file type that Nu understands will give us back something that is more than just text (or a stream of bytes). Here we open a "package.json" file from a JavaScript project. Nu can recognize the JSON text and parse it to a table of data.')]),e("p",null,[t("If we wanted to check the version of the project we were looking at, we can use the "),a(n,{to:"/commands/docs/get.html"},{default:s(()=>[k]),_:1}),t(" command.")]),v,e("p",null,[t("Nushell Object Notation (NUON) aims to be for Nushell what JavaScript Object Notation (JSON) is for JavaScript. That is, NUON code is a valid Nushell code that describes some data structure. For example, this is a valid NUON (example from the "),e("a",y,[t("default configuration file"),a(i)]),t("):")]),N,O,e("p",null,[t("One limitation of NUON currently is that it cannot represent all of the Nushell "),a(n,{to:"/book/types_of_data.html"},{default:s(()=>[t("data types")]),_:1}),t(". Most notably, NUON does not allow to serialize blocks.")]),T,e("p",null,[t("We can see that we're working with the lines because we're back into a list. Our next step is to see if we can split up the rows into something a little more useful. For that, we'll use the "),a(n,{to:"/commands/docs/split.html"},{default:s(()=>[q]),_:1}),t(" command. "),a(n,{to:"/commands/docs/split.html"},{default:s(()=>[B]),_:1}),t(", as the name implies, gives us a way to split a delimited string. We will use "),a(n,{to:"/commands/docs/split.html"},{default:s(()=>[L]),_:1}),t("'s "),C,t(" subcommand to split the contents across multiple columns. We tell it what the delimiter is, and it does the rest:")]),S,e("p",null,[t("That "),j,t(" looks correct. It looks like there's an extra space there. Let's "),a(n,{to:"/commands/docs/str_trim.html"},{default:s(()=>[R]),_:1}),t(" that extra space:")]),U,e("p",null,[t("Not bad. The "),a(n,{to:"/commands/docs/split.html"},{default:s(()=>[I]),_:1}),t(" command gives us data we can use. It also goes ahead and gives us default column names:")]),W,e("ul",null,[e("li",null,[a(n,{to:"/commands/docs/str.html"},{default:s(()=>[V]),_:1})]),e("li",null,[a(n,{to:"/commands/docs/lines.html"},{default:s(()=>[A]),_:1})]),e("li",null,[a(n,{to:"/commands/docs/size.html"},{default:s(()=>[J]),_:1})])]),E,P,e("p",null,[t(`The "Cargo.lock" file is actually a .toml file, but the file extension isn't .toml. That's okay, we can use the `),a(n,{to:"/commands/docs/from.html"},{default:s(()=>[z]),_:1}),t(" command using the "),F,t(" subcommand:")]),M,e("p",null,[t("The "),a(n,{to:"/commands/docs/from.html"},{default:s(()=>[Q]),_:1}),t(" command can be used for each of the structured data text formats that Nu can open and understand by passing it the supported format as a subcommand.")]),H,e("p",null,[t("While it's helpful to be able to open a file and immediately work with a table of its data, this is not always what you want to do. To get to the underlying text, the "),a(n,{to:"/commands/docs/open.html"},{default:s(()=>[Y]),_:1}),t(" command can take an optional "),D,t(" flag:")]),G,K,e("p",null,[t("SQLite databases are automatically detected by "),a(n,{to:"/commands/docs/open.html"},{default:s(()=>[X]),_:1}),t(", no matter what their file extension is. You can open a whole database:")]),Z,e("p",null,[t("Or "),a(n,{to:"/commands/docs/get.html"},{default:s(()=>[$]),_:1}),t(" a specific table:")]),ee,e("p",null,[t("In addition to loading files from your filesystem, you can also load URLs by using the "),a(n,{to:"/commands/docs/fetch.html"},{default:s(()=>[te]),_:1}),t(" command. This will fetch the contents of the URL from the internet and return it:")]),ae])}const ie=c(u,[["render",ne],["__file","loading_data.html.vue"]]);export{ie as default};
