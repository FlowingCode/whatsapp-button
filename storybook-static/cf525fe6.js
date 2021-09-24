System.register(["./bc9fb4ed.js"],(function(e){"use strict";var t,r,n,o,i,a,s,c,u,l,f,p;return{setters:[function(e){t=e.t,r=e.i,n=e.J,o=e.d,i=e._,a=e.c,s=e.g,c=e.e,u=e.D,l=e.v,f=e.h,p=e.a}],execute:function(){var d="undefined"!=typeof Element,h="function"==typeof Map,m="function"==typeof Set,g="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function v(e,r){if(e===r)return!0;if(e&&r&&"object"==t(e)&&"object"==t(r)){if(e.constructor!==r.constructor)return!1;var n,o,i,a;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(!v(e[o],r[o]))return!1;return!0}if(h&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(a=e.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;for(a=e.entries();!(o=a.next()).done;)if(!v(o.value[1],r.get(o.value[0])))return!1;return!0}if(m&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(a=e.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;return!0}if(g&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(e[o]!==r[o])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;if(d&&e instanceof Element)return!1;for(o=n;0!=o--;)if(("_owner"!==i[o]&&"__v"!==i[o]&&"__o"!==i[o]||!e.$$typeof)&&!v(e[i[o]],r[i[o]]))return!1;return!0}return e!=e&&r!=r}var y=function(e,t){try{return v(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}},b=r.exports.createContext(),w=r.exports.createContext();function O(e){var t=e.children,n=r.exports.useState(null),o=n[0],i=n[1],a=r.exports.useRef(!1);r.exports.useEffect((function(){return function(){a.current=!0}}),[]);var s=r.exports.useCallback((function(e){a.current||i(e)}),[]);return r.exports.createElement(b.Provider,{value:o},r.exports.createElement(w.Provider,{value:s},t))}var x=function(e){return Array.isArray(e)?e[0]:e},C=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},k=function(e,t){if("function"==typeof e)return C(e,t);null!=e&&(e.current=t)},T=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},E="undefined"!=typeof window&&window.document&&window.document.createElement?r.exports.useLayoutEffect:r.exports.useEffect,R="top",P="bottom",S="right",j="left",H=[R,P,S,j],M=H.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),A=[].concat(H,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),L=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function B(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function W(e){return e instanceof D(e).Element||e instanceof Element}function U(e){return e instanceof D(e).HTMLElement||e instanceof HTMLElement}function V(e){return"undefined"!=typeof ShadowRoot&&(e instanceof D(e).ShadowRoot||e instanceof ShadowRoot)}var N={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];U(o)&&B(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});U(n)&&B(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function z(e){return e.split("-")[0]}var X=Math.round;function Y(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect(),n=1,o=1;return U(e)&&t&&(n=r.width/e.offsetWidth||1,o=r.height/e.offsetHeight||1),{width:X(r.width/n),height:X(r.height/o),top:X(r.top/o),right:X(r.right/n),bottom:X(r.bottom/o),left:X(r.left/n),x:X(r.left/n),y:X(r.top/o)}}function q(e){var t=Y(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function F(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&V(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function I(e){return D(e).getComputedStyle(e)}function _(e){return["table","td","th"].indexOf(B(e))>=0}function $(e){return((W(e)?e.ownerDocument:e.document)||window.document).documentElement}function J(e){return"html"===B(e)?e:e.assignedSlot||e.parentNode||(V(e)?e.host:null)||$(e)}function G(e){return U(e)&&"fixed"!==I(e).position?e.offsetParent:null}function K(e){for(var t=D(e),r=G(e);r&&_(r)&&"static"===I(r).position;)r=G(r);return r&&("html"===B(r)||"body"===B(r)&&"static"===I(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&U(e)&&"fixed"===I(e).position)return null;for(var r=J(e);U(r)&&["html","body"].indexOf(B(r))<0;){var n=I(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function Q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var Z=Math.max,ee=Math.min,te=Math.round;function re(e,t,r){return Z(e,ee(t,r))}function ne(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function oe(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var ie={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,l=!0===u?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:te(te(t*n)/n)||0,y:te(te(r*n)/n)||0}}(i):"function"==typeof u?u(i):i,f=l.x,p=void 0===f?0:f,d=l.y,h=void 0===d?0:d,m=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),v=j,y=R,b=window;if(c){var w=K(r),O="clientHeight",x="clientWidth";w===D(r)&&"static"!==I(w=$(r)).position&&(O="scrollHeight",x="scrollWidth"),w=w,o===R&&(y=P,h-=w[O]-n.height,h*=s?1:-1),o===j&&(v=S,p-=w[x]-n.width,p*=s?1:-1)}var C,k=Object.assign({position:a},c&&ie);return s?Object.assign({},k,((C={})[y]=g?"0":"",C[v]=m?"0":"",C.transform=(b.devicePixelRatio||1)<2?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",C)):Object.assign({},k,((t={})[y]=g?h+"px":"",t[v]=m?p+"px":"",t.transform="",t))}var se={passive:!0},ce={left:"right",right:"left",bottom:"top",top:"bottom"};function ue(e){return e.replace(/left|right|bottom|top/g,(function(e){return ce[e]}))}var le={start:"end",end:"start"};function fe(e){return e.replace(/start|end/g,(function(e){return le[e]}))}function pe(e){var t=D(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function de(e){return Y($(e)).left+pe(e).scrollLeft}function he(e){var t=I(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function me(e){return["html","body","#document"].indexOf(B(e))>=0?e.ownerDocument.body:U(e)&&he(e)?e:me(J(e))}function ge(e,t){var r;void 0===t&&(t=[]);var n=me(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=D(n),a=o?[i].concat(i.visualViewport||[],he(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(ge(J(a)))}function ve(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ye(e,t){return"viewport"===t?ve(function(e){var t=D(e),r=$(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+de(e),y:s}}(e)):U(t)?function(e){var t=Y(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ve(function(e){var t,r=$(e),n=pe(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=Z(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Z(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+de(e),c=-n.scrollTop;return"rtl"===I(o||r).direction&&(s+=Z(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}($(e)))}function be(e,t,r){var n="clippingParents"===t?function(e){var t=ge(J(e)),r=["absolute","fixed"].indexOf(I(e).position)>=0&&U(e)?K(e):e;return W(r)?t.filter((function(e){return W(e)&&F(e,r)&&"body"!==B(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=ye(e,r);return t.top=Z(n.top,t.top),t.right=ee(n.right,t.right),t.bottom=ee(n.bottom,t.bottom),t.left=Z(n.left,t.left),t}),ye(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function we(e){return e.split("-")[1]}function Oe(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?z(o):null,a=o?we(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case R:t={x:s,y:r.y-n.height};break;case P:t={x:s,y:r.y+r.height};break;case S:t={x:r.x+r.width,y:c};break;case j:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var u=i?Q(i):null;if(null!=u){var l="y"===u?"height":"width";switch(a){case"start":t[u]=t[u]-(r[l]/2-n[l]/2);break;case"end":t[u]=t[u]+(r[l]/2-n[l]/2)}}return t}function xe(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.boundary,a=void 0===i?"clippingParents":i,s=r.rootBoundary,c=void 0===s?"viewport":s,u=r.elementContext,l=void 0===u?"popper":u,f=r.altBoundary,p=void 0!==f&&f,d=r.padding,h=void 0===d?0:d,m=ne("number"!=typeof h?h:oe(h,H)),g="popper"===l?"reference":"popper",v=e.elements.reference,y=e.rects.popper,b=e.elements[p?g:l],w=be(W(b)?b:b.contextElement||$(e.elements.popper),a,c),O=Y(v),x=Oe({reference:O,element:y,strategy:"absolute",placement:o}),C=ve(Object.assign({},y,x)),k="popper"===l?C:O,T={top:w.top-k.top+m.top,bottom:k.bottom-w.bottom+m.bottom,left:w.left-k.left+m.left,right:k.right-w.right+m.right},E=e.modifiersData.offset;if("popper"===l&&E){var j=E[o];Object.keys(T).forEach((function(e){var t=[S,P].indexOf(e)>=0?1:-1,r=[R,P].indexOf(e)>=0?"y":"x";T[e]+=j[r]*t}))}return T}function Ce(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,u=void 0===c?A:c,l=we(n),f=l?s?M:M.filter((function(e){return we(e)===l})):H,p=f.filter((function(e){return u.indexOf(e)>=0}));0===p.length&&(p=f);var d=p.reduce((function(t,r){return t[r]=xe(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[z(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}function ke(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Te(e){return[R,S,P,j].some((function(t){return e[t]>=0}))}function Ee(e,t,r){void 0===r&&(r=!1);var n,o,i=U(t),a=U(t)&&function(e){var t=e.getBoundingClientRect(),r=t.width/e.offsetWidth||1,n=t.height/e.offsetHeight||1;return 1!==r||1!==n}(t),s=$(t),c=Y(e,a),u={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!r)&&(("body"!==B(t)||he(s))&&(u=(n=t)!==D(n)&&U(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:pe(n)),U(t)?((l=Y(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=de(s))),{x:c.left+u.scrollLeft-l.x,y:c.top+u.scrollTop-l.y,width:c.width,height:c.height}}function Re(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var Pe={placement:"bottom",modifiers:[],strategy:"absolute"};function Se(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var je=function(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?Pe:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:s,setOptions:function(r){f(),s.options=Object.assign({},i,s.options,r),s.scrollParents={reference:W(e)?ge(e):e.contextElement?ge(e.contextElement):[],popper:ge(t)};var o,a,u=function(e){var t=Re(e);return L.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((o=[].concat(n,s.options.modifiers),a=o.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(a).map((function(e){return a[e]}))));return s.orderedModifiers=u.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:l,options:n});c.push(i||function(){})}})),l.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,r=e.popper;if(Se(t,r)){s.rects={reference:Ee(t,K(r),"fixed"===s.options.strategy),popper:q(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,f=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:f,instance:l})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){f(),u=!0}};if(!Se(e,t))return l;function f(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(r).then((function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=D(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",r.update,se)})),s&&c.addEventListener("resize",r.update,se),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",r.update,se)})),s&&c.removeEventListener("resize",r.update,se)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=Oe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,u={placement:z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ae(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ae(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},N,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=A.reduce((function(e,r){return e[r]=function(e,t,r){var n=z(e),o=[j,R].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[j,S].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,u=r.padding,l=r.boundary,f=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,h=void 0===d||d,m=r.allowedAutoPlacements,g=t.options.placement,v=z(g),y=c||(v!==g&&h?function(e){if("auto"===z(e))return[];var t=ue(e);return[fe(e),t,fe(t)]}(g):[ue(g)]),b=[g].concat(y).reduce((function(e,r){return e.concat("auto"===z(r)?Ce(t,{placement:r,boundary:l,rootBoundary:f,padding:u,flipVariations:h,allowedAutoPlacements:m}):r)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,C=!0,k=b[0],T=0;T<b.length;T++){var E=b[T],H=z(E),M="start"===we(E),A=[R,P].indexOf(H)>=0,L=A?"width":"height",B=xe(t,{placement:E,boundary:l,rootBoundary:f,altBoundary:p,padding:u}),D=A?M?S:j:M?P:R;w[L]>O[L]&&(D=ue(D));var W=ue(D),U=[];if(i&&U.push(B[H]<=0),s&&U.push(B[D]<=0,B[W]<=0),U.every((function(e){return e}))){k=E,C=!1;break}x.set(E,U)}if(C)for(var V=function(e){var t=b.find((function(t){var r=x.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},N=h?3:1;N>0&&"break"!==V(N);N--);t.placement!==k&&(t.modifiersData[n]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,u=r.rootBoundary,l=r.altBoundary,f=r.padding,p=r.tether,d=void 0===p||p,h=r.tetherOffset,m=void 0===h?0:h,g=xe(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:l}),v=z(t.placement),y=we(t.placement),b=!y,w=Q(v),O="x"===w?"y":"x",x=t.modifiersData.popperOffsets,C=t.rects.reference,k=t.rects.popper,T="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,E={x:0,y:0};if(x){if(i||s){var H="y"===w?R:j,M="y"===w?P:S,A="y"===w?"height":"width",L=x[w],B=x[w]+g[H],D=x[w]-g[M],W=d?-k[A]/2:0,U="start"===y?C[A]:k[A],V="start"===y?-k[A]:-C[A],N=t.elements.arrow,X=d&&N?q(N):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},F=Y[H],I=Y[M],_=re(0,C[A],X[A]),$=b?C[A]/2-W-_-F-T:U-_-F-T,J=b?-C[A]/2+W+_+I+T:V+_+I+T,G=t.elements.arrow&&K(t.elements.arrow),te=G?"y"===w?G.clientTop||0:G.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,oe=x[w]+$-ne-te,ie=x[w]+J-ne;if(i){var ae=re(d?ee(B,oe):B,L,d?Z(D,ie):D);x[w]=ae,E[w]=ae-L}if(s){var se="x"===w?R:j,ce="x"===w?P:S,ue=x[O],le=ue+g[se],fe=ue-g[ce],pe=re(d?ee(le,oe):le,ue,d?Z(fe,ie):fe);x[O]=pe,E[O]=pe-ue}}t.modifiersData[n]=E}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=z(r.placement),c=Q(s),u=[j,S].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return ne("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:oe(e,H))}(o.padding,r),f=q(i),p="y"===c?R:j,d="y"===c?P:S,h=r.rects.reference[u]+r.rects.reference[c]-a[c]-r.rects.popper[u],m=a[c]-r.rects.reference[c],g=K(i),v=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=h/2-m/2,b=l[p],w=v-f[u]-l[d],O=v/2-f[u]/2+y,x=re(b,O,w),C=c;r.modifiersData[n]=((t={})[C]=x,t.centerOffset=x-O,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&F(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=xe(t,{elementContext:"reference"}),s=xe(t,{altBoundary:!0}),c=ke(a,n),u=ke(s,o,i),l=Te(c),f=Te(u);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}}]}),He=[],Me=function(){},Ae=function(){return Promise.resolve(null)},Le=[];function Be(e){var t=e.placement,n=void 0===t?"bottom":t,o=e.strategy,i=void 0===o?"absolute":o,a=e.modifiers,s=void 0===a?Le:a,c=e.referenceElement,u=e.onFirstUpdate,l=e.innerRef,f=e.children,p=r.exports.useContext(b),d=r.exports.useState(null),h=d[0],m=d[1],g=r.exports.useState(null),v=g[0],w=g[1];r.exports.useEffect((function(){k(l,h)}),[l,h]);var O=r.exports.useMemo((function(){return{placement:n,strategy:i,onFirstUpdate:u,modifiers:[].concat(s,[{name:"arrow",enabled:null!=v,options:{element:v}}])}}),[n,i,u,s,v]),C=function(e,t,n){void 0===n&&(n={});var o=r.exports.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||He},a=r.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],c=a[1],u=r.exports.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);c({styles:T(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:T(r.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),l=r.exports.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return y(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),f=r.exports.useRef();return E((function(){f.current&&f.current.setOptions(l)}),[l]),E((function(){if(null!=e&&null!=t){var r=(n.createPopper||je)(e,t,l);return f.current=r,function(){r.destroy(),f.current=null}}}),[e,t,n.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}}(c||p,h,O),R=C.state,P=C.styles,S=C.forceUpdate,j=C.update,H=r.exports.useMemo((function(){return{ref:m,style:P.popper,placement:R?R.placement:n,hasPopperEscaped:R&&R.modifiersData.hide?R.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:R&&R.modifiersData.hide?R.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:P.arrow,ref:w},forceUpdate:S||Me,update:j||Ae}}),[m,w,n,R,P,j,S]);return x(f)(H)}function De(e){var t=e.children,n=e.innerRef,o=r.exports.useContext(w),i=r.exports.useCallback((function(e){k(n,e),C(o,e)}),[n,o]);return r.exports.useEffect((function(){return function(){return k(n,null)}})),r.exports.useEffect((function(){}),[o]),x(t)({ref:i})}var We=n.createContext({}),Ue=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},Ve=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},Ne=function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)},ze=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,Ne(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),a({},e,{style:a({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),a({},e,t.isTriggeredBy("hover")&&{onMouseEnter:Ue(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:Ue(t.props.hideTooltip,e.onMouseLeave)},{style:a({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}o(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},r.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},r.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},r.render=function(){var e=this.props,t=e.arrowProps,r=e.placement,o=e.tooltip;return n.createElement(We.Provider,{value:this.contextValue},o({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:r,tooltipRef:this.getTooltipRef}))},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(r.exports.Component);ze.contextType=We;var Xe=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var r=e.pageX,n=e.pageY;t.clearScheduled();var o={tooltipShown:!0};t.props.followCursor&&(o=a({},o,{pageX:r,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(o)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),a({},e,t.isTriggeredBy("click")&&{onClick:Ue(t.clickToggle,e.onClick),onTouchEnd:Ue(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:Ue(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&a({onMouseEnter:Ue(t.showTooltip,e.onMouseEnter),onMouseLeave:Ue(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:Ue(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:Ue(t.showTooltip,e.onFocus),onBlur:Ue(t.hideTooltip,e.onBlur)})},t}o(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this.clearScheduled()},r.render=function(){var e=this,t=this.props,r=t.children,o=t.tooltip,c=t.placement,u=t.trigger,l=t.getTriggerRef,f=t.modifiers,p=t.closeOnReferenceHidden,d=t.usePortal,h=t.portalContainer,m=t.followCursor,g=t.getTooltipRef,v=t.mutationObserverOptions,y=i(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),b=n.createElement(Be,a({innerRef:g,placement:c,modifiers:[{name:"followCursor",enabled:m,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(f)},y),(function(t){var r=t.ref,i=t.style,s=t.placement,c=t.arrowProps,l=t.isReferenceHidden,f=t.update;if(m&&e.popperOffset){var d=e.state,h=d.pageX,g=d.pageY,y=e.popperOffset,b=y.width,w=y.height,O=h+b>window.pageXOffset+document.body.offsetWidth?h-b:h,x=g+w>window.pageYOffset+document.body.offsetHeight?g-w:g;i.transform="translate3d("+O+"px, "+x+"px, 0"}return n.createElement(ze,a({arrowProps:c,closeOnReferenceHidden:p,isReferenceHidden:l,placement:s,update:f,style:i,tooltip:o,trigger:u,mutationObserverOptions:v},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:r}))}));return n.createElement(O,null,n.createElement(De,{innerRef:l},(function(t){var n=t.ref;return r({getTriggerProps:e.getTriggerProps,triggerRef:n})})),this.getState()&&(d?s.exports.createPortal(b,h):b))},r.isControlled=function(){return void 0!==this.props.tooltipShown},r.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(r.exports.Component);Xe.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:Ve()?document.body:null,trigger:"hover",usePortal:Ve(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var Ye=Xe;function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Fe,Ie,_e=c(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),$e=u.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat(_e("top",n,-8,"auto"),"px"),top:"".concat(_e("bottom",n,-8,"auto"),"px"),right:"".concat(_e("left",n,-8,"auto"),"px"),left:"".concat(_e("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat(_e("top",n,"0",8),"px"),borderTopWidth:"".concat(_e("bottom",n,"0",8),"px"),borderRightWidth:"".concat(_e("left",n,"0",8),"px"),borderLeftWidth:"".concat(_e("right",n,"0",8),"px"),borderTopColor:_e("top",n,t.color[r]||r||"light"===t.base?l(t.background.app):f(t.background.app),"transparent"),borderBottomColor:_e("bottom",n,t.color[r]||r||"light"===t.base?l(t.background.app):f(t.background.app),"transparent"),borderLeftColor:_e("left",n,t.color[r]||r||"light"===t.base?l(t.background.app):f(t.background.app),"transparent"),borderRightColor:_e("right",n,t.color[r]||r||"light"===t.base?l(t.background.app):f(t.background.app),"transparent")}})),Je=u.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?l(t.background.app):f(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),Ge=function(e){var t=e.placement,r=e.hasChrome,o=e.children,i=e.arrowProps,a=e.tooltipRef,s=e.arrowRef,c=e.color,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return n.createElement(Je,qe({hasChrome:r,placement:t,ref:a},u,{color:c}),r&&n.createElement($e,qe({placement:t,ref:s},i,{color:c})),o)};function Ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Qe(){return(Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ze(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function et(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Ge.displayName="Tooltip",Ge.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var tt=p.document,rt=u.div(Fe||(Fe=et(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),nt=u.g(Ie||(Ie=et(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),ot=e("WithTooltipPure",(function(e){var t=e.svg,r=e.trigger;e.closeOnClick;var o=e.placement,i=e.modifiers,a=e.hasChrome,s=e.tooltip,c=e.children,u=e.tooltipShown,l=e.onVisibilityChange,f=Ze(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),p=t?nt:rt;return n.createElement(Ye,{placement:o,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:l,tooltip:function(e){var t=e.getTooltipProps,r=e.getArrowProps,o=e.tooltipRef,i=e.arrowRef,c=e.placement;return n.createElement(Ge,Qe({hasChrome:a,placement:c,tooltipRef:o,arrowRef:i,arrowProps:r()},t()),"function"==typeof s?s({onHide:function(){return l(!1)}}):s)}},(function(e){var t=e.getTriggerProps,r=e.triggerRef;return n.createElement(p,Qe({ref:r},t(),f),c)}))}));ot.displayName="WithTooltipPure",ot.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var it=function(e){var t=e.startOpen,o=e.onVisibilityChange,i=Ze(e,["startOpen","onVisibilityChange"]),a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Ke(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ke(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.exports.useState(t||!1),2),s=a[0],c=a[1],u=r.exports.useCallback((function(e){o&&!1===o(e)||c(e)}),[o]);return r.exports.useEffect((function(){var e=function(){return u(!1)};tt.addEventListener("keydown",e,!1);var t=Array.from(tt.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(e){}})))}catch(e){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){tt.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),n.createElement(ot,Qe({},i,{tooltipShown:s,onVisibilityChange:u}))};e({WithToolTipState:it,WithTooltip:it}),it.displayName="WithToolTipState"}}}));
