import{_ as s,M as l,p as d,q as i,Q as e,t as n,N as a,U as r,a1 as o}from"./framework-344bb0e4.js";const u={},g=e("h1",{id:"uberlagerungen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uberlagerungen","aria-hidden":"true"},"#"),n(" Überlagerungen")],-1),c=e("p",null,'Überlagerungen operieren als "Schichten" von Definitionen (Eigene Befehle, Aliase, Umgebungsvariablen), welche aktiviert und deaktiviert werden können. Sie gleichen den virtuellen Umgebungen wie man sie von Sprachen wie Python kennt.',-1),h=e("h2",{id:"basis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basis","aria-hidden":"true"},"#"),n(" Basis")],-1),m=e("code",null,"zero",-1),p=e("code",null,"overlay list",-1),f=e("p",null,"Um eine neue Überlagerung zu kreieren, wird zuerst ein Modul benötigt:",-1),b=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> module spam {
    export def foo [] {
        "foo"
    }

    export alias bar = "bar"

    export-env {
        load-env { BAZ: "baz" }
    }
}
`)])],-1),v=e("p",null,[n("Dieses Modul wird im ganzen Kapitel verwendet, also wenn immer "),e("code",null,"overlay use spam"),n(" steht, dann ist mit "),e("code",null,"spam"),n(" dieses Modul gemeint.")],-1),_=e("code",null,"overlay use",-1),x=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> overlay use spam

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
`)])],-1),z=e("code",null,"export-env",-1),w=e("code",null,"use",-1),y=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[n("Im folgenden Abschnitt wird der "),e("code",null,">"),n(" prompt mit dem Namen des zuletzt aktivierten Überlagerung vorangestellt. "),e("code",null,"(spam)> some-command"),n(" bedeutet, die "),e("code",null,"spam"),n(" Überlagerung ist die zuletzt aktive Überlagerung wenn der Befehl eingegeben wurde.")])],-1),k=e("h2",{id:"eine-uberlagerung-entfernen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eine-uberlagerung-entfernen","aria-hidden":"true"},"#"),n(" Eine Überlagerung entfernen")],-1),B=e("code",null,"overlay hide",-1),D=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(spam)> overlay hide spam

(zero)> foo
Error: Can't run executable...

(zero)> overlay list
───┬──────
 0 │ zero
───┴──────
`)])],-1),q=e("p",null,"Überlagerungen haben ebenfalls einen Gültigkeitsbereich. Jede hinzugefügte Überlagerung wird entfernt, wenn der Gütligkeitsbereich endet:",-1),N=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> do { overlay use spam; foo }  # Überlagerung ist aktiv innerhalb des Blocks
foo

(zero)> overlay list
───┬──────
 0 │ zero
───┴──────
`)])],-1),A=e("code",null,"overlay hide",-1),U=o(`<h2 id="uberlagerungen-sind-aufgezeichnet" tabindex="-1"><a class="header-anchor" href="#uberlagerungen-sind-aufgezeichnet" aria-hidden="true">#</a> Überlagerungen sind aufgezeichnet</h2><p>Eine neue Definition (Befehl, Alias, Umgebungsvariable) wird in der zuletzt aktivierten Überlagerung aufgezeichnet:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; overlay use spam

(spam)&gt; def eggs [] { &quot;eggs&quot; }
</code></pre></div><p>Der <code>eggs</code> Befehl gehört zur <code>spam</code> Überlagerung. Wird diese entfernt, ist auch der Befehl nicht mehr aufrufbar:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(spam)&gt; overlay hide spam

(zero)&gt; eggs
Error: Can&#39;t run executable...
</code></pre></div><p>Er ist jedoch nicht verloren!</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; overlay use spam

(spam)&gt; eggs
eggs
</code></pre></div><p>Überlagerungen speichern die Informationen, die ihnen übergeben werden, auch wenn die Überlagerung entfernt wird. So kann mehrfach zwischen verschiedenen Kontexten gewechselt werden.</p>`,8),E={class:"custom-container tip"},M=e("p",{class:"custom-container-title"},"TIP",-1),S=e("p",null,"Es gibt Momente, in denen Definitionen nicht zu einer Überlagerung hinzugefügt werden sollen. Die Lösung dafür ist, eine leere Überlagerung zu erstellen und die Definitionen temporär nur dort zu speichern:",-1),V=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> overlay use spam

(spam)> module scratchpad { }

(spam)> overlay new scratchpad

(scratchpad)> def eggs [] { "eggs" }
`)])],-1),O=e("p",null,[n("Der "),e("code",null,"eggs"),n(" Befehl wird zu "),e("code",null,"scratchpad"),n(" hinzugefügt, während "),e("code",null,"spam"),n(" intakt bleibt.")],-1),C=e("code",null,"overlay new",-1),W=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> overlay use spam

(spam)> overlay new scratchpad

(scratchpad)> def eggs [] { "eggs" }
`)])],-1),G=e("h2",{id:"vorangestellte-uberlagerungen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vorangestellte-uberlagerungen","aria-hidden":"true"},"#"),n(" Vorangestellte Überlagerungen")],-1),I=e("code",null,"overlay use",-1),L=e("code",null,"--prefix",-1),j=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; module spam {
    export def foo [] { &quot;foo&quot; }
}

(zero)&gt; overlay use --prefix spam

(spam)&gt; spam foo
foo
</code></pre></div><p>Dies gilt jedoch nicht für Umgebungsvariablen.</p><h2 id="eine-uberlagerung-umbenennen" tabindex="-1"><a class="header-anchor" href="#eine-uberlagerung-umbenennen" aria-hidden="true">#</a> Eine Überlagerung umbenennen</h2><p>Der Name einer Überlagerung kann mit <code>as</code> geändert werden:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; module spam { export def foo [] { &quot;foo&quot; } }

(zero)&gt; overlay use spam as eggs

(eggs)&gt; foo
foo

(eggs)&gt; overlay hide eggs

(zero)&gt;
</code></pre></div><p>Dies kann sinnvoll sein, wenn ein generischer Skript Name einer virtuellen Umgebung wie <code>activate.nu</code> verwendet wird, um dieser einen Namen zu geben, der sie besser beschreibt.</p><h2 id="definitionen-behalten" tabindex="-1"><a class="header-anchor" href="#definitionen-behalten" aria-hidden="true">#</a> Definitionen behalten</h2><p>Manchmal ist es nicht gewünscht, dass Definitionen, die in einer Überlagerungen gemacht wurden, verloren gehen, wenn diese entfernt wird:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; overlay use spam

(spam)&gt; def eggs [] { &quot;eggs&quot; }

(spam)&gt; overlay hide --keep-custom spam

(zero)&gt; eggs
eggs
</code></pre></div><p>Das <code>--keep-custom</code> Argument macht genau das.</p><p>Es ist auch möglich, eine Liste von Umgebungsvariablen, welche in der Überlagerung definiert wurden, zu behalten, und den Rest zu entfernen. Dafür wird das <code>--keep-env</code> Argument verwendet:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(zero)&gt; module spam {
    export def foo [] { &quot;foo&quot; }
    export-env { let-env FOO = &quot;foo&quot; }
}

(zero)&gt; overlay use spam

(spam)&gt; overlay hide spam --keep-env [ FOO ]

(zero)&gt; foo
Error: Can&#39;t run executable...

(zero)&gt; $env.FOO
foo
</code></pre></div><h2 id="uberlagerungen-ordnen" tabindex="-1"><a class="header-anchor" href="#uberlagerungen-ordnen" aria-hidden="true">#</a> Überlagerungen ordnen</h2>`,13),F=e("code",null,"foo",-1),P=e("code",null,"overlay use",-1),R=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> def foo [] { "foo-in-zero" }

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
`)])],-1),T=e("p",null,[n("Nun hat die "),e("code",null,"zero"),n(" Überlagerung wieder Vorrang.")],-1);function Z(K,$){const t=l("RouterLink");return d(),i("div",null,[g,c,e("p",null,[e("em",null,[n("Note: Zum Verständnis von Überlagerungen emphielt es sich "),a(t,{to:"/de/book/modules.html"},{default:r(()=>[n("Modules")]),_:1}),n(" zuerst zu lesen, da es auf ihnen aufbaut.")])]),h,e("p",null,[n("Nushell kommt zuerst mit einer Standard-Überlagerung die sich "),m,n(" nennt. Welche Überlagerungen aktiv sind, kann mit dem Befehl "),a(t,{to:"/commands/docs/overlay_list.html"},{default:r(()=>[p]),_:1}),n(" ermittelt werden. Am Anfang sollte dort der die Standard-Überlagerung gelistet sein.")]),f,b,v,e("p",null,[n("Um die Überlagerung zu generieren, wird "),a(t,{to:"/commands/docs/overlay_use.html"},{default:r(()=>[_]),_:1}),n(" aufgerufen:")]),x,e("p",null,[n("Dies hat die Definition des Moduls in den aktuellen Gültigkeitsbereich gebracht und den "),a(t,{to:"/commands/docs/export-env.html"},{default:r(()=>[z]),_:1}),n(" Block ausgewertet. Genau so wie dies auch der "),a(t,{to:"/commands/docs/use.html"},{default:r(()=>[w]),_:1}),n(" Befehl tut. (see "),a(t,{to:"/de/book/modules.html#environment-variables"},{default:r(()=>[n("Modules")]),_:1}),n(" chapter)")]),y,k,e("p",null,[n("Wenn die Überlagerung nicht mehr benötigt wird, entfernt sie der Befehl "),a(t,{to:"/commands/docs/overlay_remove.html"},{default:r(()=>[B]),_:1}),n(":")]),D,q,N,e("p",null,[n("Wird der Befehl "),a(t,{to:"/commands/docs/overlay_remove.html"},{default:r(()=>[A]),_:1}),n(" ohne Argument aufgerufen, so wird die zuletzt aktivierte Überlagerung entfernt.")]),U,e("div",E,[M,S,V,O,e("p",null,[n("Um dies weniger wortreich zu machen, reicht der Befehl "),a(t,{to:"/commands/docs/overlay_new.html"},{default:r(()=>[C]),_:1}),n(":")]),W]),G,e("p",null,[n("Der "),a(t,{to:"/commands/docs/overlay_use.html"},{default:r(()=>[I]),_:1}),n(" Befehl übernimmt alle Befehle und Aliase des Moduls und fügt sie seinem Namensbereich hinzu. Sie können jedoch auch als Unterbefehl hinter dem Modulnamen stehen. Dafür ist das "),L,n(" Argument da:")]),j,e("p",null,[n("Überlagerungen sind wie ein Stapel organisiert. Wenn mehrere Überlagerungen die gleiche Definition enthalten, z.B. "),F,n(", dann wird die der zuletzt aktivierten verwendet. Um eine Überlagerung im Stapel nach oben zu bringen, wird einfach der Befehl "),a(t,{to:"/commands/docs/overlay_use.html"},{default:r(()=>[P]),_:1}),n(" nochmals aufgerufen:")]),R,T])}const Q=s(u,[["render",Z],["__file","overlays.html.vue"]]);export{Q as default};
