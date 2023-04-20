import{_ as i,M as a,p as c,q as l,Q as e,t,N as s,U as o,a1 as r}from"./framework-344bb0e4.js";const u={},h=e("h1",{id:"testing-your-nushell-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#testing-your-nushell-code","aria-hidden":"true"},"#"),t(" Testing your Nushell code")],-1),m=r(`<h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h2><p>Have a file, called <code>test_math.nu</code>:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>use std &quot;assert&quot;
use std &quot;assert equal&quot;
use std &quot;assert skip&quot;

export def test_addition [] {
    assert equal (1 + 2) 3
}

export def test_skip [] {
    assert skip
}

export def test_failing [] {
    assert false &quot;This is just for testing&quot;
}
</code></pre></div><p>Run the tests:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ use std
❯ std run-tests
INF|2023-04-12T10:42:29.099|Running tests in test_math
Error:
  × This is just for testing
    ╭─[C:\\wip\\test_math.nu:13:1]
 13 │ export def test_failing [] {
 14 │     assert false &quot;This is just for testing&quot;
    ·            ──┬──
    ·              ╰── It is not true.
 15 │ }
    ╰────


WRN|2023-04-12T10:42:31.086|Test case test_skip is skipped
Error:
  × some tests did not pass (see complete errors above):
  │
  │       test_math test_addition
  │     ⨯ test_math test_failing
  │     s test_math test_skip
  │
</code></pre></div><h2 id="assert-commands" tabindex="-1"><a class="header-anchor" href="#assert-commands" aria-hidden="true">#</a> Assert commands</h2><p>The foundation for every assertion is the <code>std assert</code> command. If the condition is not true, it makes an error. For example:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ std assert (1 == 2)
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
</code></pre></div>`,15),p=e("code",null,"assert",-1),g=e("code",null,"error make",-1),_=e("code",null,"assert",-1),f=r(`<div class="language-text" data-ext="text"><pre class="language-text"><code>def &quot;assert even&quot; [number: int] {
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
</code></pre></div><h2 id="test-modules-test-cases" tabindex="-1"><a class="header-anchor" href="#test-modules-test-cases" aria-hidden="true">#</a> Test modules &amp; test cases</h2><p>The naming convention for test modules is <code>test_&lt;your_module&gt;.nu</code>.</p><p>The test case commands must be exported commands with <code>test_&lt;test name&gt;</code> naming convention, without any required parameters.</p><p>You also can define <code>setup</code> and <code>teardown</code> methods, which will be executed before and after every test case, even if they are failed or skipped. A context can be created in the setup command, which will be the input (<code>$in</code> variable) in the test case and the <code>teardown</code> command.</p>`,7),x={href:"https://github.com/nushell/nushell/blob/main/crates/nu-std/tests/",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"setting-verbosity",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-verbosity","aria-hidden":"true"},"#"),t(" Setting verbosity")],-1),v=e("p",null,[t("The unit testing framework uses the "),e("code",null,"log"),t(" commands from the standard library to display information, so you can set "),e("code",null,"NU_LOG_LEVEL"),t(" if you want more or less details:")],-1),y=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`❯ std run-tests
❯ NU_LOG_LEVEL=DEBUG std run-tests
❯ NU_LOG_LEVEL=WARNING std run-tests
`)])],-1);function w(k,q){const n=a("RouterLink"),d=a("ExternalLinkIcon");return c(),l("div",null,[h,e("p",null,[t("The "),s(n,{to:"/book/standard_library.html"},{default:o(()=>[t("standard library")]),_:1}),t(" has a unit testing framework to ensure that your code works as expected.")]),m,e("p",null,[t("In general for base "),p,t(" command it is encouraged to always provide the additional message to show what went wrong. If you cannot use any built-in assert command, you can create a custom one with passing the label for "),s(n,{to:"/book/error_make.html"},{default:o(()=>[g]),_:1}),t(" for the "),_,t(" command:")]),f,e("p",null,[t("The standard library itself is tested with this framework, so you can find many examples in the "),e("a",x,[t("Nushell repository"),s(d)]),t(".")]),b,v,y])}const T=i(u,[["render",w],["__file","testing.html.vue"]]);export{T as default};
