(window.webpackJsonp=window.webpackJsonp||[]).push([[1,3],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"2W6z":function(e,t,n){"use strict";n("pIFo");var r=function(){};e.exports=r},"5HhQ":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){var n=e%t;return n<0?n+t:n};t.default=r},"7HEc":function(e,t,n){"use strict";n("HAE/");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.children,r=e.startIndex,o=e.startX,s=e.pageX,l=e.viewLength,c=e.resistance,u=a.default.Children.count(n)-1,d=r+(o-s)/l;c?d<0?d=Math.exp(d*i.default.RESISTANCE_COEF)-1:d>u&&(d=u+1-Math.exp((u-d)*i.default.RESISTANCE_COEF)):d<0?t=((d=0)-r)*l+s:d>u&&(t=((d=u)-r)*l+s);return{index:d,startX:t}};var a=r(n("q1tI")),i=r(n("UlPe"))},"7VIw":function(e,t,n){"use strict";n("HAE/");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("xZgz")).default;t.default=a},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8SQk":function(e,t,n){"use strict";n("bWfx"),n("HAE/");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),i=function(e,t){var n=!1,r=function(e){return e?e.key:"empty"};if(e.children.length&&t.children.length){var i=a.default.Children.map(e.children,r)[e.index];if(null!=i)i===a.default.Children.map(t.children,r)[t.index]&&(n=!0)}return n};t.default=i},"9Zqa":function(e,t,n){},Dtc0:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=(n("zlK1"),n("9Zqa"),n("Xagz"),n("oyLW")),o=n.n(i),s=n("WzDo"),l=n.n(s),c=n("7VIw"),u=n.n(c),d=function(e){var t=e.children,n=t.length-1,i=Object(r.useState)(!1),s=i[0],c=i[1],d=Object(r.useState)(0),f=d[0],p=d[1];return a.a.createElement("div",{className:"layout"},a.a.createElement("progress",{class:"progress is-primary",value:f,max:n+1},"15%"),a.a.createElement("div",{className:"header"},a.a.createElement("img",{onClick:function(){f>0&&p((function(e){return e-1}))},className:"header_back--arrow",src:o.a}),a.a.createElement("img",{onClick:function(){return c(!0)},className:"header_hamburger",src:l.a})),a.a.createElement("main",null,a.a.createElement("form",null,a.a.createElement(u.a,{index:f,onChangeIndex:function(e){return p(e)}},t))),a.a.createElement("div",{class:"modal "+(s&&"is-active")},a.a.createElement("div",{class:"modal-background"}),a.a.createElement("div",{class:"modal-content"},"fafkjaskj afkjkjakj ajfjfkj",a.a.createElement("div",{className:"box"},a.a.createElement("h2",null," etataearfsdasrt test "),a.a.createElement("h3",null," asdasdsadadfaf "))),a.a.createElement("button",{onClick:function(){return c(!1)},class:"modal-close is-large","aria-label":"close"})),a.a.createElement("div",{className:"footer"},a.a.createElement("button",{onClick:function(){f<n&&p((function(e){return e+1}))},className:"button is-primary footer_button--continue"}," Continue ")))},f=(n("YwZP"),n("Wbzz"),n("fz5n")),p=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"field"},a.a.createElement("div",{className:"control"},a.a.createElement("input",{className:"input is-small",type:"text",placeholder:"Small input"}))),a.a.createElement("div",{className:"field"},a.a.createElement("div",{className:"control"},a.a.createElement("input",{className:"input",type:"text",placeholder:"Normal input"}))),a.a.createElement("div",{className:"field"},a.a.createElement("div",{className:"control"},a.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Medium input"}))),a.a.createElement("div",{className:"field"},a.a.createElement("div",{className:"control"},a.a.createElement("input",{className:"input is-large",type:"text",placeholder:"Large input"}))))};t.default=function(){return a.a.createElement(d,null,a.a.createElement(f.default,{path:"/"}),a.a.createElement(p,null))}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},KJF0:function(e,t,n){"use strict";n("HAE/");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"checkIndexBounds",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"computeIndex",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"constant",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"getDisplaySameSlide",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"mod",{enumerable:!0,get:function(){return l.default}});var a=r(n("rRnn")),i=r(n("7HEc")),o=r(n("UlPe")),s=r(n("8SQk")),l=r(n("5HhQ"))},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},QILm:function(e,t,n){var r=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,a,i=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},UlPe:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3}},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Wbzz:function(e,t,n){"use strict";n("xfY5"),n("q1tI"),n("+ZDr"),n("lw3w"),n("emEt").default.enqueue},WzDo:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC4zNSIgaGVpZ2h0PSIyOC4zNSIgdmlld0JveD0iMCAwIDI4LjM1IDI4LjM1Ij48cGF0aCBjbGFzcz0iaWNvbk1vcmVfaGFtYnVyZ2VyIiBkPSJNMi45MzIgNi4wMDVBMi4xNzMgMi4xNzMgMCAwIDEgLjcwNyAzLjg4N3YtLjEwNWEyLjIyNSAyLjIyNSAwIDAgMSAyLjE2LTIuMjg2bC4wNjQtLjAwMWgyMi40MjZhMi4yNzggMi4yNzggMCAwIDEgMi4yODYgMi4yNjh2LjAxOWEyLjIyNCAyLjIyNCAwIDAgMS0yLjIyNCAyLjIyNWwtLjA2Mi0uMDAxSDIuOTMyek0yNS4zNTggMTEuNTMzYTIuMjc4IDIuMjc4IDAgMCAxIDIuMjg2IDIuMjY3di4wMmEyLjIyNSAyLjIyNSAwIDAgMS0yLjIyNCAyLjIyNmwtLjA2Mi0uMDAxSDIuOTMyYTIuMTc1IDIuMTc1IDAgMCAxLTIuMjI1LTIuMTE5di0uMTA1YTIuMjI1IDIuMjI1IDAgMCAxIDIuMTYtMi4yODZoMjIuNDkxek0yNS4zNTggMjEuNjMzYTIuMjI0IDIuMjI0IDAgMCAxIDIuMjg1IDIuMTZsLjAwMS4wNjRhMi4yNzcgMi4yNzcgMCAwIDEtMi4yNjggMi4yODdIMi45MzJBMi4yMjMgMi4yMjMgMCAwIDEgLjcwNyAyMy45MnYtLjA2M2EyLjE3MyAyLjE3MyAwIDAgMSAyLjIyNC0yLjIyNWgyMi40Mjd6Ij48L3BhdGg+PC9zdmc+"},Xagz:function(e,t,n){},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},fz5n:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r);t.default=function(e){return a.a.createElement("div",{className:"step--container"},a.a.createElement("h1",null," Numer telefonu komórkowego "),a.a.createElement("h2",null," wyślemy na niego kod weryfikujący podane dane"),a.a.createElement("p",null," "),a.a.createElement("input",{type:"text"}),a.a.createElement("a",{href:"https://inputmodes.com/"}," test "))}},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},oyLW:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB3aWR0aD0iMjguMzUiIGhlaWdodD0iMjguMzUiIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSI+PHBhdGggZD0iTTI3LjA3NiAxMi45OTVhLjgxNy44MTcgMCAwIDAtLjA3IDBINC4xMjlsNy42Ny03LjY3YTEuMTI2IDEuMTI2IDAgMSAwLTEuNTkzLTEuNTkzTC42MjEgMTMuMzI1YTEuMTI0IDEuMTI0IDAgMCAwLS4wMDMgMS41OWwuMDAzLjAwMyA5LjU4OSA5LjU4OWExLjEyNiAxLjEyNiAwIDEgMCAxLjU5My0xLjU5M2wtNy42NzQtNy42NzJoMjIuODc3Yy42MS4wMiAxLjEyLS40NjggMS4xMzktMS4wODhhMS4xMTYgMS4xMTYgMCAwIDAtMS4wNjktMS4xNTl6Ii8+PC9zdmc+"},qncB:function(e,t,n){var r=n("XKFU"),a=n("vhPU"),i=n("eeVq"),o=n("/e88"),s="["+o+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(e,t,n){var a={},s=i((function(){return!!o[e]()||"​"!="​"[e]()})),l=a[e]=s?t(d):o[e];n&&(a[n]=l),r(r.P+r.F*s,"String",a)},d=u.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},rRnn:function(e,t,n){"use strict";n("HAE/");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),i=(r(n("2W6z")),function(e){e.index;var t=e.children;a.default.Children.count(t)});t.default=i},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},xZgz:function(e,t,n){"use strict";n("bWfx"),n("KKXr"),n("dZ+Y"),n("HAE/");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.getDomTreeShapes=I,t.findNativeHandler=S,t.default=void 0;var a=r(n("pVnL")),i=r(n("QILm")),o=r(n("lwsE")),s=r(n("W8MJ")),l=r(n("a1gu")),c=r(n("Nsbk")),u=r(n("7W2i")),d=r(n("q1tI")),f=r(n("17x9")),p=(r(n("2W6z")),n("KJF0"));function h(e,t,n,r){return e.addEventListener(t,n,r),{remove:function(){e.removeEventListener(t,n,r)}}}var g={direction:"ltr",display:"flex",willChange:"transform"},v={width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"},y={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(e){return"translate(".concat(-e,"%, 0)")},"x-reverse":function(e){return"translate(".concat(e,"%, 0)")},y:function(e){return"translate(0, ".concat(-e,"%)")},"y-reverse":function(e){return"translate(0, ".concat(e,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function m(e,t){var n=t.duration,r=t.easeFunction,a=t.delay;return"".concat(e," ").concat(n," ").concat(r," ").concat(a)}function M(e,t){var n=y.rotationMatrix[t];return{pageX:n.x[0]*e.pageX+n.x[1]*e.pageY,pageY:n.y[0]*e.pageX+n.y[1]*e.pageY}}function x(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function I(e,t){for(var n=[];e&&e!==t&&!e.hasAttribute("data-swipeable");){var r=window.getComputedStyle(e);"absolute"===r.getPropertyValue("position")||"hidden"===r.getPropertyValue("overflow-x")?n=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return n}var N=null;function S(e){var t=e.domTreeShapes,n=e.pageX,r=e.startX,a=e.axis;return t.some((function(e){var t=n>=r;"x"!==a&&"y"!==a||(t=!t);var i=e[y.scrollPosition[a]],o=i>0,s=i+e[y.clientLength[a]]<e[y.scrollLength[a]];return!!(t&&s||!t&&o)&&(N=e.element,!0)}))}var E=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,l.default)(this,(0,c.default)(t).call(this,e))).rootNode=null,n.containerNode=null,n.ignoreNextScrollEvents=!1,n.viewLength=0,n.startX=0,n.lastX=0,n.vx=0,n.startY=0,n.isSwiping=void 0,n.started=!1,n.startIndex=0,n.transitionListener=null,n.touchMoveListener=null,n.activeSlide=null,n.indexCurrent=null,n.firstRenderTimeout=null,n.setRootNode=function(e){n.rootNode=e},n.setContainerNode=function(e){n.containerNode=e},n.setActiveSlide=function(e){n.activeSlide=e,n.updateHeight()},n.handleSwipeStart=function(e){var t=n.props.axis,r=M(e.touches[0],t);n.viewLength=n.rootNode.getBoundingClientRect()[y.length[t]],n.startX=r.pageX,n.lastX=r.pageX,n.vx=0,n.startY=r.pageY,n.isSwiping=void 0,n.started=!0;var a=window.getComputedStyle(n.containerNode),i=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform");if(i&&"none"!==i){var o=i.split("(")[1].split(")")[0].split(","),s=window.getComputedStyle(n.rootNode),l=M({pageX:parseInt(o[4],10),pageY:parseInt(o[5],10)},t);n.startIndex=-l.pageX/(n.viewLength-parseInt(s.paddingLeft,10)-parseInt(s.paddingRight,10))||0}},n.handleSwipeMove=function(e){if(n.started){if(null===N||N===n.rootNode){var t=n.props,r=t.axis,a=t.children,i=t.ignoreNativeScroll,o=t.onSwitching,s=t.resistance,l=M(e.touches[0],r);if(void 0===n.isSwiping){var c=Math.abs(l.pageX-n.startX),u=Math.abs(l.pageY-n.startY),f=c>u&&c>p.constant.UNCERTAINTY_THRESHOLD;if(!s&&("y"===r||"y-reverse"===r)&&(0===n.indexCurrent&&n.startX<l.pageX||n.indexCurrent===d.default.Children.count(n.props.children)-1&&n.startX>l.pageX))return void(n.isSwiping=!1);if(c>u&&e.preventDefault(),!0===f||u>p.constant.UNCERTAINTY_THRESHOLD)return n.isSwiping=f,void(n.startX=l.pageX)}if(!0===n.isSwiping){e.preventDefault(),n.vx=.5*n.vx+.5*(l.pageX-n.lastX),n.lastX=l.pageX;var h=(0,p.computeIndex)({children:a,resistance:s,pageX:l.pageX,startIndex:n.startIndex,startX:n.startX,viewLength:n.viewLength}),g=h.index,v=h.startX;if(null===N&&!i)if(S({domTreeShapes:I(e.target,n.rootNode),startX:n.startX,pageX:l.pageX,axis:r}))return;v?n.startX=v:null===N&&(N=n.rootNode),n.setIndexCurrent(g);var y=function(){o&&o(g,"move")};!n.state.displaySameSlide&&n.state.isDragging||n.setState({displaySameSlide:!1,isDragging:!0},y),y()}}}else n.handleTouchStart(e)},n.handleSwipeEnd=function(){if(N=null,n.started&&(n.started=!1,!0===n.isSwiping)){var e,t=n.state.indexLatest,r=n.indexCurrent,a=t-r;e=Math.abs(n.vx)>n.props.threshold?n.vx>0?Math.floor(r):Math.ceil(r):Math.abs(a)>n.props.hysteresis?a>0?Math.floor(r):Math.ceil(r):t;var i=d.default.Children.count(n.props.children)-1;e<0?e=0:e>i&&(e=i),n.setIndexCurrent(e),n.setState({indexLatest:e,isDragging:!1},(function(){n.props.onSwitching&&n.props.onSwitching(e,"end"),n.props.onChangeIndex&&e!==t&&n.props.onChangeIndex(e,t,{reason:"swipe"}),r===t&&n.handleTransitionEnd()}))}},n.handleTouchStart=function(e){n.props.onTouchStart&&n.props.onTouchStart(e),n.handleSwipeStart(e)},n.handleTouchEnd=function(e){n.props.onTouchEnd&&n.props.onTouchEnd(e),n.handleSwipeEnd(e)},n.handleMouseDown=function(e){n.props.onMouseDown&&n.props.onMouseDown(e),e.persist(),n.handleSwipeStart(x(e))},n.handleMouseUp=function(e){n.props.onMouseUp&&n.props.onMouseUp(e),n.handleSwipeEnd(x(e))},n.handleMouseLeave=function(e){n.props.onMouseLeave&&n.props.onMouseLeave(e),n.started&&n.handleSwipeEnd(x(e))},n.handleMouseMove=function(e){n.props.onMouseMove&&n.props.onMouseMove(e),n.started&&n.handleSwipeMove(x(e))},n.handleScroll=function(e){if(n.props.onScroll&&n.props.onScroll(e),e.target===n.rootNode)if(n.ignoreNextScrollEvents)n.ignoreNextScrollEvents=!1;else{var t=n.state.indexLatest,r=Math.ceil(e.target.scrollLeft/e.target.clientWidth)+t;n.ignoreNextScrollEvents=!0,e.target.scrollLeft=0,n.props.onChangeIndex&&r!==t&&n.props.onChangeIndex(r,t,{reason:"focus"})}},n.updateHeight=function(){if(null!==n.activeSlide){var e=n.activeSlide.children[0];void 0!==e&&void 0!==e.offsetHeight&&n.state.heightLatest!==e.offsetHeight&&n.setState({heightLatest:e.offsetHeight})}},n.state={indexLatest:e.index,isDragging:!1,renderOnlyActive:!e.disableLazyLoading,heightLatest:0,displaySameSlide:!0},n.setIndexCurrent(e.index),n}return(0,u.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){var e=this;return{swipeableViews:{slideUpdateHeight:function(){e.updateHeight()}}}}},{key:"componentDidMount",value:function(){var e=this;this.transitionListener=h(this.containerNode,"transitionend",(function(t){t.target===e.containerNode&&e.handleTransitionEnd()})),this.touchMoveListener=h(this.rootNode,"touchmove",(function(t){e.props.disabled||e.handleSwipeMove(t)}),{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout((function(){e.setState({renderOnlyActive:!1})}),0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"componentWillReceiveProps",value:function(e){var t=e.index;"number"==typeof t&&t!==this.props.index&&(this.setIndexCurrent(t),this.setState({displaySameSlide:(0,p.getDisplaySameSlide)(this.props,e),indexLatest:t}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"setIndexCurrent",value:function(e){if(this.props.animateTransitions||this.indexCurrent===e||this.handleTransitionEnd(),this.indexCurrent=e,this.containerNode){var t=this.props.axis,n=y.transform[t](100*e);this.containerNode.style.WebkitTransform=n,this.containerNode.style.transform=n}}},{key:"handleTransitionEnd",value:function(){this.props.onTransitionEnd&&(this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd())}},{key:"render",value:function(){var e,t,n=this,r=this.props,o=(r.action,r.animateHeight),s=r.animateTransitions,l=r.axis,c=r.children,u=r.containerStyle,f=r.disabled,p=(r.disableLazyLoading,r.enableMouseEvents),h=(r.hysteresis,r.ignoreNativeScroll,r.index,r.onChangeIndex,r.onSwitching,r.onTransitionEnd,r.resistance,r.slideStyle),M=r.slideClassName,x=r.springConfig,I=r.style,N=(r.threshold,(0,i.default)(r,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"])),S=this.state,E=S.displaySameSlide,w=S.heightLatest,L=S.indexLatest,j=S.isDragging,b=S.renderOnlyActive,T=f?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},A=!f&&p?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},C=(0,a.default)({},v,h);if(j||!s||E)e="all 0s ease 0s",t="all 0s ease 0s";else if(e=m("transform",x),t=m("-webkit-transform",x),0!==w){var D=", ".concat(m("height",x));e+=D,t+=D}var O={height:null,WebkitFlexDirection:y.flexDirection[l],flexDirection:y.flexDirection[l],WebkitTransition:t,transition:e};if(!b){var z=y.transform[l](100*this.indexCurrent);O.WebkitTransform=z,O.transform=z}return o&&(O.height=w),d.default.createElement("div",(0,a.default)({ref:this.setRootNode,style:(0,a.default)({},y.root[l],I)},N,T,A,{onScroll:this.handleScroll}),d.default.createElement("div",{ref:this.setContainerNode,style:(0,a.default)({},O,g,u),className:"react-swipeable-view-container"},d.default.Children.map(c,(function(e,t){if(b&&t!==L)return null;var r,a=!0;return t===L&&(a=!1,o&&(r=n.setActiveSlide,C.overflowY="hidden")),d.default.createElement("div",{ref:r,style:C,className:M,"aria-hidden":a,"data-swipeable":"true"},e)}))))}}]),t}(d.default.Component);E.displayName="ReactSwipableView",E.propTypes={},E.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1},E.childContextTypes={swipeableViews:f.default.shape({slideUpdateHeight:f.default.func})};var w=E;t.default=w},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),o=n("Xbzi"),s=n("apmT"),l=n("eeVq"),c=n("kJMx").f,u=n("EemH").f,d=n("hswa").f,f=n("qncB").trim,p=r.Number,h=p,g=p.prototype,v="Number"==i(n("Kuth")(g)),y="trim"in String.prototype,m=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=y?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,l=t.slice(2),c=0,u=l.length;c<u;c++)if((o=l.charCodeAt(c))<48||o>a)return NaN;return parseInt(l,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(v?l((function(){g.valueOf.call(n)})):"Number"!=i(n))?o(new h(m(t)),n,p):m(t)};for(var M,x=n("nh4g")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;x.length>I;I++)a(h,M=x[I])&&!a(p,M)&&d(p,M,u(h,M));p.prototype=g,g.constructor=p,n("KroJ")(r,"Number",p)}},zlK1:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-814b01566976b9f59e04.js.map