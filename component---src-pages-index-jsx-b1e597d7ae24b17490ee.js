(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},Dtc0:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("7oih"),i=(n("xfY5"),n("+ZDr")),c=n.n(i);n("lw3w"),n("emEt").default.enqueue;var l=function(){return a.a.createElement("div",{className:"step--container"},a.a.createElement("h1",null," Numer telefonu komórkowego "),a.a.createElement("h2",null," wyślemy na niego kod weryfikujący podane dane"),a.a.createElement("input",{className:"input last-element",type:"text",inputMode:"tel"}),a.a.createElement(c.a,{to:"/verification"}," weryfikacja "))},u=n("qhky"),s=function(){return a.a.createElement("div",{className:"step--container"},a.a.createElement("h1",null," Wprowadź kod weryfikacyjny "),a.a.createElement("h2",null," kod został wprowadzony +48 123 456 789 "),a.a.createElement("input",{className:"input",type:"text",inputMode:"tel"}),a.a.createElement("h3",{className:"last-element"}," Jeśli nie dostałeś kodu możemy Ci go wysłać za 60 sek "))},f=function(){return a.a.createElement("div",{className:"step--container"},a.a.createElement("h1",null," Imię i nazwisko "),a.a.createElement("h2",null,"formalne imię i nzwisko z dokumentu tożsamości"),a.a.createElement("input",{className:"input",type:"text",placeholder:"Imię lub imiona"}),a.a.createElement("input",{className:"input last-element",type:"text",placeholder:"Nazwisko"}))},p=function(){return a.a.createElement("div",{className:"step--container"},a.a.createElement("h1",null," Adres zamieszkania"),a.a.createElement("h2",null," Nie podawaj skrytki pocztowej, możemy cię poprosić o dokument potwierdzający ten adres "),a.a.createElement("div",{className:"select"},a.a.createElement("select",null,a.a.createElement("option",null,"Kraj"),a.a.createElement("option",null,"POlska"),a.a.createElement("option",null," Niemcy "),a.a.createElement("option",null," Chiny "),a.a.createElement("option",null," Francja "),a.a.createElement("option",null," Mongolia "),a.a.createElement("option",null," Luksemburg "),a.a.createElement("option",null," Finlandia "))),a.a.createElement("input",{className:"input",placeholder:"Adres linia 1"}),a.a.createElement("input",{className:"input",placeholder:"Adres linia 2"}),a.a.createElement("input",{className:"input",placeholder:"Kod pocztowy",inputMode:"decimal"}),a.a.createElement("input",{className:"input",placeholder:"miasto"}),a.a.createElement("input",{className:"input last-element",placeholder:"region ??"}))},m=function(){return a.a.createElement("div",{className:"step--container"},a.a.createElement("h1",null," Nazwisko pańeńskie matki "),a.a.createElement("h2",null," tą informację wykorzystywać będziemy do dodatkowego weryfikowania twojej torzsamości "),a.a.createElement("input",{className:" input last-element",placeholder:"Nazwisko"}))},d=function(){return a.a.createElement("div",{className:"step--container"},a.a.createElement("h1",null," Adres e-mail "),a.a.createElement("h2",null," Będziemy go używać wyłącznie w celu prezazywania istotnych informacji. "),a.a.createElement("h2",null," Będziesz mógł w dowolne chwili wyłączyć takie wiadomości  "),a.a.createElement("input",{className:"input",inputmode:"email",placeholder:"email"}),a.a.createElement("input",{className:" input last-element",inputmode:"email",placeholder:"powtorz email"}))},y=function(){return a.a.createElement("div",{className:"step--container"},a.a.createElement("h1",null," Informacja o pochodzeniu Twojego majątku i źródeł przychodów "),a.a.createElement("h2",null," Musimy Cię o to zapytać z powodów formalnych, nie będziemy wykorzystywać tych informacji w innych celach "),a.a.createElement("div",{className:"select"},a.a.createElement("select",null,a.a.createElement("option",null," Wartość twojego majątku "),a.a.createElement("option",null,"Poniżej 100 000 PLN"),a.a.createElement("option",null,"Pomiędzy 100 000 - 500 000 PLN"),a.a.createElement("option",null," Powyżej 500 000 PLN "))),a.a.createElement("div",{className:"select"},a.a.createElement("select",null,a.a.createElement("option",null,"Źródło majątku"),a.a.createElement("option",null," Wynagrodzenie "),a.a.createElement("option",null," przychody z udziaów w spółkach "),a.a.createElement("option",null," przychody inwestycyjne "),a.a.createElement("option",null," spadek/otrzymanie darowizny "),a.a.createElement("option",null," hazard "),a.a.createElement("option",null," kryptowaluty "),a.a.createElement("option",null," inne (tu miejsce do wpisania) ?? jak user to wybierze, to pokazujemy inputa czy jak?"))),a.a.createElement("div",{className:"select last-element"},a.a.createElement("select",null,a.a.createElement("option",null,"Kraj pochodzenia majątku "),a.a.createElement("option",null,"POlska"),a.a.createElement("option",null," Niemcy "),a.a.createElement("option",null," Chiny "),a.a.createElement("option",null," Francja "),a.a.createElement("option",null," Mongolia "),a.a.createElement("option",null," Luksemburg "),a.a.createElement("option",null," Finlandia "))))},h=function(){return a.a.createElement("div",{className:"step--container"},a.a.createElement("h1",{className:"title"}," Zaakceptuj oświadczenia "),a.a.createElement("h2",null," których potrzebujemy, by otworzyć konto "))};n("f3/d");t.default=function(){return Object(r.useEffect)((function(){document.addEventListener("DOMContentLoaded",(function(){var e;-1!=(e=navigator.userAgent.toLowerCase()).indexOf("safari")&&(e.indexOf("chrome")>-1?document.body.classList.add("chrome"):document.body.classList.add("safari"));var t=document.querySelector(".safari");t&&(t.addEventListener("focus",(function(e){document.body.classList.add("keyboard"),setTimeout((function(){window.scrollTo(0,0)}),200)})),t.addEventListener("blur",(function(e){document.body.classList.remove("keyboard")})))}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,null,a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"})),a.a.createElement(o.a,null,a.a.createElement(l,null),a.a.createElement(s,null),a.a.createElement(f,null),a.a.createElement(p,null),a.a.createElement(m,null),a.a.createElement(d,null),a.a.createElement(y,null),a.a.createElement(h,null)))}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),l=n("C/va"),u=r.RegExp,s=u,f=u.prototype,p=/a/g,m=/a/g,d=new u(p)!==p;if(n("nh4g")&&(!d||n("eeVq")((function(){return m[n("K0xU")("match")]=!1,u(p)!=p||u(m)==m||"/a/i"!=u(p,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(d?new s(r&&!o?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&o?l.call(e):t),n?this:f,u)};for(var y=function(e){e in u||o(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},h=i(s),E=0;h.length>E;)y(h[E++]);f.constructor=u,u.prototype=f,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},bmMU:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!n.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],n.get(l.value[0])))return!1;return!0}if(o&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!n.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(t[l]!==n[l])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(n,u[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],n[u[l]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ye}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),f=n("bmMU"),p=n.n(f),m=n("q1tI"),d=n.n(m),y=n("MgzW"),h=n.n(y),E="bodyAttributes",w="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",A="href",k="http-equiv",O="innerHTML",j="itemprop",N="name",C="property",S="rel",I="src",x="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",P="defer",M="encodeSpecialCharacters",R="onChangeClientState",q="titleTemplate",F=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),_=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=$(e,v.TITLE),n=$(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},J=function(e){return $(e,R)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===S&&"canonical"===e[n].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==T&&c!==j||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=h()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(v.BODY,r),le(v.HTML,a),ce(f,p);var m={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,o),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=m[e].oldTags)})),t&&t(),l(e,d,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[d.a.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case E:case w:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=z[e]||e;if(n===O||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(E,n,r),htmlAttributes:pe(w,a,r),link:pe(v.LINK,o,r),meta:pe(v.META,i,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,l,r),style:pe(v.STYLE,u,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},de=s()((function(e){return{baseTag:G([A,x],e),bodyAttributes:X(E,e),defer:$(e,P),encode:$(e,M),htmlAttributes:X(w,e),linkTags:Z(v.LINK,[S,A],e),metaTags:Z(v.META,[N,g,k,C,j],e),noscriptTags:Z(v.NOSCRIPT,[O],e),onChangeClientState:J(e),scriptTags:Z(v.SCRIPT,[I,O],e),styleTags:Z(v.STYLE,[T],e),title:W(e),titleAttributes:X(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),ye=(a=de,i=o=function(e){function t(){return K(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return H({},a,((t={})[r.type]=i,t.titleAttributes=H({},o),t));case v.BODY:return H({},a,{bodyAttributes:H({},o)});case v.HTML:return H({},a,{htmlAttributes:H({},o)})}return H({},a,((n={})[r.type]=H({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind}).call(this,n("yLpj"))},qncB:function(e,t,n){var r=n("XKFU"),a=n("vhPU"),o=n("eeVq"),i=n("/e88"),c="["+i+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),s=function(e,t,n){var a={},c=o((function(){return!!i[e]()||"​"!="​"[e]()})),l=a[e]=c?t(f):i[e];n&&(a[n]=l),r(r.P+r.F*c,"String",a)},f=s.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=s},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),o=n("LZWt"),i=n("Xbzi"),c=n("apmT"),l=n("eeVq"),u=n("kJMx").f,s=n("EemH").f,f=n("hswa").f,p=n("qncB").trim,m=r.Number,d=m,y=m.prototype,h="Number"==o(n("Kuth")(y)),E="trim"in String.prototype,w=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=E?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,l=t.slice(2),u=0,s=l.length;u<s;u++)if((i=l.charCodeAt(u))<48||i>a)return NaN;return parseInt(l,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(h?l((function(){y.valueOf.call(n)})):"Number"!=o(n))?i(new d(w(t)),n,m):w(t)};for(var b,v=n("nh4g")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;v.length>g;g++)a(d,b=v[g])&&!a(m,b)&&f(m,b,s(d,b));m.prototype=y,y.constructor=m,n("KroJ")(r,"Number",m)}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-jsx-b1e597d7ae24b17490ee.js.map