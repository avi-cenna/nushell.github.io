import{_ as o,p as n,q as r,Q as e,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const m={},d={id:"frontmatter-title-for-formats",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),i={class:"command-title"},p=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from eml --preview-body</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--preview-body {int}</code>: How many bytes of the body to preview</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert eml structured data into record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com
Test&#39;</span> <span class="token operator">|</span> from eml
╭─────────┬─────────────────────────────────────╮
│ Subject │ Welcome                             │
│         │ ╭─────────┬────────────────╮        │
│ From    │ │ Name    │                │        │
│         │ │ Address │ test@email.com │        │
│         │ ╰─────────┴────────────────╯        │
│         │ ╭─────────┬───────────────────────╮ │
│ To      │ │ Name    │                       │ │
│         │ │ Address │ someone@somewhere.com │ │
│         │ ╰─────────┴───────────────────────╯ │
│ Body    │ Test                                │
╰─────────┴─────────────────────────────────────╯
</code></pre></div><p>Convert eml structured data into record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com
Test&#39;</span> <span class="token operator">|</span> from eml <span class="token parameter variable">-b</span> <span class="token number">1</span>
╭─────────┬─────────────────────────────────────╮
│ Subject │ Welcome                             │
│         │ ╭─────────┬────────────────╮        │
│ From    │ │ Name    │                │        │
│         │ │ Address │ test@email.com │        │
│         │ ╰─────────┴────────────────╯        │
│         │ ╭─────────┬───────────────────────╮ │
│ To      │ │ Name    │                       │ │
│         │ │ Address │ someone@somewhere.com │ │
│         │ ╰─────────┴───────────────────────╯ │
│ Body    │ T                                   │
╰─────────┴─────────────────────────────────────╯
</code></pre></div>`,9);function h(a,f){return n(),r("div",null,[e("h1",d,[l,s(),e("code",null,t(a.$frontmatter.title),1),s(" for formats")]),e("div",i,t(a.$frontmatter.formats),1),p])}const _=o(m,[["render",h],["__file","from_eml.html.vue"]]);export{_ as default};
