import{$ as x1,A as M1,Aa as w,E as F,F as L1,J as v1,Ja as F1,L as G,Ma as D1,O as e2,Q as g1,V as h1,_ as C1,aa as J,ba as I,ca as _,da as r2,ha as S1,ia as N1,ka as b1,la as y1,ma as w1,oa as k1,pa as A1,qa as s2,r as T,ra as P1,sa as T1,v as S,xa as C,za as p2}from"./chunk-6CEC5FES.js";import{a as y,b as E}from"./chunk-UUTQQLSI.js";function W2(c,a){(a==null||a>c.length)&&(a=c.length);for(var l=0,e=Array(a);l<a;l++)e[l]=c[l];return e}function D3(c){if(Array.isArray(c))return c}function B3(c){if(Array.isArray(c))return W2(c)}function R3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function B1(c,a){for(var l=0;l<a.length;l++){var e=a[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,z4(e.key),e)}}function H3(c,a,l){return a&&B1(c.prototype,a),l&&B1(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function L2(c,a){var l=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=l1(c))||a&&c&&typeof c.length=="number"){l&&(c=l);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,n=!1;return{s:function(){l=l.call(c)},n:function(){var f=l.next();return i=f.done,f},e:function(f){n=!0,s=f},f:function(){try{i||l.return==null||l.return()}finally{if(n)throw s}}}}function p(c,a,l){return(a=z4(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function E3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function I3(c,a){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var e,r,s,i,n=[],f=!0,t=!1;try{if(s=(l=l.call(c)).next,a===0){if(Object(l)!==l)return;f=!1}else for(;!(f=(e=s.call(l)).done)&&(n.push(e.value),n.length!==a);f=!0);}catch(z){t=!0,r=z}finally{try{if(!f&&l.return!=null&&(i=l.return(),Object(i)!==i))return}finally{if(t)throw r}}return n}}function U3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R1(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),l.push.apply(l,e)}return l}function o(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?R1(Object(l),!0).forEach(function(e){p(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):R1(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function S2(c,a){return D3(c)||I3(c,a)||l1(c,a)||U3()}function B(c){return B3(c)||E3(c)||l1(c)||O3()}function W3(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function z4(c){var a=W3(c,"string");return typeof a=="symbol"?a:a+""}function h2(c){"@babel/helpers - typeof";return h2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},h2(c)}function l1(c,a){if(c){if(typeof c=="string")return W2(c,a);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?W2(c,a):void 0}}var H1=function(){},e1={},u4={},p4=null,d4={mark:H1,measure:H1};try{typeof window<"u"&&(e1=window),typeof document<"u"&&(u4=document),typeof MutationObserver<"u"&&(p4=MutationObserver),typeof performance<"u"&&(d4=performance)}catch{}var q3=e1.navigator||{},E1=q3.userAgent,I1=E1===void 0?"":E1,V=e1,L=u4,U1=p4,d2=d4,t5=!!V.document,W=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",M4=~I1.indexOf("MSIE")||~I1.indexOf("Trident/"),B2,G3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,_3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,L4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},j3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},v4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],b="classic",t2="duotone",g4="sharp",h4="sharp-duotone",C4="chisel",x4="etch",S4="graphite",N4="jelly",b4="jelly-duo",y4="jelly-fill",w4="notdog",k4="notdog-duo",A4="slab",P4="slab-press",T4="thumbprint",F4="utility",D4="utility-duo",B4="utility-fill",R4="whiteboard",V3="Classic",$3="Duotone",X3="Sharp",K3="Sharp Duotone",Y3="Chisel",Q3="Etch",J3="Graphite",Z3="Jelly",c0="Jelly Duo",a0="Jelly Fill",l0="Notdog",e0="Notdog Duo",r0="Slab",s0="Slab Press",i0="Thumbprint",n0="Utility",f0="Utility Duo",o0="Utility Fill",t0="Whiteboard",H4=[b,t2,g4,h4,C4,x4,S4,N4,b4,y4,w4,k4,A4,P4,T4,F4,D4,B4,R4],m5=(B2={},p(p(p(p(p(p(p(p(p(p(B2,b,V3),t2,$3),g4,X3),h4,K3),C4,Y3),x4,Q3),S4,J3),N4,Z3),b4,c0),y4,a0),p(p(p(p(p(p(p(p(p(B2,w4,l0),k4,e0),A4,r0),P4,s0),T4,i0),F4,n0),D4,f0),B4,o0),R4,t0)),m0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},z0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},u0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),p0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},E4=["fak","fa-kit","fakd","fa-kit-duotone"],O1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},d0=["kit"],M0="kit",L0="kit-duotone",v0="Kit",g0="Kit Duotone",z5=p(p({},M0,v0),L0,g0),h0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},C0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},x0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},W1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},R2,M2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],N0="classic",b0="duotone",y0="sharp",w0="sharp-duotone",k0="chisel",A0="etch",P0="graphite",T0="jelly",F0="jelly-duo",D0="jelly-fill",B0="notdog",R0="notdog-duo",H0="slab",E0="slab-press",I0="thumbprint",U0="utility",O0="utility-duo",W0="utility-fill",q0="whiteboard",G0="Classic",_0="Duotone",j0="Sharp",V0="Sharp Duotone",$0="Chisel",X0="Etch",K0="Graphite",Y0="Jelly",Q0="Jelly Duo",J0="Jelly Fill",Z0="Notdog",c6="Notdog Duo",a6="Slab",l6="Slab Press",e6="Thumbprint",r6="Utility",s6="Utility Duo",i6="Utility Fill",n6="Whiteboard",u5=(R2={},p(p(p(p(p(p(p(p(p(p(R2,N0,G0),b0,_0),y0,j0),w0,V0),k0,$0),A0,X0),P0,K0),T0,Y0),F0,Q0),D0,J0),p(p(p(p(p(p(p(p(p(R2,B0,Z0),R0,c6),H0,a6),E0,l6),I0,e6),U0,r6),O0,s6),W0,i6),q0,n6)),f6="kit",o6="kit-duotone",t6="Kit",m6="Kit Duotone",p5=p(p({},f6,t6),o6,m6),z6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},u6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},q2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},p6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],I4=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(S0,p6),d6=["solid","regular","light","thin","duotone","brands","semibold"],U4=[1,2,3,4,5,6,7,8,9,10],M6=U4.concat([11,12,13,14,15,16,17,18,19,20]),L6=["aw","fw","pull-left","pull-right"],v6=[].concat(B(Object.keys(u6)),d6,L6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",M2.GROUP,M2.SWAP_OPACITY,M2.PRIMARY,M2.SECONDARY]).concat(U4.map(function(c){return"".concat(c,"x")})).concat(M6.map(function(c){return"w-".concat(c)})),g6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},U="___FONT_AWESOME___",G2=16,O4="fa",W4="svg-inline--fa",Y="data-fa-i2svg",_2="data-fa-pseudo-element",h6="data-fa-pseudo-element-pending",r1="data-prefix",s1="data-icon",q1="fontawesome-i2svg",C6="async",x6=["HTML","HEAD","STYLE","SCRIPT"],q4=["::before","::after",":before",":after"],G4=(function(){try{return!0}catch{return!1}})();function m2(c){return new Proxy(c,{get:function(l,e){return e in l?l[e]:l[b]}})}var _4=o({},L4);_4[b]=o(o(o(o({},{"fa-duotone":"duotone"}),L4[b]),O1.kit),O1["kit-duotone"]);var S6=m2(_4),j2=o({},p0);j2[b]=o(o(o(o({},{duotone:"fad"}),j2[b]),W1.kit),W1["kit-duotone"]);var G1=m2(j2),V2=o({},q2);V2[b]=o(o({},V2[b]),x0.kit);var i1=m2(V2),$2=o({},z6);$2[b]=o(o({},$2[b]),h0.kit);var d5=m2($2),N6=G3,j4="fa-layers-text",b6=_3,y6=o({},m0),M5=m2(y6),w6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H2=j3,k6=[].concat(B(d0),B(v6)),n2=V.FontAwesomeConfig||{};function A6(c){var a=L.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function P6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(_1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],_1.forEach(function(c){var a=S2(c,2),l=a[0],e=a[1],r=P6(A6(l));r!=null&&(n2[e]=r)}));var _1,V4={styleDefault:"solid",familyDefault:b,cssPrefix:O4,replacementClass:W4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};n2.familyPrefix&&(n2.cssPrefix=n2.familyPrefix);var a2=o(o({},V4),n2);a2.autoReplaceSvg||(a2.observeMutations=!1);var u={};Object.keys(V4).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(l){a2[c]=l,f2.forEach(function(e){return e(u)})},get:function(){return a2[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(a){a2.cssPrefix=a,f2.forEach(function(l){return l(u)})},get:function(){return a2.cssPrefix}});V.FontAwesomeConfig=u;var f2=[];function T6(c){return f2.push(c),function(){f2.splice(f2.indexOf(c),1)}}var j=G2,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function F6(c){if(!(!c||!W)){var a=L.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var l=L.head.childNodes,e=null,r=l.length-1;r>-1;r--){var s=l[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=s)}return L.head.insertBefore(a,e),c}}var D6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function j1(){for(var c=12,a="";c-- >0;)a+=D6[Math.random()*62|0];return a}function l2(c){for(var a=[],l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function n1(c){return c.classList?l2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function $4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function B6(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,'="').concat($4(c[l]),'" ')},"").trim()}function N2(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,": ").concat(c[l].trim(),";")},"")}function f1(c){return c.size!==R.size||c.x!==R.x||c.y!==R.y||c.rotate!==R.rotate||c.flipX||c.flipY}function R6(c){var a=c.transform,l=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(l/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(i," ").concat(n)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:t}}function H6(c){var a=c.transform,l=c.width,e=l===void 0?G2:l,r=c.height,s=r===void 0?G2:r,i=c.startCentered,n=i===void 0?!1:i,f="";return n&&M4?f+="translate(".concat(a.x/j-e/2,"em, ").concat(a.y/j-s/2,"em) "):n?f+="translate(calc(-50% + ".concat(a.x/j,"em), calc(-50% + ").concat(a.y/j,"em)) "):f+="translate(".concat(a.x/j,"em, ").concat(a.y/j,"em) "),f+="scale(".concat(a.size/j*(a.flipX?-1:1),", ").concat(a.size/j*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var E6=`:root, :host {
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
}`;function X4(){var c=O4,a=W4,l=u.cssPrefix,e=u.replacementClass,r=E6;if(l!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");r=r.replace(s,".".concat(l,"-")).replace(i,"--".concat(l,"-")).replace(n,".".concat(e))}return r}var V1=!1;function E2(){u.autoAddCss&&!V1&&(F6(X4()),V1=!0)}var I6={mixout:function(){return{dom:{css:X4,insertCss:E2}}},hooks:function(){return{beforeDOMElementCreation:function(){E2()},beforeI2svg:function(){E2()}}}},O=V||{};O[U]||(O[U]={});O[U].styles||(O[U].styles={});O[U].hooks||(O[U].hooks={});O[U].shims||(O[U].shims=[]);var D=O[U],K4=[],Y4=function(){L.removeEventListener("DOMContentLoaded",Y4),C2=1,K4.map(function(a){return a()})},C2=!1;W&&(C2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),C2||L.addEventListener("DOMContentLoaded",Y4));function U6(c){W&&(C2?setTimeout(c,0):K4.push(c))}function z2(c){var a=c.tag,l=c.attributes,e=l===void 0?{}:l,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?$4(c):"<".concat(a," ").concat(B6(e),">").concat(s.map(z2).join(""),"</").concat(a,">")}function $1(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var O6=function(a,l){return function(e,r,s,i){return a.call(l,e,r,s,i)}},I2=function(a,l,e,r){var s=Object.keys(a),i=s.length,n=r!==void 0?O6(l,r):l,f,t,z;for(e===void 0?(f=1,z=a[s[0]]):(f=0,z=e);f<i;f++)t=s[f],z=n(z,a[t],t,a);return z};function Q4(c){return B(c).length!==1?null:c.codePointAt(0).toString(16)}function X1(c){return Object.keys(c).reduce(function(a,l){var e=c[l],r=!!e.icon;return r?a[e.iconName]=e.icon:a[l]=e,a},{})}function X2(c,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=l.skipHooks,r=e===void 0?!1:e,s=X1(a);typeof D.hooks.addPack=="function"&&!r?D.hooks.addPack(c,X1(a)):D.styles[c]=o(o({},D.styles[c]||{}),s),c==="fas"&&X2("fa",a)}var o2=D.styles,W6=D.shims,J4=Object.keys(i1),q6=J4.reduce(function(c,a){return c[a]=Object.keys(i1[a]),c},{}),o1=null,Z4={},c3={},a3={},l3={},e3={};function G6(c){return~k6.indexOf(c)}function _6(c,a){var l=a.split("-"),e=l[0],r=l.slice(1).join("-");return e===c&&r!==""&&!G6(r)?r:null}var r3=function(){var a=function(s){return I2(o2,function(i,n,f){return i[f]=I2(n,s,{}),i},{})};Z4=a(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var n=s[2].filter(function(f){return typeof f=="number"});n.forEach(function(f){r[f.toString(16)]=i})}return r}),c3=a(function(r,s,i){if(r[i]=i,s[2]){var n=s[2].filter(function(f){return typeof f=="string"});n.forEach(function(f){r[f]=i})}return r}),e3=a(function(r,s,i){var n=s[2];return r[i]=i,n.forEach(function(f){r[f]=i}),r});var l="far"in o2||u.autoFetchSvg,e=I2(W6,function(r,s){var i=s[0],n=s[1],f=s[2];return n==="far"&&!l&&(n="fas"),typeof i=="string"&&(r.names[i]={prefix:n,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:n,iconName:f}),r},{names:{},unicodes:{}});a3=e.names,l3=e.unicodes,o1=b2(u.styleDefault,{family:u.familyDefault})};T6(function(c){o1=b2(c.styleDefault,{family:u.familyDefault})});r3();function t1(c,a){return(Z4[c]||{})[a]}function j6(c,a){return(c3[c]||{})[a]}function K(c,a){return(e3[c]||{})[a]}function s3(c){return a3[c]||{prefix:null,iconName:null}}function V6(c){var a=l3[c],l=t1("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function $(){return o1}var i3=function(){return{prefix:null,iconName:null,rest:[]}};function $6(c){var a=b,l=J4.reduce(function(e,r){return e[r]="".concat(u.cssPrefix,"-").concat(r),e},{});return H4.forEach(function(e){(c.includes(l[e])||c.some(function(r){return q6[e].includes(r)}))&&(a=e)}),a}function b2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.family,e=l===void 0?b:l,r=S6[e][c];if(e===t2&&!c)return"fad";var s=G1[e][c]||G1[e][r],i=c in D.styles?c:null,n=s||i||null;return n}function X6(c){var a=[],l=null;return c.forEach(function(e){var r=_6(u.cssPrefix,e);r?l=r:e&&a.push(e)}),{iconName:l,rest:a}}function K1(c){return c.sort().filter(function(a,l,e){return e.indexOf(a)===l})}var Y1=I4.concat(E4);function y2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.skipLookups,e=l===void 0?!1:l,r=null,s=K1(c.filter(function(d){return Y1.includes(d)})),i=K1(c.filter(function(d){return!Y1.includes(d)})),n=s.filter(function(d){return r=d,!v4.includes(d)}),f=S2(n,1),t=f[0],z=t===void 0?null:t,m=$6(s),M=o(o({},X6(i)),{},{prefix:b2(z,{family:m})});return o(o(o({},M),J6({values:c,family:m,styles:o2,config:u,canonical:M,givenPrefix:r})),K6(e,r,M))}function K6(c,a,l){var e=l.prefix,r=l.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var s=a==="fa"?s3(r):{},i=K(e,r);return r=s.iconName||i||r,e=s.prefix||e,e==="far"&&!o2.far&&o2.fas&&!u.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var Y6=H4.filter(function(c){return c!==b||c!==t2}),Q6=Object.keys(q2).filter(function(c){return c!==b}).map(function(c){return Object.keys(q2[c])}).flat();function J6(c){var a=c.values,l=c.family,e=c.canonical,r=c.givenPrefix,s=r===void 0?"":r,i=c.styles,n=i===void 0?{}:i,f=c.config,t=f===void 0?{}:f,z=l===t2,m=a.includes("fa-duotone")||a.includes("fad"),M=t.familyDefault==="duotone",d=e.prefix==="fad"||e.prefix==="fa-duotone";if(!z&&(m||M||d)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&Y6.includes(l)){var x=Object.keys(n).find(function(g){return Q6.includes(g)});if(x||t.autoFetchSvg){var v=u0.get(l).defaultShortPrefixId;e.prefix=v,e.iconName=K(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||s==="fa")&&(e.prefix=$()||"fas"),e}var Z6=(function(){function c(){R3(this,c),this.definitions={}}return H3(c,[{key:"add",value:function(){for(var l=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(n){l.definitions[n]=o(o({},l.definitions[n]||{}),i[n]),X2(n,i[n]);var f=i1[b][n];f&&X2(f,i[n]),r3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var i=r[s],n=i.prefix,f=i.iconName,t=i.icon,z=t[2];l[n]||(l[n]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(l[n][m]=t)}),l[n][f]=t}),l}}])})(),Q1=[],Z={},c2={},c8=Object.keys(c2);function a8(c,a){var l=a.mixoutsTo;return Q1=c,Z={},Object.keys(c2).forEach(function(e){c8.indexOf(e)===-1&&delete c2[e]}),Q1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(l[i]=r[i]),h2(r[i])==="object"&&Object.keys(r[i]).forEach(function(n){l[i]||(l[i]={}),l[i][n]=r[i][n]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(i){Z[i]||(Z[i]=[]),Z[i].push(s[i])})}e.provides&&e.provides(c2)}),l}function K2(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),r=2;r<l;r++)e[r-2]=arguments[r];var s=Z[c]||[];return s.forEach(function(i){a=i.apply(null,[a].concat(e))}),a}function Q(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];var r=Z[c]||[];r.forEach(function(s){s.apply(null,l)})}function X(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return c2[c]?c2[c].apply(null,a):void 0}function Y2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,l=c.prefix||$();if(a)return a=K(l,a)||a,$1(n3.definitions,l,a)||$1(D.styles,l,a)}var n3=new Z6,l8=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,Q("noAuto")},e8={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(Q("beforeI2svg",a),X("pseudoElements2svg",a),X("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,U6(function(){s8({autoReplaceSvgRoot:l}),Q("watch",a)})}},r8={icon:function(a){if(a===null)return null;if(h2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:K(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var l=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=b2(a[0]);return{prefix:e,iconName:K(e,l)||l}}if(typeof a=="string"&&(a.indexOf("".concat(u.cssPrefix,"-"))>-1||a.match(N6))){var r=y2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var s=$();return{prefix:s,iconName:K(s,a)||a}}}},A={noAuto:l8,config:u,dom:e8,parse:r8,library:n3,findIconDefinition:Y2,toHtml:z2},s8=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot,e=l===void 0?L:l;(Object.keys(D.styles).length>0||u.autoFetchSvg)&&W&&u.autoReplaceSvg&&A.dom.i2svg({node:e})};function w2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return z2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(W){var e=L.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function i8(c){var a=c.children,l=c.main,e=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(f1(i)&&l.found&&!e.found){var n=l.width,f=l.height,t={x:n/f/2,y:.5};r.style=N2(o(o({},s),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function n8(c){var a=c.prefix,l=c.iconName,e=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(a,"-").concat(u.cssPrefix,"-").concat(l):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:i}),children:e}]}]}function f8(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(l){return l in c})}function m1(c){var a=c.icons,l=a.main,e=a.mask,r=c.prefix,s=c.iconName,i=c.transform,n=c.symbol,f=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,M=e.found?e:l,d=M.width,x=M.height,v=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(function(P){return t.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(t.classes).join(" "),g={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(d," ").concat(x)})};!f8(t.attributes)&&!t.attributes["aria-hidden"]&&(g.attributes["aria-hidden"]="true"),m&&(g.attributes[Y]="");var h=o(o({},g),{},{prefix:r,iconName:s,main:l,mask:e,maskId:f,transform:i,symbol:n,styles:o({},t.styles)}),N=e.found&&l.found?X("generateAbstractMask",h)||{children:[],attributes:{}}:X("generateAbstractIcon",h)||{children:[],attributes:{}},k=N.children,q=N.attributes;return h.children=k,h.attributes=q,n?n8(h):i8(h)}function J1(c){var a=c.content,l=c.width,e=c.height,r=c.transform,s=c.extra,i=c.watchable,n=i===void 0?!1:i,f=o(o({},s.attributes),{},{class:s.classes.join(" ")});n&&(f[Y]="");var t=o({},s.styles);f1(r)&&(t.transform=H6({transform:r,startCentered:!0,width:l,height:e}),t["-webkit-transform"]=t.transform);var z=N2(t);z.length>0&&(f.style=z);var m=[];return m.push({tag:"span",attributes:f,children:[a]}),m}function o8(c){var a=c.content,l=c.extra,e=o(o({},l.attributes),{},{class:l.classes.join(" ")}),r=N2(l.styles);r.length>0&&(e.style=r);var s=[];return s.push({tag:"span",attributes:e,children:[a]}),s}var U2=D.styles;function Q2(c){var a=c[0],l=c[1],e=c.slice(4),r=S2(e,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(H2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(H2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(H2.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:l,icon:i}}var t8={found:!1,width:512,height:512};function m8(c,a){!G4&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function J2(c,a){var l=a;return a==="fa"&&u.styleDefault!==null&&(a=$()),new Promise(function(e,r){if(l==="fa"){var s=s3(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&U2[a]&&U2[a][c]){var i=U2[a][c];return e(Q2(i))}m8(c,a),e(o(o({},t8),{},{icon:u.showMissingIcons&&c?X("missingIconAbstract")||{}:{}}))})}var Z1=function(){},Z2=u.measurePerformance&&d2&&d2.mark&&d2.measure?d2:{mark:Z1,measure:Z1},i2='FA "7.2.0"',z8=function(a){return Z2.mark("".concat(i2," ").concat(a," begins")),function(){return f3(a)}},f3=function(a){Z2.mark("".concat(i2," ").concat(a," ends")),Z2.measure("".concat(i2," ").concat(a),"".concat(i2," ").concat(a," begins"),"".concat(i2," ").concat(a," ends"))},z1={begin:z8,end:f3},v2=function(){};function c4(c){var a=c.getAttribute?c.getAttribute(Y):null;return typeof a=="string"}function u8(c){var a=c.getAttribute?c.getAttribute(r1):null,l=c.getAttribute?c.getAttribute(s1):null;return a&&l}function p8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function d8(){if(u.autoReplaceSvg===!0)return g2.replace;var c=g2[u.autoReplaceSvg];return c||g2.replace}function M8(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function L8(c){return L.createElement(c)}function o3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.ceFn,e=l===void 0?c.tag==="svg"?M8:L8:l;if(typeof c=="string")return L.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(o3(i,{ceFn:e}))}),r}function v8(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var g2={replace:function(a){var l=a[0];if(l.parentNode)if(a[1].forEach(function(r){l.parentNode.insertBefore(o3(r),l)}),l.getAttribute(Y)===null&&u.keepOriginalSource){var e=L.createComment(v8(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(a){var l=a[0],e=a[1];if(~n1(l).indexOf(u.replacementClass))return g2.replace(a);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(n,f){return f===u.replacementClass||f.match(r)?n.toSvg.push(f):n.toNode.push(f),n},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",s.toNode.join(" "))}var i=e.map(function(n){return z2(n)}).join(`
`);l.setAttribute(Y,""),l.innerHTML=i}};function a4(c){c()}function t3(c,a){var l=typeof a=="function"?a:v2;if(c.length===0)l();else{var e=a4;u.mutateApproach===C6&&(e=V.requestAnimationFrame||a4),e(function(){var r=d8(),s=z1.begin("mutate");c.map(r),s(),l()})}}var u1=!1;function m3(){u1=!0}function c1(){u1=!1}var x2=null;function l4(c){if(U1&&u.observeMutations){var a=c.treeCallback,l=a===void 0?v2:a,e=c.nodeCallback,r=e===void 0?v2:e,s=c.pseudoElementsCallback,i=s===void 0?v2:s,n=c.observeMutationsRoot,f=n===void 0?L:n;x2=new U1(function(t){if(!u1){var z=$();l2(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!c4(m.addedNodes[0])&&(u.searchPseudoElements&&i(m.target),l(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&i([m.target],!0),m.type==="attributes"&&c4(m.target)&&~w6.indexOf(m.attributeName))if(m.attributeName==="class"&&u8(m.target)){var M=y2(n1(m.target)),d=M.prefix,x=M.iconName;m.target.setAttribute(r1,d||z),x&&m.target.setAttribute(s1,x)}else p8(m.target)&&r(m.target)})}}),W&&x2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function g8(){x2&&x2.disconnect()}function h8(c){var a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce(function(e,r){var s=r.split(":"),i=s[0],n=s.slice(1);return i&&n.length>0&&(e[i]=n.join(":").trim()),e},{})),l}function C8(c){var a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=y2(n1(c));return r.prefix||(r.prefix=$()),a&&l&&(r.prefix=a,r.iconName=l),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=j6(r.prefix,c.innerText)||t1(r.prefix,Q4(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function x8(c){var a=l2(c.attributes).reduce(function(l,e){return l.name!=="class"&&l.name!=="style"&&(l[e.name]=e.value),l},{});return a}function S8(){return{iconName:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function e4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=C8(c),e=l.iconName,r=l.prefix,s=l.rest,i=x8(c),n=K2("parseNodeAttributes",{},c),f=a.styleParser?h8(c):[];return o({iconName:e,prefix:r,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:i}},n)}var N8=D.styles;function z3(c){var a=u.autoReplaceSvg==="nest"?e4(c,{styleParser:!1}):e4(c);return~a.extra.classes.indexOf(j4)?X("generateLayersText",c,a):X("generateSvgReplacementMutation",c,a)}function b8(){return[].concat(B(E4),B(I4))}function r4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var l=L.documentElement.classList,e=function(m){return l.add("".concat(q1,"-").concat(m))},r=function(m){return l.remove("".concat(q1,"-").concat(m))},s=u.autoFetchSvg?b8():v4.concat(Object.keys(N8));s.includes("fa")||s.push("fa");var i=[".".concat(j4,":not([").concat(Y,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat(Y,"])")})).join(", ");if(i.length===0)return Promise.resolve();var n=[];try{n=l2(c.querySelectorAll(i))}catch{}if(n.length>0)e("pending"),r("complete");else return Promise.resolve();var f=z1.begin("onTree"),t=n.reduce(function(z,m){try{var M=z3(m);M&&z.push(M)}catch(d){G4||d.name==="MissingIcon"&&console.error(d)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(M){t3(M,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),f(),z()})}).catch(function(M){f(),m(M)})})}function y8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z3(c).then(function(l){l&&t3([l],a)})}function w8(c){return function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:Y2(a||{}),r=l.mask;return r&&(r=(r||{}).icon?r:Y2(r||{})),c(e,o(o({},l),{},{mask:r}))}}var k8=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.transform,r=e===void 0?R:e,s=l.symbol,i=s===void 0?!1:s,n=l.mask,f=n===void 0?null:n,t=l.maskId,z=t===void 0?null:t,m=l.classes,M=m===void 0?[]:m,d=l.attributes,x=d===void 0?{}:d,v=l.styles,g=v===void 0?{}:v;if(a){var h=a.prefix,N=a.iconName,k=a.icon;return w2(o({type:"icon"},a),function(){return Q("beforeDOMElementCreation",{iconDefinition:a,params:l}),m1({icons:{main:Q2(k),mask:f?Q2(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:N,transform:o(o({},R),r),symbol:i,maskId:z,extra:{attributes:x,styles:g,classes:M}})})}},A8={mixout:function(){return{icon:w8(k8)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=r4,l.nodeCallback=y8,l}}},provides:function(a){a.i2svg=function(l){var e=l.node,r=e===void 0?L:e,s=l.callback,i=s===void 0?function(){}:s;return r4(r,i)},a.generateSvgReplacementMutation=function(l,e){var r=e.iconName,s=e.prefix,i=e.transform,n=e.symbol,f=e.mask,t=e.maskId,z=e.extra;return new Promise(function(m,M){Promise.all([J2(r,s),f.iconName?J2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var x=S2(d,2),v=x[0],g=x[1];m([l,m1({icons:{main:v,mask:g},prefix:s,iconName:r,transform:i,symbol:n,maskId:t,extra:z,watchable:!0})])}).catch(M)})},a.generateAbstractIcon=function(l){var e=l.children,r=l.attributes,s=l.main,i=l.transform,n=l.styles,f=N2(n);f.length>0&&(r.style=f);var t;return f1(i)&&(t=X("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:r}}}},P8={mixout:function(){return{layer:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return w2({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:l,params:e});var i=[];return l(function(n){Array.isArray(n)?n.map(function(f){i=i.concat(f.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(B(s)).join(" ")},children:i}]})}}}},T8={mixout:function(){return{counter:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,i=e.classes,n=i===void 0?[]:i,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return w2({type:"counter",content:l},function(){return Q("beforeDOMElementCreation",{content:l,params:e}),o8({content:l.toString(),title:s,extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(B(n))}})})}}}},F8={mixout:function(){return{text:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?R:r,i=e.classes,n=i===void 0?[]:i,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return w2({type:"text",content:l},function(){return Q("beforeDOMElementCreation",{content:l,params:e}),J1({content:l,transform:o(o({},R),s),extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(B(n))}})})}}},provides:function(a){a.generateLayersText=function(l,e){var r=e.transform,s=e.extra,i=null,n=null;if(M4){var f=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();i=t.width/f,n=t.height/f}return Promise.resolve([l,J1({content:l.innerHTML,width:i,height:n,transform:r,extra:s,watchable:!0})])}}},u3=new RegExp('"',"ug"),s4=[1105920,1112319],i4=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),z0),g6),C0),a1=Object.keys(i4).reduce(function(c,a){return c[a.toLowerCase()]=i4[a],c},{}),D8=Object.keys(a1).reduce(function(c,a){var l=a1[a];return c[a]=l[900]||B(Object.entries(l))[0][1],c},{});function B8(c){var a=c.replace(u3,"");return Q4(B(a)[0]||"")}function R8(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),e=l.replace(u3,""),r=e.codePointAt(0),s=r>=s4[0]&&r<=s4[1],i=e.length===2?e[0]===e[1]:!1;return s||i||a}function H8(c,a){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),r=isNaN(e)?"normal":e;return(a1[l]||{})[r]||D8[l]}function n4(c,a){var l="".concat(h6).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(l)!==null)return e();var s=l2(c.children),i=s.filter(function(F2){return F2.getAttribute(_2)===a})[0],n=V.getComputedStyle(c,a),f=n.getPropertyValue("font-family"),t=f.match(b6),z=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(i&&!t)return c.removeChild(i),e();if(t&&m!=="none"&&m!==""){var M=n.getPropertyValue("content"),d=H8(f,z),x=B8(M),v=t[0].startsWith("FontAwesome"),g=R8(n),h=t1(d,x),N=h;if(v){var k=V6(x);k.iconName&&k.prefix&&(h=k.iconName,d=k.prefix)}if(h&&!g&&(!i||i.getAttribute(r1)!==d||i.getAttribute(s1)!==N)){c.setAttribute(l,N),i&&c.removeChild(i);var q=S8(),P=q.extra;P.attributes[_2]=a,J2(h,d).then(function(F2){var T3=m1(o(o({},q),{},{icons:{main:F2,mask:i3()},prefix:d,iconName:N,extra:P,watchable:!0})),D2=L.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(D2,c.firstChild):c.appendChild(D2),D2.outerHTML=T3.map(function(F3){return z2(F3)}).join(`
`),c.removeAttribute(l),e()}).catch(r)}else e()}else e()})}function E8(c){return Promise.all([n4(c,"::before"),n4(c,"::after")])}function I8(c){return c.parentNode!==document.head&&!~x6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(_2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var U8=function(a){return!!a&&q4.some(function(l){return a.includes(l)})},O8=function(a){if(!a)return[];var l=new Set,e=a.split(/,(?![^()]*\))/).map(function(f){return f.trim()});e=e.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(t){return t.trim()})});var r=L2(e),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(U8(i)){var n=q4.reduce(function(f,t){return f.replace(t,"")},i);n!==""&&n!=="*"&&l.add(n)}}}catch(f){r.e(f)}finally{r.f()}return l};function f4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(W){var l;if(a)l=c;else if(u.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var e=new Set,r=L2(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var n=L2(i.cssRules),f;try{for(n.s();!(f=n.n()).done;){var t=f.value,z=O8(t.selectorText),m=L2(z),M;try{for(m.s();!(M=m.n()).done;){var d=M.value;e.add(d)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){n.e(v)}finally{n.f()}}catch(v){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!e.size)return;var x=Array.from(e).join(", ");try{l=c.querySelectorAll(x)}catch{}}return new Promise(function(v,g){var h=l2(l).filter(I8).map(E8),N=z1.begin("searchPseudoElements");m3(),Promise.all(h).then(function(){N(),c1(),v()}).catch(function(){N(),c1(),g()})})}}var W8={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=f4,l}}},provides:function(a){a.pseudoElements2svg=function(l){var e=l.node,r=e===void 0?L:e;u.searchPseudoElements&&f4(r)}}},o4=!1,q8={mixout:function(){return{dom:{unwatch:function(){m3(),o4=!0}}}},hooks:function(){return{bootstrap:function(){l4(K2("mutationObserverCallbacks",{}))},noAuto:function(){g8()},watch:function(l){var e=l.observeMutationsRoot;o4?c1():l4(K2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},t4=function(a){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),i=s[0],n=s.slice(1).join("-");if(i&&n==="h")return e.flipX=!0,e;if(i&&n==="v")return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(i){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n;break}return e},l)},G8={mixout:function(){return{parse:{transform:function(l){return t4(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-transform");return r&&(l.transform=t4(r)),l}}},provides:function(a){a.generateAbstractTransformGrouping=function(l){var e=l.main,r=l.transform,s=l.containerWidth,i=l.iconWidth,n={transform:"translate(".concat(s/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(t," ").concat(z)},M={transform:"translate(".concat(i/2*-1," -256)")},d={outer:n,inner:m,path:M};return{tag:"g",attributes:o({},d.outer),children:[{tag:"g",attributes:o({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),d.path)}]}]}}}},O2={x:0,y:0,width:"100%",height:"100%"};function m4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function _8(c){return c.tag==="g"?c.children:[c]}var j8={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-mask"),s=r?y2(r.split(" ").map(function(i){return i.trim()})):i3();return s.prefix||(s.prefix=$()),l.mask=s,l.maskId=e.getAttribute("data-fa-mask-id"),l}}},provides:function(a){a.generateAbstractMask=function(l){var e=l.children,r=l.attributes,s=l.main,i=l.mask,n=l.maskId,f=l.transform,t=s.width,z=s.icon,m=i.width,M=i.icon,d=R6({transform:f,containerWidth:m,iconWidth:t}),x={tag:"rect",attributes:o(o({},O2),{},{fill:"white"})},v=z.children?{children:z.children.map(m4)}:{},g={tag:"g",attributes:o({},d.inner),children:[m4(o({tag:z.tag,attributes:o(o({},z.attributes),d.path)},v))]},h={tag:"g",attributes:o({},d.outer),children:[g]},N="mask-".concat(n||j1()),k="clip-".concat(n||j1()),q={tag:"mask",attributes:o(o({},O2),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,h]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:_8(M)},q]};return e.push(P,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(N,")")},O2)}),{children:e,attributes:r}}}},V8={provides:function(a){var l=!1;V.matchMedia&&(l=V.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=o(o({},s),{},{attributeName:"opacity"}),n={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||n.children.push({tag:"animate",attributes:o(o({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(n),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},$8={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return l.symbol=s,l}}}},X8=[I6,A8,P8,T8,F8,W8,q8,G8,j8,V8,$8];a8(X8,{mixoutsTo:A});var L5=A.noAuto,p3=A.config,v5=A.library,d3=A.dom,M3=A.parse,g5=A.findIconDefinition,h5=A.toHtml,L3=A.icon,C5=A.layer,K8=A.text,Y8=A.counter;var Q8=["*"],J8=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(l){p3.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=T({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),Z8=(()=>{class c{definitions={};addIcons(...l){for(let e of l){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...l){for(let e of l){let r=Object.keys(e).map(s=>e[s]);this.addIcons(...r)}}getIconDefinition(l,e){return l in this.definitions&&e in this.definitions[l]?this.definitions[l][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=T({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),c5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},a5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},g3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),l5=c=>{let a=g3(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:a,"fa-rotate-by":c.rotate!=null&&!a,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(e=>l[e]?e:null).filter(e=>e!=null)},p1=new WeakSet,v3="fa-auto-css";function e5(c,a){if(!a.autoAddCss||p1.has(c))return;if(c.getElementById(v3)!=null){a.autoAddCss=!1,p1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",v3),l.innerHTML=d3.css();let e=c.head.childNodes,r=null;for(let s=e.length-1;s>-1;s--){let i=e[s],n=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}c.head.insertBefore(l,r),a.autoAddCss=!1,p1.add(c)}var r5=c=>c.prefix!==void 0&&c.iconName!==void 0,s5=(c,a)=>r5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},i5=(()=>{class c{stackItemSize=p2("1x");size=p2();_effect=L1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=g1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),n5=(()=>{class c{size=p2();classes=C(()=>{let l=this.size(),e=l?{[`fa-${l}`]:!0}:{};return E(y({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=e2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&A1(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:Q8,decls:1,vars:0,template:function(e,r){e&1&&(y1(),w1(0))},encapsulation:2,changeDetection:0})}return c})(),h3=(()=>{class c{icon=w();title=w();animation=w();mask=w();flip=w();size=w();pull=w();border=w();inverse=w();symbol=w();rotate=w();fixedWidth=w();transform=w();a11yRole=w();renderedIconHTML=C(()=>{let l=this.icon()??this.config.fallbackIcon;if(!l)return a5(),"";let e=this.findIconDefinition(l);if(!e)return"";let r=this.buildParams();e5(this.document,this.config);let s=L3(e,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});document=S(M1);sanitizer=S(F1);config=S(J8);iconLibrary=S(Z8);stackItem=S(i5,{optional:!0});stack=S(n5,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(l){let e=s5(l,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(c5(e),null)}buildParams(){let l=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof l=="boolean"?l:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?M3.transform(r):r,i=this.mask(),n=i!=null?this.findIconDefinition(i):null,f={},t=this.a11yRole();t!=null&&(f.role=t);let z={};return e.rotate!=null&&!g3(e.rotate)&&(z["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:s,classes:l5(e),mask:n??void 0,symbol:this.symbol(),attributes:f,styles:z}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=e2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(S1("innerHTML",r.renderedIconHTML(),v1),h1("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var E5={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]};var I5={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]};var U5={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]};var O5={prefix:"fas",iconName:"arrows-up-down",icon:[256,512,["arrows-v"],"f07d","M150.6-22.6c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 77.3 96 434.7 54.6 393.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6 6 14.1 9.4 22.6 9.4s16.6-3.4 22.6-9.4l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-41.4 41.4 0-357.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"]};var C3={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]};var W5={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]};var q5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]};var x3={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var G5={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};var _5={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M263.4-27L278.2 9.8 315 24.6c3 1.2 5 4.2 5 7.4s-2 6.2-5 7.4L278.2 54.2 263.4 91c-1.2 3-4.2 5-7.4 5s-6.2-2-7.4-5L233.8 54.2 197 39.4c-3-1.2-5-4.2-5-7.4s2-6.2 5-7.4L233.8 9.8 248.6-27c1.2-3 4.2-5 7.4-5s6.2 2 7.4 5zM110.7 41.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7L59.8 164.2 9.7 142.7C3.8 140.2 0 134.4 0 128s3.8-12.2 9.7-14.7L59.8 91.8 81.3 41.7C83.8 35.8 89.6 32 96 32s12.2 3.8 14.7 9.7zM464 304c6.4 0 12.2 3.8 14.7 9.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7l-21.5-50.1-50.1-21.5c-5.9-2.5-9.7-8.3-9.7-14.7s3.8-12.2 9.7-14.7l50.1-21.5 21.5-50.1c2.5-5.9 8.3-9.7 14.7-9.7zM460 0c11 0 21.6 4.4 29.5 12.2l42.3 42.3C539.6 62.4 544 73 544 84s-4.4 21.6-12.2 29.5l-88.2 88.2-101.3-101.3 88.2-88.2C438.4 4.4 449 0 460 0zM44.2 398.5L308.4 134.3 409.7 235.6 145.5 499.8C137.6 507.6 127 512 116 512s-21.6-4.4-29.5-12.2L44.2 457.5C36.4 449.6 32 439 32 428s4.4-21.6 12.2-29.5z"]};var j5={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]};var V5={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M24 192l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-46.7-46.7c75.3-58.6 184.3-53.3 253.5 15.9 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-10.2-10.2-19-21.3-26.4-33-9.5-14.9-29.3-19.3-44.2-9.8s-19.3 29.3-9.8 44.2C49.7 408.7 61.4 423.5 75 437 175 537 337 537 437 437S537 175 437 75C342.8-19.3 193.3-24.7 92.7 58.8L41 7C34.1 .2 23.8-1.9 14.8 1.8S0 14.3 0 24L0 168c0 13.3 10.7 24 24 24z"]};var $5={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var X5={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]};var K5={prefix:"fas",iconName:"arrows-left-right",icon:[576,512,["arrows-h"],"f07e","M470.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l41.4 41.4-357.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-41.4-41.4 357.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]};var Y5={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]};var Q5={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"]};var S3={prefix:"fas",iconName:"layer-group",icon:[512,512,[],"f5fd","M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"]};var N3="dailylang_settings";function b3(){return{aiProvider:"gemini",openaiApiKey:"",geminiApiKey:"",defaultSentenceCount:3,jpFont:"noto-sans",selectedLevel:"N5",selectedLanguage:"japanese",writingDirection:"horizontal",longPressAction:"markKnown",dailyFlashcardLimit:20,geminiModel:"gemini-2.5-flash-lite",openaiModel:"gpt-4.1",anki:{deckName:"DailyLang Japanese"}}}var H=class c{_settings=F(this.load());settings=this._settings.asReadonly();aiProvider=C(()=>this._settings().aiProvider);anki=C(()=>this._settings().anki);defaultSentenceCount=C(()=>this._settings().defaultSentenceCount);selectedLevel=C(()=>this._settings().selectedLevel);selectedLanguage=C(()=>this._settings().selectedLanguage);longPressAction=C(()=>this._settings().longPressAction);get activeApiKey(){let a=this._settings();return a.aiProvider==="gemini"?a.geminiApiKey:a.openaiApiKey}update(a){let l=y(y({},this._settings()),a);this._settings.set(l),this.save(l)}updateAnki(a){let l=E(y({},this._settings()),{anki:y(y({},this._settings().anki),a)});this._settings.set(l),this.save(l)}setLongPressAction(a){this.update({longPressAction:a})}load(){try{let a=localStorage.getItem(N3);if(a)return y(y({},b3()),JSON.parse(a))}catch{}return b3()}save(a){try{localStorage.setItem(N3,JSON.stringify(a))}catch{}}static \u0275fac=function(l){return new(l||c)};static \u0275prov=T({token:c,factory:c.\u0275fac,providedIn:"root"})};var y3="dailylang_anki_queue",k2=class c{settings=S(H);_queue=F(this.loadQueue());queue=this._queue.asReadonly();queueCount=C(()=>this._queue().length);addCard(a,l,e,r){if(this._queue().find(f=>f.word===a))return;let i={id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,front:`<div class="word">${a}</div><div class="reading">${l}</div>`,back:`<div class="meaning">${e}</div><div class="example">${r}</div>`,word:a,reading:l,meaning:e,example:r,addedAt:Date.now()},n=[...this._queue(),i];this._queue.set(n),this.saveQueue(n)}removeCard(a){let l=this._queue().filter(e=>e.id!==a);this._queue.set(l),this.saveQueue(l)}clearQueue(){this._queue.set([]),this.saveQueue([])}async exportDeck(){let a=this._queue();if(a.length===0)return;let l=this.settings.anki().deckName,e=await this.generateApkg(a,l);this.triggerDownload(e,`${l.replace(/\s+/g,"_")}.apkg`)}async generateApkg(a,l){let{default:e}=await import("./chunk-VPQHHS2I.js"),r=await e({locateFile:()=>"/assets/sql-wasm.wasm"}),s=new r.Database,i=Math.floor(Date.now()/1e3),n=Date.now(),f=n+1,t={id:String(f),name:"DailyLang Basic",type:0,mod:i,usn:-1,sortf:0,did:n,tmpls:[{name:"Card 1",ord:0,qfmt:"{{Word}}<br><small>{{Reading}}</small>",afmt:'{{FrontSide}}<hr id="answer">{{Meaning}}<br><i>{{Example}}</i>',bqfmt:"",bafmt:"",did:null,bfont:"",bsize:0}],flds:[{name:"Word",ord:0,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]},{name:"Reading",ord:1,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]},{name:"Meaning",ord:2,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]},{name:"Example",ord:3,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]}],css:".card { font-family: arial; font-size: 20px; text-align: center; } .reading { color: #666; font-size: 14px; }",latexPre:"",latexPost:"",req:[[0,"any",[0]]]},z={[n]:{id:n,name:l,desc:"",extendRev:50,usn:-1,collapsed:!1,browserCollapsed:!1,newToday:[0,0],revToday:[0,0],lrnToday:[0,0],timeToday:[0,0],dyn:0,extendNew:10,conf:1,mod:i}},m={1:{id:1,name:"Default",replayq:!0,lapse:{leechFails:8,minInt:1,delays:[10],leechAction:0,mult:0},rev:{perDay:200,ease4:1.3,fuzz:.05,minSpace:1,ivlFct:1,maxIvl:36500,bury:!0,hardFactor:1.2},timer:0,maxTaken:60,usn:-1,new:{perDay:20,delays:[1,10],separate:!0,ints:[1,4,7],initialFactor:2500,bury:!0,order:1},mod:i,autoplay:!0}},M={models:{[f]:t},decks:z,dconf:m};s.run("CREATE TABLE col (id integer primary key, crt integer not null, mod integer not null, scm integer not null, ver integer not null, dty integer not null, usn integer not null, ls integer not null, conf text not null, models text not null, decks text not null, dconf text not null, tags text not null);"),s.run("CREATE TABLE notes (id integer primary key, guid text not null, mid integer not null, mod integer not null, usn integer not null, tags text not null, flds text not null, sfld integer not null, csum integer not null, flags integer not null, data text not null);"),s.run("CREATE TABLE cards (id integer primary key, nid integer not null, did integer not null, ord integer not null, mod integer not null, usn integer not null, type integer not null, queue integer not null, due integer not null, ivl integer not null, factor integer not null, reps integer not null, lapses integer not null, left integer not null, odue integer not null, odid integer not null, flags integer not null, data text not null);"),s.run("CREATE TABLE revlog (id integer primary key, cid integer not null, usn integer not null, ease integer not null, ivl integer not null, lastIvl integer not null, factor integer not null, time integer not null, type integer not null);"),s.run("CREATE TABLE graves (usn integer not null, oid integer not null, type integer not null);"),s.run("INSERT INTO col VALUES (1, ?, ?, ?, 11, 0, -1, 0, '{}', ?, ?, ?, '{}')",[i,i,i,JSON.stringify(M.models),JSON.stringify(M.decks),JSON.stringify(M.dconf)]),a.forEach((g,h)=>{let N=n+h+10,k=n+h+1e3,q=`${g.word}${g.reading}${g.meaning}${g.example}`,P=this.checksum(g.word);s.run("INSERT INTO notes VALUES (?, ?, ?, ?, -1, '', ?, ?, ?, 0, '')",[N,this.guid(),f,i,q,g.word,P]),s.run("INSERT INTO cards VALUES (?, ?, ?, 0, ?, -1, 0, 0, ?, 0, 0, 0, 0, 0, 0, 0, 0, '')",[k,N,n,i,h+1])});let d=s.export();s.close();let{zipSync:x}=await import("./chunk-BGFR6G6E.js");return x({"collection.anki2":d,media:new TextEncoder().encode("{}")})}checksum(a){let l=0;for(let e=0;e<a.length;e++){let r=a.charCodeAt(e);l=(l<<5)-l+r,l=l&l}return Math.abs(l)}guid(){return Math.random().toString(36).slice(2,10)}triggerDownload(a,l){let e=new Blob([a.buffer],{type:"application/zip"}),r=URL.createObjectURL(e),s=document.createElement("a");s.href=r,s.download=l,s.click(),URL.revokeObjectURL(r)}loadQueue(){try{let a=localStorage.getItem(y3);if(a)return JSON.parse(a)}catch{}return[]}saveQueue(a){try{localStorage.setItem(y3,JSON.stringify(a))}catch{}}static \u0275fac=function(l){return new(l||c)};static \u0275prov=T({token:c,factory:c.\u0275fac,providedIn:"root"})};var w3="dailylang_flashcard_states",k3="dailylang_flashcard_daily_new",d1=[6e4,30*6e4];function A2(){return new Date().toISOString().slice(0,10)}var P2=class c{anki=S(k2);settings=S(H);_states=F(this.loadStates());_dailyNewCount=F(this.loadDailyNewCount());_now=F(Date.now());constructor(){setInterval(()=>this._now.set(Date.now()),3e4)}newCardsToday=C(()=>this._dailyNewCount().count);reviewedToday=this.newCardsToday;remainingNewToday=C(()=>Math.max(0,this.settings.settings().dailyFlashcardLimit-this.newCardsToday()));reviewQueue=C(()=>{let a=this.remainingNewToday(),l=this._now(),e=this._states(),r=0;return this.anki.queue().filter(s=>{let i=e.get(s.id);return i?i.dueDate<=l:r<a?(r++,!0):!1})});hasPendingLearning=C(()=>{let a=this._now();for(let l of this._states().values())if(l.learningStep!==void 0&&l.dueDate>a)return!0;return!1});dueCount=C(()=>this.reviewQueue().length);totalCards=C(()=>this.anki.queue().length);getState(a){return this._states().get(a)??this.defaultState(a)}review(a,l){let e=!this._states().has(a),r=this.getState(a),s=l==="again"?1:l==="good"?3:5,i=this.sm2(r,s),n=new Map(this._states());if(n.set(a,i),this._states.set(n),this.saveStates(n),e){let f=A2(),t=this._dailyNewCount(),z={date:f,count:t.date===f?t.count+1:1};this._dailyNewCount.set(z),this.saveDailyNewCount(z)}}resetAll(){this._states.set(new Map),this.saveStates(new Map);let a={count:0,date:A2()};this._dailyNewCount.set(a),this.saveDailyNewCount(a)}sm2(a,l){let e=a.learningStep!==void 0;if(l<3)return E(y({},a),{learningStep:0,dueDate:Date.now()+d1[0],repetitions:0,interval:0,lapses:e?a.lapses:a.lapses+1});if(e){let r=a.learningStep+1;return r>=d1.length?this.graduate(a):E(y({},a),{learningStep:r,dueDate:Date.now()+d1[r]})}return this.sm2Graduated(a,l)}graduate(a){return E(y({},a),{learningStep:void 0,interval:1,repetitions:1,dueDate:Date.now()+864e5})}sm2Graduated(a,l){let{ease:e,interval:r,repetitions:s,lapses:i}=a;return s<=1?r=s===0?1:6:r=Math.round(r*e),s++,e=e+(.1-(5-l)*(.08+(5-l)*.02)),e<1.3&&(e=1.3),E(y({},a),{learningStep:void 0,ease:e,interval:r,repetitions:s,dueDate:Date.now()+r*864e5,lapses:i})}defaultState(a){return{cardId:a,ease:2.5,interval:0,repetitions:0,dueDate:0,lapses:0}}loadStates(){try{let a=localStorage.getItem(w3);if(a){let l=JSON.parse(a);return new Map(l.map(e=>[e.cardId,e]))}}catch{}return new Map}saveStates(a){try{localStorage.setItem(w3,JSON.stringify(Array.from(a.values())))}catch{}}loadDailyNewCount(){try{let a=localStorage.getItem(k3);if(a){let l=JSON.parse(a);if(l.date===A2())return l}}catch{}return{date:A2(),count:0}}saveDailyNewCount(a){try{localStorage.setItem(k3,JSON.stringify(a))}catch{}}static \u0275fac=function(l){return new(l||c)};static \u0275prov=T({token:c,factory:c.\u0275fac,providedIn:"root"})};var A3="dailylang_last_topic",T2=class c{settings=S(H);content=F(null);showTranslation=F(!1);writingDirection=C(()=>this.settings.settings().writingDirection);_cache=new Map;_lastTopics=this.loadLastTopics();getLastTopic(a){return this._lastTopics[a]}setContent(a){this._cache.set(a.language,a),this.content.set(a),this.showTranslation.set(!1),a.topic&&(this._lastTopics[a.language]=a.topic,this.saveLastTopics())}loadLastTopics(){try{let a=localStorage.getItem(A3);if(a)return JSON.parse(a)}catch{}return{}}saveLastTopics(){try{localStorage.setItem(A3,JSON.stringify(this._lastTopics))}catch{}}switchLanguage(a){this.content.set(this._cache.get(a)??null),this.showTranslation.set(!1)}toggleDirection(){let a=this.settings.settings().writingDirection==="horizontal"?"vertical":"horizontal";this.settings.update({writingDirection:a})}toggleTranslation(){this.showTranslation.update(a=>!a)}static \u0275fac=function(l){return new(l||c)};static \u0275prov=T({token:c,factory:c.\u0275fac,providedIn:"root"})};var f5=(c,a)=>a.value;function o5(c,a){if(c&1&&(I(0,"option",10),s2(1),_()),c&2){let l=a.$implicit,e=b1();J("value",l.value)("selected",l.value===e.selectedLanguage()),G(),P1(l.label)}}var P3=class c{settings=S(H);flashcards=S(P2);state=S(T2);faGear=C3;faCards=S3;faChevron=x3;languages=[{value:"japanese",label:"\u65E5\u672C\u8A9E"},{value:"arabic",label:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"}];selectedLanguage=this.settings.selectedLanguage;dueCount=this.flashcards.dueCount;onLanguageChange(a){let l=a==="arabic"?"A1":"N5";this.settings.update({selectedLanguage:a,selectedLevel:l}),this.state.switchLanguage(a)}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=e2({type:c,selectors:[["app-nav"]],decls:21,vars:9,consts:[[1,"fixed","top-0","left-0","right-0","z-50","bg-surface/92","backdrop-blur-md","border-b","border-border"],[1,"max-w-xl","mx-auto","px-4","h-14","flex","items-center","justify-between"],["routerLink","/",1,"nav-wordmark-link"],["src","icon.svg","alt","","aria-hidden","true",1,"w-[22px]","h-[22px]","rounded-[5px]"],[1,"nav-wordmark"],[1,"nav-wordmark-daily"],[1,"nav-wordmark-lang"],[1,"flex","items-center","gap-1"],[1,"nav-lang-wrapper"],["aria-label","Select language",1,"nav-lang-select",3,"change","value"],[3,"value","selected"],["aria-hidden","true",1,"nav-lang-chevron",3,"icon"],["routerLink","/flashcards","title","Flashcard review",1,"btn-icon","ml-0.5","relative"],[3,"icon"],[1,"absolute","-top-0.5","-right-0.5","w-3.5","h-3.5","bg-accent","text-white","text-[8px]","font-bold","rounded-full","flex","items-center","justify-center","leading-none"],["routerLink","/settings","title","Settings",1,"btn-icon","ml-1"]],template:function(l,e){l&1&&(I(0,"nav",0)(1,"div",1)(2,"a",2),r2(3,"img",3),I(4,"span",4)(5,"span",5),s2(6,"Daily"),_(),I(7,"span",6),s2(8,"Lang"),_()()(),I(9,"div",7)(10,"div",8)(11,"select",9),N1("change",function(s){return e.onLanguageChange(s.target.value)}),C1(12,o5,2,3,"option",10,f5),_(),r2(14,"fa-icon",11),_(),I(15,"a",12),r2(16,"fa-icon",13),I(17,"span",14),s2(18),_()(),I(19,"a",15),r2(20,"fa-icon",13),_()()()()),l&2&&(G(11),k1("ar-noto-sans",e.selectedLanguage()==="arabic")("jp-noto-sans",e.selectedLanguage()==="japanese"),J("value",e.selectedLanguage()),G(),x1(e.languages),G(2),J("icon",e.faChevron),G(2),J("icon",e.faCards),G(2),T1(" ",e.dueCount()>9?"9+":e.dueCount()," "),G(2),J("icon",e.faGear))},dependencies:[D1,h3],styles:[".nav-wordmark-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;text-decoration:none}.nav-wordmark[_ngcontent-%COMP%]{font-size:17px;letter-spacing:-.03em;line-height:1}.nav-wordmark-daily[_ngcontent-%COMP%]{font-weight:300;color:var(--color-muted);transition:color .18s ease}.nav-wordmark-lang[_ngcontent-%COMP%]{font-weight:300;color:var(--color-accent);transition:color .18s ease}.nav-wordmark-link[_ngcontent-%COMP%]:hover   .nav-wordmark-daily[_ngcontent-%COMP%]{color:var(--color-text)}.nav-lang-wrapper[_ngcontent-%COMP%]{position:relative;display:inline-flex;align-items:center}.nav-lang-select[_ngcontent-%COMP%]{appearance:none;-webkit-appearance:none;background:transparent;border:1px solid var(--color-border);border-radius:8px;padding:4px 24px 4px 8px;font-size:12px;color:var(--color-muted);cursor:pointer;transition:border-color .15s ease,color .15s ease;line-height:1.4}.nav-lang-select[_ngcontent-%COMP%]:hover, .nav-lang-select[_ngcontent-%COMP%]:focus{border-color:color-mix(in srgb,var(--color-accent) 60%,transparent);color:var(--color-accent);outline:none}.nav-lang-chevron[_ngcontent-%COMP%]{position:absolute;right:7px;pointer-events:none;font-size:8px;color:var(--color-muted)}[_nghost-%COMP%]{display:block}nav[_ngcontent-%COMP%]{padding-top:env(safe-area-inset-top,0px)}"]})};export{h3 as a,E5 as b,I5 as c,U5 as d,O5 as e,C3 as f,W5 as g,q5 as h,G5 as i,_5 as j,j5 as k,V5 as l,$5 as m,X5 as n,K5 as o,Y5 as p,Q5 as q,H as r,k2 as s,P2 as t,T2 as u,P3 as v};
