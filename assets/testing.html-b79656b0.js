import{_ as i,M as a,p as l,q as c,Q as e,t,N as n,U as o,a1 as r}from"./framework-344bb0e4.js";const u={},h=e("h1",{id:"testing-in-nushell-preview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#testing-in-nushell-preview","aria-hidden":"true"},"#"),t(" Testing in Nushell (preview)")],-1),m=e("h2",{id:"assert-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#assert-commands","aria-hidden":"true"},"#"),t(" Assert commands")],-1),p=e("code",null,"std assert",-1),g=r(`<div class="language-text" data-ext="text"><pre class="language-text"><code>❯ std assert (1 == 2)
Error:
  × Assertion failed.
   ╭─[entry #13:1:1]
 1 │ std assert (1 == 2)
   ·             ───┬──
   ·                ╰── It is not true.
   ╰────
</code></pre></div><p>Optionally, a message can be set to show the intention of the assert command, what went wrong or what was expected:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>❯ std assert ($a == 19) $&quot;The lockout code is wrong, received: ($a)&quot;
Error:
  × The lockout code is wrong, received: 13
   ╭─[entry #25:1:1]
 1 │ std assert ($a == 19) $&quot;The lockout code is wrong, received: ($a)&quot;
   ·             ────┬───
   ·                 ╰── It is not true.
   ╰────
</code></pre></div><p>There are many assert commands, which behave exactly as the base one with the proper operator. The additional value for them is the ability for better error messages.</p><p>For example this is not so helpful without additional message:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ std assert ($b | str contains $a)
Error:
  × Assertion failed.
   ╭─[entry #35:1:1]
 1 │ assert ($b | str contains $a)
   ·              ──────┬─────
   ·                    ╰── It is not true.
   ╰────
</code></pre></div><p>While with using <code>assert str contains</code>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ std assert str contains $b $a
Error:
  × Assertion failed.
   ╭─[entry #34:1:1]
 1 │ assert str contains $b $a
   ·                     ──┬──
   ·                       ╰── &#39;haystack&#39; does not contain &#39;a needle&#39;.
   ╰────
</code></pre></div>`,8),_=e("code",null,"assert",-1),f=e("code",null,"error make",-1),x=e("code",null,"assert",-1),v=r(`<div class="language-text" data-ext="text"><pre class="language-text"><code>def &quot;assert even&quot; [number: int] {
    std assert ($number mod 2 == 0) --error-label {
        start: (metadata $number).span.start,
        end: (metadata $number).span.end,
        text: $&quot;($number) is not an even number&quot;,
    }
}
</code></pre></div><p>Then you&#39;ll have your detailed custom error message:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ let $a = 13
❯ assert even $a
Error:
  × Assertion failed.
   ╭─[entry #37:1:1]
 1 │ assert even $a
   ·             ─┬
   ·              ╰── 13 is not an even number
   ╰────
</code></pre></div><h2 id="test-modules-test-cases" tabindex="-1"><a class="header-anchor" href="#test-modules-test-cases" aria-hidden="true">#</a> Test modules &amp; test cases</h2><p>The naming convention for test modules is <code>test_&lt;your_module&gt;.nu</code>. This module will be sourced many times during testing, so it is strongly discouraged to put any <em>main</em> code there.</p><p>The test case commands must be exported commands with <code>test_&lt;test name&gt;</code> naming convention, without any required parameters.</p><p>For example, <code>test_math.nu</code>:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>use std.nu *

export def test_addition [] {
    assert equal (1 + 2) 3
}

export def test_multiplication [] {
    assert equal (2 * 3) 6
}

export def test_failing [] {
    assert false &quot;This is just for testing&quot;
}
</code></pre></div><h2 id="test-runner" tabindex="-1"><a class="header-anchor" href="#test-runner" aria-hidden="true">#</a> Test runner</h2>`,9),y={href:"https://github.com/nushell/nushell/tree/main/crates/nu-utils/standard_library",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"You can run tests in a given folder, including subfolders. You can run tests in a specified module, and you can run a specified test command, too.",-1),w=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`❯ nu tests.nu --help
Test executor

It executes exported "test_*" commands in "test_*" modules

Usage:
  > main {flags}

Flags:
  --path <Filepath> - Path to look for tests. Default: directory of this file.
  --module <String> - Module to run tests. Default: all test modules found.
  --command <String> - Test command to run. Default: all test command found in the files.
  --list - Do not run any tests, just list them (dry run)
  -h, --help - Display the help message for this command
`)])],-1),$=e("p",null,[t("The test runner uses the log commands from standard library to display information, so you can set "),e("code",null,"NU_LOG_LEVEL"),t(" if you want more or less details:")],-1),T=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`❯ nu tests.nu --path .
❯ NU_LOG_LEVEL=DEBUG nu /path/to/tests.nu --path .
❯ NU_LOG_LEVEL=WARNING nu /path/to/tests.nu --path .
`)])],-1);function k(E,q){const s=a("RouterLink"),d=a("ExternalLinkIcon");return l(),c("div",null,[h,m,e("p",null,[t("The "),n(s,{to:"/book/standard_library.html"},{default:o(()=>[t("standard library")]),_:1}),t(" has assert commands to verify your code. The foundation for every assertion is the "),p,t(" command. If the condition is not true, it makes an error. For example:")]),g,e("p",null,[t("In general for base "),_,t(" command it is encouraged to always provide the additional message to show what went wrong. If you cannot use any built-in assert command, you can create a custom one with passing the label for "),n(s,{to:"/book/error_make.html"},{default:o(()=>[f]),_:1}),t(" for the "),x,t(" command:")]),v,e("p",null,[t("You can find a test runner in the "),e("a",y,[t("standard library folder in Git repository"),n(d)]),t(".")]),b,w,$,T])}const N=i(u,[["render",k],["__file","testing.html.vue"]]);export{N as default};
