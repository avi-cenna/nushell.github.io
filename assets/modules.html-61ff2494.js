import{_ as i,M as l,p as s,q as r,Q as e,t as o,N as t,U as d,a1 as a}from"./framework-344bb0e4.js";const u={},c=a(`<h1 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h1><p>Similar to many other programming languages, Nushell also has modules to organize your code. Each module is a &quot;bag&quot; containing a bunch of definitions (typically commands) that you can export (take out or the bag) and use in your current scope. Since Nushell is also a shell, modules allow you to modify environment variables when importing them.</p><h2 id="quick-overview" tabindex="-1"><a class="header-anchor" href="#quick-overview" aria-hidden="true">#</a> Quick Overview</h2><p>There are three ways to define a module in Nushell:</p><ol><li>&quot;inline&quot; <ul><li><code>module spam { ... }</code></li></ul></li><li>from a file <ul><li>using a .nu file as a module</li></ul></li><li>from a directory <ul><li>directory must contain <code>mod.nu</code> file (can be empty)</li></ul></li></ol><p>In Nushell, creating a module and importing definitions from a module are two different actions. The former is done using the <code>module</code> keyword. The latter using the <code>use</code> keyword. You can think of <code>module</code> as &quot;wrapping definitions into a bag&quot; and <code>use</code> as &quot;opening a bag and taking definitions from it&quot;. In most cases, calling <code>use</code> will create the module implicitly, so you typically don&#39;t need to use <code>module</code> that much.</p><p>You can define the following things inside a module:</p><ul><li>Commands* (<code>def</code>, <code>def-env</code>)</li><li>Aliases (<code>alias</code>)</li><li>Known externals* (<code>extern</code>)</li><li>Submodules (<code>module</code>)</li><li>Imported symbols from other modules (<code>use</code>)</li><li>Environment setup (<code>export-env</code>)</li></ul><p>Only definitions marked with <code>export</code> are possible to access from outside of the module (&quot;take out of the bag&quot;). Definitions not marked with <code>export</code> are allowed but are visible only inside the module (you could call them private). (<em><code>export-env</code> is special and does not require <code>export</code>.</em>)</p><p><em>*These definitions can also be defined as <code>main</code> (see below).</em></p><h2 id="inline-modules" tabindex="-1"><a class="header-anchor" href="#inline-modules" aria-hidden="true">#</a> &quot;Inline&quot; modules</h2><p>The simplest (and probably least useful) way to define a module is an &quot;inline&quot; module can be defined like this:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>module greetings {
    export def hello [name: string] {
        $&quot;hello ($name)!&quot;
    }

    export def hi [where: string] {
        $&quot;hi ($where)!&quot;
    }
}

use greetings hello

hello &quot;world&quot;
</code></pre></div><p><em>You can paste the code into a file and run it with <code>nu</code>, or type into the REPL.</em></p><p>First, we create a module (put <code>hello</code> and <code>hi</code> commands into a &quot;bag&quot; called <code>greetings</code>), then we import the <code>hello</code> command from the module (find a &quot;bag&quot; called <code>greetings</code> and take <code>hello</code> command from it) with <code>use</code>.</p><h2 id="modules-from-files" tabindex="-1"><a class="header-anchor" href="#modules-from-files" aria-hidden="true">#</a> Modules from files</h2><p>A .nu file can be a module. Just take the contents of the module block from the example above and save it to a file <code>greetings.nu</code>. The module name is automatically inferred as the stem of the file (&quot;greetings&quot;).</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># greetings.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}
</code></pre></div><p>then</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>&gt; use greetings.nu hello

&gt; hello
</code></pre></div><p>The result should be similar as in the previous section.</p><p>Note that the <code>use greetings.nu hello</code> call here first implicitly creates the <code>greetings</code> module, then takes <code>hello</code> from it. You could also write it as <code>module greetings.nu</code>, <code>use greetings hello</code>. Using <code>module</code> can be useful if you&#39;re not interested in any definitions from the module but want to, e.g., re-export the module (<code>export module greetings.nu</code>).</p><h2 id="modules-from-directories" tabindex="-1"><a class="header-anchor" href="#modules-from-directories" aria-hidden="true">#</a> Modules from directories</h2><p>Finally, a directory can be imported as a module. The only condition is that it needs to contain a <code>mod.nu</code> file (even empty). The <code>mod.nu</code> file defines the root module. All .nu files inside the module directory are added as submodules (more about submodules later). We could write our <code>greetings</code> module like this:</p><p><em>In the following examples, <code>/</code> is used at the end to denote that we&#39;re importing a directory but it is not required.</em></p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># greetings/mod.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}
</code></pre></div><p>then</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>&gt; use greetings/ hello

&gt; hello
</code></pre></div><p>The name of the module follows the same rule as module created from a file: Stem of the directory name, i.e., the directory name, is used as the module name. Again, you could do this as a two-step action using <code>module</code> and <code>use</code> separately, as explained in the previous section.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can define <code>main</code> command inside <code>mod.nu</code> to create a command named after the module directory.</p></div><h2 id="import-pattern" tabindex="-1"><a class="header-anchor" href="#import-pattern" aria-hidden="true">#</a> Import Pattern</h2>`,31),h=e("code",null,"use",-1),m=e("strong",null,"import pattern",-1),p=e("code",null,"use head members...",-1),g=e("code",null,"head",-1),f=a(`<p>Using our <code>greetings</code> example:</p><p><code>use greetings</code></p><p>Imports all symbols with prefixed with the <code>greetings</code> namespace (can call <code>greetings hello</code> and <code>greetings hi</code>).</p><p><code>use greetings hello</code></p><p>The <code>hello</code> command will be imported directly without any prefix.</p><p><code>use greetings [ hello, hi ]</code></p><p>Imports multiple definitions&lt;&gt; directly without any prefix.</p><p><code>use greetings *</code></p><p>You can also use the module name and the <code>*</code> glob to import all names directly without any prefix.</p><h2 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> <code>main</code></h2><p>Exporting a command called <code>main</code> from a module defines a command named as the module. Let&#39;s extend our <code>greetings</code> example:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># greetings.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}

export def main [] {
    &quot;greetings and salutations!&quot;
}
</code></pre></div><p>then</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; use greetings.nu

&gt; greetings
greetings and salutations!

&gt; greetings hello world
hello world!
</code></pre></div><p>The <code>main</code> is exported only when</p><ul><li>no import pattern members are used (<code>use greetings.nu</code>)</li><li>glob member is used (<code>use greetings.nu *</code>)</li></ul><p>Importing definitions selectively (<code>use greetings.nu hello</code> or <code>use greetings.nu [hello hi]</code>) does not define the <code>greetings</code> command from <code>main</code>. You can, however, selectively import <code>main</code> using <code>use greetings main</code> (or <code>[main]</code>) which defines <em>only</em> the <code>greetings</code> command without pulling in <code>hello</code> or <code>hi</code>.</p><p>Apart from commands (<code>def</code>, <code>def-env</code>), known externals (<code>extern</code>) can also be named <code>main</code>.</p><h2 id="submodules-and-subcommands" tabindex="-1"><a class="header-anchor" href="#submodules-and-subcommands" aria-hidden="true">#</a> Submodules and subcommands</h2><p>Submodules are modules inside modules. They are automatically created when you call <code>use</code> on a directory: Any .nu files inside the directory are implicitly added as submodules of the main module. There are two more ways to add a submodule to a module:</p><ol><li>Using <code>export module</code></li><li>Using <code>export use</code></li></ol><p>The difference is that <code>export module some-module</code> <em>only</em> adds the module as a submodule, while <code>export use some-module</code> <em>also</em> re-exports the submodule&#39;s definitions. Since definitions of submodules are available when importing from a module, <code>export use some-module</code> is typically redundant, unless you want to re-export its definitions without the namespace prefix.</p><p><em>Note: <code>module</code> without <code>export</code> defines only a local module, it does not export a submodule.</em></p><p>Let&#39;s illustrate this with an example. Assume three files:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># greetings.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}

export def main [] {
    &quot;greetings and salutations!&quot;
}
</code></pre></div><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># animals.nu

export def dog [] {
    &quot;haf&quot;
}

export def cat [] {
    &quot;meow&quot;
}
</code></pre></div><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># voice.nu

export use greetings.nu *

export module animals.nu

</code></pre></div><p>Then:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; use voice.nu

&gt; voice animals dog
haf

&gt; voice animals cat
meow

&gt; voice hello world
hello world

&gt; voice hi there
hi there!

&gt; voice greetings
greetings and salutations!

</code></pre></div><p>As you can see, defining the submodule structure also shapes the command line API. In Nushell, namespaces directly folds into subcommands. This is true for all definitions: aliases, commands, known externals, modules.</p><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2>`,31),x=e("code",null,"export-env",-1),v=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`# greetings.nu

export-env {
    let-env MYNAME = "Arthur, King of the Britons"
}

export def hello [] {
    $"hello ($env.MYNAME)"
}
`)])],-1),y=e("code",null,"use",-1),b=e("code",null,"export-env",-1),w=a(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; use greetings.nu

&gt; $env.MYNAME
Arthur, King of the Britons

&gt; greetings hello
hello Arthur, King of the Britons!
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can put a complex code defining your environment without polluting the namespace of the module, for example:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>    def tmp [] { &quot;tmp&quot; }
    def other [] { &quot;other&quot; }

    let len = (tmp | str length)

    load-env {
        OTHER_ENV: (other)
        TMP_LEN: $len
    }
}
</code></pre></div><p>Only <code>$env.TMP_LEN</code> and <code>$env.OTHER_ENV</code> are preserved after evaluating the <code>export-env</code> module.</p></div><h2 id="caveats" tabindex="-1"><a class="header-anchor" href="#caveats" aria-hidden="true">#</a> Caveats</h2><p>Like any programming language, Nushell is also a product of a tradeoff and there are limitations to our module system.</p><h3 id="export-env-runs-only-when-the-use-call-is-evaluated" tabindex="-1"><a class="header-anchor" href="#export-env-runs-only-when-the-use-call-is-evaluated" aria-hidden="true">#</a> <code>export-env</code> runs only when the <code>use</code> call is <em>evaluated</em></h3>`,5),q=e("code",null,"export use",-1),_=a(`<div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># purpose.nu
export-env {
    let-env MYPURPOSE = &quot;to build an empire.&quot;
}

export def greeting_purpose [] {
    $&quot;Hello ($env.MYNAME). My purpose is ($env.MYPURPOSE)&quot;
}
</code></pre></div><p>and then use it</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>&gt; use purpose.nu

&gt; purpose greeeting_purpose
</code></pre></div><p>However, this won&#39;t work, because the code inside the module is not <em>evaluated</em>, only <em>parsed</em> (only the <code>export-env</code> block is evaluated when you call <code>use purpose.nu</code>). To export the environment of <code>greetings.nu</code>, you need to add it to the <code>export-env</code> module:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># purpose.nu
export-env {
    use greetings.nu
    let-env MYPURPOSE = &quot;to build an empire.&quot;
}

export def greeting_purpose [] {
    $&quot;Hello ($env.MYNAME). My purpose is ($env.MYPURPOSE)&quot;
}
</code></pre></div><p>then</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; use purpose.nu

&gt; purpose greeting_purpose
Hello Arthur, King of the Britons. My purpose is to build an empire.
</code></pre></div><p>Calling <code>use purpose.nu</code> ran the <code>export-env</code> block inside <code>purpose.nu</code> which in run ran <code>use greetings.nu</code> which in turn ran the <code>export-env</code> block inside <code>greetings.nu</code>, preserving the environment changes.</p><h3 id="module-file-command-cannot-be-named-after-parent-module" tabindex="-1"><a class="header-anchor" href="#module-file-command-cannot-be-named-after-parent-module" aria-hidden="true">#</a> Module file / command cannot be named after parent module</h3><ul><li>Module directory cannot contain .nu file named after the directory (<code>spam/spam.nu</code>) <ul><li>Consider a <code>spam</code> directory containing both <code>spam.nu</code> and <code>mod.nu</code>, calling <code>use spam *</code> would create an ambiguous situation where the <code>spam</code> module would be defined twice.</li></ul></li><li>Module cannot contain file named after the module <ul><li>Same case as above: Module <code>spam</code> containing both <code>main</code> and <code>spam</code> commands would create an ambiguous situation when exported as <code>use spam *</code>.</li></ul></li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>This section describes some useful patterns using modules.</p><h3 id="local-definitions" tabindex="-1"><a class="header-anchor" href="#local-definitions" aria-hidden="true">#</a> Local Definitions</h3>`,13),k=e("code",null,"export",-1),$=a(`<div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># greetings.nu

use tools/utils.nu generate-prefix  # visible only locally (we assume the file exists)

export def hello [name: string] {
    greetings-helper &quot;hello&quot; &quot;world&quot;
}

export def hi [where: string] {
    greetings-helper &quot;hi&quot; &quot;there&quot;
}

def greetings-helper [greeting: string, subject: string] {
    $&quot;(generate-prefix)($greeting) ($subject)!&quot;
}
</code></pre></div><p>then</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>&gt; use greetings.nu *


&gt; hello &quot;world&quot;
hello world!

&gt; hi &quot;there&quot;
hi there!

&gt; greetings-helper &quot;foo&quot; &quot;bar&quot;  # fails because &#39;greetings-helper&#39; is not exported

&gt; generate-prefix  # fails because the command is imported only locally inside the module
</code></pre></div><h3 id="directory-structure-as-subcommad-tree" tabindex="-1"><a class="header-anchor" href="#directory-structure-as-subcommad-tree" aria-hidden="true">#</a> Directory structure as subcommad tree</h3><p>Since directories can be imported as submodules and submodules can naturally form subcommands it is easy to build even complex command line applications with a simple file structure.</p><p><em>WIP</em></p><h3 id="dumping-files-into-directory" tabindex="-1"><a class="header-anchor" href="#dumping-files-into-directory" aria-hidden="true">#</a> Dumping files into directory</h3><p>A common pattern in traditional shells is dumping and auto-sourcing files from a directory (for example, loading custom completions). In Nushell, similar effect can be achieved via module directories.</p><ol><li>Create a directory (e.g., <code>mkdir ($nu.default-config-dir | path join completions)</code>) and create empty <code>mod.nu</code> inside</li><li>Add the directory to your NU_LIB_DIRS inside <code>env.nu</code></li><li>Put <code>use completions *</code> into your <code>config.nu</code></li></ol><p>Now you&#39;ve set up a directory where you can put your completion files. For example:</p><div class="language-text" data-ext="text"><pre class="language-text"><code># git.nu

export extern main [
    --version(-v)
    -C: string
    # ... etc.
]

export extern add [
    --verbose(-v)
    --dry-run(-n)
    # ... etc.
]

export extern checkout [
    branch: string@complete-git-branch
]

def complete-git-branch [] {
    # ... code to list git branches
}
</code></pre></div><p>If you put this file into the <code>completions</code> directory and reload config/Nushell, you should see the <code>git</code>, <code>git add</code> and <code>git checkout</code> commands highlighted with flag completions working.</p><h3 id="setting-environment-aliases-conda-style" tabindex="-1"><a class="header-anchor" href="#setting-environment-aliases-conda-style" aria-hidden="true">#</a> Setting environment + aliases (conda style)</h3><p><code>def-env</code> commands, <code>export-env</code> block and aliases can be used to dynamically manipulate &quot;virtual environments&quot; (a concept well known from Python).</p><p>We use it in our official virtualenv integration https://github.com/pypa/virtualenv/blob/main/src/virtualenv/activation/nushell/activate.nu</p><p>Another example could be our unofficial Conda module: https://github.com/nushell/nu_scripts/blob/f86a060c10f132407694e9ba0f536bfe3ee51efc/modules/virtual_environments/conda.nu</p><p><em>WIP</em></p><h2 id="hiding" tabindex="-1"><a class="header-anchor" href="#hiding" aria-hidden="true">#</a> Hiding</h2>`,18),T=e("code",null,"hide",-1),M=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> def foo [] { "foo" }

> foo
foo

> hide foo

> foo  # error! command not found!
`)])],-1),N=e("code",null,"hide",-1),A=e("code",null,"use",-1),I=a("<p><code>hide foo</code> or <code>hide greetings</code></p><ul><li>If the name is a custom command or an environment variable, hides it directly. Otherwise:</li><li>If the name is a module name, hides all of its exports prefixed with the module name</li></ul><p><code>hide greetings hello</code></p><ul><li>Hides only the prefixed command / environment variable</li></ul><p><code>hide greetings [hello, hi]</code></p><ul><li>Hides only the prefixed commands / environment variables</li></ul><p><code>hide greetings *</code></p><ul><li>Hides all of the module&#39;s exports, without the prefix</li></ul><p><em>Note: <code>hide</code> is not a supported keyword at the root of the module (unlike <code>def</code> etc.)</em></p>",9);function E(P,Y){const n=l("RouterLink");return s(),r("div",null,[c,e("p",null,[o("Anything after the "),t(n,{to:"/commands/docs/use.html"},{default:d(()=>[h]),_:1}),o(" keyword forms an "),m,o(" which controls how the definitions are imported. The import pattern has the following structure "),p,o(" where "),g,o(" defines the module (name of an existing module, file, or directory). The members are optional and specify what exactly should be imported from th emodule.")]),f,e("p",null,[o("Modules can also define an environment using "),t(n,{to:"/commands/docs/export-env.html"},{default:d(()=>[x]),_:1}),o(":")]),v,e("p",null,[o("When "),t(n,{to:"/commands/docs/use.html"},{default:d(()=>[y]),_:1}),o(" is evaluated, it will run the code inside the "),t(n,{to:"/commands/docs/export-env.html"},{default:d(()=>[b]),_:1}),o(" block and merge its environment into the current scope:")]),w,e("p",null,[o("If you also want to keep your variables in separate modules and export their environment, you could try to "),t(n,{to:"/commands/docs/export_use.html"},{default:d(()=>[q]),_:1}),o(" it:")]),_,e("p",null,[o("Anything defined in a module without the "),t(n,{to:"/commands/docs/export.html"},{default:d(()=>[k]),_:1}),o(" keyword will work only in the module's scope.")]),$,e("p",null,[o('Any custom command or alias, imported from a module or not, can be "hidden", restoring the previous definition. We do this with the '),t(n,{to:"/commands/docs/hide.html"},{default:d(()=>[T]),_:1}),o(" command:")]),M,e("p",null,[o("The "),t(n,{to:"/commands/docs/hide.html"},{default:d(()=>[N]),_:1}),o(" command also accepts import patterns, just like "),t(n,{to:"/commands/docs/use.html"},{default:d(()=>[A]),_:1}),o(". The import pattern is interpreted slightly differently, though. It can be one of the following:")]),I])}const H=i(u,[["render",E],["__file","modules.html.vue"]]);export{H as default};
