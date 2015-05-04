/**
*
*   Classy.js
*   @version: 0.9.3
*   @built on 2015-04-26 17:56:03
*
*   Object-Oriented micro-framework for JavaScript
*   https://github.com/foo123/classy.js
*
**/!function(e,n,t){"use strict";var i,r="object"==typeof module&&module.exports,l="function"==typeof define&&define.amd;r?module.exports=(module.$deps=module.$deps||{})[n]=module.$deps[n]||t.call(e,{NODE:module})||1:l&&"function"==typeof require&&"function"==typeof require.specified&&require.specified(n)?define(n,["require","exports","module"],function(n,i,r){return t.call(e,{AMD:r})}):n in e||(e[n]=i=t.call(e,{})||1)&&l&&define(n,[],function(){return i})}(this,"Classy",function(e){return!function(e,n){"use strict";var t="constructor",i="prototype",r="__proto__",l="__static__",u="__private__",a="$super",o="$static",f="$latestatic",c="$class",s=2,b=4,m=8,d=256,p=Object,v=p[i],g=Function,h=g[i],y=String,x=Number,w=RegExp,E=Array,j=v.toString,_=(h.call.bind(h.toString),"hasOwnProperty"),q="propertyIsEnumerable",I=p.keys,$=p.defineProperty,A=function(e){return typeof e},C=function(e){throw new TypeError(e)},M=2,N=3,O=4,P=8,S=9,T=16,R=32,D=64,F=128,L=256,V=512,k=1024,B={"[object Array]":T,"[object RegExp]":F,"[object Number]":M,"[object String]":P,"[object Function]":D,"[object Object]":R},U=function(e){var t;return null===e?L:!0===e||!1===e?O:n===e?V:(t=j.call(e),t=B[t]||k,M===t||e instanceof x?isNaN(e)?N:M:P===t||e instanceof y?1===e.length?S:P:T===t||e instanceof E?T:F===t||e instanceof w?F:D===t||e instanceof g?D:R===t?R:k)},z=function(e,n){var t,i=n.length,r=[].concat(e);for(t=0;i>t;t++)-1<r.indexOf(n[t])||r.push(n[t]);return r},G=function(e,n){R!==U(e)&&C("bad desc");var t={};if(e[_]("enumerable")&&(t.enumerable=!!n.enumerable),e[_]("configurable")&&(t.configurable=!!n.configurable),e[_]("value")&&(t.value=n.value),e[_]("writable")&&(t.writable=!!e.writable),e[_]("get")){var i=e.get;D!==U(i)&&"undefined"!==i&&C("bad get"),t.get=i}if(e[_]("set")){var r=e.set;D!==U(r)&&"undefined"!==r&&C("bad set"),t.set=r}return("get"in t||"set"in t)&&("value"in t||"writable"in t)&&C("identity-confused descriptor"),t},H=p.defineProperties||function(e,n){("object"!==A(e)||null===e)&&C("bad obj"),n=p(n);for(var t=I(n),i=[],r=0;r<t.length;r++)i.push([t[r],G(n[t[r]],e)]);for(var r=0;r<i.length;r++)$(e,i[r][0],i[r][1]);return e},J=function(){},K=p.create||function(e,n){var t,l=function(){};return l[i]=e,t=new l,t[r]=e,"object"===A(n)&&H(t,n),t},Q=function(){var e,n,t,i,r,l,u,a=arguments;for(n=a[0]||{},e=a.length,l=1;e>l;l++)if(t=a[l],R===U(t))for(r in t)t[_](r)&&t[q](r)&&(i=t[r],u=U(i),n[r]=M&u?0+i:(P|T)&u?i.slice(0):i);return n},W=function(e,n,i){var r,l,u=!!n;if(u||i)if(r={},n=u?n+"$":n,i&&D===U(i))for(l in e)e[_](l)&&(t!==l?(u&&D===U(e[l])&&(r[n+l]=e[l]),r[i(l,e[l])]=e[l]):r[l]=e[l]);else for(l in e)e[_](l)&&(t!==l?(u&&D===U(e[l])&&(r[n+l]=e[l]),i&&l in i?r[i[l]]=e[l]:r[l]=e[l]):r[l]=e[l]);else r=e;return r},X=function(e){var n=e[a]||J,t=e[a+"v"]||J,i=null;return[function(t,r,l,u,a,o,f,c,s,b,m){var d,p;return i===t?d=n.call(this,t,r,l,u,a,o,f,c,s,b,m):(p=e[t])&&(i=t,d=p.call(this,r,l,u,a,o,f,c,s,b,m),i=null),d},function(n,r){var l,u;return i===n?l=t.call(this,n,r):(u=e[n])&&(i=n,l=r&&r.length?u.apply(this,r):u.call(this),i=null),l}]},Y=function(e,n){return this instanceof Y?(this.factory=e,void(this.qualifier=(M===U(n)?n:0)|s)):new Y(e,n)},Z=function(e,n){return this instanceof Z?(this.prop=e,void(this.qualifier=(M===U(n)?n:0)|s)):new Z(e,n)},en=function(e,r,s,v){e=e||p,r=r||{};var g,h,y,x,w,E,j,q,$,A,C=e[o]||null,N=e[f]||{},O=e[i],S=null,F=Q({},N),L=null,V={};r[_](t)||(r[t]=function(){}),g=r[t],r[_](u)&&(V=r[u]||{},delete r[u]),r[_](l)&&(S=r[l],L=I(S),delete r[l]);for($ in r)if(r[_]($)){if(A=r[$],A instanceof Y){if(m&A.qualifier){d&A.qualifier?F[$]=A:((S=S||{})[$]=A.factory(e,V,g),(L=L||[]).push($)),delete r[$];continue}if(b&A.qualifier){V[$]=A,delete r[$];continue}A=r[$]=A.factory(O,V,g)}D===U(A)&&(A[a]=O[$]||J)}for($ in V)V[_]($)&&(A=V[$],A instanceof Y&&(A=V[$]=A.factory(O,V,g)),D!==U(A)&&delete V[$]);if(g[i]=W(K(O),s,v),g[i]=Q(g[i],r),h=X(O),w={},w[c]=w[t]={value:g,enumerable:!1,writable:!0,configurable:!0},w[a]={value:h[0],enumerable:!1,writable:!0,configurable:!0},w[a+"v"]={value:h[1],enumerable:!1,writable:!0,configurable:!0},H(g[i],w),w={},C||L)for(C=z(C||[],L||[]),x=C.length,y=0;x>y;y++){if(E=C[y],j=null,S&&n!==S[E]){if((A=S[E])instanceof Y){if((m|d)&A.qualifier){F[E]=A;continue}j=A.factory(e,V,g)}else{if(F[_](E))continue;j=S[E]}D===U(j)&&(j[a]=e[E]||J)}else n!==e[E]&&(q=U(e[E]),j=R===q?Q(null,e[E]):(P|T)&q?e[E].slice(0):M&q?0+e[E]:e[E]);w[E]={value:j,enumerable:!1,writable:!0,configurable:!0}}for(E in F)F[_](E)&&(j=F[E].factory(e,V,g),w[E]={value:j,enumerable:!1,writable:!0,configurable:!0});return w[o]={value:C,enumerable:!1,writable:!0,configurable:!0},w[f]={value:F,enumerable:!1,writable:!0,configurable:!0},w[a]={value:e,enumerable:!1,writable:!0,configurable:!0},H(g,w),g},nn=Q,tn=Q,rn=function(e){var t,r,l,u;if(D===U(e)){if(a in e&&(e[a]=n),c in e&&(e[c]=n),f in e&&(e[f]=n),o in e){for(l=e[o],t=0,r=l.length;r>t;t++)u=l[t],u in e&&(D===U(e[u])&&e[u][a]&&(e[u][a]=n),e[u]=n);e[o]=n}l=e[i];for(u in l)D===U(l[u])&&(l[u][a]&&(l[u][a]=n),l[u]=n);l[a]=n,l[a+"v"]=n}},ln=function(){var e=arguments,n=e.length,t=null;if(m===e[0])return e[1]||{};if(n>=2){var r=U(e[0]);r=D===r?{Extends:e[0]}:R===r?e[0]:{Extends:p};var l,u,a=e[1]||{},o={},f=r[_]("Extends")?r.Extends:r[_]("extends")?r["extends"]:p,c=r[_]("Implements")?r.Implements:r[_]("implements")?r["implements"]:null,s=r[_]("Mixin")?r.Mixin:r[_]("mixin")?r.mixin:null,b=null;if(c=c?[].concat(c):null,s=s?[].concat(s):null)for(l=0,u=s.length;u>l;l++)R===U(s[l])?s[l][_]("mixin")&&s[l].mixin&&s[l].mixin[i]&&(b=W(s[l].mixin[i],s[l].namespace||null,s[l].as||null),o=tn(o,b)):s[l][i]&&(b=s[l][i],o=tn(o,b));if(c)for(l=0,u=c.length;u>l;l++)R===U(c[l])?c[l][_]("implements")&&c[l]["implements"]&&c[l]["implements"][i]&&(b=W(c[l].implements[i],c[l].namespace||null,c[l].as||null),o=nn(o,b)):c[l][i]&&(b=c[l][i],o=nn(o,b));t=R===U(f)?en(f.extends||p,Q(o,a),f.namespace||null,f.as||null):en(f,Q(o,a))}else t=en(p,e[0]);return t};e.Classy={VERSION:"0.9.3",PUBLIC:s,STATIC:m,LATE:d,PRIVATE:b,Type:U,Create:K,Merge:Q,Alias:W,Implements:nn,Mixin:tn,Extends:en,Dispose:rn,Method:Y,Prop:Z,Class:ln}}(e),e.Classy});