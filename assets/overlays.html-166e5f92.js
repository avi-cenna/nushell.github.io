import{_ as l,M as r,p as d,q as c,Q as e,t as o,N as t,U as n,a1 as s}from"./framework-344bb0e4.js";const i={},u=e("h1",{id:"overlays",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overlays","aria-hidden":"true"},"#"),o(" Overlays")],-1),h=e("p",null,'Overlays act as "layers" of definitions (custom commands, aliases, environment variables) that can be activated and deactivated on demand. They resemble virtual environments found in some languages, such as Python.',-1),m=e("h2",{id:"basics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basics","aria-hidden":"true"},"#"),o(" Basics")],-1),v=e("code",null,"zero",-1),p=e("code",null,"overlay list",-1),g=e("p",null,"To create a new overlay, you first need a module:",-1),y=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> module spam {
    export def foo [] {
        "foo"
    }

    export alias bar = "bar"

    export-env {
        load-env { BAZ: "baz" }
    }
}
`)])],-1),f=e("p",null,[o("We'll use this module throughout the chapter, so whenever you see "),e("code",null,"overlay use spam"),o(", assume "),e("code",null,"spam"),o(" is referring to this module.")],-1),_={class:"custom-container tip"},x=e("p",{class:"custom-container-title"},"The module can be created by any of the three methods described in [Modules](modules.md):",-1),b=e("ul",null,[e("li",null,'"inline" modules (used in this example)'),e("li",null,"file"),e("li",null,"directory :::")],-1),w=e("code",null,"overlay use",-1),z=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> overlay use spam

> foo
foo

> bar
bar

> $env.BAZ
baz

> overlay list
───┬──────
 0 │ zero
 1 │ spam
───┴──────
`)])],-1),k=e("code",null,"export-env",-1),T=e("code",null,"use",-1),O=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[o("In the following sections, the "),e("code",null,">"),o(" prompt will be preceded by the name of the last active overlay. "),e("code",null,"(spam)> some-command"),o(" means the "),e("code",null,"spam"),o(" overlay is the last active overlay when the command was typed.")])],-1),q=e("h2",{id:"removing-an-overlay",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#removing-an-overlay","aria-hidden":"true"},"#"),o(" Removing an Overlay")],-1),N=e("code",null,"overlay hide",-1),B=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(spam)> overlay hide spam

(zero)> foo
Error: Can't run executable...

(zero)> overlay list
───┬──────
 0 │ zero
───┴──────
`)])],-1),I=e("p",null,"The overlays are also scoped. Any added overlays are removed at the end of the scope:",-1),A=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> do { overlay use spam; foo }  # overlay is active only inside the block
foo

(zero)> overlay list
───┬──────
 0 │ zero
───┴──────
`)])],-1),C=e("code",null,"overlay hide",-1),P=s(`<h2 id="overlays-are-recordable" tabindex="-1"><a class="header-anchor" href="#overlays-are-recordable" aria-hidden="true">#</a> Overlays Are Recordable</h2><p>Any new definition (command, alias, environment variable) is recorded into the last active overlay:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; overlay use spam

(spam)&gt; def eggs [] { &quot;eggs&quot; }
</code></pre></div><p>Now, the <code>eggs</code> command belongs to the <code>spam</code> overlay. If we remove the overlay, we can&#39;t call it anymore:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(spam)&gt; overlay hide spam

(zero)&gt; eggs
Error: Can&#39;t run executable...
</code></pre></div><p>But we can bring it back!</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; overlay use spam

(spam)&gt; eggs
eggs
</code></pre></div><p>Overlays remember what you add to them and store that information even if you remove them. This can let you repeatedly swap between different contexts.</p>`,8),R={class:"custom-container tip"},E=e("p",{class:"custom-container-title"},"TIP",-1),F=e("p",null,"Sometimes, after adding an overlay, you might not want custom definitions to be added into it. The solution can be to create a new empty overlay that would be used just for recording the custom changes:",-1),M=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> overlay use spam

(spam)> module scratchpad { }

(spam)> overlay new scratchpad

(scratchpad)> def eggs [] { "eggs" }
`)])],-1),V=e("p",null,[o("The "),e("code",null,"eggs"),o(" command is added into "),e("code",null,"scratchpad"),o(" while keeping "),e("code",null,"spam"),o(" intact.")],-1),S=e("code",null,"overlay new",-1),Y=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> overlay use spam

(spam)> overlay new scratchpad

(scratchpad)> def eggs [] { "eggs" }
`)])],-1),L=e("h2",{id:"prefixed-overlays",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prefixed-overlays","aria-hidden":"true"},"#"),o(" Prefixed Overlays")],-1),Z=e("code",null,"overlay use",-1),$=e("code",null,"--prefix",-1),j=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; module spam {
    export def foo [] { &quot;foo&quot; }
}

(zero)&gt; overlay use --prefix spam

(spam)&gt; spam foo
foo
</code></pre></div><p>Note that this does not apply for environment variables.</p><h2 id="rename-an-overlay" tabindex="-1"><a class="header-anchor" href="#rename-an-overlay" aria-hidden="true">#</a> Rename an Overlay</h2><p>You can change the name of the added overlay with the <code>as</code> keyword:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; module spam { export def foo [] { &quot;foo&quot; } }

(zero)&gt; overlay use spam as eggs

(eggs)&gt; foo
foo

(eggs)&gt; overlay hide eggs

(zero)&gt;
</code></pre></div><p>This can be useful if you have a generic script name, such as virtualenv&#39;s <code>activate.nu</code> but you want a more descriptive name for your overlay.</p><h2 id="preserving-definitions" tabindex="-1"><a class="header-anchor" href="#preserving-definitions" aria-hidden="true">#</a> Preserving Definitions</h2><p>Sometimes, you might want to remove an overlay, but keep all the custom definitions you added without having to redefine them in the next active overlay:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; overlay use spam

(spam)&gt; def eggs [] { &quot;eggs&quot; }

(spam)&gt; overlay hide --keep-custom spam

(zero)&gt; eggs
eggs
</code></pre></div><p>The <code>--keep-custom</code> flag does exactly that.</p><p>One can also keep a list of environment variables that were defined inside an overlay, but remove the rest, using the <code>--keep-env</code> flag:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; module spam {
    export def foo [] { &quot;foo&quot; }
    export-env { let-env FOO = &quot;foo&quot; }
}

(zero)&gt; overlay use spam

(spam)&gt; overlay hide spam --keep-env [ FOO ]

(zero)&gt; foo
Error: Can&#39;t run executable...

(zero)&gt; $env.FOO
foo
</code></pre></div><h2 id="ordering-overlays" tabindex="-1"><a class="header-anchor" href="#ordering-overlays" aria-hidden="true">#</a> Ordering Overlays</h2>`,13),D=e("code",null,"foo",-1),H=e("code",null,"overlay use",-1),Q=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> def foo [] { "foo-in-zero" }

(zero)> overlay use spam

(spam)> foo
foo

(spam)> overlay use zero

(zero)> foo
foo-in-zero

(zero)> overlay list
───┬──────
 0 │ spam
 1 │ zero
───┴──────
`)])],-1),U=e("p",null,[o("Now, the "),e("code",null,"zero"),o(" overlay takes precedence.")],-1);function W(G,J){const a=r("RouterLink");return d(),c("div",null,[u,h,e("p",null,[e("em",null,[o("Note: To understand overlays, make sure to check "),t(a,{to:"/book/modules.html"},{default:n(()=>[o("Modules")]),_:1}),o(" first as overlays build on top of modules.")])]),m,e("p",null,[o("First, Nushell comes with one default overlay called "),v,o(". You can inspect which overlays are active with the "),t(a,{to:"/commands/docs/overlay_list.html"},{default:n(()=>[p]),_:1}),o(" command. You should see the default overlay listed there.")]),g,y,f,e("div",_,[x,b,e("p",null,[o("To create the overlay, call "),t(a,{to:"/commands/docs/overlay_use.html"},{default:n(()=>[w]),_:1}),o(":")]),z,e("p",null,[o("It brought the module's definitions into the current scope and evaluated the "),t(a,{to:"/commands/docs/export-env.html"},{default:n(()=>[k]),_:1}),o(" block the same way as "),t(a,{to:"/commands/docs/use.html"},{default:n(()=>[T]),_:1}),o(" command would (see "),t(a,{to:"/book/modules.html#environment-variables"},{default:n(()=>[o("Modules")]),_:1}),o(" chapter).")]),O]),q,e("p",null,[o("If you don't need the overlay definitions anymore, call "),t(a,{to:"/commands/docs/overlay_remove.html"},{default:n(()=>[N]),_:1}),o(":")]),B,I,A,e("p",null,[o("The last way to remove an overlay is to call "),t(a,{to:"/commands/docs/overlay_remove.html"},{default:n(()=>[C]),_:1}),o(" without an argument which will remove the last active overlay.")]),P,e("div",R,[E,F,M,V,e("p",null,[o("To make it less verbose, you can use the "),t(a,{to:"/commands/docs/overlay_new.html"},{default:n(()=>[S]),_:1}),o(" command:")]),Y]),L,e("p",null,[o("The "),t(a,{to:"/commands/docs/overlay_use.html"},{default:n(()=>[Z]),_:1}),o(" command would take all commands and aliases from the module and put them directly into the current namespace. However, you might want to keep them as subcommands behind the module's name. That's what "),$,o(" is for:")]),j,e("p",null,[o("The overlays are arranged as a stack. If multiple overlays contain the same definition, say "),D,o(", the one from the last active one would take precedence. To bring an overlay to the top of the stack, you can call "),t(a,{to:"/commands/docs/overlay_use.html"},{default:n(()=>[H]),_:1}),o(" again:")]),Q,U])}const X=l(i,[["render",W],["__file","overlays.html.vue"]]);export{X as default};
