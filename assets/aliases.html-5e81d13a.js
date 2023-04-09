import{_ as e,p as a,q as t,a1 as s}from"./framework-344bb0e4.js";const l={},o=s(`<h1 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases" aria-hidden="true">#</a> Aliases</h1><p>Aliases in Nushell offer a way of doing a simple replacement of command calls (both external and internal commands). This allows you to create a shorthand name for a longer command, including its default arguments.</p><p>For example, let&#39;s create an alias called <code>ll</code> which will expand to <code>ls -l</code>.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; alias ll = ls -l
</code></pre></div><p>We can now call this alias:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ll
</code></pre></div><p>Once we do, it&#39;s as if we typed <code>ls -l</code>. This also allows us to pass in flags or positional parameters. For example, we can now also write:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ll -a
</code></pre></div><p>And get the equivalent to having typed <code>ls -l -a</code>.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>## List all loaded aliases

Your useable aliases can be seen in \`$nu.scope.aliases\`.

## Persisting

To make your alias persistent it must be added to your _config.nu_ file.

For more details about how to persist aliases so that they&#39;re visible when you start up Nushell, see the [configuration chapter](configuration.md).
</code></pre></div>`,10),n=[o];function i(c,d){return a(),t("div",null,n)}const p=e(l,[["render",i],["__file","aliases.html.vue"]]);export{p as default};
