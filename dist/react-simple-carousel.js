!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=4)}([function(t,e,n){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,n){"use strict";t.exports=n(5)},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,s,u=r(t),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var c in n)i.call(n,c)&&(u[c]=n[c]);if(o){s=o(n);for(var f=0;f<s.length;f++)a.call(n,s[f])&&(u[s[f]]=n[s[f]])}}return u}},function(t,e,n){"use strict";var r={};t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,l,c,f=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,o){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=n(1),y=r(d),v=n(6),m=(r(v),{wrapper:{overflow:"hidden"},inner:{overflow:"hidden"},slide:{float:"left"}}),b=0,g=(l=u=function(t){function e(){var t;i(this,e);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var s=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r)));c.call(s);var u=s.props.children,l=d.Children.count(u),f=s.props.isInfinity&&l>1;return s.state={isMounted:!1,customTransform:void 0,index:f?1:0,isInfinity:f,slidesNumbers:f?l+2:l,isTransition:null,isTransitionInProgress:!1,transitionEventName:"transitionend"},s}return s(e,t),h(e,[{key:"componentWillMount",value:function(){b+=1,this.wrapperClassName="js-ref-wrapper-"+b,this.innerClassName="js-ref-inner-"+b}},{key:"componentDidMount",value:function(){var t=this.state.transitionEventName;this.$wrapper=document.querySelector("."+this.wrapperClassName),this.$inner=document.querySelector("."+this.innerClassName),this.setState({width:this.getWrapperWidth(),isMounted:!0}),this.initAutoplay(),window.addEventListener("resize",this.handleResize),this.$inner.addEventListener(t,this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){var t=this.state,e=t.index,n=t.isInfinity,r=t.slidesNumbers,o=t.isTransitionInProgress;n||e!==r-1||o||this.stopAutoplay(),n&&(0!==e||o||this._moveTo({index:r-2,isTransition:!1,isTransitionInProgress:!1}),r-1!==e||o||this._moveTo({index:1,isTransition:!1,isTransitionInProgress:!1}))}},{key:"componentWillUnmount",value:function(){var t=this.state.transitionEventName;this.stopAutoplay(),window.removeEventListener("resize",this.handleResize),this.$inner.removeEventListener(t,this.handleTransitionEnd)}},{key:"getWrapperWidth",value:function(){return this.$wrapper&&this.$wrapper.clientWidth}},{key:"getInnerWidth",value:function(){var t=this.state,e=t.width,n=t.slidesNumbers;return e&&n?e*n:null}},{key:"getChildren",value:function(){var t=this.props.children,e=this.state.isInfinity,n=d.Children.map(t,this.cloneChild);return e?[this.cloneChild(n[n.length-1],{key:"clonedlast"})].concat(o(n),[this.cloneChild(n[0],{key:"clonedfirst"})]):n}},{key:"move",value:function(t){var e=this.state,n=e.index,r=e.isTransitionInProgress,o=e.slidesNumbers;if(!t||n===o-1&&t>0||0===n&&t<0||r)return!1;this._moveTo({index:n+t,customTransform:void 0})}},{key:"moveTo",value:function(t){this._moveTo({index:t+1})}},{key:"_moveTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.initAutoplay(),this.setState(function(){return p({isTransition:!0,isTransitionInProgress:!0},t)})}},{key:"getRealIndex",value:function(){var t=this.state,e=t.index,n=t.isInfinity,r=t.slidesNumbers;return n?r-1===e?0:e-1:e}},{key:"calcTransform",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=this.state,r=n.index,o=n.width;return t=t||r*o,{transform:"translate3d("+e+t+"px, 0, 0)"}}},{key:"calcAnimation",value:function(){var t=this.props,e=t.transitionTimingFunc,n=t.transitionDelay,r=this.state.isTransition,o=n/100;return o<1e3&&(o="."+o),r?{transition:"transform "+o+"s "+e}:{}}},{key:"stopAutoplay",value:function(){return!!this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval),!0)}},{key:"initAutoplay",value:function(){var t=this.props,e=t.autoplayDelay,n=t.transitionDelay,r=t.autoplay,o=this.state.slidesNumbers;if(!r||o<=1)return!1;if(e<n)throw new Error("`autoplayDelay` less than `transitionDelay`, fix it");this.stopAutoplay(),this.autoplayInterval=setInterval(this.next,e)}},{key:"render",value:function(){var t=this.props.className,e=void 0===t?"":t,n=this.state,r=n.isMounted,o=n.customTransform,i=m.wrapper,a=m.inner,s=r?this.getChildren():null,u=this.getInnerWidth(),l=this.calcTransform(o),c=this.calcAnimation(),h=e+" "+this.wrapperClassName;return f("div",{className:h,style:i,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},void 0,f("div",{style:p({},a,{width:u},l,c),className:this.innerClassName},void 0,s))}}]),e}(d.Component),u.defaultProps={startSlideIndex:0,isInfinity:!1,autoplay:!1,autoplayDelay:1e3,transitionTimingFunc:"ease",transitionDelay:500,onTransitionEnd:null},c=function(){var t=this;this.autoplayInterval=void 0,this.touchStart={},this.touchMove={},this.isLongTouch=!1,this.cloneChild=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return!1;var r=t.state.width,o=p({},m.slide,{width:r});return y.default.cloneElement(e,p({style:p({},o,e.props.style||{})},n))},this.next=function(){t.move(1)},this.prev=function(){t.move(-1)},this.handleTouchStart=function(e){var n=e.touches;setTimeout(function(){t.isLongTouch=!0},250),t.touchStart={x:n[0].pageX,y:n[0].pageY,time:+new Date}},this.handleTouchMove=function(e){var n=e.touches,r=e.scale,o=t.state,i=o.index,a=o.width;if(!(n.length>1||r&&1!==r)){var s=n[0].pageX,u=n[0].pageY;t.touchMove={x:s,y:u,time:+new Date,deltaX:i*a+(t.touchStart.x-s)},t.setState(function(){return{customTransform:t.touchMove.deltaX,isTransition:!1}})}},this.handleTouchEnd=function(){var e=t.state,n=e.index,r=e.isInfinity,o=e.width,i=e.slidesNumbers,a=t.touchMove.deltaX,s=Math.abs(n*o-a),u=i-(n+1)==0,l=a>n*o?1:-1,c=function(){return{customTransform:void 0,isTransition:!0}};r?!t.isLongTouch||s>o/2?t.move(l):t.setState(c):!t.isLongTouch||s>o/2?u&&1===l?t.setState(c):t.move(l):t.setState(c),t.touchStart={},t.touchMove={},t.isLongTouch=!1},this.handleResize=function(){t.setState(function(){return{width:t.getWrapperWidth()}})},this.handleTransitionEnd=function(){var e=t.props.onTransitionEnd,n=t.getRealIndex();t.setState(function(){return{isTransitionInProgress:!1}}),"function"==typeof e&&e({index:n})}},l);e.default=g},function(t,e,n){"use strict";function r(t){for(var e=arguments.length-1,n="Minified React error #"+t+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+t,r=0;r<e;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw e=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),e.name="Invariant Violation",e.framesToPop=1,e}function o(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||P}function i(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||P}function a(){}function s(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||P}function u(t,e,n){var r,o={},i=null,a=null;if(null!=e)for(r in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(i=""+e.key),e)C.call(e,r)&&!A.hasOwnProperty(r)&&(o[r]=e[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];o.children=u}if(t&&t.defaultProps)for(r in s=t.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:x,type:t,key:i,ref:a,props:o,_owner:R.current}}function l(t){return"object"==typeof t&&null!==t&&t.$$typeof===x}function c(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}function f(t,e,n,r){if($.length){var o=$.pop();return o.result=t,o.keyPrefix=e,o.func=n,o.context=r,o.count=0,o}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function p(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>$.length&&$.push(t)}function h(t,e,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var a=!1;if(null===t)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case x:case O:case _:case k:a=!0}}if(a)return n(o,t,""===e?"."+d(t,0):e),1;if(a=0,e=""===e?".":e+":",Array.isArray(t))for(var s=0;s<t.length;s++){i=t[s];var u=e+d(i,s);a+=h(i,u,n,o)}else if(null===t||void 0===t?u=null:(u=j&&t[j]||t["@@iterator"],u="function"==typeof u?u:null),"function"==typeof u)for(t=u.call(t),s=0;!(i=t.next()).done;)i=i.value,u=e+d(i,s++),a+=h(i,u,n,o);else"object"===i&&(n=""+t,r("31","[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return a}function d(t,e){return"object"==typeof t&&null!==t&&null!=t.key?c(t.key):e.toString(36)}function y(t,e){t.func.call(t.context,e,t.count++)}function v(t,e,n){var r=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?m(t,r,n,T.thatReturnsArgument):null!=t&&(l(t)&&(e=o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(N,"$&/")+"/")+n,t={$$typeof:x,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}),r.push(t))}function m(t,e,n,r,o){var i="";null!=n&&(i=(""+n).replace(N,"$&/")+"/"),e=f(e,i,r,o),null==t||h(t,"",v,e),p(e)}/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=n(2),g=n(3),T=n(0),w="function"==typeof Symbol&&Symbol.for,x=w?Symbol.for("react.element"):60103,O=w?Symbol.for("react.call"):60104,_=w?Symbol.for("react.return"):60105,k=w?Symbol.for("react.portal"):60106,S=w?Symbol.for("react.fragment"):60107,j="function"==typeof Symbol&&Symbol.iterator,P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&r("85"),this.updater.enqueueSetState(this,t,e,"setState")},o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},a.prototype=o.prototype;var E=i.prototype=new a;E.constructor=i,b(E,o.prototype),E.isPureReactComponent=!0;var I=s.prototype=new a;I.constructor=s,b(I,o.prototype),I.unstable_isAsyncReactComponent=!0,I.render=function(){return this.props.children};var R={current:null},C=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0},N=/\/+/g,$=[],M={Children:{map:function(t,e,n){if(null==t)return t;var r=[];return m(t,r,null,e,n),r},forEach:function(t,e,n){if(null==t)return t;e=f(null,null,e,n),null==t||h(t,"",y,e),p(e)},count:function(t){return null==t?0:h(t,"",T.thatReturnsNull,null)},toArray:function(t){var e=[];return m(t,e,null,T.thatReturnsArgument),e},only:function(t){return l(t)||r("143"),t}},Component:o,PureComponent:i,unstable_AsyncComponent:s,Fragment:S,createElement:u,cloneElement:function(t,e,n){var r=b({},t.props),o=t.key,i=t.ref,a=t._owner;if(null!=e){if(void 0!==e.ref&&(i=e.ref,a=R.current),void 0!==e.key&&(o=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(u in e)C.call(e,u)&&!A.hasOwnProperty(u)&&(r[u]=void 0===e[u]&&void 0!==s?s[u]:e[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];r.children=s}return{$$typeof:x,type:t.type,key:o,ref:i,props:r,_owner:a}},createFactory:function(t){var e=u.bind(null,t);return e.type=t,e},isValidElement:l,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:R,assign:b}},D=Object.freeze({default:M}),L=D&&M||D;t.exports=L.default?L.default:L},function(t,e,n){t.exports=n(7)()},function(t,e,n){"use strict";var r=n(0),o=n(8),i=n(9);t.exports=function(){function t(t,e,n,r,a,s){s!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){"use strict";function r(t,e,n,r,i,a,s,u){if(o(e),!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,a,s,u],f=0;l=new Error(e.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(t){};t.exports=r},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);