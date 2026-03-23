import{$ as N1,A as M1,E as Q,F as L1,Ia as F1,J as v1,Ka as D1,L as F,O as V,Q as g1,V as p2,W as h1,X as C1,Z as x1,_ as S1,aa as b1,ba as J,ca as r2,da as D2,ea as Z,fa as $,ha as d2,ja as y1,ka as w1,la as k1,ma as A1,oa as P1,pa as W,qa as M2,r as B,v as R,wa as w,xa as T1,ya as O,za as N}from"./chunk-WMF7NYEB.js";import{a as T,b as u2}from"./chunk-UUTQQLSI.js";function O2(c,l){(l==null||l>c.length)&&(l=c.length);for(var a=0,e=Array(l);a<l;a++)e[a]=c[a];return e}function T3(c){if(Array.isArray(c))return c}function F3(c){if(Array.isArray(c))return O2(c)}function D3(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function B1(c,l){for(var a=0;a<l.length;a++){var e=l[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,z4(e.key),e)}}function B3(c,l,a){return l&&B1(c.prototype,l),a&&B1(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function g2(c,l){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=l1(c))||l&&c&&typeof c.length=="number"){a&&(c=a);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,n=!1;return{s:function(){a=a.call(c)},n:function(){var f=a.next();return i=f.done,f},e:function(f){n=!0,s=f},f:function(){try{i||a.return==null||a.return()}finally{if(n)throw s}}}}function p(c,l,a){return(l=z4(l))in c?Object.defineProperty(c,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[l]=a,c}function R3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function H3(c,l){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var e,r,s,i,n=[],f=!0,t=!1;try{if(s=(a=a.call(c)).next,l===0){if(Object(a)!==a)return;f=!1}else for(;!(f=(e=s.call(a)).done)&&(n.push(e.value),n.length!==l);f=!0);}catch(z){t=!0,r=z}finally{try{if(!f&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(t)throw r}}return n}}function E3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R1(c,l){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);l&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,e)}return a}function o(c){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?R1(Object(a),!0).forEach(function(e){p(c,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):R1(Object(a)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(a,e))})}return c}function b2(c,l){return T3(c)||H3(c,l)||l1(c,l)||E3()}function P(c){return F3(c)||R3(c)||l1(c)||I3()}function U3(c,l){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var e=a.call(c,l||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function z4(c){var l=U3(c,"string");return typeof l=="symbol"?l:l+""}function x2(c){"@babel/helpers - typeof";return x2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},x2(c)}function l1(c,l){if(c){if(typeof c=="string")return O2(c,l);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?O2(c,l):void 0}}var H1=function(){},e1={},u4={},p4=null,d4={mark:H1,measure:H1};try{typeof window<"u"&&(e1=window),typeof document<"u"&&(u4=document),typeof MutationObserver<"u"&&(p4=MutationObserver),typeof performance<"u"&&(d4=performance)}catch{}var W3=e1.navigator||{},E1=W3.userAgent,I1=E1===void 0?"":E1,G=e1,L=u4,U1=p4,L2=d4,o5=!!G.document,I=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",M4=~I1.indexOf("MSIE")||~I1.indexOf("Trident/"),B2,O3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,q3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,L4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},G3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},v4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],S="classic",o2="duotone",g4="sharp",h4="sharp-duotone",C4="chisel",x4="etch",S4="graphite",N4="jelly",b4="jelly-duo",y4="jelly-fill",w4="notdog",k4="notdog-duo",A4="slab",P4="slab-press",T4="thumbprint",F4="utility",D4="utility-duo",B4="utility-fill",R4="whiteboard",j3="Classic",_3="Duotone",V3="Sharp",$3="Sharp Duotone",X3="Chisel",K3="Etch",Y3="Graphite",Q3="Jelly",J3="Jelly Duo",Z3="Jelly Fill",c0="Notdog",a0="Notdog Duo",l0="Slab",e0="Slab Press",r0="Thumbprint",s0="Utility",i0="Utility Duo",n0="Utility Fill",f0="Whiteboard",H4=[S,o2,g4,h4,C4,x4,S4,N4,b4,y4,w4,k4,A4,P4,T4,F4,D4,B4,R4],t5=(B2={},p(p(p(p(p(p(p(p(p(p(B2,S,j3),o2,_3),g4,V3),h4,$3),C4,X3),x4,K3),S4,Y3),N4,Q3),b4,J3),y4,Z3),p(p(p(p(p(p(p(p(p(B2,w4,c0),k4,a0),A4,l0),P4,e0),T4,r0),F4,s0),D4,i0),B4,n0),R4,f0)),o0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},t0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},m0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),z0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},E4=["fak","fa-kit","fakd","fa-kit-duotone"],W1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},u0=["kit"],p0="kit",d0="kit-duotone",M0="Kit",L0="Kit Duotone",m5=p(p({},p0,M0),d0,L0),v0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},g0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},h0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},O1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},R2,v2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},C0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],x0="classic",S0="duotone",N0="sharp",b0="sharp-duotone",y0="chisel",w0="etch",k0="graphite",A0="jelly",P0="jelly-duo",T0="jelly-fill",F0="notdog",D0="notdog-duo",B0="slab",R0="slab-press",H0="thumbprint",E0="utility",I0="utility-duo",U0="utility-fill",W0="whiteboard",O0="Classic",q0="Duotone",G0="Sharp",j0="Sharp Duotone",_0="Chisel",V0="Etch",$0="Graphite",X0="Jelly",K0="Jelly Duo",Y0="Jelly Fill",Q0="Notdog",J0="Notdog Duo",Z0="Slab",c6="Slab Press",a6="Thumbprint",l6="Utility",e6="Utility Duo",r6="Utility Fill",s6="Whiteboard",z5=(R2={},p(p(p(p(p(p(p(p(p(p(R2,x0,O0),S0,q0),N0,G0),b0,j0),y0,_0),w0,V0),k0,$0),A0,X0),P0,K0),T0,Y0),p(p(p(p(p(p(p(p(p(R2,F0,Q0),D0,J0),B0,Z0),R0,c6),H0,a6),E0,l6),I0,e6),U0,r6),W0,s6)),i6="kit",n6="kit-duotone",f6="Kit",o6="Kit Duotone",u5=p(p({},i6,f6),n6,o6),t6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},m6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},q2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},z6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],I4=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(C0,z6),u6=["solid","regular","light","thin","duotone","brands","semibold"],U4=[1,2,3,4,5,6,7,8,9,10],p6=U4.concat([11,12,13,14,15,16,17,18,19,20]),d6=["aw","fw","pull-left","pull-right"],M6=[].concat(P(Object.keys(m6)),u6,d6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",v2.GROUP,v2.SWAP_OPACITY,v2.PRIMARY,v2.SECONDARY]).concat(U4.map(function(c){return"".concat(c,"x")})).concat(p6.map(function(c){return"w-".concat(c)})),L6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},H="___FONT_AWESOME___",G2=16,W4="fa",O4="svg-inline--fa",K="data-fa-i2svg",j2="data-fa-pseudo-element",v6="data-fa-pseudo-element-pending",r1="data-prefix",s1="data-icon",q1="fontawesome-i2svg",g6="async",h6=["HTML","HEAD","STYLE","SCRIPT"],q4=["::before","::after",":before",":after"],G4=(function(){try{return!0}catch{return!1}})();function t2(c){return new Proxy(c,{get:function(a,e){return e in a?a[e]:a[S]}})}var j4=o({},L4);j4[S]=o(o(o(o({},{"fa-duotone":"duotone"}),L4[S]),W1.kit),W1["kit-duotone"]);var C6=t2(j4),_2=o({},z0);_2[S]=o(o(o(o({},{duotone:"fad"}),_2[S]),O1.kit),O1["kit-duotone"]);var G1=t2(_2),V2=o({},q2);V2[S]=o(o({},V2[S]),h0.kit);var i1=t2(V2),$2=o({},t6);$2[S]=o(o({},$2[S]),v0.kit);var p5=t2($2),x6=O3,_4="fa-layers-text",S6=q3,N6=o({},o0),d5=t2(N6),b6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H2=G3,y6=[].concat(P(u0),P(M6)),i2=G.FontAwesomeConfig||{};function w6(c){var l=L.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function k6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(j1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],j1.forEach(function(c){var l=b2(c,2),a=l[0],e=l[1],r=k6(w6(a));r!=null&&(i2[e]=r)}));var j1,V4={styleDefault:"solid",familyDefault:S,cssPrefix:W4,replacementClass:O4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};i2.familyPrefix&&(i2.cssPrefix=i2.familyPrefix);var l2=o(o({},V4),i2);l2.autoReplaceSvg||(l2.observeMutations=!1);var u={};Object.keys(V4).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(a){l2[c]=a,n2.forEach(function(e){return e(u)})},get:function(){return l2[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(l){l2.cssPrefix=l,n2.forEach(function(a){return a(u)})},get:function(){return l2.cssPrefix}});G.FontAwesomeConfig=u;var n2=[];function A6(c){return n2.push(c),function(){n2.splice(n2.indexOf(c),1)}}var q=G2,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function P6(c){if(!(!c||!I)){var l=L.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;for(var a=L.head.childNodes,e=null,r=a.length-1;r>-1;r--){var s=a[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=s)}return L.head.insertBefore(l,e),c}}var T6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _1(){for(var c=12,l="";c-- >0;)l+=T6[Math.random()*62|0];return l}function e2(c){for(var l=[],a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function n1(c){return c.classList?e2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(l){return l})}function $4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F6(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,'="').concat($4(c[a]),'" ')},"").trim()}function y2(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,": ").concat(c[a].trim(),";")},"")}function f1(c){return c.size!==D.size||c.x!==D.x||c.y!==D.y||c.rotate!==D.rotate||c.flipX||c.flipY}function D6(c){var l=c.transform,a=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(l.x*32,", ").concat(l.y*32,") "),i="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),n="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(s," ").concat(i," ").concat(n)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:t}}function B6(c){var l=c.transform,a=c.width,e=a===void 0?G2:a,r=c.height,s=r===void 0?G2:r,i=c.startCentered,n=i===void 0?!1:i,f="";return n&&M4?f+="translate(".concat(l.x/q-e/2,"em, ").concat(l.y/q-s/2,"em) "):n?f+="translate(calc(-50% + ".concat(l.x/q,"em), calc(-50% + ").concat(l.y/q,"em)) "):f+="translate(".concat(l.x/q,"em, ").concat(l.y/q,"em) "),f+="scale(".concat(l.size/q*(l.flipX?-1:1),", ").concat(l.size/q*(l.flipY?-1:1),") "),f+="rotate(".concat(l.rotate,"deg) "),f}var R6=`:root, :host {
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
}`;function X4(){var c=W4,l=O4,a=u.cssPrefix,e=u.replacementClass,r=R6;if(a!==c||e!==l){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(l),"g");r=r.replace(s,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(n,".".concat(e))}return r}var V1=!1;function E2(){u.autoAddCss&&!V1&&(P6(X4()),V1=!0)}var H6={mixout:function(){return{dom:{css:X4,insertCss:E2}}},hooks:function(){return{beforeDOMElementCreation:function(){E2()},beforeI2svg:function(){E2()}}}},E=G||{};E[H]||(E[H]={});E[H].styles||(E[H].styles={});E[H].hooks||(E[H].hooks={});E[H].shims||(E[H].shims=[]);var A=E[H],K4=[],Y4=function(){L.removeEventListener("DOMContentLoaded",Y4),S2=1,K4.map(function(l){return l()})},S2=!1;I&&(S2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),S2||L.addEventListener("DOMContentLoaded",Y4));function E6(c){I&&(S2?setTimeout(c,0):K4.push(c))}function m2(c){var l=c.tag,a=c.attributes,e=a===void 0?{}:a,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?$4(c):"<".concat(l," ").concat(F6(e),">").concat(s.map(m2).join(""),"</").concat(l,">")}function $1(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var I6=function(l,a){return function(e,r,s,i){return l.call(a,e,r,s,i)}},I2=function(l,a,e,r){var s=Object.keys(l),i=s.length,n=r!==void 0?I6(a,r):a,f,t,z;for(e===void 0?(f=1,z=l[s[0]]):(f=0,z=e);f<i;f++)t=s[f],z=n(z,l[t],t,l);return z};function Q4(c){return P(c).length!==1?null:c.codePointAt(0).toString(16)}function X1(c){return Object.keys(c).reduce(function(l,a){var e=c[a],r=!!e.icon;return r?l[e.iconName]=e.icon:l[a]=e,l},{})}function X2(c,l){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,s=X1(l);typeof A.hooks.addPack=="function"&&!r?A.hooks.addPack(c,X1(l)):A.styles[c]=o(o({},A.styles[c]||{}),s),c==="fas"&&X2("fa",l)}var f2=A.styles,U6=A.shims,J4=Object.keys(i1),W6=J4.reduce(function(c,l){return c[l]=Object.keys(i1[l]),c},{}),o1=null,Z4={},c3={},a3={},l3={},e3={};function O6(c){return~y6.indexOf(c)}function q6(c,l){var a=l.split("-"),e=a[0],r=a.slice(1).join("-");return e===c&&r!==""&&!O6(r)?r:null}var r3=function(){var l=function(s){return I2(f2,function(i,n,f){return i[f]=I2(n,s,{}),i},{})};Z4=l(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var n=s[2].filter(function(f){return typeof f=="number"});n.forEach(function(f){r[f.toString(16)]=i})}return r}),c3=l(function(r,s,i){if(r[i]=i,s[2]){var n=s[2].filter(function(f){return typeof f=="string"});n.forEach(function(f){r[f]=i})}return r}),e3=l(function(r,s,i){var n=s[2];return r[i]=i,n.forEach(function(f){r[f]=i}),r});var a="far"in f2||u.autoFetchSvg,e=I2(U6,function(r,s){var i=s[0],n=s[1],f=s[2];return n==="far"&&!a&&(n="fas"),typeof i=="string"&&(r.names[i]={prefix:n,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:n,iconName:f}),r},{names:{},unicodes:{}});a3=e.names,l3=e.unicodes,o1=w2(u.styleDefault,{family:u.familyDefault})};A6(function(c){o1=w2(c.styleDefault,{family:u.familyDefault})});r3();function t1(c,l){return(Z4[c]||{})[l]}function G6(c,l){return(c3[c]||{})[l]}function X(c,l){return(e3[c]||{})[l]}function s3(c){return a3[c]||{prefix:null,iconName:null}}function j6(c){var l=l3[c],a=t1("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function j(){return o1}var i3=function(){return{prefix:null,iconName:null,rest:[]}};function _6(c){var l=S,a=J4.reduce(function(e,r){return e[r]="".concat(u.cssPrefix,"-").concat(r),e},{});return H4.forEach(function(e){(c.includes(a[e])||c.some(function(r){return W6[e].includes(r)}))&&(l=e)}),l}function w2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.family,e=a===void 0?S:a,r=C6[e][c];if(e===o2&&!c)return"fad";var s=G1[e][c]||G1[e][r],i=c in A.styles?c:null,n=s||i||null;return n}function V6(c){var l=[],a=null;return c.forEach(function(e){var r=q6(u.cssPrefix,e);r?a=r:e&&l.push(e)}),{iconName:a,rest:l}}function K1(c){return c.sort().filter(function(l,a,e){return e.indexOf(l)===a})}var Y1=I4.concat(E4);function k2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.skipLookups,e=a===void 0?!1:a,r=null,s=K1(c.filter(function(d){return Y1.includes(d)})),i=K1(c.filter(function(d){return!Y1.includes(d)})),n=s.filter(function(d){return r=d,!v4.includes(d)}),f=b2(n,1),t=f[0],z=t===void 0?null:t,m=_6(s),M=o(o({},V6(i)),{},{prefix:w2(z,{family:m})});return o(o(o({},M),Y6({values:c,family:m,styles:f2,config:u,canonical:M,givenPrefix:r})),$6(e,r,M))}function $6(c,l,a){var e=a.prefix,r=a.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var s=l==="fa"?s3(r):{},i=X(e,r);return r=s.iconName||i||r,e=s.prefix||e,e==="far"&&!f2.far&&f2.fas&&!u.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var X6=H4.filter(function(c){return c!==S||c!==o2}),K6=Object.keys(q2).filter(function(c){return c!==S}).map(function(c){return Object.keys(q2[c])}).flat();function Y6(c){var l=c.values,a=c.family,e=c.canonical,r=c.givenPrefix,s=r===void 0?"":r,i=c.styles,n=i===void 0?{}:i,f=c.config,t=f===void 0?{}:f,z=a===o2,m=l.includes("fa-duotone")||l.includes("fad"),M=t.familyDefault==="duotone",d=e.prefix==="fad"||e.prefix==="fa-duotone";if(!z&&(m||M||d)&&(e.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(e.prefix="fab"),!e.prefix&&X6.includes(a)){var C=Object.keys(n).find(function(g){return K6.includes(g)});if(C||t.autoFetchSvg){var v=m0.get(a).defaultShortPrefixId;e.prefix=v,e.iconName=X(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||s==="fa")&&(e.prefix=j()||"fas"),e}var Q6=(function(){function c(){D3(this,c),this.definitions={}}return B3(c,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(n){a.definitions[n]=o(o({},a.definitions[n]||{}),i[n]),X2(n,i[n]);var f=i1[S][n];f&&X2(f,i[n]),r3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var i=r[s],n=i.prefix,f=i.iconName,t=i.icon,z=t[2];a[n]||(a[n]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(a[n][m]=t)}),a[n][f]=t}),a}}])})(),Q1=[],c2={},a2={},J6=Object.keys(a2);function Z6(c,l){var a=l.mixoutsTo;return Q1=c,c2={},Object.keys(a2).forEach(function(e){J6.indexOf(e)===-1&&delete a2[e]}),Q1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),x2(r[i])==="object"&&Object.keys(r[i]).forEach(function(n){a[i]||(a[i]={}),a[i][n]=r[i][n]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(i){c2[i]||(c2[i]=[]),c2[i].push(s[i])})}e.provides&&e.provides(a2)}),a}function K2(c,l){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var s=c2[c]||[];return s.forEach(function(i){l=i.apply(null,[l].concat(e))}),l}function Y(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),e=1;e<l;e++)a[e-1]=arguments[e];var r=c2[c]||[];r.forEach(function(s){s.apply(null,a)})}function _(){var c=arguments[0],l=Array.prototype.slice.call(arguments,1);return a2[c]?a2[c].apply(null,l):void 0}function Y2(c){c.prefix==="fa"&&(c.prefix="fas");var l=c.iconName,a=c.prefix||j();if(l)return l=X(a,l)||l,$1(n3.definitions,a,l)||$1(A.styles,a,l)}var n3=new Q6,c8=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,Y("noAuto")},a8={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(Y("beforeI2svg",l),_("pseudoElements2svg",l),_("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,E6(function(){e8({autoReplaceSvgRoot:a}),Y("watch",l)})}},l8={icon:function(l){if(l===null)return null;if(x2(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:X(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var a=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],e=w2(l[0]);return{prefix:e,iconName:X(e,a)||a}}if(typeof l=="string"&&(l.indexOf("".concat(u.cssPrefix,"-"))>-1||l.match(x6))){var r=k2(l.split(" "),{skipLookups:!0});return{prefix:r.prefix||j(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof l=="string"){var s=j();return{prefix:s,iconName:X(s,l)||l}}}},y={noAuto:c8,config:u,dom:a8,parse:l8,library:n3,findIconDefinition:Y2,toHtml:m2},e8=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot,e=a===void 0?L:a;(Object.keys(A.styles).length>0||u.autoFetchSvg)&&I&&u.autoReplaceSvg&&y.dom.i2svg({node:e})};function A2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return m2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(I){var e=L.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function r8(c){var l=c.children,a=c.main,e=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(f1(i)&&a.found&&!e.found){var n=a.width,f=a.height,t={x:n/f/2,y:.5};r.style=y2(o(o({},s),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:l}]}function s8(c){var l=c.prefix,a=c.iconName,e=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(l,"-").concat(u.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:i}),children:e}]}]}function i8(c){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(a){return a in c})}function m1(c){var l=c.icons,a=l.main,e=l.mask,r=c.prefix,s=c.iconName,i=c.transform,n=c.symbol,f=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,M=e.found?e:a,d=M.width,C=M.height,v=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(function(k){return t.classes.indexOf(k)===-1}).filter(function(k){return k!==""||!!k}).concat(t.classes).join(" "),g={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(d," ").concat(C)})};!i8(t.attributes)&&!t.attributes["aria-hidden"]&&(g.attributes["aria-hidden"]="true"),m&&(g.attributes[K]="");var h=o(o({},g),{},{prefix:r,iconName:s,main:a,mask:e,maskId:f,transform:i,symbol:n,styles:o({},t.styles)}),x=e.found&&a.found?_("generateAbstractMask",h)||{children:[],attributes:{}}:_("generateAbstractIcon",h)||{children:[],attributes:{}},b=x.children,U=x.attributes;return h.children=b,h.attributes=U,n?s8(h):r8(h)}function J1(c){var l=c.content,a=c.width,e=c.height,r=c.transform,s=c.extra,i=c.watchable,n=i===void 0?!1:i,f=o(o({},s.attributes),{},{class:s.classes.join(" ")});n&&(f[K]="");var t=o({},s.styles);f1(r)&&(t.transform=B6({transform:r,startCentered:!0,width:a,height:e}),t["-webkit-transform"]=t.transform);var z=y2(t);z.length>0&&(f.style=z);var m=[];return m.push({tag:"span",attributes:f,children:[l]}),m}function n8(c){var l=c.content,a=c.extra,e=o(o({},a.attributes),{},{class:a.classes.join(" ")}),r=y2(a.styles);r.length>0&&(e.style=r);var s=[];return s.push({tag:"span",attributes:e,children:[l]}),s}var U2=A.styles;function Q2(c){var l=c[0],a=c[1],e=c.slice(4),r=b2(e,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(H2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(H2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(H2.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:l,height:a,icon:i}}var f8={found:!1,width:512,height:512};function o8(c,l){!G4&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function J2(c,l){var a=l;return l==="fa"&&u.styleDefault!==null&&(l=j()),new Promise(function(e,r){if(a==="fa"){var s=s3(c)||{};c=s.iconName||c,l=s.prefix||l}if(c&&l&&U2[l]&&U2[l][c]){var i=U2[l][c];return e(Q2(i))}o8(c,l),e(o(o({},f8),{},{icon:u.showMissingIcons&&c?_("missingIconAbstract")||{}:{}}))})}var Z1=function(){},Z2=u.measurePerformance&&L2&&L2.mark&&L2.measure?L2:{mark:Z1,measure:Z1},s2='FA "7.2.0"',t8=function(l){return Z2.mark("".concat(s2," ").concat(l," begins")),function(){return f3(l)}},f3=function(l){Z2.mark("".concat(s2," ").concat(l," ends")),Z2.measure("".concat(s2," ").concat(l),"".concat(s2," ").concat(l," begins"),"".concat(s2," ").concat(l," ends"))},z1={begin:t8,end:f3},h2=function(){};function c4(c){var l=c.getAttribute?c.getAttribute(K):null;return typeof l=="string"}function m8(c){var l=c.getAttribute?c.getAttribute(r1):null,a=c.getAttribute?c.getAttribute(s1):null;return l&&a}function z8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function u8(){if(u.autoReplaceSvg===!0)return C2.replace;var c=C2[u.autoReplaceSvg];return c||C2.replace}function p8(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function d8(c){return L.createElement(c)}function o3(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.ceFn,e=a===void 0?c.tag==="svg"?p8:d8:a;if(typeof c=="string")return L.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(o3(i,{ceFn:e}))}),r}function M8(c){var l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var C2={replace:function(l){var a=l[0];if(a.parentNode)if(l[1].forEach(function(r){a.parentNode.insertBefore(o3(r),a)}),a.getAttribute(K)===null&&u.keepOriginalSource){var e=L.createComment(M8(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(l){var a=l[0],e=l[1];if(~n1(a).indexOf(u.replacementClass))return C2.replace(l);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(n,f){return f===u.replacementClass||f.match(r)?n.toSvg.push(f):n.toNode.push(f),n},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var i=e.map(function(n){return m2(n)}).join(`
`);a.setAttribute(K,""),a.innerHTML=i}};function a4(c){c()}function t3(c,l){var a=typeof l=="function"?l:h2;if(c.length===0)a();else{var e=a4;u.mutateApproach===g6&&(e=G.requestAnimationFrame||a4),e(function(){var r=u8(),s=z1.begin("mutate");c.map(r),s(),a()})}}var u1=!1;function m3(){u1=!0}function c1(){u1=!1}var N2=null;function l4(c){if(U1&&u.observeMutations){var l=c.treeCallback,a=l===void 0?h2:l,e=c.nodeCallback,r=e===void 0?h2:e,s=c.pseudoElementsCallback,i=s===void 0?h2:s,n=c.observeMutationsRoot,f=n===void 0?L:n;N2=new U1(function(t){if(!u1){var z=j();e2(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!c4(m.addedNodes[0])&&(u.searchPseudoElements&&i(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&i([m.target],!0),m.type==="attributes"&&c4(m.target)&&~b6.indexOf(m.attributeName))if(m.attributeName==="class"&&m8(m.target)){var M=k2(n1(m.target)),d=M.prefix,C=M.iconName;m.target.setAttribute(r1,d||z),C&&m.target.setAttribute(s1,C)}else z8(m.target)&&r(m.target)})}}),I&&N2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function L8(){N2&&N2.disconnect()}function v8(c){var l=c.getAttribute("style"),a=[];return l&&(a=l.split(";").reduce(function(e,r){var s=r.split(":"),i=s[0],n=s.slice(1);return i&&n.length>0&&(e[i]=n.join(":").trim()),e},{})),a}function g8(c){var l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=k2(n1(c));return r.prefix||(r.prefix=j()),l&&a&&(r.prefix=l,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=G6(r.prefix,c.innerText)||t1(r.prefix,Q4(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function h8(c){var l=e2(c.attributes).reduce(function(a,e){return a.name!=="class"&&a.name!=="style"&&(a[e.name]=e.value),a},{});return l}function C8(){return{iconName:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function e4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=g8(c),e=a.iconName,r=a.prefix,s=a.rest,i=h8(c),n=K2("parseNodeAttributes",{},c),f=l.styleParser?v8(c):[];return o({iconName:e,prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:i}},n)}var x8=A.styles;function z3(c){var l=u.autoReplaceSvg==="nest"?e4(c,{styleParser:!1}):e4(c);return~l.extra.classes.indexOf(_4)?_("generateLayersText",c,l):_("generateSvgReplacementMutation",c,l)}function S8(){return[].concat(P(E4),P(I4))}function r4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var a=L.documentElement.classList,e=function(m){return a.add("".concat(q1,"-").concat(m))},r=function(m){return a.remove("".concat(q1,"-").concat(m))},s=u.autoFetchSvg?S8():v4.concat(Object.keys(x8));s.includes("fa")||s.push("fa");var i=[".".concat(_4,":not([").concat(K,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat(K,"])")})).join(", ");if(i.length===0)return Promise.resolve();var n=[];try{n=e2(c.querySelectorAll(i))}catch{}if(n.length>0)e("pending"),r("complete");else return Promise.resolve();var f=z1.begin("onTree"),t=n.reduce(function(z,m){try{var M=z3(m);M&&z.push(M)}catch(d){G4||d.name==="MissingIcon"&&console.error(d)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(M){t3(M,function(){e("active"),e("complete"),r("pending"),typeof l=="function"&&l(),f(),z()})}).catch(function(M){f(),m(M)})})}function N8(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z3(c).then(function(a){a&&t3([a],l)})}function b8(c){return function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:Y2(l||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Y2(r||{})),c(e,o(o({},a),{},{mask:r}))}}var y8=function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?D:e,s=a.symbol,i=s===void 0?!1:s,n=a.mask,f=n===void 0?null:n,t=a.maskId,z=t===void 0?null:t,m=a.classes,M=m===void 0?[]:m,d=a.attributes,C=d===void 0?{}:d,v=a.styles,g=v===void 0?{}:v;if(l){var h=l.prefix,x=l.iconName,b=l.icon;return A2(o({type:"icon"},l),function(){return Y("beforeDOMElementCreation",{iconDefinition:l,params:a}),m1({icons:{main:Q2(b),mask:f?Q2(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:x,transform:o(o({},D),r),symbol:i,maskId:z,extra:{attributes:C,styles:g,classes:M}})})}},w8={mixout:function(){return{icon:b8(y8)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=r4,a.nodeCallback=N8,a}}},provides:function(l){l.i2svg=function(a){var e=a.node,r=e===void 0?L:e,s=a.callback,i=s===void 0?function(){}:s;return r4(r,i)},l.generateSvgReplacementMutation=function(a,e){var r=e.iconName,s=e.prefix,i=e.transform,n=e.symbol,f=e.mask,t=e.maskId,z=e.extra;return new Promise(function(m,M){Promise.all([J2(r,s),f.iconName?J2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var C=b2(d,2),v=C[0],g=C[1];m([a,m1({icons:{main:v,mask:g},prefix:s,iconName:r,transform:i,symbol:n,maskId:t,extra:z,watchable:!0})])}).catch(M)})},l.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,s=a.main,i=a.transform,n=a.styles,f=y2(n);f.length>0&&(r.style=f);var t;return f1(i)&&(t=_("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:r}}}},k8={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return A2({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:a,params:e});var i=[];return a(function(n){Array.isArray(n)?n.map(function(f){i=i.concat(f.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(P(s)).join(" ")},children:i}]})}}}},A8={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,i=e.classes,n=i===void 0?[]:i,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return A2({type:"counter",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:e}),n8({content:a.toString(),title:s,extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(P(n))}})})}}}},P8={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?D:r,i=e.classes,n=i===void 0?[]:i,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return A2({type:"text",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:e}),J1({content:a,transform:o(o({},D),s),extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(P(n))}})})}}},provides:function(l){l.generateLayersText=function(a,e){var r=e.transform,s=e.extra,i=null,n=null;if(M4){var f=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();i=t.width/f,n=t.height/f}return Promise.resolve([a,J1({content:a.innerHTML,width:i,height:n,transform:r,extra:s,watchable:!0})])}}},u3=new RegExp('"',"ug"),s4=[1105920,1112319],i4=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),t0),L6),g0),a1=Object.keys(i4).reduce(function(c,l){return c[l.toLowerCase()]=i4[l],c},{}),T8=Object.keys(a1).reduce(function(c,l){var a=a1[l];return c[l]=a[900]||P(Object.entries(a))[0][1],c},{});function F8(c){var l=c.replace(u3,"");return Q4(P(l)[0]||"")}function D8(c){var l=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),e=a.replace(u3,""),r=e.codePointAt(0),s=r>=s4[0]&&r<=s4[1],i=e.length===2?e[0]===e[1]:!1;return s||i||l}function B8(c,l){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),r=isNaN(e)?"normal":e;return(a1[a]||{})[r]||T8[a]}function n4(c,l){var a="".concat(v6).concat(l.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(a)!==null)return e();var s=e2(c.children),i=s.filter(function(T2){return T2.getAttribute(j2)===l})[0],n=G.getComputedStyle(c,l),f=n.getPropertyValue("font-family"),t=f.match(S6),z=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(i&&!t)return c.removeChild(i),e();if(t&&m!=="none"&&m!==""){var M=n.getPropertyValue("content"),d=B8(f,z),C=F8(M),v=t[0].startsWith("FontAwesome"),g=D8(n),h=t1(d,C),x=h;if(v){var b=j6(C);b.iconName&&b.prefix&&(h=b.iconName,d=b.prefix)}if(h&&!g&&(!i||i.getAttribute(r1)!==d||i.getAttribute(s1)!==x)){c.setAttribute(a,x),i&&c.removeChild(i);var U=C8(),k=U.extra;k.attributes[j2]=l,J2(h,d).then(function(T2){var A3=m1(o(o({},U),{},{icons:{main:T2,mask:i3()},prefix:d,iconName:x,extra:k,watchable:!0})),F2=L.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(F2,c.firstChild):c.appendChild(F2),F2.outerHTML=A3.map(function(P3){return m2(P3)}).join(`
`),c.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function R8(c){return Promise.all([n4(c,"::before"),n4(c,"::after")])}function H8(c){return c.parentNode!==document.head&&!~h6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(j2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var E8=function(l){return!!l&&q4.some(function(a){return l.includes(a)})},I8=function(l){if(!l)return[];var a=new Set,e=l.split(/,(?![^()]*\))/).map(function(f){return f.trim()});e=e.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(t){return t.trim()})});var r=g2(e),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(E8(i)){var n=q4.reduce(function(f,t){return f.replace(t,"")},i);n!==""&&n!=="*"&&a.add(n)}}}catch(f){r.e(f)}finally{r.f()}return a};function f4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(I){var a;if(l)a=c;else if(u.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var e=new Set,r=g2(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var n=g2(i.cssRules),f;try{for(n.s();!(f=n.n()).done;){var t=f.value,z=I8(t.selectorText),m=g2(z),M;try{for(m.s();!(M=m.n()).done;){var d=M.value;e.add(d)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){n.e(v)}finally{n.f()}}catch(v){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!e.size)return;var C=Array.from(e).join(", ");try{a=c.querySelectorAll(C)}catch{}}return new Promise(function(v,g){var h=e2(a).filter(H8).map(R8),x=z1.begin("searchPseudoElements");m3(),Promise.all(h).then(function(){x(),c1(),v()}).catch(function(){x(),c1(),g()})})}}var U8={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=f4,a}}},provides:function(l){l.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?L:e;u.searchPseudoElements&&f4(r)}}},o4=!1,W8={mixout:function(){return{dom:{unwatch:function(){m3(),o4=!0}}}},hooks:function(){return{bootstrap:function(){l4(K2("mutationObserverCallbacks",{}))},noAuto:function(){L8()},watch:function(a){var e=a.observeMutationsRoot;o4?c1():l4(K2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},t4=function(l){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),i=s[0],n=s.slice(1).join("-");if(i&&n==="h")return e.flipX=!0,e;if(i&&n==="v")return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(i){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n;break}return e},a)},O8={mixout:function(){return{parse:{transform:function(a){return t4(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=t4(r)),a}}},provides:function(l){l.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,s=a.containerWidth,i=a.iconWidth,n={transform:"translate(".concat(s/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(t," ").concat(z)},M={transform:"translate(".concat(i/2*-1," -256)")},d={outer:n,inner:m,path:M};return{tag:"g",attributes:o({},d.outer),children:[{tag:"g",attributes:o({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),d.path)}]}]}}}},W2={x:0,y:0,width:"100%",height:"100%"};function m4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function q8(c){return c.tag==="g"?c.children:[c]}var G8={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),s=r?k2(r.split(" ").map(function(i){return i.trim()})):i3();return s.prefix||(s.prefix=j()),a.mask=s,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(l){l.generateAbstractMask=function(a){var e=a.children,r=a.attributes,s=a.main,i=a.mask,n=a.maskId,f=a.transform,t=s.width,z=s.icon,m=i.width,M=i.icon,d=D6({transform:f,containerWidth:m,iconWidth:t}),C={tag:"rect",attributes:o(o({},W2),{},{fill:"white"})},v=z.children?{children:z.children.map(m4)}:{},g={tag:"g",attributes:o({},d.inner),children:[m4(o({tag:z.tag,attributes:o(o({},z.attributes),d.path)},v))]},h={tag:"g",attributes:o({},d.outer),children:[g]},x="mask-".concat(n||_1()),b="clip-".concat(n||_1()),U={tag:"mask",attributes:o(o({},W2),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,h]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:q8(M)},U]};return e.push(k,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(x,")")},W2)}),{children:e,attributes:r}}}},j8={provides:function(l){var a=!1;G.matchMedia&&(a=G.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=o(o({},s),{},{attributeName:"opacity"}),n={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||n.children.push({tag:"animate",attributes:o(o({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(n),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},_8={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return a.symbol=s,a}}}},V8=[H6,w8,k8,A8,P8,U8,W8,O8,G8,j8,_8];Z6(V8,{mixoutsTo:y});var M5=y.noAuto,p3=y.config,L5=y.library,d3=y.dom,M3=y.parse,v5=y.findIconDefinition,g5=y.toHtml,L3=y.icon,h5=y.layer,$8=y.text,X8=y.counter;var K8=["*"],Y8=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){p3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),Q8=(()=>{class c{definitions={};addIcons(...a){for(let e of a){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...a){for(let e of a){let r=Object.keys(e).map(s=>e[s]);this.addIcons(...r)}}getIconDefinition(a,e){return a in this.definitions&&e in this.definitions[a]?this.definitions[a][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),J8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},Z8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},g3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),c5=c=>{let l=g3(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e!=null)},p1=new WeakSet,v3="fa-auto-css";function a5(c,l){if(!l.autoAddCss||p1.has(c))return;if(c.getElementById(v3)!=null){l.autoAddCss=!1,p1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",v3),a.innerHTML=d3.css();let e=c.head.childNodes,r=null;for(let s=e.length-1;s>-1;s--){let i=e[s],n=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}c.head.insertBefore(a,r),l.autoAddCss=!1,p1.add(c)}var l5=c=>c.prefix!==void 0&&c.iconName!==void 0,e5=(c,l)=>l5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},r5=(()=>{class c{stackItemSize=O("1x");size=O();_effect=L1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=g1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),s5=(()=>{class c{size=O();classes=w(()=>{let a=this.size(),e=a?{[`fa-${a}`]:!0}:{};return u2(T({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=V({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&P1(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:K8,decls:1,vars:0,template:function(e,r){e&1&&(k1(),A1(0))},encapsulation:2,changeDetection:0})}return c})(),h3=(()=>{class c{icon=N();title=N();animation=N();mask=N();flip=N();size=N();pull=N();border=N();inverse=N();symbol=N();rotate=N();fixedWidth=N();transform=N();a11yRole=N();renderedIconHTML=w(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return Z8(),"";let e=this.findIconDefinition(a);if(!e)return"";let r=this.buildParams();a5(this.document,this.config);let s=L3(e,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});document=R(M1);sanitizer=R(F1);config=R(Y8);iconLibrary=R(Q8);stackItem=R(r5,{optional:!0});stack=R(s5,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(a){let e=e5(a,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(J8(e),null)}buildParams(){let a=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?M3.transform(r):r,i=this.mask(),n=i!=null?this.findIconDefinition(i):null,f={},t=this.a11yRole();t!=null&&(f.role=t);let z={};return e.rotate!=null&&!g3(e.rotate)&&(z["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:s,classes:c5(e),mask:n??void 0,symbol:this.symbol(),attributes:f,styles:z}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=V({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(d2("innerHTML",r.renderedIconHTML(),v1),p2("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var H5={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]};var E5={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]};var I5={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]};var U5={prefix:"fas",iconName:"arrows-up-down",icon:[256,512,["arrows-v"],"f07d","M150.6-22.6c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 77.3 96 434.7 54.6 393.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6 6 14.1 9.4 22.6 9.4s16.6-3.4 22.6-9.4l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-41.4 41.4 0-357.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"]};var C3={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]};var W5={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]};var O5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]};var q5={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};var G5={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M263.4-27L278.2 9.8 315 24.6c3 1.2 5 4.2 5 7.4s-2 6.2-5 7.4L278.2 54.2 263.4 91c-1.2 3-4.2 5-7.4 5s-6.2-2-7.4-5L233.8 54.2 197 39.4c-3-1.2-5-4.2-5-7.4s2-6.2 5-7.4L233.8 9.8 248.6-27c1.2-3 4.2-5 7.4-5s6.2 2 7.4 5zM110.7 41.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7L59.8 164.2 9.7 142.7C3.8 140.2 0 134.4 0 128s3.8-12.2 9.7-14.7L59.8 91.8 81.3 41.7C83.8 35.8 89.6 32 96 32s12.2 3.8 14.7 9.7zM464 304c6.4 0 12.2 3.8 14.7 9.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7l-21.5-50.1-50.1-21.5c-5.9-2.5-9.7-8.3-9.7-14.7s3.8-12.2 9.7-14.7l50.1-21.5 21.5-50.1c2.5-5.9 8.3-9.7 14.7-9.7zM460 0c11 0 21.6 4.4 29.5 12.2l42.3 42.3C539.6 62.4 544 73 544 84s-4.4 21.6-12.2 29.5l-88.2 88.2-101.3-101.3 88.2-88.2C438.4 4.4 449 0 460 0zM44.2 398.5L308.4 134.3 409.7 235.6 145.5 499.8C137.6 507.6 127 512 116 512s-21.6-4.4-29.5-12.2L44.2 457.5C36.4 449.6 32 439 32 428s4.4-21.6 12.2-29.5z"]};var j5={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var _5={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]};var V5={prefix:"fas",iconName:"arrows-left-right",icon:[576,512,["arrows-h"],"f07e","M470.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l41.4 41.4-357.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-41.4-41.4 357.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]};var $5={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]};var X5={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"]};var x3=class c{faGear=C3;selectedLanguage="japanese";languages=[{value:"japanese",label:"\u65E5\u672C\u8A9E"}];static \u0275fac=function(a){return new(a||c)};static \u0275cmp=V({type:c,selectors:[["app-nav"]],decls:14,vars:1,consts:[[1,"fixed","top-0","left-0","right-0","z-50","bg-surface/92","backdrop-blur-md","border-b","border-border"],[1,"max-w-xl","mx-auto","px-4","h-14","flex","items-center","justify-between"],["routerLink","/",1,"nav-wordmark-link"],["src","icon.svg","alt","","aria-hidden","true",1,"w-[22px]","h-[22px]","rounded-[5px]"],[1,"nav-wordmark"],[1,"nav-wordmark-daily"],[1,"nav-wordmark-lang"],[1,"flex","items-center","gap-1"],[1,"text-xs","text-muted","border","border-border","rounded-md","px-2","py-1","jp-noto-sans"],["routerLink","/settings","title","Settings",1,"btn-icon","ml-1"],[3,"icon"]],template:function(a,e){a&1&&(J(0,"nav",0)(1,"div",1)(2,"a",2),D2(3,"img",3),J(4,"span",4)(5,"span",5),W(6,"Daily"),r2(),J(7,"span",6),W(8,"Lang"),r2()()(),J(9,"div",7)(10,"span",8),W(11,"\u65E5\u672C\u8A9E"),r2(),J(12,"a",9),D2(13,"fa-icon",10),r2()()()()),a&2&&(F(13),b1("icon",e.faGear))},dependencies:[D1,h3],styles:[".nav-wordmark-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;text-decoration:none}.nav-wordmark[_ngcontent-%COMP%]{font-size:17px;letter-spacing:-.03em;line-height:1}.nav-wordmark-daily[_ngcontent-%COMP%]{font-weight:300;color:var(--color-muted);transition:color .18s ease}.nav-wordmark-lang[_ngcontent-%COMP%]{font-weight:300;color:var(--color-accent);transition:color .18s ease}.nav-wordmark-link[_ngcontent-%COMP%]:hover   .nav-wordmark-daily[_ngcontent-%COMP%]{color:var(--color-text)}"]})};var d1="dailylang_known_words",S3=class c{_knownWords=Q(this.load());knownWords=this._knownWords.asReadonly();knownCount=w(()=>this._knownWords().size);markKnown(l){let a=new Set(this._knownWords());a.add(l),this._knownWords.set(a),this.save(a)}markUnknown(l){let a=new Set(this._knownWords());a.delete(l),this._knownWords.set(a),this.save(a)}isKnown(l){return this._knownWords().has(l)}getKnownWordsArray(){return Array.from(this._knownWords())}clear(){this._knownWords.set(new Set);try{localStorage.removeItem(d1)}catch{}}load(){try{let l=localStorage.getItem(d1);if(l)return new Set(JSON.parse(l))}catch{}return new Set}save(l){try{localStorage.setItem(d1,JSON.stringify(Array.from(l)))}catch{}}static \u0275fac=function(a){return new(a||c)};static \u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"})};var N3="dailylang_settings";function b3(){return{aiProvider:"gemini",openaiApiKey:"",geminiApiKey:"",defaultSentenceCount:3,jpFont:"noto-sans",selectedLevel:"N5",writingDirection:"horizontal",geminiModel:"gemini-2.5-flash",openaiModel:"gpt-4.1",anki:{deckName:"DailyLang Japanese"}}}var P2=class c{_settings=Q(this.load());settings=this._settings.asReadonly();aiProvider=w(()=>this._settings().aiProvider);anki=w(()=>this._settings().anki);defaultSentenceCount=w(()=>this._settings().defaultSentenceCount);selectedLevel=w(()=>this._settings().selectedLevel);get activeApiKey(){let l=this._settings();return l.aiProvider==="gemini"?l.geminiApiKey:l.openaiApiKey}update(l){let a=T(T({},this._settings()),l);this._settings.set(a),this.save(a)}updateAnki(l){let a=u2(T({},this._settings()),{anki:T(T({},this._settings().anki),l)});this._settings.set(a),this.save(a)}load(){try{let l=localStorage.getItem(N3);if(l)return T(T({},b3()),JSON.parse(l))}catch{}return b3()}save(l){try{localStorage.setItem(N3,JSON.stringify(l))}catch{}}static \u0275fac=function(a){return new(a||c)};static \u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"})};var y3="dailylang_anki_queue",w3=class c{settings=R(P2);_queue=Q(this.loadQueue());queue=this._queue.asReadonly();queueCount=w(()=>this._queue().length);addCard(l,a,e,r){if(this._queue().find(f=>f.word===l))return;let i={id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,front:`<div class="word">${l}</div><div class="reading">${a}</div>`,back:`<div class="meaning">${e}</div><div class="example">${r}</div>`,word:l,reading:a,meaning:e,example:r,addedAt:Date.now()},n=[...this._queue(),i];this._queue.set(n),this.saveQueue(n)}removeCard(l){let a=this._queue().filter(e=>e.id!==l);this._queue.set(a),this.saveQueue(a)}clearQueue(){this._queue.set([]),this.saveQueue([])}async exportDeck(){let l=this._queue();if(l.length===0)return;let a=this.settings.anki().deckName,e=await this.generateApkg(l,a);this.triggerDownload(e,`${a.replace(/\s+/g,"_")}.apkg`)}async generateApkg(l,a){let{default:e}=await import("./chunk-VPQHHS2I.js"),r=await e({locateFile:()=>"/assets/sql-wasm.wasm"}),s=new r.Database,i=Math.floor(Date.now()/1e3),n=Date.now(),f=n+1,t={id:String(f),name:"DailyLang Basic",type:0,mod:i,usn:-1,sortf:0,did:n,tmpls:[{name:"Card 1",ord:0,qfmt:"{{Word}}<br><small>{{Reading}}</small>",afmt:'{{FrontSide}}<hr id="answer">{{Meaning}}<br><i>{{Example}}</i>',bqfmt:"",bafmt:"",did:null,bfont:"",bsize:0}],flds:[{name:"Word",ord:0,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]},{name:"Reading",ord:1,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]},{name:"Meaning",ord:2,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]},{name:"Example",ord:3,sticky:!1,rtl:!1,font:"Arial",size:20,media:[]}],css:".card { font-family: arial; font-size: 20px; text-align: center; } .reading { color: #666; font-size: 14px; }",latexPre:"",latexPost:"",req:[[0,"any",[0]]]},z={[n]:{id:n,name:a,desc:"",extendRev:50,usn:-1,collapsed:!1,browserCollapsed:!1,newToday:[0,0],revToday:[0,0],lrnToday:[0,0],timeToday:[0,0],dyn:0,extendNew:10,conf:1,mod:i}},m={1:{id:1,name:"Default",replayq:!0,lapse:{leechFails:8,minInt:1,delays:[10],leechAction:0,mult:0},rev:{perDay:200,ease4:1.3,fuzz:.05,minSpace:1,ivlFct:1,maxIvl:36500,bury:!0,hardFactor:1.2},timer:0,maxTaken:60,usn:-1,new:{perDay:20,delays:[1,10],separate:!0,ints:[1,4,7],initialFactor:2500,bury:!0,order:1},mod:i,autoplay:!0}},M={models:{[f]:t},decks:z,dconf:m};s.run("CREATE TABLE col (id integer primary key, crt integer not null, mod integer not null, scm integer not null, ver integer not null, dty integer not null, usn integer not null, ls integer not null, conf text not null, models text not null, decks text not null, dconf text not null, tags text not null);"),s.run("CREATE TABLE notes (id integer primary key, guid text not null, mid integer not null, mod integer not null, usn integer not null, tags text not null, flds text not null, sfld integer not null, csum integer not null, flags integer not null, data text not null);"),s.run("CREATE TABLE cards (id integer primary key, nid integer not null, did integer not null, ord integer not null, mod integer not null, usn integer not null, type integer not null, queue integer not null, due integer not null, ivl integer not null, factor integer not null, reps integer not null, lapses integer not null, left integer not null, odue integer not null, odid integer not null, flags integer not null, data text not null);"),s.run("CREATE TABLE revlog (id integer primary key, cid integer not null, usn integer not null, ease integer not null, ivl integer not null, lastIvl integer not null, factor integer not null, time integer not null, type integer not null);"),s.run("CREATE TABLE graves (usn integer not null, oid integer not null, type integer not null);"),s.run("INSERT INTO col VALUES (1, ?, ?, ?, 11, 0, -1, 0, '{}', ?, ?, ?, '{}')",[i,i,i,JSON.stringify(M.models),JSON.stringify(M.decks),JSON.stringify(M.dconf)]),l.forEach((g,h)=>{let x=n+h+10,b=n+h+1e3,U=`${g.word}${g.reading}${g.meaning}${g.example}`,k=this.checksum(g.word);s.run("INSERT INTO notes VALUES (?, ?, ?, ?, -1, '', ?, ?, ?, 0, '')",[x,this.guid(),f,i,U,g.word,k]),s.run("INSERT INTO cards VALUES (?, ?, ?, 0, ?, -1, 0, 0, ?, 0, 0, 0, 0, 0, 0, 0, 0, '')",[b,x,n,i,h+1])});let d=s.export();s.close();let{zipSync:C}=await import("./chunk-BGFR6G6E.js");return C({"collection.anki2":d,media:new TextEncoder().encode("{}")})}checksum(l){let a=0;for(let e=0;e<l.length;e++){let r=l.charCodeAt(e);a=(a<<5)-a+r,a=a&a}return Math.abs(a)}guid(){return Math.random().toString(36).slice(2,10)}triggerDownload(l,a){let e=new Blob([l.buffer],{type:"application/zip"}),r=URL.createObjectURL(e),s=document.createElement("a");s.href=r,s.download=a,s.click(),URL.revokeObjectURL(r)}loadQueue(){try{let l=localStorage.getItem(y3);if(l)return JSON.parse(l)}catch{}return[]}saveQueue(l){try{localStorage.setItem(y3,JSON.stringify(l))}catch{}}static \u0275fac=function(a){return new(a||c)};static \u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"})};function n5(c,l){if(c&1&&(Z(0,"span"),W(1),$()),c&2){let a=l.$implicit;F(),M2(a)}}function f5(c,l){if(c&1&&(Z(0,"div",5),S1(1,n5,2,1,"span",null,x1),$()),c&2){let a=w1();F(),N1(a.markers())}}var k3=class c{label=O.required();value=O.required();markers=O([]);valueChange=T1();static \u0275fac=function(a){return new(a||c)};static \u0275cmp=V({type:c,selectors:[["app-slider"]],inputs:{label:[1,"label"],value:[1,"value"],markers:[1,"markers"]},outputs:{valueChange:"valueChange"},decls:9,vars:8,consts:[[1,"flex","items-center","gap-4","mb-2"],[1,"label","mb-0"],[1,"text-sm","font-semibold","text-accent","tabular-nums"],[1,"block","relative","h-10","flex","items-center"],["type","range",1,"slider","w-full",3,"input","min","max","step","value"],["aria-hidden","true",1,"flex","justify-between","text-[10px]","text-muted","mt-0.5"]],template:function(a,e){a&1&&(Z(0,"div")(1,"div",0)(2,"span",1),W(3),$(),Z(4,"span",2),W(5),$()(),Z(6,"label",3)(7,"input",4),y1("input",function(s){return e.valueChange.emit(+s.target.value)}),$()(),h1(8,f5,3,0,"div",5),$()),a&2&&(F(3),M2(e.label()),F(2),M2(e.value()),F(),p2("aria-label",e.label()),F(),d2("min",1)("max",10)("step",1)("value",e.value()),F(),C1(e.markers().length>0?8:-1))},encapsulation:2})};export{h3 as a,H5 as b,E5 as c,I5 as d,U5 as e,W5 as f,O5 as g,q5 as h,G5 as i,j5 as j,_5 as k,V5 as l,$5 as m,X5 as n,x3 as o,S3 as p,P2 as q,w3 as r,k3 as s};
