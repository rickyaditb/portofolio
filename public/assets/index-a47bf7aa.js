(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function l(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=l(i);fetch(i.href,o)}})();function d(){}function Tt(e){return e()}function Bt(){return Object.create(null)}function at(e){e.forEach(Tt)}function Pt(e){return typeof e=="function"}function E(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let lt;function nt(e,t){return lt||(lt=document.createElement("a")),lt.href=t,e===lt.href}function Nt(e){return Object.keys(e).length===0}function n(e,t){e.appendChild(t)}function y(e,t,l){e.insertBefore(t,l||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function q(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function tt(e){return document.createTextNode(e)}function p(){return tt(" ")}function s(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Ft(e){return Array.from(e.childNodes)}let gt;function et(e){gt=e}const I=[],Ht=[],it=[],Et=[],Vt=Promise.resolve();let ht=!1;function Rt(){ht||(ht=!0,Vt.then(St))}function mt(e){it.push(e)}const ft=new Set;let G=0;function St(){if(G!==0)return;const e=gt;do{try{for(;G<I.length;){const t=I[G];G++,et(t),Ot(t.$$)}}catch(t){throw I.length=0,G=0,t}for(et(null),I.length=0,G=0;Ht.length;)Ht.pop()();for(let t=0;t<it.length;t+=1){const l=it[t];ft.has(l)||(ft.add(l),l())}it.length=0}while(I.length);for(;Et.length;)Et.pop()();ht=!1,ft.clear(),et(e)}function Ot(e){if(e.fragment!==null){e.update(),at(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(mt)}}const rt=new Set;let qt;function A(e,t){e&&e.i&&(rt.delete(e),e.i(t))}function V(e,t,l,r){if(e&&e.o){if(rt.has(e))return;rt.add(e),qt.c.push(()=>{rt.delete(e),r&&(l&&e.d(1),r())}),e.o(t)}else r&&r()}function R(e){e&&e.c()}function B(e,t,l,r){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,l),r||mt(()=>{const f=e.$$.on_mount.map(Tt).filter(Pt);e.$$.on_destroy?e.$$.on_destroy.push(...f):at(f),e.$$.on_mount=[]}),o.forEach(mt)}function H(e,t){const l=e.$$;l.fragment!==null&&(at(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Gt(e,t){e.$$.dirty[0]===-1&&(I.push(e),Rt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(e,t,l,r,i,o,f,k=[-1]){const g=gt;et(e);const u=e.$$={fragment:null,ctx:[],props:o,update:d,not_equal:i,bound:Bt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:Bt(),dirty:k,skip_bound:!1,root:t.target||g.$$.root};f&&f(u.root);let v=!1;if(u.ctx=l?l(e,t.props||{},(h,m,...z)=>{const w=z.length?z[0]:m;return u.ctx&&i(u.ctx[h],u.ctx[h]=w)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](w),v&&Gt(e,h)),m}):[],u.update(),v=!0,at(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const h=Ft(t.target);u.fragment&&u.fragment.l(h),h.forEach(x)}else u.fragment&&u.fragment.c();t.intro&&A(e.$$.fragment),B(e,t.target,t.anchor,t.customElement),St()}et(g)}class P{$destroy(){H(this,1),this.$destroy=d}$on(t,l){if(!Pt(l))return d;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(l),()=>{const i=r.indexOf(l);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const It="Ricky Aditya Bagaskara",Qt="Full Stack Developer",Ut="Lorem ipsum dolor sit amet",Kt={twitter:"https://twitter.com/rickyaditb",github:"https://github.com/rickyaditb/",linkedin:"https://www.linkedin.com/in/rickyaditb/",email:"mailto:rickyaditb@gmail.com"},Wt="#",Jt="mailto:rickyaditb@gmail.com",Xt={language:["Typescript","Javascript","PHP"],framework:["React","Next","Laravel"],database:["Firebase","Express","SQL"],devops:["Docker","Kubernetes"]},Yt={title:"Bachelor of Computer Science",university:"Pakuan University",period:"2019 - 2023",gpa:3.85},Zt=[{title:"HTML5 Application Development Fundamentals",publisher:"Microsoft",icon:"assets/"},{title:"DevOps Fundamentals",publisher:"Dicoding",icon:"assets/"}],te=[{name:"News Aggregator",thumbnail:"./assets",description:"lorem ipsum",stack:[{name:"React",iconColor:"bg-blue-500",textColor:"text-white"},{name:"MySQL",iconColor:"bg-orange-500",textColor:"text-white"},{name:"GraphQL",iconColor:"bg-purple-500",textColor:"text-white"}]},{name:"E-Commerce",thumbnail:"./assets",description:"lorem ipsum",stack:[{name:"Next",iconColor:"bg-white",textColor:"text-black"},{name:"MongoDB",iconColor:"bg-green-500",textColor:"text-white"},{name:"Redux",iconColor:"bg-purple-700",textColor:"text-white"}]}],b={name:It,title:Qt,description:Ut,links:Kt,resume:Wt,contact:Jt,skills:Xt,education:Yt,certification:Zt,projects:te};function ee(e){let t,l,r;return{c(){t=a("header"),t.innerHTML=`<li class="flex gap-10"><ul>Home</ul> 
        <ul>Experience</ul> 
        <ul>Project</ul> 
        <ul>Skills</ul></li> 
    <div class="flex gap-3"><button class="bg-white p-3 rounded"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-main"><path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"></path></svg></button> 
        <button class="border-2 px-3 py-2 rounded flex gap-2 items-center"><span>English</span> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z" clip-rule="evenodd"></path></svg></button></div>`,l=p(),r=a("header"),r.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg> 
    <p class="text-2xl text-center">Portfolio</p> 
    <div class="w-6 h-6"></div>`,s(t,"class","container mx-auto px-5 xl:px-44 mt-5 hidden md:flex justify-between text-xl font-bold items-center"),s(r,"class","container mx-auto p-5 flex justify-between md:hidden items-center")},m(i,o){y(i,t,o),y(i,l,o),y(i,r,o)},p:d,i:d,o:d,d(i){i&&x(t),i&&x(l),i&&x(r)}}}class se extends P{constructor(t){super(),T(this,t,null,ee,E,{})}}function le(e){let t,l,r,i,o,f,k,g,u,v,h,m,z,w,$,c,C,O,st,xt,M,Q,S,vt,wt,U,D,bt,yt,K,$t,Mt,W,L,ct,ot,_t,_,J,N,kt,zt,X,F,Ct,Lt,Y,jt,At,Z,j,dt,ut;return{c(){t=a("section"),l=a("div"),l.innerHTML='<div class="w-48 h-48 rounded-full"><img src="./assets/img/profile.png" class="rounded-full" alt="Profile Foto"/></div>',r=p(),i=a("div"),o=a("h1"),o.textContent=`${b.name}`,f=p(),k=a("h2"),k.textContent=`${b.title}`,g=p(),u=a("p"),u.innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quas repellendus culpa sit corrupti <span class="hidden md:inline">reprehenderit exercitationem, quae inventore vero distinctio assumenda expedita blanditiis sapiente veniam optio laudantium unde tenetur quos?</span>',v=p(),h=a("div"),m=a("a"),z=tt("My Resume"),w=p(),$=a("a"),c=tt("Contact Me"),C=p(),O=a("div"),st=a("div"),st.innerHTML='<img src="./assets/img/profile.png" class="rounded-full" alt="Profile Foto"/>',xt=p(),M=a("div"),Q=a("a"),S=a("img"),wt=p(),U=a("a"),D=a("img"),yt=p(),K=a("a"),$t=tt("in"),Mt=p(),W=a("a"),L=q("svg"),ct=q("path"),ot=q("path"),_t=p(),_=a("div"),J=a("a"),N=a("img"),zt=p(),X=a("a"),F=a("img"),Lt=p(),Y=a("a"),jt=tt("in"),At=p(),Z=a("a"),j=q("svg"),dt=q("path"),ut=q("path"),s(l,"class","flex md:hidden flex-col items-center justify-between mb-5"),s(o,"class","font-bold text-4xl"),s(k,"class","text-2xl mt-5 md:mt-1"),s(u,"class","mt-4 mb-6 text-xl"),s(m,"href",b.resume),s(m,"class","bg-secondary font-bold text-xl md:text-2xl px-3 py-2 rounded"),s($,"href",b.contact),s($,"class","border-4 text-secondary border-secondary font-bold text-xl md:text-2xl px-3 py-2 rounded"),s(h,"class","flex gap-4 justify-center md:justify-start"),s(i,"class","col-span-2 text-center md:text-justify"),s(st,"class","w-48 h-48 rounded-full"),s(S,"height","32"),s(S,"width","32"),nt(S.src,vt="https://cdn.simpleicons.org/twitter/white")||s(S,"src",vt),s(S,"alt","Twitter Icon"),s(Q,"href",b.links.twitter),s(Q,"class","bg-blue-500 w-10 h-10 rounded flex items-center justify-center p-2"),s(D,"height","32"),s(D,"width","32"),nt(D.src,bt="https://cdn.simpleicons.org/github/white")||s(D,"src",bt),s(D,"alt","Github Icon"),s(U,"href",b.links.github),s(U,"class","bg-gray-500 w-10 h-10 rounded flex items-center justify-center p-2"),s(K,"href",b.links.linkedin),s(K,"class","bg-blue-700 w-10 h-10 rounded flex items-center justify-center p-2 font-bold text-2xl"),s(ct,"d","M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"),s(ot,"d","M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"),s(L,"xmlns","http://www.w3.org/2000/svg"),s(L,"viewBox","0 0 24 24"),s(L,"fill","currentColor"),s(L,"class","w-8 h-8"),s(W,"href",b.links.email),s(W,"class","bg-red-600 w-10 h-10 rounded flex items-center justify-center p-2"),s(M,"class","flex gap-2"),s(O,"class","hidden md:flex flex-col justify-center gap-5"),s(N,"height","32"),s(N,"width","32"),nt(N.src,kt="https://cdn.simpleicons.org/twitter/white")||s(N,"src",kt),s(N,"alt","Twitter Icon"),s(J,"href",b.links.twitter),s(J,"class","bg-blue-500 w-10 h-10 rounded flex items-center justify-center p-2"),s(F,"height","32"),s(F,"width","32"),nt(F.src,Ct="https://cdn.simpleicons.org/github/white")||s(F,"src",Ct),s(F,"alt","Github Icon"),s(X,"href",b.links.github),s(X,"class","bg-gray-500 w-10 h-10 rounded flex items-center justify-center p-2"),s(Y,"href",b.links.linkedin),s(Y,"class","bg-blue-700 w-10 h-10 rounded flex items-center justify-center p-2 font-bold text-2xl"),s(dt,"d","M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"),s(ut,"d","M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"),s(j,"xmlns","http://www.w3.org/2000/svg"),s(j,"viewBox","0 0 24 24"),s(j,"fill","currentColor"),s(j,"class","w-8 h-8"),s(Z,"href",b.links.email),s(Z,"class","bg-red-600 w-10 h-10 rounded flex items-center justify-center p-2"),s(_,"class","flex md:hidden justify-center gap-2 mt-5"),s(t,"class","md:grid grid-cols-3 justify-items-end")},m(pt,Dt){y(pt,t,Dt),n(t,l),n(t,r),n(t,i),n(i,o),n(i,f),n(i,k),n(i,g),n(i,u),n(i,v),n(i,h),n(h,m),n(m,z),n(h,w),n(h,$),n($,c),n(t,C),n(t,O),n(O,st),n(O,xt),n(O,M),n(M,Q),n(Q,S),n(M,wt),n(M,U),n(U,D),n(M,yt),n(M,K),n(K,$t),n(M,Mt),n(M,W),n(W,L),n(L,ct),n(L,ot),n(t,_t),n(t,_),n(_,J),n(J,N),n(_,zt),n(_,X),n(X,F),n(_,Lt),n(_,Y),n(Y,jt),n(_,At),n(_,Z),n(Z,j),n(j,dt),n(j,ut)},p:d,i:d,o:d,d(pt){pt&&x(t)}}}class ne extends P{constructor(t){super(),T(this,t,null,le,E,{})}}function ie(e){let t;return{c(){t=a("section"),t.innerHTML=`<h1 class="font-bold text-4xl">Skills &amp; Tools</h1> 
    <div class="p-3 mt-1 flex flex-col gap-2 text-xl md:text-2xl"><article class="flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 mt-1"><path fill-rule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clip-rule="evenodd"></path></svg> 
            <p>Typescript, Javascript, PHP</p></article> 
        <article class="flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path></svg>                       
            <p>React, Next, Laravel</p></article> 
        <article class="flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"></path></svg>                                          
            <p>Firebase, Express, GraphQL</p></article> 
        <article class="flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd"></path></svg>                                                            
            <p>Docker, Kubernetes</p></article></div>`,s(t,"class","mt-16")},m(l,r){y(l,t,r)},p:d,i:d,o:d,d(l){l&&x(t)}}}class re extends P{constructor(t){super(),T(this,t,null,ie,E,{})}}function ae(e){let t;return{c(){t=a("section"),t.innerHTML=`<h1 class="font-bold text-4xl">Education</h1> 
    <div class="p-3 lg:flex gap-5 items-center mt-3"><div class="flex lg:hidden justify-center"><img src="assets/img/cert/Unpak.png" class="w-48 h-48"/></div> 
        <img src="assets/img/cert/Unpak.png" class="w-36 h-36 hidden lg:block"/> 
        <div class="text-center lg:text-left"><p class="text-2xl font-bold">Bachelor of Computer Science</p> 
            <div class="flex flex-wrap justify-center lg:justify-start gap-x-3 mt-1"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"></path><path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"></path><path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path></svg>        
                    <p class="text-xl">Pakuan University</p></div> 
                <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path><path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd"></path></svg>                                   
                    <p class="text-xl">2019 - 2023</p></div> 
                <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path></svg>                                                    
                    <p class="text-xl">GPA 3.85</p></div></div> 
            <p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nemo blanditiis vel nostrum. Tenetur vel recusandae ipsam sed, dolorum pariatur!</p></div></div>`,s(t,"class","mt-16")},m(l,r){y(l,t,r)},p:d,i:d,o:d,d(l){l&&x(t)}}}class ce extends P{constructor(t){super(),T(this,t,null,ae,E,{})}}function oe(e){let t;return{c(){t=a("section"),t.innerHTML=`<h1 class="font-bold text-4xl">Certification</h1> 
    <div class="px-5 mt-3 flex flex-col gap-2"><article class="flex gap-3 items-center hover:scale-102 transition cursor-pointer"><img src="assets/img/cert/Microsoft.png" class="w-12 h-12" alt=""/> 
            <div class=""><p class="font-bold md:text-xl">HTML5 Application Development Fundamentals</p> 
                <p class="-mt-1 text-lg">Microsoft</p></div></article> 
        <article class="flex gap-3 items-center hover:scale-102 transition cursor-pointer"><img src="assets/img/cert/Dicoding.png" class="w-12 h-12" alt=""/> 
            <div class=""><p class="font-bold md:text-xl">Cloud Practitioner Essentials</p> 
                <p class="-mt-1 text-lg">Dicoding</p></div></article> 
        <article class="flex gap-3 items-center hover:scale-102 transition cursor-pointer"><img src="assets/img/cert/Dicoding.png" class="w-12 h-12" alt=""/> 
            <div class=""><p class="font-bold md:text-xl">Devops Fundamentals</p> 
                <p class="-mt-1 text-lg">Dicoding</p></div></article> 
        <div class="flex justify-center items-center gap-1 cursor-pointer mt-3"><span>Show More</span> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd"></path></svg></div></div>`,s(t,"class","mt-16")},m(l,r){y(l,t,r)},p:d,i:d,o:d,d(l){l&&x(t)}}}class de extends P{constructor(t){super(),T(this,t,null,oe,E,{})}}function ue(e){let t;return{c(){t=a("section"),t.innerHTML=`<h1 class="font-bold text-4xl">Featured Project</h1> 
    <article class="grid lg:grid-cols-2 mt-5 gap-10 items-center"><div class="bg-white rounded h-64 hidden lg:block"></div> 
        <div><p class="text-2xl lg:text-3xl font-bold">E-Commerce Website</p> 
            <div class="my-4 bg-white rounded h-64 block lg:hidden"></div> 
            <p class="mt-2 text-justify">Fully featured e-commerce website, capable</p> 
            <div class="flex gap-3"><button class="bg-white text-black font-bold rounded px-3 py-2 mt-3 flex gap-2 items-center"><img height="20" width="20" src="https://cdn.simpleicons.org/next.js/black"/> 
                    <span>Next</span></button> 
                <button class="bg-green-500 text-white font-bold rounded px-3 py-2 mt-3 flex gap-1 items-center"><img height="20" width="20" src="https://cdn.simpleicons.org/mongodb/white"/> 
                    <span>MongoDB</span></button> 
                <button class="bg-purple-700 text-white font-bold rounded px-3 py-2 mt-3 flex gap-2 items-center"><img height="20" width="20" src="https://cdn.simpleicons.org/redux/white"/> 
                    <span>Redux</span></button></div></div></article> 
    <article class="grid lg:grid-cols-2 mt-5 gap-10 items-center"><div><p class="text-2xl lg:text-3xl font-bold">News Aggregator</p> 
            <div class="my-4 bg-white rounded h-64 block lg:hidden"></div> 
            <p class="mt-2 text-justify">News Website that provide its user with custom-tailored news articles and
                content, based on their specific interests and preferences. With this, users can choose to follow
                topics, such as politics, sports, entertainment, or technology, and receive updates and articles that
                are relevant to their selected interests.</p> 
            <div class="flex flex-wrap gap-x-3"><button class="bg-blue-500 text-white font-bold rounded px-3 py-2 mt-3 flex gap-2 items-center"><img height="20" width="20" src="https://cdn.simpleicons.org/react/white"/> 
                    <span>React</span></button> 
                <button class="bg-orange-500 text-white font-bold rounded px-3 py-2 mt-3 flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z"></path><path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z"></path><path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z"></path><path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z"></path></svg> 
                    <span>MySQL</span></button> 
                <button class="bg-purple-500 text-white font-bold rounded px-3 py-2 mt-3 flex gap-2 items-center"><img height="20" width="20" src="https://cdn.simpleicons.org/graphql/white"/> 
                    <span>GraphQL</span></button></div></div> 
        <div class="bg-white rounded h-64 hidden lg:block"></div></article> 
    <div class="flex justify-center items-center gap-1 cursor-pointer mt-6"><span>Show More</span> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd"></path></svg></div>`,s(t,"class","mt-16")},m(l,r){y(l,t,r)},p:d,i:d,o:d,d(l){l&&x(t)}}}class pe extends P{constructor(t){super(),T(this,t,null,ue,E,{})}}function fe(e){let t;return{c(){t=a("footer"),t.innerHTML=`<p class="text-center">© 2023 - Ricky Aditya Bagaskara</p> 
    <p>Made with Svelte</p>`,s(t,"class","mb-96 text-center mt-48")},m(l,r){y(l,t,r)},p:d,i:d,o:d,d(l){l&&x(t)}}}class he extends P{constructor(t){super(),T(this,t,null,fe,E,{})}}function me(e){let t,l,r,i,o,f,k,g,u,v,h,m,z,w,$;return t=new se({}),i=new ne({}),f=new re({}),g=new ce({}),v=new de({}),m=new pe({}),w=new he({}),{c(){R(t.$$.fragment),l=p(),r=a("main"),R(i.$$.fragment),o=p(),R(f.$$.fragment),k=p(),R(g.$$.fragment),u=p(),R(v.$$.fragment),h=p(),R(m.$$.fragment),z=p(),R(w.$$.fragment),s(r,"class","container mx-auto px-5 xl:px-44 mt-10")},m(c,C){B(t,c,C),y(c,l,C),y(c,r,C),B(i,r,null),n(r,o),B(f,r,null),n(r,k),B(g,r,null),n(r,u),B(v,r,null),n(r,h),B(m,r,null),y(c,z,C),B(w,c,C),$=!0},p:d,i(c){$||(A(t.$$.fragment,c),A(i.$$.fragment,c),A(f.$$.fragment,c),A(g.$$.fragment,c),A(v.$$.fragment,c),A(m.$$.fragment,c),A(w.$$.fragment,c),$=!0)},o(c){V(t.$$.fragment,c),V(i.$$.fragment,c),V(f.$$.fragment,c),V(g.$$.fragment,c),V(v.$$.fragment,c),V(m.$$.fragment,c),V(w.$$.fragment,c),$=!1},d(c){H(t,c),c&&x(l),c&&x(r),H(i),H(f),H(g),H(v),H(m),c&&x(z),H(w,c)}}}class ge extends P{constructor(t){super(),T(this,t,null,me,E,{})}}new ge({target:document.getElementById("app")});
