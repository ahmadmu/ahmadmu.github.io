import{$ as C1,A as d1,Aa as y,E as B,F as M1,J as L1,Ja as T1,L as q,Ma as F1,O as l2,Q as v1,V as g1,_ as h1,aa as Q,ba as E,ca as G,da as e2,ha as x1,ia as S1,ka as N1,la as b1,ma as y1,oa as w1,pa as k1,qa as r2,r as P,ra as A1,sa as P1,v as S,xa as x,za as p2}from"./chunk-6CEC5FES.js";import{a as D,b as u2}from"./chunk-UUTQQLSI.js";function O2(c,a){(a==null||a>c.length)&&(a=c.length);for(var l=0,e=Array(a);l<a;l++)e[l]=c[l];return e}function T3(c){if(Array.isArray(c))return c}function F3(c){if(Array.isArray(c))return O2(c)}function D3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function D1(c,a){for(var l=0;l<a.length;l++){var e=a[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,m4(e.key),e)}}function B3(c,a,l){return a&&D1(c.prototype,a),l&&D1(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function L2(c,a){var l=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=a1(c))||a&&c&&typeof c.length=="number"){l&&(c=l);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,n=!1;return{s:function(){l=l.call(c)},n:function(){var f=l.next();return i=f.done,f},e:function(f){n=!0,s=f},f:function(){try{i||l.return==null||l.return()}finally{if(n)throw s}}}}function p(c,a,l){return(a=m4(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function R3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function H3(c,a){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var e,r,s,i,n=[],f=!0,t=!1;try{if(s=(l=l.call(c)).next,a===0){if(Object(l)!==l)return;f=!1}else for(;!(f=(e=s.call(l)).done)&&(n.push(e.value),n.length!==a);f=!0);}catch(z){t=!0,r=z}finally{try{if(!f&&l.return!=null&&(i=l.return(),Object(i)!==i))return}finally{if(t)throw r}}return n}}function E3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B1(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),l.push.apply(l,e)}return l}function o(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?B1(Object(l),!0).forEach(function(e){p(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):B1(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function S2(c,a){return T3(c)||H3(c,a)||a1(c,a)||E3()}function F(c){return F3(c)||R3(c)||a1(c)||I3()}function U3(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function m4(c){var a=U3(c,"string");return typeof a=="symbol"?a:a+""}function h2(c){"@babel/helpers - typeof";return h2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},h2(c)}function a1(c,a){if(c){if(typeof c=="string")return O2(c,a);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?O2(c,a):void 0}}var R1=function(){},l1={},z4={},u4=null,p4={mark:R1,measure:R1};try{typeof window<"u"&&(l1=window),typeof document<"u"&&(z4=document),typeof MutationObserver<"u"&&(u4=MutationObserver),typeof performance<"u"&&(p4=performance)}catch{}var O3=l1.navigator||{},H1=O3.userAgent,E1=H1===void 0?"":H1,_=l1,L=z4,I1=u4,d2=p4,f5=!!_.document,O=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",d4=~E1.indexOf("MSIE")||~E1.indexOf("Trident/"),D2,W3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,q3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,M4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},G3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},L4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],b="classic",o2="duotone",v4="sharp",g4="sharp-duotone",h4="chisel",C4="etch",x4="graphite",S4="jelly",N4="jelly-duo",b4="jelly-fill",y4="notdog",w4="notdog-duo",k4="slab",A4="slab-press",P4="thumbprint",T4="utility",F4="utility-duo",D4="utility-fill",B4="whiteboard",j3="Classic",_3="Duotone",V3="Sharp",$3="Sharp Duotone",X3="Chisel",K3="Etch",Y3="Graphite",Q3="Jelly",J3="Jelly Duo",Z3="Jelly Fill",c0="Notdog",a0="Notdog Duo",l0="Slab",e0="Slab Press",r0="Thumbprint",s0="Utility",i0="Utility Duo",n0="Utility Fill",f0="Whiteboard",R4=[b,o2,v4,g4,h4,C4,x4,S4,N4,b4,y4,w4,k4,A4,P4,T4,F4,D4,B4],o5=(D2={},p(p(p(p(p(p(p(p(p(p(D2,b,j3),o2,_3),v4,V3),g4,$3),h4,X3),C4,K3),x4,Y3),S4,Q3),N4,J3),b4,Z3),p(p(p(p(p(p(p(p(p(D2,y4,c0),w4,a0),k4,l0),A4,e0),P4,r0),T4,s0),F4,i0),D4,n0),B4,f0)),o0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},t0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},m0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),z0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},H4=["fak","fa-kit","fakd","fa-kit-duotone"],U1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},u0=["kit"],p0="kit",d0="kit-duotone",M0="Kit",L0="Kit Duotone",t5=p(p({},p0,M0),d0,L0),v0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},g0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},h0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},O1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},B2,M2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},C0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],x0="classic",S0="duotone",N0="sharp",b0="sharp-duotone",y0="chisel",w0="etch",k0="graphite",A0="jelly",P0="jelly-duo",T0="jelly-fill",F0="notdog",D0="notdog-duo",B0="slab",R0="slab-press",H0="thumbprint",E0="utility",I0="utility-duo",U0="utility-fill",O0="whiteboard",W0="Classic",q0="Duotone",G0="Sharp",j0="Sharp Duotone",_0="Chisel",V0="Etch",$0="Graphite",X0="Jelly",K0="Jelly Duo",Y0="Jelly Fill",Q0="Notdog",J0="Notdog Duo",Z0="Slab",c6="Slab Press",a6="Thumbprint",l6="Utility",e6="Utility Duo",r6="Utility Fill",s6="Whiteboard",m5=(B2={},p(p(p(p(p(p(p(p(p(p(B2,x0,W0),S0,q0),N0,G0),b0,j0),y0,_0),w0,V0),k0,$0),A0,X0),P0,K0),T0,Y0),p(p(p(p(p(p(p(p(p(B2,F0,Q0),D0,J0),B0,Z0),R0,c6),H0,a6),E0,l6),I0,e6),U0,r6),O0,s6)),i6="kit",n6="kit-duotone",f6="Kit",o6="Kit Duotone",z5=p(p({},i6,f6),n6,o6),t6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},m6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},W2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},z6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],E4=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(C0,z6),u6=["solid","regular","light","thin","duotone","brands","semibold"],I4=[1,2,3,4,5,6,7,8,9,10],p6=I4.concat([11,12,13,14,15,16,17,18,19,20]),d6=["aw","fw","pull-left","pull-right"],M6=[].concat(F(Object.keys(m6)),u6,d6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",M2.GROUP,M2.SWAP_OPACITY,M2.PRIMARY,M2.SECONDARY]).concat(I4.map(function(c){return"".concat(c,"x")})).concat(p6.map(function(c){return"w-".concat(c)})),L6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},I="___FONT_AWESOME___",q2=16,U4="fa",O4="svg-inline--fa",K="data-fa-i2svg",G2="data-fa-pseudo-element",v6="data-fa-pseudo-element-pending",e1="data-prefix",r1="data-icon",W1="fontawesome-i2svg",g6="async",h6=["HTML","HEAD","STYLE","SCRIPT"],W4=["::before","::after",":before",":after"],q4=(function(){try{return!0}catch{return!1}})();function t2(c){return new Proxy(c,{get:function(l,e){return e in l?l[e]:l[b]}})}var G4=o({},M4);G4[b]=o(o(o(o({},{"fa-duotone":"duotone"}),M4[b]),U1.kit),U1["kit-duotone"]);var C6=t2(G4),j2=o({},z0);j2[b]=o(o(o(o({},{duotone:"fad"}),j2[b]),O1.kit),O1["kit-duotone"]);var q1=t2(j2),_2=o({},W2);_2[b]=o(o({},_2[b]),h0.kit);var s1=t2(_2),V2=o({},t6);V2[b]=o(o({},V2[b]),v0.kit);var u5=t2(V2),x6=W3,j4="fa-layers-text",S6=q3,N6=o({},o0),p5=t2(N6),b6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],R2=G3,y6=[].concat(F(u0),F(M6)),i2=_.FontAwesomeConfig||{};function w6(c){var a=L.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function k6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(G1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],G1.forEach(function(c){var a=S2(c,2),l=a[0],e=a[1],r=k6(w6(l));r!=null&&(i2[e]=r)}));var G1,_4={styleDefault:"solid",familyDefault:b,cssPrefix:U4,replacementClass:O4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};i2.familyPrefix&&(i2.cssPrefix=i2.familyPrefix);var c2=o(o({},_4),i2);c2.autoReplaceSvg||(c2.observeMutations=!1);var u={};Object.keys(_4).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(l){c2[c]=l,n2.forEach(function(e){return e(u)})},get:function(){return c2[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(a){c2.cssPrefix=a,n2.forEach(function(l){return l(u)})},get:function(){return c2.cssPrefix}});_.FontAwesomeConfig=u;var n2=[];function A6(c){return n2.push(c),function(){n2.splice(n2.indexOf(c),1)}}var j=q2,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function P6(c){if(!(!c||!O)){var a=L.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var l=L.head.childNodes,e=null,r=l.length-1;r>-1;r--){var s=l[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=s)}return L.head.insertBefore(a,e),c}}var T6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function j1(){for(var c=12,a="";c-- >0;)a+=T6[Math.random()*62|0];return a}function a2(c){for(var a=[],l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function i1(c){return c.classList?a2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function V4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F6(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,'="').concat(V4(c[l]),'" ')},"").trim()}function N2(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,": ").concat(c[l].trim(),";")},"")}function n1(c){return c.size!==R.size||c.x!==R.x||c.y!==R.y||c.rotate!==R.rotate||c.flipX||c.flipY}function D6(c){var a=c.transform,l=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(l/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(i," ").concat(n)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:t}}function B6(c){var a=c.transform,l=c.width,e=l===void 0?q2:l,r=c.height,s=r===void 0?q2:r,i=c.startCentered,n=i===void 0?!1:i,f="";return n&&d4?f+="translate(".concat(a.x/j-e/2,"em, ").concat(a.y/j-s/2,"em) "):n?f+="translate(calc(-50% + ".concat(a.x/j,"em), calc(-50% + ").concat(a.y/j,"em)) "):f+="translate(".concat(a.x/j,"em, ").concat(a.y/j,"em) "),f+="scale(".concat(a.size/j*(a.flipX?-1:1),", ").concat(a.size/j*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var R6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function $4(){var c=U4,a=O4,l=u.cssPrefix,e=u.replacementClass,r=R6;if(l!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");r=r.replace(s,".".concat(l,"-")).replace(i,"--".concat(l,"-")).replace(n,".".concat(e))}return r}var _1=!1;function H2(){u.autoAddCss&&!_1&&(P6($4()),_1=!0)}var H6={mixout:function(){return{dom:{css:$4,insertCss:H2}}},hooks:function(){return{beforeDOMElementCreation:function(){H2()},beforeI2svg:function(){H2()}}}},U=_||{};U[I]||(U[I]={});U[I].styles||(U[I].styles={});U[I].hooks||(U[I].hooks={});U[I].shims||(U[I].shims=[]);var T=U[I],X4=[],K4=function(){L.removeEventListener("DOMContentLoaded",K4),C2=1,X4.map(function(a){return a()})},C2=!1;O&&(C2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),C2||L.addEventListener("DOMContentLoaded",K4));function E6(c){O&&(C2?setTimeout(c,0):X4.push(c))}function m2(c){var a=c.tag,l=c.attributes,e=l===void 0?{}:l,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?V4(c):"<".concat(a," ").concat(F6(e),">").concat(s.map(m2).join(""),"</").concat(a,">")}function V1(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var I6=function(a,l){return function(e,r,s,i){return a.call(l,e,r,s,i)}},E2=function(a,l,e,r){var s=Object.keys(a),i=s.length,n=r!==void 0?I6(l,r):l,f,t,z;for(e===void 0?(f=1,z=a[s[0]]):(f=0,z=e);f<i;f++)t=s[f],z=n(z,a[t],t,a);return z};function Y4(c){return F(c).length!==1?null:c.codePointAt(0).toString(16)}function $1(c){return Object.keys(c).reduce(function(a,l){var e=c[l],r=!!e.icon;return r?a[e.iconName]=e.icon:a[l]=e,a},{})}function $2(c,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=l.skipHooks,r=e===void 0?!1:e,s=$1(a);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(c,$1(a)):T.styles[c]=o(o({},T.styles[c]||{}),s),c==="fas"&&$2("fa",a)}var f2=T.styles,U6=T.shims,Q4=Object.keys(s1),O6=Q4.reduce(function(c,a){return c[a]=Object.keys(s1[a]),c},{}),f1=null,J4={},Z4={},c3={},a3={},l3={};function W6(c){return~y6.indexOf(c)}function q6(c,a){var l=a.split("-"),e=l[0],r=l.slice(1).join("-");return e===c&&r!==""&&!W6(r)?r:null}var e3=function(){var a=function(s){return E2(f2,function(i,n,f){return i[f]=E2(n,s,{}),i},{})};J4=a(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var n=s[2].filter(function(f){return typeof f=="number"});n.forEach(function(f){r[f.toString(16)]=i})}return r}),Z4=a(function(r,s,i){if(r[i]=i,s[2]){var n=s[2].filter(function(f){return typeof f=="string"});n.forEach(function(f){r[f]=i})}return r}),l3=a(function(r,s,i){var n=s[2];return r[i]=i,n.forEach(function(f){r[f]=i}),r});var l="far"in f2||u.autoFetchSvg,e=E2(U6,function(r,s){var i=s[0],n=s[1],f=s[2];return n==="far"&&!l&&(n="fas"),typeof i=="string"&&(r.names[i]={prefix:n,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:n,iconName:f}),r},{names:{},unicodes:{}});c3=e.names,a3=e.unicodes,f1=b2(u.styleDefault,{family:u.familyDefault})};A6(function(c){f1=b2(c.styleDefault,{family:u.familyDefault})});e3();function o1(c,a){return(J4[c]||{})[a]}function G6(c,a){return(Z4[c]||{})[a]}function X(c,a){return(l3[c]||{})[a]}function r3(c){return c3[c]||{prefix:null,iconName:null}}function j6(c){var a=a3[c],l=o1("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function V(){return f1}var s3=function(){return{prefix:null,iconName:null,rest:[]}};function _6(c){var a=b,l=Q4.reduce(function(e,r){return e[r]="".concat(u.cssPrefix,"-").concat(r),e},{});return R4.forEach(function(e){(c.includes(l[e])||c.some(function(r){return O6[e].includes(r)}))&&(a=e)}),a}function b2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.family,e=l===void 0?b:l,r=C6[e][c];if(e===o2&&!c)return"fad";var s=q1[e][c]||q1[e][r],i=c in T.styles?c:null,n=s||i||null;return n}function V6(c){var a=[],l=null;return c.forEach(function(e){var r=q6(u.cssPrefix,e);r?l=r:e&&a.push(e)}),{iconName:l,rest:a}}function X1(c){return c.sort().filter(function(a,l,e){return e.indexOf(a)===l})}var K1=E4.concat(H4);function y2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.skipLookups,e=l===void 0?!1:l,r=null,s=X1(c.filter(function(d){return K1.includes(d)})),i=X1(c.filter(function(d){return!K1.includes(d)})),n=s.filter(function(d){return r=d,!L4.includes(d)}),f=S2(n,1),t=f[0],z=t===void 0?null:t,m=_6(s),M=o(o({},V6(i)),{},{prefix:b2(z,{family:m})});return o(o(o({},M),Y6({values:c,family:m,styles:f2,config:u,canonical:M,givenPrefix:r})),$6(e,r,M))}function $6(c,a,l){var e=l.prefix,r=l.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var s=a==="fa"?r3(r):{},i=X(e,r);return r=s.iconName||i||r,e=s.prefix||e,e==="far"&&!f2.far&&f2.fas&&!u.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var X6=R4.filter(function(c){return c!==b||c!==o2}),K6=Object.keys(W2).filter(function(c){return c!==b}).map(function(c){return Object.keys(W2[c])}).flat();function Y6(c){var a=c.values,l=c.family,e=c.canonical,r=c.givenPrefix,s=r===void 0?"":r,i=c.styles,n=i===void 0?{}:i,f=c.config,t=f===void 0?{}:f,z=l===o2,m=a.includes("fa-duotone")||a.includes("fad"),M=t.familyDefault==="duotone",d=e.prefix==="fad"||e.prefix==="fa-duotone";if(!z&&(m||M||d)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&X6.includes(l)){var C=Object.keys(n).find(function(g){return K6.includes(g)});if(C||t.autoFetchSvg){var v=m0.get(l).defaultShortPrefixId;e.prefix=v,e.iconName=X(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||s==="fa")&&(e.prefix=V()||"fas"),e}var Q6=(function(){function c(){D3(this,c),this.definitions={}}return B3(c,[{key:"add",value:function(){for(var l=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(n){l.definitions[n]=o(o({},l.definitions[n]||{}),i[n]),$2(n,i[n]);var f=s1[b][n];f&&$2(f,i[n]),e3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var i=r[s],n=i.prefix,f=i.iconName,t=i.icon,z=t[2];l[n]||(l[n]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(l[n][m]=t)}),l[n][f]=t}),l}}])})(),Y1=[],J={},Z={},J6=Object.keys(Z);function Z6(c,a){var l=a.mixoutsTo;return Y1=c,J={},Object.keys(Z).forEach(function(e){J6.indexOf(e)===-1&&delete Z[e]}),Y1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(l[i]=r[i]),h2(r[i])==="object"&&Object.keys(r[i]).forEach(function(n){l[i]||(l[i]={}),l[i][n]=r[i][n]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(i){J[i]||(J[i]=[]),J[i].push(s[i])})}e.provides&&e.provides(Z)}),l}function X2(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),r=2;r<l;r++)e[r-2]=arguments[r];var s=J[c]||[];return s.forEach(function(i){a=i.apply(null,[a].concat(e))}),a}function Y(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];var r=J[c]||[];r.forEach(function(s){s.apply(null,l)})}function $(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Z[c]?Z[c].apply(null,a):void 0}function K2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,l=c.prefix||V();if(a)return a=X(l,a)||a,V1(i3.definitions,l,a)||V1(T.styles,l,a)}var i3=new Q6,c8=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,Y("noAuto")},a8={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(Y("beforeI2svg",a),$("pseudoElements2svg",a),$("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,E6(function(){e8({autoReplaceSvgRoot:l}),Y("watch",a)})}},l8={icon:function(a){if(a===null)return null;if(h2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:X(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var l=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=b2(a[0]);return{prefix:e,iconName:X(e,l)||l}}if(typeof a=="string"&&(a.indexOf("".concat(u.cssPrefix,"-"))>-1||a.match(x6))){var r=y2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||V(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var s=V();return{prefix:s,iconName:X(s,a)||a}}}},k={noAuto:c8,config:u,dom:a8,parse:l8,library:i3,findIconDefinition:K2,toHtml:m2},e8=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot,e=l===void 0?L:l;(Object.keys(T.styles).length>0||u.autoFetchSvg)&&O&&u.autoReplaceSvg&&k.dom.i2svg({node:e})};function w2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return m2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(O){var e=L.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function r8(c){var a=c.children,l=c.main,e=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(n1(i)&&l.found&&!e.found){var n=l.width,f=l.height,t={x:n/f/2,y:.5};r.style=N2(o(o({},s),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function s8(c){var a=c.prefix,l=c.iconName,e=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(a,"-").concat(u.cssPrefix,"-").concat(l):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:i}),children:e}]}]}function i8(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(l){return l in c})}function t1(c){var a=c.icons,l=a.main,e=a.mask,r=c.prefix,s=c.iconName,i=c.transform,n=c.symbol,f=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,M=e.found?e:l,d=M.width,C=M.height,v=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(function(A){return t.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(t.classes).join(" "),g={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(d," ").concat(C)})};!i8(t.attributes)&&!t.attributes["aria-hidden"]&&(g.attributes["aria-hidden"]="true"),m&&(g.attributes[K]="");var h=o(o({},g),{},{prefix:r,iconName:s,main:l,mask:e,maskId:f,transform:i,symbol:n,styles:o({},t.styles)}),N=e.found&&l.found?$("generateAbstractMask",h)||{children:[],attributes:{}}:$("generateAbstractIcon",h)||{children:[],attributes:{}},w=N.children,W=N.attributes;return h.children=w,h.attributes=W,n?s8(h):r8(h)}function Q1(c){var a=c.content,l=c.width,e=c.height,r=c.transform,s=c.extra,i=c.watchable,n=i===void 0?!1:i,f=o(o({},s.attributes),{},{class:s.classes.join(" ")});n&&(f[K]="");var t=o({},s.styles);n1(r)&&(t.transform=B6({transform:r,startCentered:!0,width:l,height:e}),t["-webkit-transform"]=t.transform);var z=N2(t);z.length>0&&(f.style=z);var m=[];return m.push({tag:"span",attributes:f,children:[a]}),m}function n8(c){var a=c.content,l=c.extra,e=o(o({},l.attributes),{},{class:l.classes.join(" ")}),r=N2(l.styles);r.length>0&&(e.style=r);var s=[];return s.push({tag:"span",attributes:e,children:[a]}),s}var I2=T.styles;function Y2(c){var a=c[0],l=c[1],e=c.slice(4),r=S2(e,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(R2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(R2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(R2.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:l,icon:i}}var f8={found:!1,width:512,height:512};function o8(c,a){!q4&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function Q2(c,a){var l=a;return a==="fa"&&u.styleDefault!==null&&(a=V()),new Promise(function(e,r){if(l==="fa"){var s=r3(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&I2[a]&&I2[a][c]){var i=I2[a][c];return e(Y2(i))}o8(c,a),e(o(o({},f8),{},{icon:u.showMissingIcons&&c?$("missingIconAbstract")||{}:{}}))})}var J1=function(){},J2=u.measurePerformance&&d2&&d2.mark&&d2.measure?d2:{mark:J1,measure:J1},s2='FA "7.2.0"',t8=function(a){return J2.mark("".concat(s2," ").concat(a," begins")),function(){return n3(a)}},n3=function(a){J2.mark("".concat(s2," ").concat(a," ends")),J2.measure("".concat(s2," ").concat(a),"".concat(s2," ").concat(a," begins"),"".concat(s2," ").concat(a," ends"))},m1={begin:t8,end:n3},v2=function(){};function Z1(c){var a=c.getAttribute?c.getAttribute(K):null;return typeof a=="string"}function m8(c){var a=c.getAttribute?c.getAttribute(e1):null,l=c.getAttribute?c.getAttribute(r1):null;return a&&l}function z8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function u8(){if(u.autoReplaceSvg===!0)return g2.replace;var c=g2[u.autoReplaceSvg];return c||g2.replace}function p8(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function d8(c){return L.createElement(c)}function f3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.ceFn,e=l===void 0?c.tag==="svg"?p8:d8:l;if(typeof c=="string")return L.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(f3(i,{ceFn:e}))}),r}function M8(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var g2={replace:function(a){var l=a[0];if(l.parentNode)if(a[1].forEach(function(r){l.parentNode.insertBefore(f3(r),l)}),l.getAttribute(K)===null&&u.keepOriginalSource){var e=L.createComment(M8(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(a){var l=a[0],e=a[1];if(~i1(l).indexOf(u.replacementClass))return g2.replace(a);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(n,f){return f===u.replacementClass||f.match(r)?n.toSvg.push(f):n.toNode.push(f),n},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",s.toNode.join(" "))}var i=e.map(function(n){return m2(n)}).join(`
`);l.setAttribute(K,""),l.innerHTML=i}};function c4(c){c()}function o3(c,a){var l=typeof a=="function"?a:v2;if(c.length===0)l();else{var e=c4;u.mutateApproach===g6&&(e=_.requestAnimationFrame||c4),e(function(){var r=u8(),s=m1.begin("mutate");c.map(r),s(),l()})}}var z1=!1;function t3(){z1=!0}function Z2(){z1=!1}var x2=null;function a4(c){if(I1&&u.observeMutations){var a=c.treeCallback,l=a===void 0?v2:a,e=c.nodeCallback,r=e===void 0?v2:e,s=c.pseudoElementsCallback,i=s===void 0?v2:s,n=c.observeMutationsRoot,f=n===void 0?L:n;x2=new I1(function(t){if(!z1){var z=V();a2(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Z1(m.addedNodes[0])&&(u.searchPseudoElements&&i(m.target),l(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&i([m.target],!0),m.type==="attributes"&&Z1(m.target)&&~b6.indexOf(m.attributeName))if(m.attributeName==="class"&&m8(m.target)){var M=y2(i1(m.target)),d=M.prefix,C=M.iconName;m.target.setAttribute(e1,d||z),C&&m.target.setAttribute(r1,C)}else z8(m.target)&&r(m.target)})}}),O&&x2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function L8(){x2&&x2.disconnect()}function v8(c){var a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce(function(e,r){var s=r.split(":"),i=s[0],n=s.slice(1);return i&&n.length>0&&(e[i]=n.join(":").trim()),e},{})),l}function g8(c){var a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=y2(i1(c));return r.prefix||(r.prefix=V()),a&&l&&(r.prefix=a,r.iconName=l),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=G6(r.prefix,c.innerText)||o1(r.prefix,Y4(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function h8(c){var a=a2(c.attributes).reduce(function(l,e){return l.name!=="class"&&l.name!=="style"&&(l[e.name]=e.value),l},{});return a}function C8(){return{iconName:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function l4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=g8(c),e=l.iconName,r=l.prefix,s=l.rest,i=h8(c),n=X2("parseNodeAttributes",{},c),f=a.styleParser?v8(c):[];return o({iconName:e,prefix:r,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:i}},n)}var x8=T.styles;function m3(c){var a=u.autoReplaceSvg==="nest"?l4(c,{styleParser:!1}):l4(c);return~a.extra.classes.indexOf(j4)?$("generateLayersText",c,a):$("generateSvgReplacementMutation",c,a)}function S8(){return[].concat(F(H4),F(E4))}function e4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();var l=L.documentElement.classList,e=function(m){return l.add("".concat(W1,"-").concat(m))},r=function(m){return l.remove("".concat(W1,"-").concat(m))},s=u.autoFetchSvg?S8():L4.concat(Object.keys(x8));s.includes("fa")||s.push("fa");var i=[".".concat(j4,":not([").concat(K,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat(K,"])")})).join(", ");if(i.length===0)return Promise.resolve();var n=[];try{n=a2(c.querySelectorAll(i))}catch{}if(n.length>0)e("pending"),r("complete");else return Promise.resolve();var f=m1.begin("onTree"),t=n.reduce(function(z,m){try{var M=m3(m);M&&z.push(M)}catch(d){q4||d.name==="MissingIcon"&&console.error(d)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(M){o3(M,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),f(),z()})}).catch(function(M){f(),m(M)})})}function N8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;m3(c).then(function(l){l&&o3([l],a)})}function b8(c){return function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:K2(a||{}),r=l.mask;return r&&(r=(r||{}).icon?r:K2(r||{})),c(e,o(o({},l),{},{mask:r}))}}var y8=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.transform,r=e===void 0?R:e,s=l.symbol,i=s===void 0?!1:s,n=l.mask,f=n===void 0?null:n,t=l.maskId,z=t===void 0?null:t,m=l.classes,M=m===void 0?[]:m,d=l.attributes,C=d===void 0?{}:d,v=l.styles,g=v===void 0?{}:v;if(a){var h=a.prefix,N=a.iconName,w=a.icon;return w2(o({type:"icon"},a),function(){return Y("beforeDOMElementCreation",{iconDefinition:a,params:l}),t1({icons:{main:Y2(w),mask:f?Y2(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:N,transform:o(o({},R),r),symbol:i,maskId:z,extra:{attributes:C,styles:g,classes:M}})})}},w8={mixout:function(){return{icon:b8(y8)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=e4,l.nodeCallback=N8,l}}},provides:function(a){a.i2svg=function(l){var e=l.node,r=e===void 0?L:e,s=l.callback,i=s===void 0?function(){}:s;return e4(r,i)},a.generateSvgReplacementMutation=function(l,e){var r=e.iconName,s=e.prefix,i=e.transform,n=e.symbol,f=e.mask,t=e.maskId,z=e.extra;return new Promise(function(m,M){Promise.all([Q2(r,s),f.iconName?Q2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var C=S2(d,2),v=C[0],g=C[1];m([l,t1({icons:{main:v,mask:g},prefix:s,iconName:r,transform:i,symbol:n,maskId:t,extra:z,watchable:!0})])}).catch(M)})},a.generateAbstractIcon=function(l){var e=l.children,r=l.attributes,s=l.main,i=l.transform,n=l.styles,f=N2(n);f.length>0&&(r.style=f);var t;return n1(i)&&(t=$("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:r}}}},k8={mixout:function(){return{layer:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return w2({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:l,params:e});var i=[];return l(function(n){Array.isArray(n)?n.map(function(f){i=i.concat(f.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(F(s)).join(" ")},children:i}]})}}}},A8={mixout:function(){return{counter:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,i=e.classes,n=i===void 0?[]:i,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return w2({type:"counter",content:l},function(){return Y("beforeDOMElementCreation",{content:l,params:e}),n8({content:l.toString(),title:s,extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(F(n))}})})}}}},P8={mixout:function(){return{text:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?R:r,i=e.classes,n=i===void 0?[]:i,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return w2({type:"text",content:l},function(){return Y("beforeDOMElementCreation",{content:l,params:e}),Q1({content:l,transform:o(o({},R),s),extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(F(n))}})})}}},provides:function(a){a.generateLayersText=function(l,e){var r=e.transform,s=e.extra,i=null,n=null;if(d4){var f=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();i=t.width/f,n=t.height/f}return Promise.resolve([l,Q1({content:l.innerHTML,width:i,height:n,transform:r,extra:s,watchable:!0})])}}},z3=new RegExp('"',"ug"),r4=[1105920,1112319],s4=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),t0),L6),g0),c1=Object.keys(s4).reduce(function(c,a){return c[a.toLowerCase()]=s4[a],c},{}),T8=Object.keys(c1).reduce(function(c,a){var l=c1[a];return c[a]=l[900]||F(Object.entries(l))[0][1],c},{});function F8(c){var a=c.replace(z3,"");return Y4(F(a)[0]||"")}function D8(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),e=l.replace(z3,""),r=e.codePointAt(0),s=r>=r4[0]&&r<=r4[1],i=e.length===2?e[0]===e[1]:!1;return s||i||a}function B8(c,a){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),r=isNaN(e)?"normal":e;return(c1[l]||{})[r]||T8[l]}function i4(c,a){var l="".concat(v6).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(l)!==null)return e();var s=a2(c.children),i=s.filter(function(T2){return T2.getAttribute(G2)===a})[0],n=_.getComputedStyle(c,a),f=n.getPropertyValue("font-family"),t=f.match(S6),z=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(i&&!t)return c.removeChild(i),e();if(t&&m!=="none"&&m!==""){var M=n.getPropertyValue("content"),d=B8(f,z),C=F8(M),v=t[0].startsWith("FontAwesome"),g=D8(n),h=o1(d,C),N=h;if(v){var w=j6(C);w.iconName&&w.prefix&&(h=w.iconName,d=w.prefix)}if(h&&!g&&(!i||i.getAttribute(e1)!==d||i.getAttribute(r1)!==N)){c.setAttribute(l,N),i&&c.removeChild(i);var W=C8(),A=W.extra;A.attributes[G2]=a,Q2(h,d).then(function(T2){var A3=t1(o(o({},W),{},{icons:{main:T2,mask:s3()},prefix:d,iconName:N,extra:A,watchable:!0})),F2=L.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(F2,c.firstChild):c.appendChild(F2),F2.outerHTML=A3.map(function(P3){return m2(P3)}).join(`
`),c.removeAttribute(l),e()}).catch(r)}else e()}else e()})}function R8(c){return Promise.all([i4(c,"::before"),i4(c,"::after")])}function H8(c){return c.parentNode!==document.head&&!~h6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(G2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var E8=function(a){return!!a&&W4.some(function(l){return a.includes(l)})},I8=function(a){if(!a)return[];var l=new Set,e=a.split(/,(?![^()]*\))/).map(function(f){return f.trim()});e=e.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(t){return t.trim()})});var r=L2(e),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(E8(i)){var n=W4.reduce(function(f,t){return f.replace(t,"")},i);n!==""&&n!=="*"&&l.add(n)}}}catch(f){r.e(f)}finally{r.f()}return l};function n4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(O){var l;if(a)l=c;else if(u.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var e=new Set,r=L2(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var n=L2(i.cssRules),f;try{for(n.s();!(f=n.n()).done;){var t=f.value,z=I8(t.selectorText),m=L2(z),M;try{for(m.s();!(M=m.n()).done;){var d=M.value;e.add(d)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){n.e(v)}finally{n.f()}}catch(v){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!e.size)return;var C=Array.from(e).join(", ");try{l=c.querySelectorAll(C)}catch{}}return new Promise(function(v,g){var h=a2(l).filter(H8).map(R8),N=m1.begin("searchPseudoElements");t3(),Promise.all(h).then(function(){N(),Z2(),v()}).catch(function(){N(),Z2(),g()})})}}var U8={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=n4,l}}},provides:function(a){a.pseudoElements2svg=function(l){var e=l.node,r=e===void 0?L:e;u.searchPseudoElements&&n4(r)}}},f4=!1,O8={mixout:function(){return{dom:{unwatch:function(){t3(),f4=!0}}}},hooks:function(){return{bootstrap:function(){a4(X2("mutationObserverCallbacks",{}))},noAuto:function(){L8()},watch:function(l){var e=l.observeMutationsRoot;f4?Z2():a4(X2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},o4=function(a){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),i=s[0],n=s.slice(1).join("-");if(i&&n==="h")return e.flipX=!0,e;if(i&&n==="v")return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(i){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n;break}return e},l)},W8={mixout:function(){return{parse:{transform:function(l){return o4(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-transform");return r&&(l.transform=o4(r)),l}}},provides:function(a){a.generateAbstractTransformGrouping=function(l){var e=l.main,r=l.transform,s=l.containerWidth,i=l.iconWidth,n={transform:"translate(".concat(s/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(t," ").concat(z)},M={transform:"translate(".concat(i/2*-1," -256)")},d={outer:n,inner:m,path:M};return{tag:"g",attributes:o({},d.outer),children:[{tag:"g",attributes:o({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),d.path)}]}]}}}},U2={x:0,y:0,width:"100%",height:"100%"};function t4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function q8(c){return c.tag==="g"?c.children:[c]}var G8={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-mask"),s=r?y2(r.split(" ").map(function(i){return i.trim()})):s3();return s.prefix||(s.prefix=V()),l.mask=s,l.maskId=e.getAttribute("data-fa-mask-id"),l}}},provides:function(a){a.generateAbstractMask=function(l){var e=l.children,r=l.attributes,s=l.main,i=l.mask,n=l.maskId,f=l.transform,t=s.width,z=s.icon,m=i.width,M=i.icon,d=D6({transform:f,containerWidth:m,iconWidth:t}),C={tag:"rect",attributes:o(o({},U2),{},{fill:"white"})},v=z.children?{children:z.children.map(t4)}:{},g={tag:"g",attributes:o({},d.inner),children:[t4(o({tag:z.tag,attributes:o(o({},z.attributes),d.path)},v))]},h={tag:"g",attributes:o({},d.outer),children:[g]},N="mask-".concat(n||j1()),w="clip-".concat(n||j1()),W={tag:"mask",attributes:o(o({},U2),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,h]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:q8(M)},W]};return e.push(A,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(N,")")},U2)}),{children:e,attributes:r}}}},j8={provides:function(a){var l=!1;_.matchMedia&&(l=_.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=o(o({},s),{},{attributeName:"opacity"}),n={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||n.children.push({tag:"animate",attributes:o(o({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(n),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},_8={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return l.symbol=s,l}}}},V8=[H6,w8,k8,A8,P8,U8,O8,W8,G8,j8,_8];Z6(V8,{mixoutsTo:k});var d5=k.noAuto,u3=k.config,M5=k.library,p3=k.dom,d3=k.parse,L5=k.findIconDefinition,v5=k.toHtml,M3=k.icon,g5=k.layer,$8=k.text,X8=k.counter;var K8=["*"],Y8=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(l){u3.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),Q8=(()=>{class c{definitions={};addIcons(...l){for(let e of l){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...l){for(let e of l){let r=Object.keys(e).map(s=>e[s]);this.addIcons(...r)}}getIconDefinition(l,e){return l in this.definitions&&e in this.definitions[l]?this.definitions[l][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),J8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},Z8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},v3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),c5=c=>{let a=v3(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:a,"fa-rotate-by":c.rotate!=null&&!a,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(e=>l[e]?e:null).filter(e=>e!=null)},u1=new WeakSet,L3="fa-auto-css";function a5(c,a){if(!a.autoAddCss||u1.has(c))return;if(c.getElementById(L3)!=null){a.autoAddCss=!1,u1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",L3),l.innerHTML=p3.css();let e=c.head.childNodes,r=null;for(let s=e.length-1;s>-1;s--){let i=e[s],n=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}c.head.insertBefore(l,r),a.autoAddCss=!1,u1.add(c)}var l5=c=>c.prefix!==void 0&&c.iconName!==void 0,e5=(c,a)=>l5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},r5=(()=>{class c{stackItemSize=p2("1x");size=p2();_effect=M1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=v1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),s5=(()=>{class c{size=p2();classes=x(()=>{let l=this.size(),e=l?{[`fa-${l}`]:!0}:{};return u2(D({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=l2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&k1(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:K8,decls:1,vars:0,template:function(e,r){e&1&&(b1(),y1(0))},encapsulation:2,changeDetection:0})}return c})(),g3=(()=>{class c{icon=y();title=y();animation=y();mask=y();flip=y();size=y();pull=y();border=y();inverse=y();symbol=y();rotate=y();fixedWidth=y();transform=y();a11yRole=y();renderedIconHTML=x(()=>{let l=this.icon()??this.config.fallbackIcon;if(!l)return Z8(),"";let e=this.findIconDefinition(l);if(!e)return"";let r=this.buildParams();a5(this.document,this.config);let s=M3(e,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});document=S(d1);sanitizer=S(T1);config=S(Y8);iconLibrary=S(Q8);stackItem=S(r5,{optional:!0});stack=S(s5,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(l){let e=e5(l,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(J8(e),null)}buildParams(){let l=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof l=="boolean"?l:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?d3.transform(r):r,i=this.mask(),n=i!=null?this.findIconDefinition(i):null,f={},t=this.a11yRole();t!=null&&(f.role=t);let z={};return e.rotate!=null&&!v3(e.rotate)&&(z["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:s,classes:c5(e),mask:n??void 0,symbol:this.symbol(),attributes:f,styles:z}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=l2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(x1("innerHTML",r.renderedIconHTML(),L1),g1("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var R5={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]};var H5={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]};var E5={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]};var I5={prefix:"fas",iconName:"arrows-up-down",icon:[256,512,["arrows-v"],"f07d","M150.6-22.6c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 77.3 96 434.7 54.6 393.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6 6 14.1 9.4 22.6 9.4s16.6-3.4 22.6-9.4l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-41.4 41.4 0-357.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"]};var h3={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]};var U5={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]};var O5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]};var C3={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var W5={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};var q5={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M263.4-27L278.2 9.8 315 24.6c3 1.2 5 4.2 5 7.4s-2 6.2-5 7.4L278.2 54.2 263.4 91c-1.2 3-4.2 5-7.4 5s-6.2-2-7.4-5L233.8 54.2 197 39.4c-3-1.2-5-4.2-5-7.4s2-6.2 5-7.4L233.8 9.8 248.6-27c1.2-3 4.2-5 7.4-5s6.2 2 7.4 5zM110.7 41.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7L59.8 164.2 9.7 142.7C3.8 140.2 0 134.4 0 128s3.8-12.2 9.7-14.7L59.8 91.8 81.3 41.7C83.8 35.8 89.6 32 96 32s12.2 3.8 14.7 9.7zM464 304c6.4 0 12.2 3.8 14.7 9.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7l-21.5-50.1-50.1-21.5c-5.9-2.5-9.7-8.3-9.7-14.7s3.8-12.2 9.7-14.7l50.1-21.5 21.5-50.1c2.5-5.9 8.3-9.7 14.7-9.7zM460 0c11 0 21.6 4.4 29.5 12.2l42.3 42.3C539.6 62.4 544 73 544 84s-4.4 21.6-12.2 29.5l-88.2 88.2-101.3-101.3 88.2-88.2C438.4 4.4 449 0 460 0zM44.2 398.5L308.4 134.3 409.7 235.6 145.5 499.8C137.6 507.6 127 512 116 512s-21.6-4.4-29.5-12.2L44.2 457.5C36.4 449.6 32 439 32 428s4.4-21.6 12.2-29.5z"]};var G5={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]};var j5={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M24 192l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-46.7-46.7c75.3-58.6 184.3-53.3 253.5 15.9 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-10.2-10.2-19-21.3-26.4-33-9.5-14.9-29.3-19.3-44.2-9.8s-19.3 29.3-9.8 44.2C49.7 408.7 61.4 423.5 75 437 175 537 337 537 437 437S537 175 437 75C342.8-19.3 193.3-24.7 92.7 58.8L41 7C34.1 .2 23.8-1.9 14.8 1.8S0 14.3 0 24L0 168c0 13.3 10.7 24 24 24z"]};var _5={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var V5={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]};var $5={prefix:"fas",iconName:"arrows-left-right",icon:[576,512,["arrows-h"],"f07e","M470.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l41.4 41.4-357.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-41.4-41.4 357.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]};var X5={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]};var K5={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"]};var x3={prefix:"fas",iconName:"layer-group",icon:[512,512,[],"f5fd","M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"]};var S3="dailylang_settings";function N3(){return{aiProvider:"gemini",openaiApiKey:"",geminiApiKey:"",defaultSentenceCount:3,jpFont:"noto-sans",selectedLevel:"N5",selectedLanguage:"japanese",writingDirection:"horizontal",longPressAction:"markKnown",dailyFlashcardLimit:20,geminiModel:"gemini-2.5-flash-lite",openaiModel:"gpt-4.1",anki:{deckName:"DailyLang Japanese"}}}var H=class c{_settings=B(this.load());settings=this._settings.asReadonly();aiProvider=x(()=>this._settings().aiProvider);anki=x(()=>this._settings().anki);defaultSentenceCount=x(()=>this._settings().defaultSentenceCount);selectedLevel=x(()=>this._settings().selectedLevel);selectedLanguage=x(()=>this._settings().selectedLanguage);longPressAction=x(()=>this._settings().longPressAction);get activeApiKey(){let a=this._settings();return a.aiProvider==="gemini"?a.geminiApiKey:a.openaiApiKey}update(a){let l=D(D({},this._settings()),a);this._settings.set(l),this.save(l)}updateAnki(a){let l=u2(D({},this._settings()),{anki:D(D({},this._settings().anki),a)});this._settings.set(l),this.save(l)}setLongPressAction(a){this.update({longPressAction:a})}load(){try{let a=localStorage.getItem(S3);if(a)return D(D({},N3()),JSON.parse(a))}catch{}return N3()}save(a){try{localStorage.setItem(S3,JSON.stringify(a))}catch{}}static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})};var b3="dailylang_anki_queue",k2=class c{settings=S(H);_queue=B(this.loadQueue());queue=this._queue.asReadonly();queueCount=x(()=>this._queue().length);addCard(a,l,e,r){if(this._queue().find(f=>f.word===a))return;let i={id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,front:`<div class="word">${a}</div><div class="reading">${l}</div>`,back:`<div class="meaning">${e}</div><div class="example">${r}</div>`,word:a,reading:l,meaning:e,example:r,addedAt:Date.now()},n=[...this._queue(),i];this._queue.set(n),this.saveQueue(n)}removeCard(a){let l=this._queue().filter(e=>e.id!==a);this._queue.set(l),this.saveQueue(l)}clearQueue(){this._queue.set([]),this.saveQueue([])}async exportDeck(){let a=this._queue();if(a.length===0)return;let l=this.settings.anki().deckName,e=await this.generateApkg(a,l);this.triggerDownload(e,`${l.replace(/\s+/g,"_")}.apkg`)}async generateApkg(a,l){let{default:e}=await import("./chunk-VPQHHS2I.js"),r=await e({locateFile:()=>"/assets/sql-wasm.wasm"}),s=new r.Database,i=Math.floor(Date.now()/1e3),n=Date.now(),f=n+1,t={id:String(f),name:"DailyLang Basic",type:0,mod:i,usn:-1,sortf:0,did:n,tmpls:[{name:"Card 1",ord:0,qfmt:"{{Word}}<br><small>{{Reading}}</small>",afmt:'{{FrontSide}}<hr id="answer">{{Meaning}}<br><i>{{Example}}</i>',bqfmt:"",bafmt:"",did:null,bfont:"",bsize:0}],flds:[{name:"Word",ord:0,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]},{name:"Reading",ord:1,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]},{name:"Meaning",ord:2,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]},{name:"Example",ord:3,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]}],css:".card { font-family: arial; font-size: 20px; text-align: center; } .reading { color: #666; font-size: 14px; }",latexPre:"",latexPost:"",req:[[0,"any",[0]]]},z={[n]:{id:n,name:l,desc:"",extendRev:50,usn:-1,collapsed:!1,browserCollapsed:!1,newToday:[0,0],revToday:[0,0],lrnToday:[0,0],timeToday:[0,0],dyn:0,extendNew:10,conf:1,mod:i}},m={1:{id:1,name:"Default",replayq:!0,lapse:{leechFails:8,minInt:1,delays:[10],leechAction:0,mult:0},rev:{perDay:200,ease4:1.3,fuzz:.05,minSpace:1,ivlFct:1,maxIvl:36500,bury:!0,hardFactor:1.2},timer:0,maxTaken:60,usn:-1,new:{perDay:20,delays:[1,10],separate:!0,ints:[1,4,7],initialFactor:2500,bury:!0,order:1},mod:i,autoplay:!0}},M={models:{[f]:t},decks:z,dconf:m};s.run("CREATE TABLE col (id integer primary key, crt integer not null, mod integer not null, scm integer not null, ver integer not null, dty integer not null, usn integer not null, ls integer not null, conf text not null, models text not null, decks text not null, dconf text not null, tags text not null);"),s.run("CREATE TABLE notes (id integer primary key, guid text not null, mid integer not null, mod integer not null, usn integer not null, tags text not null, flds text not null, sfld integer not null, csum integer not null, flags integer not null, data text not null);"),s.run("CREATE TABLE cards (id integer primary key, nid integer not null, did integer not null, ord integer not null, mod integer not null, usn integer not null, type integer not null, queue integer not null, due integer not null, ivl integer not null, factor integer not null, reps integer not null, lapses integer not null, left integer not null, odue integer not null, odid integer not null, flags integer not null, data text not null);"),s.run("CREATE TABLE revlog (id integer primary key, cid integer not null, usn integer not null, ease integer not null, ivl integer not null, lastIvl integer not null, factor integer not null, time integer not null, type integer not null);"),s.run("CREATE TABLE graves (usn integer not null, oid integer not null, type integer not null);"),s.run("INSERT INTO col VALUES (1, ?, ?, ?, 11, 0, -1, 0, '{}', ?, ?, ?, '{}')",[i,i,i,JSON.stringify(M.models),JSON.stringify(M.decks),JSON.stringify(M.dconf)]),a.forEach((g,h)=>{let N=n+h+10,w=n+h+1e3,W=`${g.word}${g.reading}${g.meaning}${g.example}`,A=this.checksum(g.word);s.run("INSERT INTO notes VALUES (?, ?, ?, ?, -1, '', ?, ?, ?, 0, '')",[N,this.guid(),f,i,W,g.word,A]),s.run("INSERT INTO cards VALUES (?, ?, ?, 0, ?, -1, 0, 0, ?, 0, 0, 0, 0, 0, 0, 0, 0, '')",[w,N,n,i,h+1])});let d=s.export();s.close();let{zipSync:C}=await import("./chunk-BGFR6G6E.js");return C({"collection.anki2":d,media:new TextEncoder().encode("{}")})}checksum(a){let l=0;for(let e=0;e<a.length;e++){let r=a.charCodeAt(e);l=(l<<5)-l+r,l=l&l}return Math.abs(l)}guid(){return Math.random().toString(36).slice(2,10)}triggerDownload(a,l){let e=new Blob([a.buffer],{type:"application/zip"}),r=URL.createObjectURL(e),s=document.createElement("a");s.href=r,s.download=l,s.click(),URL.revokeObjectURL(r)}loadQueue(){try{let a=localStorage.getItem(b3);if(a)return JSON.parse(a)}catch{}return[]}saveQueue(a){try{localStorage.setItem(b3,JSON.stringify(a))}catch{}}static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})};var y3="dailylang_flashcard_states",w3="dailylang_flashcard_daily";function p1(){return new Date().toISOString().slice(0,10)}var A2=class c{anki=S(k2);settings=S(H);_states=B(this.loadStates());_dailyCount=B(this.loadDailyCount());reviewedToday=x(()=>this._dailyCount().count);remainingToday=x(()=>Math.max(0,this.settings.settings().dailyFlashcardLimit-this.reviewedToday()));reviewQueue=x(()=>{let a=this.remainingToday();if(a===0)return[];let l=Date.now(),e=this._states();return this.anki.queue().filter(s=>{let i=e.get(s.id);return!i||i.dueDate<=l}).slice(0,a)});dueCount=x(()=>this.reviewQueue().length);totalCards=x(()=>this.anki.queue().length);getState(a){return this._states().get(a)??this.defaultState(a)}review(a,l){let e=this.getState(a),r=l==="again"?1:l==="good"?3:5,s=this.sm2(e,r),i=new Map(this._states());i.set(a,s),this._states.set(i),this.saveStates(i);let n=p1(),f=this._dailyCount(),t={date:n,count:f.date===n?f.count+1:1};this._dailyCount.set(t),this.saveDailyCount(t)}resetAll(){this._states.set(new Map),this.saveStates(new Map)}sm2(a,l){let{ease:e,interval:r,repetitions:s,lapses:i}=a;l<3?(s=0,r=1,i++):(s===0?r=1:s===1?r=6:r=Math.round(r*e),s++,e=e+(.1-(5-l)*(.08+(5-l)*.02)),e<1.3&&(e=1.3));let n=Date.now()+r*864e5;return{cardId:a.cardId,ease:e,interval:r,repetitions:s,dueDate:n,lapses:i}}defaultState(a){return{cardId:a,ease:2.5,interval:0,repetitions:0,dueDate:0,lapses:0}}loadStates(){try{let a=localStorage.getItem(y3);if(a){let l=JSON.parse(a);return new Map(l.map(e=>[e.cardId,e]))}}catch{}return new Map}saveStates(a){try{localStorage.setItem(y3,JSON.stringify(Array.from(a.values())))}catch{}}loadDailyCount(){try{let a=localStorage.getItem(w3);if(a){let l=JSON.parse(a);if(l.date===p1())return l}}catch{}return{date:p1(),count:0}}saveDailyCount(a){try{localStorage.setItem(w3,JSON.stringify(a))}catch{}}static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})};var P2=class c{settings=S(H);content=B(null);showTranslation=B(!1);writingDirection=x(()=>this.settings.settings().writingDirection);_cache=new Map;setContent(a){this._cache.set(a.language,a),this.content.set(a),this.showTranslation.set(!1)}switchLanguage(a){this.content.set(this._cache.get(a)??null),this.showTranslation.set(!1)}toggleDirection(){let a=this.settings.settings().writingDirection==="horizontal"?"vertical":"horizontal";this.settings.update({writingDirection:a})}toggleTranslation(){this.showTranslation.update(a=>!a)}static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})};var i5=(c,a)=>a.value;function n5(c,a){if(c&1&&(E(0,"option",10),r2(1),G()),c&2){let l=a.$implicit,e=N1();Q("value",l.value)("selected",l.value===e.selectedLanguage()),q(),A1(l.label)}}var k3=class c{settings=S(H);flashcards=S(A2);state=S(P2);faGear=h3;faCards=x3;faChevron=C3;languages=[{value:"japanese",label:"\u65E5\u672C\u8A9E"},{value:"arabic",label:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"}];selectedLanguage=this.settings.selectedLanguage;dueCount=this.flashcards.dueCount;onLanguageChange(a){let l=a==="arabic"?"A1":"N5";this.settings.update({selectedLanguage:a,selectedLevel:l}),this.state.switchLanguage(a)}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=l2({type:c,selectors:[["app-nav"]],decls:21,vars:9,consts:[[1,"fixed","top-0","left-0","right-0","z-50","bg-surface/92","backdrop-blur-md","border-b","border-border"],[1,"max-w-xl","mx-auto","px-4","h-14","flex","items-center","justify-between"],["routerLink","/",1,"nav-wordmark-link"],["src","icon.svg","alt","","aria-hidden","true",1,"w-[22px]","h-[22px]","rounded-[5px]"],[1,"nav-wordmark"],[1,"nav-wordmark-daily"],[1,"nav-wordmark-lang"],[1,"flex","items-center","gap-1"],[1,"nav-lang-wrapper"],["aria-label","Select language",1,"nav-lang-select",3,"change","value"],[3,"value","selected"],["aria-hidden","true",1,"nav-lang-chevron",3,"icon"],["routerLink","/flashcards","title","Flashcard review",1,"btn-icon","ml-0.5","relative"],[3,"icon"],[1,"absolute","-top-0.5","-right-0.5","w-3.5","h-3.5","bg-accent","text-white","text-[8px]","font-bold","rounded-full","flex","items-center","justify-center","leading-none"],["routerLink","/settings","title","Settings",1,"btn-icon","ml-1"]],template:function(l,e){l&1&&(E(0,"nav",0)(1,"div",1)(2,"a",2),e2(3,"img",3),E(4,"span",4)(5,"span",5),r2(6,"Daily"),G(),E(7,"span",6),r2(8,"Lang"),G()()(),E(9,"div",7)(10,"div",8)(11,"select",9),S1("change",function(s){return e.onLanguageChange(s.target.value)}),h1(12,n5,2,3,"option",10,i5),G(),e2(14,"fa-icon",11),G(),E(15,"a",12),e2(16,"fa-icon",13),E(17,"span",14),r2(18),G()(),E(19,"a",15),e2(20,"fa-icon",13),G()()()()),l&2&&(q(11),w1("ar-noto-sans",e.selectedLanguage()==="arabic")("jp-noto-sans",e.selectedLanguage()==="japanese"),Q("value",e.selectedLanguage()),q(),C1(e.languages),q(2),Q("icon",e.faChevron),q(2),Q("icon",e.faCards),q(2),P1(" ",e.dueCount()>9?"9+":e.dueCount()," "),q(2),Q("icon",e.faGear))},dependencies:[F1,g3],styles:[".nav-wordmark-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;text-decoration:none}.nav-wordmark[_ngcontent-%COMP%]{font-size:17px;letter-spacing:-.03em;line-height:1}.nav-wordmark-daily[_ngcontent-%COMP%]{font-weight:300;color:var(--color-muted);transition:color .18s ease}.nav-wordmark-lang[_ngcontent-%COMP%]{font-weight:300;color:var(--color-accent);transition:color .18s ease}.nav-wordmark-link[_ngcontent-%COMP%]:hover   .nav-wordmark-daily[_ngcontent-%COMP%]{color:var(--color-text)}.nav-lang-wrapper[_ngcontent-%COMP%]{position:relative;display:inline-flex;align-items:center}.nav-lang-select[_ngcontent-%COMP%]{appearance:none;-webkit-appearance:none;background:transparent;border:1px solid var(--color-border);border-radius:8px;padding:4px 24px 4px 8px;font-size:12px;color:var(--color-muted);cursor:pointer;transition:border-color .15s ease,color .15s ease;line-height:1.4}.nav-lang-select[_ngcontent-%COMP%]:hover, .nav-lang-select[_ngcontent-%COMP%]:focus{border-color:color-mix(in srgb,var(--color-accent) 60%,transparent);color:var(--color-accent);outline:none}.nav-lang-chevron[_ngcontent-%COMP%]{position:absolute;right:7px;pointer-events:none;font-size:8px;color:var(--color-muted)}[_nghost-%COMP%]{display:block}nav[_ngcontent-%COMP%]{padding-top:env(safe-area-inset-top,0px)}"]})};export{g3 as a,R5 as b,H5 as c,E5 as d,I5 as e,h3 as f,U5 as g,O5 as h,W5 as i,q5 as j,G5 as k,j5 as l,_5 as m,V5 as n,$5 as o,X5 as p,K5 as q,H as r,k2 as s,A2 as t,P2 as u,k3 as v};
