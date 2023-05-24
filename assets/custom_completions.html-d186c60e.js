import{_ as i,M as c,p as m,q as d,Q as e,t,N as o,U as a,a1 as s}from"./framework-344bb0e4.js";const u={},r=e("h1",{id:"custom-completions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#custom-completions","aria-hidden":"true"},"#"),t(" Custom completions")],-1),p=e("code",null,"extern",-1),h=e("p",null,[t("There are two parts to a custom command: the command that handles a completion and attaching this command to the type of another command using "),e("code",null,"@"),t(".")],-1),g=e("h2",{id:"example-custom-completion",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-custom-completion","aria-hidden":"true"},"#"),t(" Example custom completion")],-1),f=e("p",null,"Let's look at an example:",-1),x=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> def animals [] { ["cat", "dog", "eel" ] }
> def my-command [animal: string@animals] { print $animal }
>| my-command
cat                 dog                 eel
`)])],-1),_=e("code",null,"extern",-1),q=s(`<p>In the second line, we use <code>string@animals</code>. This tells Nushell two things: the shape of the argument for type-checking and the custom completion to use if the user wants to complete values at that position.</p><p>On the third line, we type the name of our custom command <code>my-command</code> followed by hitting space and then the <code>&lt;tab&gt;</code> key. This brings up our completions. Custom completions work the same as other completions in the system, allowing you to type <code>e</code> followed by the <code>&lt;tab&gt;</code> key and get &quot;eel&quot; automatically completed.</p><h2 id="modules-and-custom-completions" tabindex="-1"><a class="header-anchor" href="#modules-and-custom-completions" aria-hidden="true">#</a> Modules and custom completions</h2><p>You may prefer to keep your custom completions away from the public API for your code. For this, you can combine modules and custom completions.</p><p>Let&#39;s take the example above and put it into a module:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>module commands {
    def animals [] {
        [&quot;cat&quot;, &quot;dog&quot;, &quot;eel&quot; ]
    }

    export def my-command [animal: string@animals] {
        print $animal
    }
}
</code></pre></div><p>In our module, we&#39;ve chosen to export only the custom command <code>my-command</code> but not the custom completion <code>animals</code>. This allows users of this module to call the command, and even use the custom completion logic, without having access the the custom completion. This keeps the API cleaner, while still offering all the same benefits.</p><p>This is possible because custom completion tags using <code>@</code> are locked-in as the command is first parsed.</p><h2 id="context-aware-custom-completions" tabindex="-1"><a class="header-anchor" href="#context-aware-custom-completions" aria-hidden="true">#</a> Context aware custom completions</h2><p>It is possible to pass the context to the custom completion command. This is useful in situations where it is necessary to know previous arguments or flags to generate accurate completions.</p><p>Let&#39;s apply this concept to the previous example:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>module commands {
    def animals [] {
        [&quot;cat&quot;, &quot;dog&quot;, &quot;eel&quot; ]
    }

    def animal-names [context: string] {
        {
            cat: [&quot;Missy&quot;, &quot;Phoebe&quot;]
            dog: [&quot;Lulu&quot;, &quot;Enzo&quot;]
            eel: [&quot;Eww&quot;, &quot;Slippy&quot;]
        } | get -i ($context | split words | last)
    }

    export def my-command [
        animal: string@animals
        name: string@animal-names
    ] {
        print $&quot;The ($animal) is named ($name).&quot;
    }
}
</code></pre></div><p>Here, the command <code>animal-names</code> returns the appropriate list of names. This is because <code>$context</code> is a string with where the value is the command that has been typed until now.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt;| my-command
cat                 dog                 eel
&gt;| my-command dog
Lulu                Enzo
&gt;my-command dog enzo
The dog is named Enzo
</code></pre></div><p>On the second line, once we press the <code>&lt;tab&gt;</code> key, the argument <code>&quot;my-command dog&quot;</code> is passed to the <code>animal-names</code> command as context.</p>`,15),w={id:"custom-completion-and-extern",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#custom-completion-and-extern","aria-hidden":"true"},"#",-1),y=e("code",null,"extern",-1),v=e("code",null,"extern",-1),k=e("code",null,"@",-1),$=e("code",null,"extern",-1),T=s(`<p>If you look closely at the examples in the default config, you&#39;ll see this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export extern &quot;git push&quot; [
    remote?: string@&quot;nu-complete git remotes&quot;,  # the name of the remote
    refspec?: string@&quot;nu-complete git branches&quot; # the branch / refspec
    ...
]
</code></pre></div><p>Custom completions will serve the same role in this example as in the previous examples. The examples above call into two different custom completions, based on the position the user is currently in.</p><h2 id="custom-descriptions" tabindex="-1"><a class="header-anchor" href="#custom-descriptions" aria-hidden="true">#</a> Custom descriptions</h2><p>As an alternative to returning a list of strings, a completion function can also return a list of records with a <code>value</code> and <code>description</code> field.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>def my_commits [] {
    [
        { value: &quot;5c2464&quot;, description: &quot;Add .gitignore&quot; },
        { value: &quot;f3a377&quot;, description: &quot;Initial commit&quot; }
    ]
}
</code></pre></div><blockquote><p><strong>Note</strong></p><p>with the following snippet</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>def my-command [commit: string@my_commits] {
    print $commit
}
</code></pre></div><p>be aware that, even though the completion menu will show you something like</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>&gt;_ my-command &lt;TAB&gt;
5c2464  Add .gitignore
f3a377  Initial commit
</code></pre></div><p>only the value, i.e. &quot;5c2464&quot; or &quot;f3a377&quot;, will be used in the command arguments!</p></blockquote><h2 id="external-completions" tabindex="-1"><a class="header-anchor" href="#external-completions" aria-hidden="true">#</a> External completions</h2>`,8),I=e("code",null,"external_completer",-1),N=e("code",null,"config.nu",-1),E={href:"https://github.com/rsteube/carapace-bin",target:"_blank",rel:"noopener noreferrer"},C=s(`<blockquote><p><strong>Note</strong><br> in the following, we define a bunch of different completers.</p><p>one can configure them in <code>$nu.config-path</code> as follows:</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>$env.config.completions.external = {
    enable: true
    max_results: 100
    completer: $completer
}
</code></pre></div></blockquote><p>This example should enable carapace external completions:</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>let carapace_completer = {|spans|
    carapace $spans.0 nushell $spans | from json
}
</code></pre></div><p>Multiple completers can be defined as such:</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>let multiple_completers = {|spans|
    {
        $spans.0: { default_completer $spans | from json } # default
        ls: { ls_completer $spans | from json }
        git: { git_completer $spans | from json }
    } | each {|it| do $it}
}
</code></pre></div><p>This example shows an external completer that uses the <code>fish</code> shell&#39;s <code>complete</code> command. (You must have the fish shell installed for this example to work.)</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>let fish_completer = {|spans|
    fish --command $&#39;complete &quot;--do-complete=($spans | str join &quot; &quot;)&quot;&#39;
    | str trim
    | split row &quot;\\n&quot;
    | each { |line| $line | split column &quot;\\t&quot; value description }
    | flatten
}
</code></pre></div><blockquote><p>When the block returns unparsable json (e.g. an empty string) it defaults to file completion.</p></blockquote>`,8);function L(A,j){const n=c("RouterLink"),l=c("ExternalLinkIcon");return m(),d("div",null,[r,e("p",null,[t("Custom completions allow you to mix together two features of Nushell: custom commands and completions. With them, you're able to create commands that handle the completions for positional parameters and flag parameters. These custom completions work both custom commands and "),o(n,{to:"/book/externs.html"},{default:a(()=>[t("known external, or "),p,t(", commands")]),_:1}),t(".")]),h,g,f,x,e("p",null,[t("In the first line, we create a custom command that will return a list of three different animals. These are the values we'd like to use in the completion. Once we've created this command, we can now use it to provide completions for other custom commands and "),o(n,{to:"/commands/docs/extern.html"},{default:a(()=>[_]),_:1}),t("s.")]),q,e("h2",w,[b,t(" Custom completion and "),o(n,{to:"/commands/docs/extern.html"},{default:a(()=>[y]),_:1})]),e("p",null,[t("A powerful combination is adding custom completions to "),o(n,{to:"/book/externs.html"},{default:a(()=>[t("known "),v,t(" commands")]),_:1}),t(". These work the same way as adding a custom completion to a custom command: by creating the custom completion and then attaching it with a "),k,t(" to the type of one of the positional or flag arguments of the "),$,t(".")]),T,e("p",null,[t("External completers can also be integrated, instead of relying solely on Nushell ones. For this set the "),I,t(" field in "),N,t(" to a block which will be evaluated if no Nushell completions were found. You can configure the block to run an external completer, such as "),e("a",E,[t("carapace"),o(l)]),t(".")]),C])}const B=i(u,[["render",L],["__file","custom_completions.html.vue"]]);export{B as default};
