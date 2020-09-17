"use strict"
define("efitness/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/app",["exports","ember-resolver","ember-load-initializers","efitness/config/environment"],(function(e,t,n,r){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=c(e)
if(t){var o=c(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(o,Ember.Application)
var n=u(o)
function o(){var e
i(this,o)
for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l]
return f(s(e=n.call.apply(n,[this].concat(u))),"modulePrefix",r.default.modulePrefix),f(s(e),"podModulePrefix",r.default.podModulePrefix),f(s(e),"Resolver",t.default),e}return o}()
e.default=p,(0,n.default)(p,r.default.modulePrefix)})),define("efitness/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/components/-dynamic-element-alt",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend()
e.default=t})),define("efitness/components/-dynamic-element",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend()
e.default=t})),define("efitness/components/animated-beacon",["exports","ember-animated/components/animated-beacon"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/components/animated-container",["exports","ember-animated/components/animated-container"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/components/animated-each",["exports","ember-animated/components/animated-each"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/components/animated-if",["exports","ember-animated/components/animated-if"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/components/animated-orphans",["exports","ember-animated/components/animated-orphans"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/components/animated-value",["exports","ember-animated/components/animated-value"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/components/bmi",["exports","@glimmer/component"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=Ember.HTMLBars.template({id:"exxCJJmK",block:'{"symbols":[],"statements":[[10,"div"],[14,0,"flex items-center justify-center w-full mt-5"],[12],[2,"\\n  "],[10,"svg"],[14,"height","180"],[14,"width","160"],[12],[2,"\\n    "],[10,"circle"],[14,"cx","80"],[14,"cy","90"],[14,"r","80"],[14,"fill","#E0E0E0"],[12],[13],[2,"\\n    "],[10,"circle"],[14,"cx","80"],[14,"cy","90"],[14,"r","72"],[14,"fill","#FFFFFF"],[12],[13],[2,"\\n    "],[10,"circle"],[14,"cx","80"],[14,"cy","90"],[14,"r","76"],[14,"fill","none"],[14,"stroke-width","4"],[14,"stroke-miterlimit","20"],[15,"stroke",[32,0,["bmiResult"]]],[14,"transform","rotate(-180 80 90)"],[12],[13],[2,"\\n    "],[10,"text"],[14,"text-anchor","middle"],[14,"x","80"],[14,"y","90"],[12],[2,"\\n      "],[10,"tspan"],[14,0,"text-4xl"],[15,"fill",[32,0,["bmiResult"]]],[12],[2,"\\n        "],[1,[32,0,["bmi"]]],[2,"\\n      "],[13],[2,"\\n      "],[10,"tspan"],[14,0,"text-2xl"],[14,"x","77"],[14,"dy","1.2em"],[15,"fill",[32,0,["bmiResult"]]],[12],[2,"\\n        BMI\\n      "],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"div"],[14,0,"flex flex-col ml-4"],[12],[2,"\\n    "],[10,"div"],[14,0,"flex flex-row mb-2"],[12],[2,"\\n      "],[10,"svg"],[14,"width","20"],[14,"height","20"],[12],[2,"\\n        "],[10,"rect"],[14,"width","20"],[14,"height","20"],[14,"fill","#E53E3E"],[12],[13],[2,"\\n      "],[13],[2,"\\n      "],[10,"span"],[14,0,"ml-2 leading-tight text-red-700"],[12],[2,"overweight"],[13],[2,"\\n    "],[13],[2,"\\n    "],[10,"div"],[14,0,"flex flex-row mb-2"],[12],[2,"\\n      "],[10,"svg"],[14,"width","20"],[14,"height","20"],[12],[2,"\\n        "],[10,"rect"],[14,"width","20"],[14,"height","20"],[14,"fill","#2B6CB0"],[12],[13],[2,"\\n      "],[13],[2,"\\n      "],[10,"span"],[14,0,"ml-2 leading-tight text-blue-700"],[12],[2,"normal"],[13],[2,"\\n    "],[13],[2,"\\n    "],[10,"div"],[14,0,"flex flex-row mb-2"],[12],[2,"\\n      "],[10,"svg"],[14,"width","20"],[14,"height","20"],[12],[2,"\\n        "],[10,"rect"],[14,"width","20"],[14,"height","20"],[14,"fill","#ECC94B"],[12],[13],[2,"\\n      "],[13],[2,"\\n      "],[10,"span"],[14,0,"ml-2 leading-tight text-yellow-700"],[12],[2,"underweight"],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":[]}',meta:{moduleName:"efitness/components/bmi.hbs"}}),c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(s,e)
var t,n,u,l=a(s)
function s(){return r(this,s),l.apply(this,arguments)}return t=s,(n=[{key:"bmi",get:function(){var e=this.args.measures,t=e.weight/(e.height*e.height)
return parseFloat(t.toFixed(1))}},{key:"bmiResult",get:function(){return this.bmi<=18.5?"#ECC94B":this.bmi>=25?"#E53E3E":"#2B6CB0"}}])&&o(t.prototype,n),u&&o(t,u),s}(t.default)
e.default=c,Ember._setComponentTemplate(s,c)})),define("efitness/components/calendar/grid/cell",["exports","@glimmer/component","efitness/utils/calendar-helper"],(function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=Ember.HTMLBars.template({id:"fGRGGcMN",block:'{"symbols":["@date","@selectDay"],"statements":[[11,"td"],[16,0,[31,["row-height cell-width align-top\\n          ",[30,[36,0],[[32,0,["isCurrentMonth"]],"text-gray-800","text-gray-500"],null],"\\n          ",[30,[36,0],[[32,0,["isToday"]],"bg-yellow-400 rounded",""],null]]]],[24,"role","button"],[4,[38,2],["click",[30,[36,1],[[32,2],[32,1]],null]],null],[12],[2,"\\n  "],[10,"span"],[14,0,"block"],[12],[1,[32,0,["day"]]],[13],[2,"\\n  "],[10,"div"],[14,0,"flex flex-col items-center justify-center"],[12],[2,"\\n"],[6,[37,0],[[32,0,["hasMeasure"]]],null,[["default"],[{"statements":[[2,"      "],[10,"span"],[15,0,[31,["block rounded-full w-6 h-6 flex items-center justify-center font-semibold mt-2\\n                   ",[30,[36,0],[[32,0,["isToday"]],"bg-white text-yellow-600","bg-yellow-500 text-white"],null]]]],[12],[2,"\\n        M\\n      "],[13],[2,"\\n"]],"parameters":[]}]]],[6,[37,0],[[32,0,["hasTraining"]]],null,[["default"],[{"statements":[[2,"      "],[10,"span"],[15,0,[31,["block rounded-full w-6 h-6 flex items-center justify-center font-semibold mt-2\\n                   ",[30,[36,0],[[32,0,["isToday"]],"bg-white text-yellow-600","bg-yellow-500 text-white"],null]]]],[12],[2,"\\n        T\\n      "],[13],[2,"\\n"]],"parameters":[]}]]],[2,"  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["if","fn","on"]}',meta:{moduleName:"efitness/components/calendar/grid/cell.hbs"}}),f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(c,e)
var t,r,l,s=u(c)
function c(){return o(this,c),s.apply(this,arguments)}return t=c,(r=[{key:"isCurrentMonth",get:function(){var e=this.args,t=e.date,n=e.currentDate
return t.getMonth()===n.getMonth()}},{key:"isToday",get:function(){var e=this.args.date,t=new Date
return n.comparator.eq(e,t)}},{key:"day",get:function(){return this.args.date.getDate()}},{key:"hasMeasure",get:function(){var e=this.args,t=e.events,r=e.date,o=t.find((function(e){return n.comparator.eq(e.day,r)}))
if(o)return o.measureId}},{key:"hasTraining",get:function(){var e=this.args,t=e.events,r=e.date,o=t.find((function(e){return n.comparator.eq(e.day,r)}))
if(o)return o.trainingId}}])&&i(t.prototype,r),l&&i(t,l),c}(t.default)
e.default=f,Ember._setComponentTemplate(c,f)})),define("efitness/components/calendar/grid/index",["exports","@glimmer/component","ember-animated/transitions/move-over","efitness/utils/constants","efitness/utils/calendar-helper"],(function(e,t,n,r,o){var i,a,u,l
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=y(e)
if(t){var o=y(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,h,v,g,w,O,x=Ember.HTMLBars.template({id:"GuYU2pnk",block:'{"symbols":["week","day","@date","@events","@selectDay"],"statements":[[8,"animated-container",[],[[],[]],[["default"],[{"statements":[[2,"\\n"],[6,[37,2],[[32,3]],[["rules","duration"],[[32,0,["rules"]],500]],[["default"],[{"statements":[[2,"    "],[10,"table"],[14,0,"w-full text-center table-auto"],[12],[2,"\\n      "],[10,"thead"],[12],[2,"\\n        "],[10,"tr"],[14,0,"h-12 border-b border-gray-400 border-1"],[12],[2,"\\n          "],[10,"th"],[12],[2,"M"],[13],[10,"th"],[12],[2,"T"],[13],[10,"th"],[12],[2,"W"],[13],[10,"th"],[12],[2,"T"],[13],[10,"th"],[12],[2,"F"],[13],[10,"th"],[12],[2,"S"],[13],[10,"th"],[12],[2,"S"],[13],[2,"\\n        "],[13],[2,"\\n      "],[13],[2,"\\n      "],[10,"tbody"],[12],[2,"\\n"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,["month"]]],null]],null]],null,[["default"],[{"statements":[[2,"          "],[10,"tr"],[14,0,"text-xs border-b border-gray-200 border-1"],[12],[2,"\\n"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,1]],null]],null]],null,[["default"],[{"statements":[[2,"              "],[8,"calendar/grid/cell",[],[["@currentDate","@date","@events","@selectDay"],[[32,3],[32,2],[32,4],[32,5]]],null],[2,"\\n"]],"parameters":[2]}]]],[2,"          "],[13],[2,"\\n"]],"parameters":[1]}]]],[2,"      "],[13],[2,"\\n    "],[13],[2,"\\n"]],"parameters":[]}]]]],"parameters":[]}]]],[2,"\\n"]],"hasEval":false,"upvars":["-track-array","each","animated-value"]}',meta:{moduleName:"efitness/components/calendar/grid/index.hbs"}}),j=(i=Ember.inject.service,l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(s,e)
var t,i,a,l=p(s)
function s(e,t){var n,o,i,a,c;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,s),n=l.call(this,e,t),o=b(n),i="gestures",a=u,c=b(n),a&&Object.defineProperty(o,i,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(c):void 0})
var f=n.args.date
return n.gestures&&(n.gestures.addSwipeAction((function(){f&&n.args.increaseMonth()}),r.Swipe.Up),n.gestures.addSwipeAction((function(){f&&n.args.decreaseMonth()}),r.Swipe.Down)),n}return t=s,(i=[{key:"willDestroy",value:function(){this.gestures&&(this.gestures.removeSwipeAction(r.Swipe.Up),this.gestures.removeSwipeAction(r.Swipe.Down))}},{key:"rules",value:function(e){var t=e.oldItems,r=e.newItems
return t[0]>r[0]?n.toDown:n.toUp}},{key:"month",get:function(){var e=this.args.date
return e?o.monthGenerator.generate(e):[]}}])&&c(t.prototype,i),a&&c(t,a),s}(t.default),m=(a=l).prototype,h="gestures",v=[i],g={configurable:!0,enumerable:!0,writable:!0,initializer:null},O={},Object.keys(g).forEach((function(e){O[e]=g[e]})),O.enumerable=!!O.enumerable,O.configurable=!!O.configurable,("value"in O||O.initializer)&&(O.writable=!0),O=v.slice().reverse().reduce((function(e,t){return t(m,h,e)||e}),O),w&&void 0!==O.initializer&&(O.value=O.initializer?O.initializer.call(w):void 0,O.initializer=void 0),void 0===O.initializer&&(Object.defineProperty(m,h,O),O=null),u=O,a)
e.default=j,Ember._setComponentTemplate(x,j)})),define("efitness/components/calendar/measure-form/index",["exports","@glimmer/component","efitness/utils/wrappers"],(function(e,t,n){var r,o,i
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=p(e)
if(t){var o=p(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return c(this,n)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y=Ember.HTMLBars.template({id:"eid1YmAS",block:'{"symbols":["@title","@date","@onClose"],"statements":[[10,"h1"],[14,0,"w-full mb-4 font-semibold text-yellow-500 border-b-2 border-yellow-500"],[12],[2,"\\n  "],[1,[32,1]],[2,"\\n"],[13],[2,"\\n"],[10,"form"],[14,0,"w-full px-2"],[12],[2,"\\n  "],[10,"div"],[14,0,"my-2 text-lg font-semibold text-center"],[12],[2,"\\n    "],[10,"span"],[12],[2,"\\n      "],[1,[30,[36,0],[[32,2]],null]],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[8,"calendar/measure-form/input",[],[["@icon","@id","@value","@onInput"],[[30,[36,1],["weight-scale-24px"],[["class","width","height"],["fill-current","36px","36px"]]],"inline-weight",[32,0,["measures","weight"]],[32,0,["onInput"]]]],null],[2,"\\n  "],[8,"calendar/measure-form/input",[],[["@icon","@id","@value","@onInput"],[[30,[36,1],["fat-24px"],[["class","width","height"],["fill-current","36px","36px"]]],"inline-fat",[32,0,["measures","fat"]],[32,0,["onInput"]]]],null],[2,"\\n  "],[8,"calendar/measure-form/input",[],[["@icon","@id","@value","@onInput"],[[30,[36,1],["water-24px"],[["class","width","height"],["fill-current","36px","36px"]]],"inline-water",[32,0,["measures","water"]],[32,0,["onInput"]]]],null],[2,"\\n  "],[8,"calendar/measure-form/input",[],[["@icon","@id","@value","@onInput"],[[30,[36,1],["muscle-24px"],[["class","width","height"],["fill-current","36px","36px"]]],"inline-muscle",[32,0,["measures","muscle"]],[32,0,["onInput"]]]],null],[2,"\\n  "],[8,"calendar/measure-form/input",[],[["@icon","@id","@value","@onInput"],[[30,[36,1],["bone_density-24px"],[["class","width","height"],["fill-current","36px","36px"]]],"inline-bone-density",[32,0,["measures","boneDensity"]],[32,0,["onInput"]]]],null],[2,"\\n  "],[10,"div"],[14,0,"grid grid-cols-2 gap-4 mt-4"],[12],[2,"\\n    "],[8,"ui/button",[[24,0,"bg-yellow-800 hover:bg-yellow-700"]],[["@onClick","@label"],[[32,3],"Cancel"]],null],[2,"\\n    "],[8,"ui/button",[[24,0,"bg-yellow-500 hover:bg-yellow-400"]],[["@onClick","@label"],[[32,0,["save"]],"Save"]],null],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["format-date","svg-jar"]}',meta:{moduleName:"efitness/components/calendar/measure-form/index.hbs"}}),m=(r=Ember._action,o=Ember._action,b((i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(a,e)
var t,r,o,i=s(a)
function a(e,t){var r;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,a),d(f(r=i.call(this,e,t)),"measures",void 0),d(f(r),"measurePattern",/\d{1,3}([,|.]\d)?/),d(f(r),"invalidMeasures",!1),r.measures=new n.MeasuresBox
var o=r.args.model
return o&&(r.measures.weight=o.weight.toString(),r.measures.fat=o.fat.toString(),r.measures.water=o.water.toString(),r.measures.muscle=o.muscle.toString(),r.measures.boneDensity=o.boneDensity.toString()),r}return t=a,(r=[{key:"onInput",value:function(e){var t=e.target,n=t.id,r=t.value
this.invalidMeasures=!1
var o=r.replace(",",".")
if(o.match(this.measurePattern)&&o.length<=4)switch(n){case"inline-weight":this.measures.weight=o
break
case"inline-fat":this.measures.fat=o
break
case"inline-water":this.measures.water=o
break
case"inline-muscle":this.measures.muscle=o
break
case"inline-bone-density":this.measures.boneDensity=o}else this.invalidMeasures=!0}},{key:"save",value:function(){this.invalidMeasures?alert("There are invalid measures. Please, fix them before saving"):this.args.onSave(this.measures)}}])&&u(t.prototype,r),o&&u(t,o),a}(t.default)).prototype,"onInput",[r],Object.getOwnPropertyDescriptor(i.prototype,"onInput"),i.prototype),b(i.prototype,"save",[o],Object.getOwnPropertyDescriptor(i.prototype,"save"),i.prototype),i)
e.default=m,Ember._setComponentTemplate(y,m)})),define("efitness/components/calendar/measure-form/input",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"g6l8vPLj",block:'{"symbols":["@id","@icon","@value","@onInput"],"statements":[[10,"div"],[14,0,"flex items-center mb-2"],[12],[2,"\\n  "],[10,"label"],[14,0,"block pr-2 mb-1 text-gray-800"],[15,"for",[32,1]],[12],[2,"\\n    "],[10,"span"],[12],[2,"\\n      "],[1,[32,2]],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[11,"input"],[24,0,"w-full px-4 py-2 leading-tight text-gray-700 border border-gray-500 appearance-none focus:outline-none focus:border-yellow-500"],[16,1,[32,1]],[24,"inputmode","decimal"],[24,"pattern","\\\\d{1,3}([,|.]\\\\d)?"],[16,"placeholder",0],[16,2,[32,3]],[24,4,"text"],[4,[38,0],["input",[32,4]],null],[12],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["on"]}',meta:{moduleName:"efitness/components/calendar/measure-form/input.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("efitness/components/calendar/menu",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Ych53JP7",block:'{"symbols":["@title","@setMeasuresState","@setTrainingState"],"statements":[[10,"h1"],[14,0,"w-full mb-4 font-semibold text-yellow-500 border-b-2 border-yellow-500"],[12],[2,"\\n  "],[1,[32,1]],[2,"\\n"],[13],[2,"\\n"],[10,"ul"],[12],[2,"\\n  "],[10,"li"],[12],[2,"\\n    "],[11,"button"],[24,0,"flex w-full px-4 py-2 mt-2 font-semibold text-white bg-yellow-500 shadow hover:bg-yellow-400 focus:shadow-outline focus:outline-none"],[24,4,"button"],[4,[38,0],["click",[32,2]],null],[12],[2,"\\n      "],[10,"span"],[12],[2,"\\n        "],[1,[30,[36,1],["square_foot-24px"],[["class","width"],["fill-current","24px"]]]],[2,"\\n      "],[13],[2,"\\n      Measures\\n    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"li"],[12],[2,"\\n    "],[11,"button"],[24,0,"flex w-full px-4 py-2 mt-2 font-semibold text-white bg-yellow-500 shadow hover:bg-yellow-400 focus:shadow-outline focus:outline-none"],[24,4,"button"],[4,[38,0],["click",[32,3]],null],[12],[2,"\\n      "],[10,"span"],[12],[2,"\\n        "],[1,[30,[36,1],["directions_run-24px"],[["class","width"],["fill-current","24px"]]]],[2,"\\n      "],[13],[2,"\\n      Training\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["on","svg-jar"]}',meta:{moduleName:"efitness/components/calendar/menu.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("efitness/components/calendar/training-form",["exports","@glimmer/component","efitness/utils/binary-helper","efitness/utils/wrappers"],(function(e,t,n,r){var o,i,a,u,l,s,c,f,p
function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=g(e)
if(t){var o=g(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return h(this,n)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var x=Ember.HTMLBars.template({id:"FOB1Mu1y",block:'{"symbols":["routine","@date","@title","@onClose"],"statements":[[10,"h1"],[14,0,"w-full mb-4 font-semibold text-yellow-500 border-b-2 border-yellow-500"],[12],[2,"\\n  "],[1,[32,3]],[2,"\\n"],[13],[2,"\\n"],[10,"form"],[14,0,"w-full px-2"],[12],[2,"\\n  "],[10,"div"],[14,0,"mt-4 text-sm text-gray-800"],[12],[2,"\\n    Select training\\n  "],[13],[2,"\\n  "],[10,"div"],[14,0,"relative w-full"],[12],[2,"\\n    "],[10,"select"],[14,0,"w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none focus:outline-none focus:border-yellow-500 focus:shadow-outline"],[12],[2,"\\n"],[6,[37,6],[[30,[36,5],[[30,[36,5],[[35,4]],null]],null]],null,[["default"],[{"statements":[[2,"        "],[10,"option"],[12],[2,"\\n          "],[1,[32,1,["name"]]],[2,"\\n        "],[13],[2,"\\n"]],"parameters":[1]}]]],[2,"    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"div"],[14,0,"mt-4 text-sm text-gray-800"],[12],[2,"\\n    Repeat\\n  "],[13],[2,"\\n  "],[10,"div"],[14,0,"my-2 text-sm text-gray-800"],[12],[2,"\\n    "],[10,"div"],[14,0,"mt-4"],[12],[2,"\\n      "],[10,"label"],[14,0,"inline-flex items-center"],[12],[2,"\\n        "],[11,"input"],[24,0,"form-radio"],[24,3,"radio"],[16,2,false],[16,"checked",[30,[36,8],[[30,[36,7],[[32,0,["training","isRepeatable"]]],null],"checked",""],null]],[24,4,"radio"],[4,[38,3],["change",[30,[36,1],[[32,0,["setIsRepeatable"]],false],null]],null],[12],[13],[2,"\\n        "],[10,"span"],[14,0,"ml-2"],[12],[2,"\\n          Only on:\\n        "],[13],[2,"\\n        "],[10,"span"],[14,0,"font-semibold"],[12],[2,"\\n          "],[1,[30,[36,9],[[32,2]],null]],[2,"\\n        "],[13],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n    "],[10,"div"],[14,0,"mt-4"],[12],[2,"\\n      "],[10,"label"],[14,0,"inline-flex items-center"],[12],[2,"\\n        "],[11,"input"],[24,0,"form-radio"],[24,3,"radio"],[16,2,true],[16,"checked",[30,[36,8],[[32,0,["training","isRepeatable"]],"checked",""],null]],[24,4,"radio"],[4,[38,3],["change",[30,[36,1],[[32,0,["setIsRepeatable"]],true],null]],null],[12],[13],[2,"\\n        "],[10,"span"],[14,0,"ml-2"],[12],[2,"\\n          Each...\\n        "],[13],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[6,[37,8],[[32,0,["training","isRepeatable"]]],null,[["default"],[{"statements":[[2,"    "],[10,"div"],[14,0,"mt-4 text-sm text-gray-800"],[12],[2,"\\n      Days per week\\n    "],[13],[2,"\\n    "],[10,"div"],[14,0,"flex justify-around my-2"],[12],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["M","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnDays"]],[32,0,["days","Monday"]]],null],[30,[36,1],[[32,0,["setRepeatOnDays"]],[32,0,["days","Monday"]]],null]]],null],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["T","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnDays"]],[32,0,["days","Tuesday"]]],null],[30,[36,1],[[32,0,["setRepeatOnDays"]],[32,0,["days","Tuesday"]]],null]]],null],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["W","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnDays"]],[32,0,["days","Wednesday"]]],null],[30,[36,1],[[32,0,["setRepeatOnDays"]],[32,0,["days","Wednesday"]]],null]]],null],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["T","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnDays"]],[32,0,["days","Thursday"]]],null],[30,[36,1],[[32,0,["setRepeatOnDays"]],[32,0,["days","Thursday"]]],null]]],null],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["F","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnDays"]],[32,0,["days","Friday"]]],null],[30,[36,1],[[32,0,["setRepeatOnDays"]],[32,0,["days","Friday"]]],null]]],null],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["S","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnDays"]],[32,0,["days","Saturday"]]],null],[30,[36,1],[[32,0,["setRepeatOnDays"]],[32,0,["days","Saturday"]]],null]]],null],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["S","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnDays"]],[32,0,["days","Sunday"]]],null],[30,[36,1],[[32,0,["setRepeatOnDays"]],[32,0,["days","Sunday"]]],null]]],null],[2,"\\n    "],[13],[2,"\\n    "],[10,"div"],[14,0,"mt-4 text-sm text-gray-800"],[12],[2,"\\n      Weeks per month\\n    "],[13],[2,"\\n    "],[10,"div"],[14,0,"flex justify-around my-2"],[12],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["Week 1","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnWeeks"]],[32,0,["weeks","Week1"]]],null],[30,[36,1],[[32,0,["setRepeatOnWeeks"]],[32,0,["weeks","Week1"]]],null]]],null],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["Week 2","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnWeeks"]],[32,0,["weeks","Week2"]]],null],[30,[36,1],[[32,0,["setRepeatOnWeeks"]],[32,0,["weeks","Week2"]]],null]]],null],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["Week 3","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnWeeks"]],[32,0,["weeks","Week3"]]],null],[30,[36,1],[[32,0,["setRepeatOnWeeks"]],[32,0,["weeks","Week3"]]],null]]],null],[2,"\\n      "],[8,"ui/pill",[],[["@label","@selectedColor","@isSelected","@onChange"],["Week 4","bg-yellow-500",[30,[36,0],[[32,0,["training","repeatOnWeeks"]],[32,0,["weeks","Week4"]]],null],[30,[36,1],[[32,0,["setRepeatOnWeeks"]],[32,0,["weeks","Week4"]]],null]]],null],[2,"\\n    "],[13],[2,"\\n    "],[10,"div"],[14,0,"mt-4"],[12],[2,"\\n      "],[10,"label"],[14,0,"block pr-2 mb-1 text-gray-800"],[14,"for","until"],[12],[2,"\\n        Until\\n      "],[13],[2,"\\n      "],[11,"input"],[24,0,"w-full px-4 py-2 leading-tight text-gray-700 bg-white border border-gray-500 appearance-none focus:border-yellow-500"],[24,1,"until"],[16,2,[30,[36,2],[[32,0,["training","lastUntil"]]],null]],[16,"min",[30,[36,2],[[32,2]],null]],[24,4,"date"],[4,[38,3],["input",[32,0,["onInput"]]],null],[12],[13],[2,"\\n    "],[13],[2,"\\n"]],"parameters":[]}]]],[2,"  "],[10,"div"],[14,0,"grid grid-cols-2 gap-4 mt-4"],[12],[2,"\\n    "],[8,"ui/button",[[24,0,"bg-yellow-800 hover:bg-yellow-700"]],[["@onClick","@label"],[[32,4],"Cancel"]],null],[2,"\\n    "],[8,"ui/button",[[24,0,"bg-yellow-500 hover:bg-yellow-400"]],[["@onClick","@label"],[[32,0,["save"]],"Save"]],null],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["binary-eq","fn","format-date-input","on","routines","-track-array","each","not","if","format-date"]}',meta:{moduleName:"efitness/components/calendar/training-form.hbs"}}),j=(o=Ember.inject.service,i=Ember._action,a=Ember._action,u=Ember._action,l=Ember._action,s=Ember._action,p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)})(u,e)
var t,o,i,a=m(u)
function u(e,t){var o,i,l,s,c;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,u),o=a.call(this,e,t),i=v(o),l="store",s=f,c=v(o),s&&Object.defineProperty(i,l,{enumerable:s.enumerable,configurable:s.configurable,writable:s.writable,value:s.initializer?s.initializer.call(c):void 0}),w(v(o),"training",void 0),w(v(o),"weeks",void 0),w(v(o),"days",void 0),o.days=n.days,o.weeks=n.weeks,o.training=new r.TrainingBox(!1,n.days.None,n.weeks.None)
var p=o.args.model
return p&&(o.training.isRepeatable=p.isRepeatable,o.training.repeatOnDays=p.repeatOnDays,o.training.repeatOnWeeks=p.repeatOnWeeks,o.training.lastUntil=p.lastUntil),o}return t=u,(o=[{key:"setIsRepeatable",value:function(e){this.training.isRepeatable=e}},{key:"setRepeatOnDays",value:function(e){var t=(0,n.changeFlag)(this.training.repeatOnDays,e)
this.training.repeatOnDays=t}},{key:"setRepeatOnWeeks",value:function(e){var t=(0,n.changeFlag)(this.training.repeatOnWeeks,e)
this.training.repeatOnWeeks=t}},{key:"onInput",value:function(e){var t=e.target.valueAsDate
this.training.lastUntil=new Date(t.getTime())}},{key:"save",value:function(){(0,this.args.onSave)(this.training)}},{key:"routines",get:function(){return this.store.peekAll("routine")}}])&&b(t.prototype,o),i&&b(t,i),u}(t.default),f=O((c=p).prototype,"store",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O(c.prototype,"setIsRepeatable",[i],Object.getOwnPropertyDescriptor(c.prototype,"setIsRepeatable"),c.prototype),O(c.prototype,"setRepeatOnDays",[a],Object.getOwnPropertyDescriptor(c.prototype,"setRepeatOnDays"),c.prototype),O(c.prototype,"setRepeatOnWeeks",[u],Object.getOwnPropertyDescriptor(c.prototype,"setRepeatOnWeeks"),c.prototype),O(c.prototype,"onInput",[l],Object.getOwnPropertyDescriptor(c.prototype,"onInput"),c.prototype),O(c.prototype,"save",[s],Object.getOwnPropertyDescriptor(c.prototype,"save"),c.prototype),c)
e.default=j,Ember._setComponentTemplate(x,j)})),define("efitness/components/ea-list-element",["exports","ember-animated/components/ea-list-element"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/components/measures-chart/chart",["exports","@glimmer/component","chartist","efitness/utils/calendar-helper","efitness/utils/constants"],(function(e,t,n,r,o){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var n=[],r=!0,o=!1,i=void 0
try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=p(e)
if(t){var o=p(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d,b=Ember.HTMLBars.template({id:"9V1rCsdP",block:'{"symbols":["@date","@period","@data","@propertyToRender","@chartId","@title"],"statements":[[11,"div"],[24,0,"flex flex-col items-center mt-2"],[4,[38,0],[[32,0,["initChart"]],[32,5],[32,4],[32,3],[32,2],[32,1]],null],[4,[38,1],[[32,0,["initChart"]],[32,5],[32,4],[32,3],[32,2],[32,1]],null],[12],[2,"\\n  "],[10,"h3"],[14,0,"text-lg font-bold text-blue-700 uppercase"],[12],[1,[32,6]],[13],[2,"\\n  "],[10,"div"],[15,1,[32,5]],[14,0,"w-full"],[12],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["did-insert","did-update"]}',meta:{moduleName:"efitness/components/measures-chart/chart.hbs"}});(function(e){e.weight="weight",e.fat="fat",e.muscle="muscle",e.water="water",e.boneDensity="boneDensity"})(d||(d={}))
var y=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(p,e)
var t,i,u,f=c(p)
function p(e,t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),f.call(this,e,t)}return t=p,(i=[{key:"initChart",value:function(e,t){var i=a(t,5),u=i[0],l=i[1],s=i[2],c=i[3],f=i[4],p=[],d=[]
switch(c){case o.Period.week:s.forEach((function(e){var t=r.dateHelper.getWeekDays(f),n=t.first,i=t.last
if(r.comparator.gte(e.date,n)&&r.comparator.lte(e.date,i)){var a=e.date.getDay()
a=0===a?6:a-1,p.push(e[l]),d.push(o.days[a].substring(0,3).toUpperCase())}}))
break
case o.Period.month:s.forEach((function(e){var t=f.getMonth()
e.date.getFullYear()===f.getFullYear()&&e.date.getMonth()===t&&e.date.getMonth()===f.getMonth()&&(p.push(e[l]),d.push(e.date.getDate().toString()))}))
break
case o.Period.year:var b=-1
s.forEach((function(e){e.date.getFullYear()===f.getFullYear()&&(b===e.date.getMonth()?p[p.length-1]=e[l]:(p.push(e[l]),d.push(o.months[e.date.getMonth()].substring(0,3).toUpperCase()),b=e.date.getMonth()))}))}var y=new n.default.Line("#".concat(u),{series:[p],labels:d},{fullWidth:!0,chartPadding:{right:40}}),m=0
y.on("created",(function(){m=0})),y.on("draw",(function(e){"line"!==e.type&&"point"!==e.type||e.element.animate({opacity:{begin:80*m++,dur:300,from:0,to:1}})}))}}])&&l(t.prototype,i),u&&l(t,u),p}(t.default)
e.default=y,Ember._setComponentTemplate(b,y)})),define("efitness/components/measures-chart/index",["exports","@glimmer/component","efitness/utils/calendar-helper","efitness/utils/constants"],(function(e,t,n,r){var o,i,a,u,l,s,c,f,p,d,b,y,m
function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=_(e)
if(t){var o=_(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return x(this,n)}}function x(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var k=Ember.HTMLBars.template({id:"Cy3u4U/0",block:'{"symbols":["@model"],"statements":[[8,"measures-chart/menu",[],[["@period","@selectPeriod"],[[32,0,["period"]],[32,0,["selectPeriod"]]]],null],[2,"\\n"],[6,[37,1],[[30,[36,0],[[32,0,["period"]],"week"],null]],null,[["default","else"],[{"statements":[[2,"  "],[8,"measures-chart/selection",[],[["@label","@previous","@next"],[[32,0,["week"]],[32,0,["previousWeek"]],[32,0,["nextWeek"]]]],null],[2,"\\n"]],"parameters":[]},{"statements":[[6,[37,1],[[30,[36,0],[[32,0,["period"]],"month"],null]],null,[["default","else"],[{"statements":[[2,"  "],[8,"measures-chart/selection",[],[["@label","@previous","@next"],[[32,0,["month"]],[32,0,["previousMonth"]],[32,0,["nextMonth"]]]],null],[2,"\\n"]],"parameters":[]},{"statements":[[2,"  "],[8,"measures-chart/selection",[],[["@label","@previous","@next"],[[32,0,["year"]],[32,0,["previousYear"]],[32,0,["nextYear"]]]],null],[2,"\\n"]],"parameters":[]}]]]],"parameters":[]}]]],[8,"measures-chart/chart",[],[["@title","@chartId","@propertyToRender","@period","@date","@data"],["Weight","weight-chart","weight",[32,0,["period"]],[32,0,["date"]],[32,1]]],null],[2,"\\n"],[8,"measures-chart/chart",[],[["@title","@chartId","@propertyToRender","@period","@date","@data"],["Fat","fat-chart","fat",[32,0,["period"]],[32,0,["date"]],[32,1]]],null],[2,"\\n"],[8,"measures-chart/chart",[],[["@title","@chartId","@propertyToRender","@period","@date","@data"],["Water","water-chart","water",[32,0,["period"]],[32,0,["date"]],[32,1]]],null],[2,"\\n"],[8,"measures-chart/chart",[],[["@title","@chartId","@propertyToRender","@period","@date","@data"],["Muscle","muscle-chart","muscle",[32,0,["period"]],[32,0,["date"]],[32,1]]],null],[2,"\\n"],[8,"measures-chart/chart",[],[["@title","@chartId","@propertyToRender","@period","@date","@data"],["Bone Density","bone-chart","boneDensity",[32,0,["period"]],[32,0,["date"]],[32,1]]],null]],"hasEval":false,"upvars":["eq","if"]}',meta:{moduleName:"efitness/components/measures-chart/index.hbs"}}),S=(o=Ember._tracked,i=Ember._tracked,a=Ember._action,u=Ember._action,l=Ember._action,s=Ember._action,c=Ember._action,f=Ember._action,p=Ember._action,m=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)})(u,e)
var t,o,i,a=O(u)
function u(e,t){var n
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),v(j(n=a.call(this,e,t)),"period",b,j(n)),v(j(n),"date",y,j(n)),n.date=new Date,n.period=r.Period.week,n}return t=u,(o=[{key:"selectPeriod",value:function(e){this.period=e}},{key:"previousWeek",value:function(){this.date.setDate(this.date.getDate()-7),this.date=this.date}},{key:"nextWeek",value:function(){this.date.setDate(this.date.getDate()+7),this.date=this.date}},{key:"previousYear",value:function(){this.date.setFullYear(this.date.getFullYear()-1),this.date=this.date}},{key:"nextYear",value:function(){this.date.setFullYear(this.date.getFullYear()+1),this.date=this.date}},{key:"previousMonth",value:function(){this.date.setMonth(this.date.getMonth()-1),this.date=this.date}},{key:"nextMonth",value:function(){this.date.setMonth(this.date.getMonth()+1),this.date=this.date}},{key:"week",get:function(){if(this.period===r.Period.week){var e=n.dateHelper.getWeekDays(this.date),t=e.first,o=e.last
return"".concat(t.getDate()," ").concat(r.months[t.getMonth()].substring(0,3).toUpperCase()," - ").concat(o.getDate()," ").concat(r.months[o.getMonth()].substring(0,3).toUpperCase())}return null}},{key:"month",get:function(){return this.period===r.Period.month?r.months[this.date.getMonth()]:null}},{key:"year",get:function(){return this.period===r.Period.year?this.date.getFullYear().toString():null}}])&&g(t.prototype,o),i&&g(t,i),u}(t.default),b=P((d=m).prototype,"period",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=P(d.prototype,"date",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P(d.prototype,"selectPeriod",[a],Object.getOwnPropertyDescriptor(d.prototype,"selectPeriod"),d.prototype),P(d.prototype,"previousWeek",[u],Object.getOwnPropertyDescriptor(d.prototype,"previousWeek"),d.prototype),P(d.prototype,"nextWeek",[l],Object.getOwnPropertyDescriptor(d.prototype,"nextWeek"),d.prototype),P(d.prototype,"previousYear",[s],Object.getOwnPropertyDescriptor(d.prototype,"previousYear"),d.prototype),P(d.prototype,"nextYear",[c],Object.getOwnPropertyDescriptor(d.prototype,"nextYear"),d.prototype),P(d.prototype,"previousMonth",[f],Object.getOwnPropertyDescriptor(d.prototype,"previousMonth"),d.prototype),P(d.prototype,"nextMonth",[p],Object.getOwnPropertyDescriptor(d.prototype,"nextMonth"),d.prototype),d)
e.default=S,Ember._setComponentTemplate(k,S)})),define("efitness/components/measures-chart/menu",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"0M8k2N0a",block:'{"symbols":["@period","@selectPeriod"],"statements":[[10,"div"],[14,0,"flex justify-around bg-blue-300"],[12],[2,"\\n  "],[11,"button"],[16,0,[31,["w-1/3 py-2 uppercase font-semibold ",[30,[36,1],[[30,[36,0],[[32,1],"week"],null],"text-blue-700 border-b-4 border-blue-700","text-white"],null]]]],[4,[38,3],["click",[30,[36,2],[[32,2],"week"],null]],null],[12],[2,"\\n    Week\\n  "],[13],[2,"\\n  "],[11,"button"],[16,0,[31,["w-1/3 py-2 uppercase font-semibold ",[30,[36,1],[[30,[36,0],[[32,1],"month"],null],"text-blue-700 border-b-4 border-blue-700","text-white"],null]]]],[4,[38,3],["click",[30,[36,2],[[32,2],"month"],null]],null],[12],[2,"\\n    Month\\n  "],[13],[2,"\\n  "],[11,"button"],[16,0,[31,["w-1/3 py-2 uppercase font-semibold ",[30,[36,1],[[30,[36,0],[[32,1],"year"],null],"text-blue-700 border-b-4 border-blue-700","text-white"],null]]]],[4,[38,3],["click",[30,[36,2],[[32,2],"year"],null]],null],[12],[2,"\\n    Year\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["eq","if","fn","on"]}',meta:{moduleName:"efitness/components/measures-chart/menu.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("efitness/components/measures-chart/selection",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"DJgJB1sL",block:'{"symbols":["@previous","@label","@next"],"statements":[[10,"div"],[14,0,"flex flex-row justify-around py-2 mt-2 text-lg text-blue-700"],[12],[2,"\\n  "],[11,"span"],[24,"role","button"],[4,[38,0],["click",[32,1]],null],[12],[1,[30,[36,1],["navigate_before-24px"],[["class","width","height"],["fill-current","36px","36px"]]]],[13],[2,"\\n  "],[10,"span"],[14,0,"font-semibold leading-loose"],[12],[1,[32,2]],[13],[2,"\\n  "],[11,"span"],[24,"role","button"],[4,[38,0],["click",[32,3]],null],[12],[1,[30,[36,1],["navigate_next-24px"],[["class","width","height"],["fill-current","36px","36px"]]]],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["on","svg-jar"]}',meta:{moduleName:"efitness/components/measures-chart/selection.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("efitness/components/measures-inline/index",["exports","@glimmer/component"],(function(e,t){var n,r,o,i,a,u
function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=b(e)
if(t){var o=b(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m=Ember.HTMLBars.template({id:"HUdaX/My",block:'{"symbols":[],"statements":[[10,"p"],[14,0,"text-center text-blue-700"],[12],[1,[30,[36,0],[[32,0,["measure","date"]]],null]],[13],[2,"\\n"],[10,"div"],[14,0,"flex flex-row justify-around py-2 text-blue-700"],[12],[2,"\\n  "],[11,"button"],[4,[38,2],["click",[30,[36,1],[[32,0,["previousMeasure"]]],null]],null],[12],[1,[30,[36,3],["navigate_before-24px"],[["class","width","height"],["fill-current","36px","36px"]]]],[13],[2,"\\n  "],[8,"measures-inline/measure",[],[["@icon","@value"],["weight-scale-24px",[32,0,["measure","weight"]]]],null],[2,"\\n  "],[8,"measures-inline/measure",[],[["@icon","@value"],["fat-24px",[32,0,["measure","fat"]]]],null],[2,"\\n  "],[8,"measures-inline/measure",[],[["@icon","@value"],["water-24px",[32,0,["measure","water"]]]],null],[2,"\\n  "],[8,"measures-inline/measure",[],[["@icon","@value"],["muscle-24px",[32,0,["measure","muscle"]]]],null],[2,"\\n  "],[8,"measures-inline/measure",[],[["@icon","@value"],["bone_density-24px",[32,0,["measure","boneDensity"]]]],null],[2,"\\n  "],[11,"button"],[4,[38,2],["click",[30,[36,1],[[32,0,["nextMeasure"]]],null]],null],[12],[1,[30,[36,3],["navigate_next-24px"],[["class","width","height"],["fill-current","36px","36px"]]]],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["format-date","fn","on","svg-jar"]}',meta:{moduleName:"efitness/components/measures-inline/index.hbs"}}),h=(n=Ember._tracked,r=Ember._action,o=Ember._action,u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)})(i,e)
var t,n,r,o=f(i)
function i(e,t){var n,r,u,l,s
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),n=o.call(this,e,t),r=d(n),u="index",l=a,s=d(n),l&&Object.defineProperty(r,u,{enumerable:l.enumerable,configurable:l.configurable,writable:l.writable,value:l.initializer?l.initializer.call(s):void 0}),n.index=n.args.measures.length-1,n}return t=i,(n=[{key:"nextMeasure",value:function(){this.index<this.args.measures.length-1&&this.index++}},{key:"previousMeasure",value:function(){this.index>0&&this.index--}},{key:"measure",get:function(){return this.args.measures[this.index]}}])&&s(t.prototype,n),r&&s(t,r),i}(t.default),a=y((i=u).prototype,"index",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y(i.prototype,"nextMeasure",[r],Object.getOwnPropertyDescriptor(i.prototype,"nextMeasure"),i.prototype),y(i.prototype,"previousMeasure",[o],Object.getOwnPropertyDescriptor(i.prototype,"previousMeasure"),i.prototype),i)
e.default=h,Ember._setComponentTemplate(m,h)})),define("efitness/components/measures-inline/measure",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"k3527vji",block:'{"symbols":["@icon","@value"],"statements":[[10,"div"],[14,0,"flex flex-col items-center"],[12],[2,"\\n  "],[10,"span"],[14,0,"block"],[12],[1,[30,[36,0],[[32,1]],[["class","width","height"],["fill-current","36px","36px"]]]],[13],[2,"\\n  "],[10,"span"],[14,0,"block"],[12],[1,[32,2]],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["svg-jar"]}',meta:{moduleName:"efitness/components/measures-inline/measure.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("efitness/components/nav-bar",["exports","@glimmer/component"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return a(this,n)}}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=Ember.HTMLBars.template({id:"iXFU6buu",block:'{"symbols":[],"statements":[[10,"nav"],[12],[2,"\\n  "],[10,"ul"],[14,0,"flex justify-around"],[12],[2,"\\n    "],[10,"li"],[12],[2,"\\n      "],[8,"link-to",[[24,"aria-label","Home page"],[24,1,"nav-index"],[24,0,"nav-btn"]],[["@route","@current-when"],["index","index"]],[["default"],[{"statements":[[2,"\\n        "],[10,"span"],[12],[1,[30,[36,0],["home-24px"],[["class","width"],["fill-current","24px"]]]],[13],[2,"\\n      "]],"parameters":[]}]]],[2,"\\n    "],[13],[2,"\\n    "],[10,"li"],[12],[2,"\\n      "],[8,"link-to",[[24,"aria-label","Routines page"],[24,1,"nav-routines"],[24,0,"nav-btn"]],[["@route","@current-when"],["routines","routines"]],[["default"],[{"statements":[[2,"\\n        "],[10,"span"],[12],[1,[30,[36,0],["directions_run-24px"],[["class","width"],["fill-current","24px"]]]],[13],[2,"\\n      "]],"parameters":[]}]]],[2,"\\n    "],[13],[2,"\\n    "],[10,"li"],[12],[2,"\\n      "],[8,"link-to",[[24,"aria-label","Calendar page"],[24,1,"nav-calendar"],[24,0,"nav-btn"]],[["@route","@current-when"],["calendar","calendar"]],[["default"],[{"statements":[[2,"\\n        "],[10,"span"],[12],[1,[30,[36,0],["calendar_today-24px"],[["class","width"],["fill-current","24px"]]]],[13],[2,"\\n      "]],"parameters":[]}]]],[2,"\\n    "],[13],[2,"\\n    "],[10,"li"],[12],[2,"\\n      "],[8,"link-to",[[24,"aria-label","Statistics page"],[24,1,"nav-statistics"],[24,0,"nav-btn"]],[["@route","@current-when"],["statistics","statistics"]],[["default"],[{"statements":[[2,"\\n        "],[10,"span"],[12],[1,[30,[36,0],["bar_chart-24px"],[["class","width"],["fill-current","24px"]]]],[13],[2,"\\n      "]],"parameters":[]}]]],[2,"\\n    "],[13],[2,"\\n    "],[10,"li"],[12],[2,"\\n      "],[8,"link-to",[[24,"aria-label","Settings page"],[24,1,"nav-settings"],[24,0,"nav-btn"]],[["@route","@current-when"],["settings","settings"]],[["default"],[{"statements":[[2,"\\n        "],[10,"span"],[12],[1,[30,[36,0],["tune-24px"],[["class","width"],["fill-current","24px"]]]],[13],[2,"\\n      "]],"parameters":[]}]]],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["svg-jar"]}',meta:{moduleName:"efitness/components/nav-bar.hbs"}}),s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(n,e)
var t=i(n)
function n(){return r(this,n),t.apply(this,arguments)}return n}(t.default)
e.default=s,Ember._setComponentTemplate(l,s)})),define("efitness/components/service-worker-update-notify",["exports","ember-service-worker-update-notify/components/service-worker-update-notify"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/components/ui/bottom-sheet",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"G1daxIGE",block:'{"symbols":["@onClose","&default"],"statements":[[10,"div"],[14,0,"absolute inset-0 z-10 flex flex-col page-height"],[12],[2,"\\n  "],[11,"div"],[24,0,"absolute w-full h-full bg-gray-800 opacity-75"],[24,"role","button"],[4,[38,0],["click",[32,1]],null],[12],[13],[2,"\\n\\n  "],[10,"div"],[14,0,"absolute bottom-0 w-full p-2 bg-white rounded-t-lg"],[12],[2,"\\n    "],[18,2,null],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["on"]}',meta:{moduleName:"efitness/components/ui/bottom-sheet.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("efitness/components/ui/button",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"HkRG5NBf",block:'{"symbols":["&attrs","@onClick","@label"],"statements":[[11,"button"],[17,1],[24,0,"w-full px-4 py-2 font-semibold text-white shadow focus:shadow-outline focus:outline-none"],[24,4,"button"],[4,[38,0],["click",[32,2]],null],[12],[2,"\\n    "],[1,[32,3]],[2,"\\n"],[13]],"hasEval":false,"upvars":["on"]}',meta:{moduleName:"efitness/components/ui/button.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("efitness/components/ui/pill",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"dnRT2lv/",block:'{"symbols":["@selectedColor","@isSelected","@onChange","@label"],"statements":[[11,"div"],[16,0,[31,["rounded-full py-1 px-4 ",[30,[36,0],[[32,2],[32,1],"bg-gray-300"],null]]]],[24,"role","button"],[4,[38,1],["click",[32,3]],null],[12],[2,"\\n    "],[1,[32,4]],[2,"\\n"],[13]],"hasEval":false,"upvars":["if","on"]}',meta:{moduleName:"efitness/components/ui/pill.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n}))
define("efitness/components/waves",["exports","@glimmer/component"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=Ember.HTMLBars.template({id:"EEDvW4cX",block:'{"symbols":["&default"],"statements":[[10,"div"],[14,0,"w-full h-full overflow-hidden"],[12],[2,"\\n  "],[10,"div"],[14,0,"relative"],[12],[2,"\\n    "],[10,"div"],[14,0,"wave bottom"],[12],[13],[2,"\\n    "],[10,"div"],[14,0,"wave middle"],[12],[13],[2,"\\n    "],[10,"div"],[14,0,"wave top"],[12],[13],[2,"\\n    "],[10,"div"],[14,0,"absolute z-10 w-screen"],[12],[2,"\\n       "],[18,1,null],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":[]}',meta:{moduleName:"efitness/components/waves.hbs"}}),d=function(){function e(t,n,r,o){l(this,e),f(this,"x",void 0),f(this,"y",void 0),f(this,"dx",void 0),f(this,"dy",void 0),this.x=t,this.y=n,this.dx=r,this.dy=o}return c(e,[{key:"print",value:function(){return"".concat(this.x," ").concat(this.y," Q ").concat(this.dx," ").concat(this.dy)}}]),e}(),b=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(n,e)
var t=o(n)
function n(e,r){var o
l(this,n),f(a(o=t.call(this,e,r)),"points",void 0),f(a(o),"width",void 0),f(a(o),"height",void 0),o.width=window.screen.width,o.height=window.screen.height-111
var i=o.height/2,u=i/4,s=o.width/4
return o.points=[new d(0,i,s/3,300),new d(s,i+u,s/2,i),new d(2*s,i+2*u,s,i+2*u),new d(o.width,i,o.width,i)],o}return c(n,[{key:"angle",get:function(){for(var e="M ",t=0;t<this.points.length;t++)e+="".concat(this.points[t].print()," ")
return console.log(e.trimEnd()),e.trimEnd()}}]),n}(t.default)
e.default=b,Ember._setComponentTemplate(p,b)})),define("efitness/config/environment.d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=config
e.default=t})),define("efitness/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/helpers/-element",["exports","ember-element-helper/helpers/-element"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/helpers/and",["exports","ember-truth-helpers/helpers/and"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})})),define("efitness/helpers/app-version",["exports","efitness/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=r.versionOnly||r.hideSha,a=r.shaOnly||r.hideVersion,u=null
return i&&(r.showExtended&&(u=o.match(n.versionExtendedRegExp)),u||(u=o.match(n.versionRegExp))),a&&(u=o.match(n.shaRegExp)),u?u[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var o=Ember.Helper.helper(r)
e.default=o})),define("efitness/helpers/binary-eq",["exports","efitness/utils/binary-helper"],(function(e,t){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var n=[],r=!0,o=!1,i=void 0
try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){var r=n(e,2),o=r[0],i=r[1]
return!(!o||!i)&&(0,t.readFlag)(o,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.binaryEq=o,e.default=void 0
var i=Ember.Helper.helper(o)
e.default=i})),define("efitness/helpers/cancel-all",["exports","ember-concurrency/helpers/cancel-all"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})})),define("efitness/helpers/format-date-input",["exports","efitness/utils/calendar-helper"],(function(e,t){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var n=[],r=!0,o=!1,i=void 0
try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){var r=n(e,1)[0]
if(r){var o=t.dateHelper.increaseMonth(r),i=o.getDate().toString()
i=parseInt(i)>9?i:"0".concat(i)
var a=o.getMonth().toString()
return a=parseInt(a)>9?a:"0".concat(a),"".concat(o.getFullYear(),"-").concat(a,"-").concat(i)}return""}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDateInput=o,e.default=void 0
var i=Ember.Helper.helper(o)
e.default=i})),define("efitness/helpers/format-date",["exports","efitness/utils/constants"],(function(e,t){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var n=[],r=!0,o=!1,i=void 0
try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){var r=n(e,1)[0]
return r?"".concat(r.getDate()," ").concat(t.months[r.getMonth()]," ").concat(r.getFullYear()):""}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=o,e.default=void 0
var i=Ember.Helper.helper(o)
e.default=i})),define("efitness/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})})),define("efitness/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})})),define("efitness/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})})),define("efitness/helpers/is-empty",["exports","ember-truth-helpers/helpers/is-empty"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})})),define("efitness/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})})),define("efitness/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})})),define("efitness/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})})),define("efitness/helpers/not",["exports","ember-truth-helpers/helpers/not"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})})),define("efitness/helpers/or",["exports","ember-truth-helpers/helpers/or"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})})),define("efitness/helpers/perform",["exports","ember-concurrency/helpers/perform"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("efitness/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("efitness/helpers/svg-jar",["exports","ember-svg-jar/utils/make-helper","ember-svg-jar/utils/make-svg"],(function(e,t,n){function r(e){try{return require("ember-svg-jar/inlined/".concat(e)).default}catch(t){return null}}function o(e,t){return(0,n.default)(e,t,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.svgJar=o,e.default=void 0
var i=(0,t.default)(o)
e.default=i})),define("efitness/helpers/task",["exports","ember-concurrency/helpers/task"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})})),define("efitness/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","efitness/config/environment"],(function(e,t,n){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,o)}
e.default=i})),define("efitness/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("efitness/initializers/ember-concurrency",["exports","ember-concurrency/initializers/ember-concurrency"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("efitness/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:n.default}
e.default=r})),define("efitness/initializers/export-application-global",["exports","efitness/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("efitness/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n})),define("efitness/models/event",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,s,c,f,p,d
function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=O(e)
if(t){var o=O(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return g(this,n)}}function g(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=(n=(0,t.belongsTo)("training",{async:!1}),r=(0,t.belongsTo)("measure",{async:!1}),o=(0,t.attr)(),i=(0,t.attr)(),a=(0,t.attr)(),d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)})(n,e)
var t=v(n)
function n(){var e
m(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return y(w(e=t.call.apply(t,[this].concat(o))),"training",l,w(e)),y(w(e),"measure",s,w(e)),y(w(e),"day",c,w(e)),y(w(e),"trainingId",f,w(e)),y(w(e),"measureId",p,w(e)),e}return n}(t.default),l=x((u=d).prototype,"training",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=x(u.prototype,"measure",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=x(u.prototype,"day",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=x(u.prototype,"trainingId",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=x(u.prototype,"measureId",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)
e.default=j})),define("efitness/models/exercise",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,s,c,f,p,d,b,y,m,h,v,g
function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=S(e)
if(t){var o=S(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return P(this,n)}}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var E=(n=(0,t.attr)(),r=(0,t.attr)(),o=(0,t.attr)(),i=(0,t.attr)(),a=(0,t.attr)(),u=(0,t.attr)(),l=(0,t.attr)(),s=(0,t.attr)(),g=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)})(n,e)
var t=_(n)
function n(){var e
x(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return O(k(e=t.call.apply(t,[this].concat(o))),"routineId",f,k(e)),O(k(e),"order",p,k(e)),O(k(e),"name",d,k(e)),O(k(e),"description",b,k(e)),O(k(e),"series",y,k(e)),O(k(e),"repetitions",m,k(e)),O(k(e),"time",h,k(e)),O(k(e),"image",v,k(e)),e}return n}(t.default),f=R((c=g).prototype,"routineId",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=R(c.prototype,"order",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=R(c.prototype,"name",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=R(c.prototype,"description",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=R(c.prototype,"series",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=R(c.prototype,"repetitions",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=R(c.prototype,"time",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=R(c.prototype,"image",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c)
e.default=E})),define("efitness/models/measure",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,s,c,f,p,d,b,y,m,h
function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=P(e)
if(t){var o=P(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return j(this,n)}}function j(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var S=(n=(0,t.belongsTo)("event",{async:!1}),r=(0,t.attr)(),o=(0,t.attr)(),i=(0,t.attr)(),a=(0,t.attr)(),u=(0,t.attr)(),l=(0,t.attr)(),h=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)})(n,e)
var t=x(n)
function n(){var e
w(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return g(_(e=t.call.apply(t,[this].concat(o))),"event",c,_(e)),g(_(e),"eventId",f,_(e)),g(_(e),"weight",p,_(e)),g(_(e),"water",d,_(e)),g(_(e),"fat",b,_(e)),g(_(e),"muscle",y,_(e)),g(_(e),"boneDensity",m,_(e)),e}return n}(t.default),c=k((s=h).prototype,"event",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=k(s.prototype,"eventId",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=k(s.prototype,"weight",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=k(s.prototype,"water",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=k(s.prototype,"fat",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=k(s.prototype,"muscle",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=k(s.prototype,"boneDensity",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)
e.default=S})),define("efitness/models/routine",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,s,c,f
function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=g(e)
if(t){var o=g(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return h(this,n)}}function h(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(n=(0,t.hasMany)("exercise",{async:!1}),r=(0,t.hasMany)("tag",{async:!1}),o=(0,t.attr)(),i=(0,t.attr)(),f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)})(n,e)
var t=m(n)
function n(){var e
b(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return d(v(e=t.call.apply(t,[this].concat(o))),"exercises",u,v(e)),d(v(e),"tags",l,v(e)),d(v(e),"name",s,v(e)),d(v(e),"createdOn",c,v(e)),e}return n}(t.default),u=w((a=f).prototype,"exercises",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=w(a.prototype,"tags",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=w(a.prototype,"name",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=w(a.prototype,"createdOn",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)
e.default=O})),define("efitness/models/tag",["exports","@ember-data/model"],(function(e,t){var n,r,o,i
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b,y,m,h,v,g,w=(n=(0,t.attr)(),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(n,e)
var t=c(n)
function n(){var e
l(this,n)
for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a]
return u(p(e=t.call.apply(t,[this].concat(i))),"name",o,p(e)),e}return n}(t.default),b=(r=i).prototype,y="name",m=[n],h={configurable:!0,enumerable:!0,writable:!0,initializer:null},g={},Object.keys(h).forEach((function(e){g[e]=h[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),g=m.slice().reverse().reduce((function(e,t){return t(b,y,e)||e}),g),v&&void 0!==g.initializer&&(g.value=g.initializer?g.initializer.call(v):void 0,g.initializer=void 0),void 0===g.initializer&&(Object.defineProperty(b,y,g),g=null),o=g,r)
e.default=w})),define("efitness/models/training",["exports","@ember-data/model","efitness/utils/binary-helper"],(function(e,t,n){var r,o,i,a,u,l,s,c,f,p,d,b,y,m,h,v,g,w,O,x
function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=M(e)
if(t){var o=M(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return R(this,n)}}function R(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var D=(r=(0,t.belongsTo)("event",{async:!1}),o=(0,t.belongsTo)("routine",{async:!1}),i=(0,t.attr)(),a=(0,t.attr)(),u=(0,t.attr)({defaultValue:!1}),l=(0,t.attr)({defaultValue:!1}),s=(0,t.attr)({defaultValue:n.days.None}),c=(0,t.attr)({defaultValue:n.weeks.None}),f=(0,t.attr)(),x=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)})(n,e)
var t=S(n)
function n(){var e
P(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return _(E(e=t.call.apply(t,[this].concat(o))),"event",d,E(e)),_(E(e),"routine",b,E(e)),_(E(e),"eventId",y,E(e)),_(E(e),"routineId",m,E(e)),_(E(e),"completed",h,E(e)),_(E(e),"isRepeatable",v,E(e)),_(E(e),"repeatOnDays",g,E(e)),_(E(e),"repeatOnWeeks",w,E(e)),_(E(e),"lastUntil",O,E(e)),e}return n}(t.default),d=z((p=x).prototype,"event",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=z(p.prototype,"routine",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=z(p.prototype,"eventId",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=z(p.prototype,"routineId",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=z(p.prototype,"completed",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=z(p.prototype,"isRepeatable",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=z(p.prototype,"repeatOnDays",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=z(p.prototype,"repeatOnWeeks",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=z(p.prototype,"lastUntil",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p)
e.default=D})),define("efitness/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/pages/application/adapter",["exports","@ember-data/adapter/json-api","uuid","idb","efitness/utils/constants"],(function(e,t,n,r,o){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,o)}function u(e){return function(){var t=this,n=arguments
return new Promise((function(r,o){var i=e.apply(t,n)
function u(e){a(i,r,o,u,l,"next",e)}function l(e){a(i,r,o,u,l,"throw",e)}u(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)})(O,e)
var t,a,p,d,b,y,m,h,v,g,w=f(O)
function O(){return l(this,O),w.apply(this,arguments)}return t=O,(a=[{key:"generateIdForRecord",value:function(e,t,r){return(0,n.v4)()}},{key:"createRecord",value:(g=u(regeneratorRuntime.mark((function e(t,n,r){var o,i,a
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:return o=e.sent,i=this.serialize(r,{includeId:!0}),a=n.modelName.toString(),e.next=7,o.transaction(a,"readwrite").objectStore(a).add(i)
case 7:return o.close(),e.abrupt("return",i)
case 9:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return g.apply(this,arguments)})},{key:"findRecord",value:(v=u(regeneratorRuntime.mark((function e(t,n,r,o){var i,a,u
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:return i=e.sent,a=n.modelName.toString(),e.next=6,i.transaction(a).objectStore(a).get(r)
case 6:return u=e.sent,i.close(),e.abrupt("return",u)
case 9:case"end":return e.stop()}}),e,this)}))),function(e,t,n,r){return v.apply(this,arguments)})},{key:"findAll",value:(h=u(regeneratorRuntime.mark((function e(t,n,r,o){var i,a,u,l
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:return i=e.sent,a=[],u=n.modelName.toString(),e.next=7,i.transaction(u).store.openCursor()
case 7:l=e.sent
case 8:if(!l){e.next=15
break}return a.push(l.value),e.next=12,l.continue()
case 12:l=e.sent,e.next=8
break
case 15:return i.close(),e.abrupt("return",a)
case 17:case"end":return e.stop()}}),e,this)}))),function(e,t,n,r){return h.apply(this,arguments)})},{key:"updateRecord",value:(m=u(regeneratorRuntime.mark((function e(t,n,r){var o,i,a,u
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:return o=e.sent,i=this.serialize(r,{includeId:!0}),a=n.modelName.toString(),u=o.transaction(a,"readwrite").objectStore(a),e.next=8,u.get(r.id)
case 8:if(!e.sent){e.next=12
break}return e.next=12,u.put(i)
case 12:return o.close(),e.abrupt("return",i)
case 14:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return m.apply(this,arguments)})},{key:"deleteRecord",value:(y=u(regeneratorRuntime.mark((function e(t,n,r){var o,i,a
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:return o=e.sent,i=this.serialize(r,{includeId:!0}),a=n.modelName.toString(),e.next=7,o.transaction(a,"readwrite").objectStore(a).delete(r.id)
case 7:return o.close(),e.abrupt("return",i)
case 9:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return y.apply(this,arguments)})},{key:"queryRecord",value:(b=u(regeneratorRuntime.mark((function e(t,n,r){var o,a,u,l,s,c
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:return o=e.sent,a=n.modelName.toString(),u=Object.keys(r),e.next=7,o.transaction(a).objectStore(a).openCursor()
case 7:if(!(l=e.sent)){e.next=19
break}s=regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0,u.forEach((function(e){null!==l&&l.value[e]===r[e]&&t++})),t!==u.length){e.next=7
break}return o.close(),e.abrupt("return",{v:l.value})
case 7:return e.next=9,l.continue()
case 9:l=e.sent
case 10:case"end":return e.stop()}}),e)}))
case 10:if(!l){e.next=17
break}return e.delegateYield(s(),"t0",12)
case 12:if("object"!==i(c=e.t0)){e.next=15
break}return e.abrupt("return",c.v)
case 15:e.next=10
break
case 17:e.next=21
break
case 19:return o.close(),e.abrupt("return",null)
case 21:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return b.apply(this,arguments)})},{key:"query",value:(d=u(regeneratorRuntime.mark((function e(t,n,r){var o,i,a,u,l,s
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:return o=e.sent,i=[],a=n.modelName.toString(),u=Object.keys(r),e.next=8,o.transaction(a).objectStore(a).openCursor()
case 8:if(!(l=e.sent)){e.next=17
break}s=regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,u.forEach((function(e){l.value[e]===r[e]&&t++})),t===u.length&&i.push(l.value),e.next=5,l.continue()
case 5:l=e.sent
case 6:case"end":return e.stop()}}),e)}))
case 11:if(!l){e.next=15
break}return e.delegateYield(s(),"t0",13)
case 13:e.next=11
break
case 15:e.next=18
break
case 17:o.close()
case 18:return e.abrupt("return",i)
case 19:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return d.apply(this,arguments)})},{key:"openDatabase",value:function(){return(0,r.openDB)(o.databaseName,o.databaseVersion,{upgrade:function(e){o.models.forEach((function(t){e.objectStoreNames.contains(t)||e.createObjectStore(t,{keyPath:"id"})}))}})}}])&&s(t.prototype,a),p&&s(t,p),O}(t.default)
e.default=b})),define("efitness/pages/application/controller",["exports","efitness/config/environment"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(c,Ember.Controller)
var n,u,l,s=a(c)
function c(){return r(this,c),s.apply(this,arguments)}return n=c,(u=[{key:"isProduction",get:function(){return"production"===t.default.environment}}])&&o(n.prototype,u),l&&o(n,l),c}()
e.default=s})),define("efitness/pages/application/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"uLDPXEnj",block:'{"symbols":[],"statements":[[10,"main"],[14,0,"flex-1"],[12],[2,"\\n  "],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,"\\n"],[13],[2,"\\n"],[10,"footer"],[14,0,"z-10 w-full bg-gray-200 pin-b"],[12],[2,"\\n  "],[8,"nav-bar",[],[[],[]],null],[2,"\\n"],[13],[2,"\\n"],[6,[37,2],[[32,0,["isProduction"]]],null,[["default"],[{"statements":[[2,"  "],[8,"service-worker-update-notify",[],[[],[]],[["default"],[{"statements":[[2,"\\n    "],[10,"a"],[14,0,"service-worker-update-notify"],[15,6,[32,0,["router","currentURL"]]],[12],[2,"\\n      A new version is available, click here to update.\\n    "],[13],[2,"\\n  "]],"parameters":[]}]]],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["-outlet","component","if"]}',meta:{moduleName:"efitness/pages/application/template.hbs"}})
e.default=t})),define("efitness/pages/calendar/-private/calendar",["exports","efitness/utils/constants","efitness/utils/calendar-helper"],(function(e,t,n){var r,o,i,a,u,l,s
function c(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d=(r=Ember._tracked,o=Ember._tracked,i=Ember._action,a=Ember._action,l=p((u=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),c(this,"selectedDate",l,this),c(this,"date",s,this),this.date=new Date,this.selectedDate=new Date}var r,o,i
return r=e,(o=[{key:"incMonth",value:function(){this.date&&(this.date=n.dateHelper.increaseMonth(this.date))}},{key:"decMonth",value:function(){this.date&&(this.date=n.dateHelper.decreaseMonth(this.date))}},{key:"month",get:function(){return this.date?"".concat(t.months[this.date.getMonth()]," ").concat(this.date.getFullYear()):null}}])&&f(r.prototype,o),i&&f(r,i),e}()).prototype,"selectedDate",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=p(u.prototype,"date",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p(u.prototype,"incMonth",[i],Object.getOwnPropertyDescriptor(u.prototype,"incMonth"),u.prototype),p(u.prototype,"decMonth",[a],Object.getOwnPropertyDescriptor(u.prototype,"decMonth"),u.prototype),u)
e.default=d})),define("efitness/pages/calendar/-private/state",["exports"],(function(e){var t,n,r,o,i,a
function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=(t=Ember._tracked,n=Ember._action,r=Ember._action,o=Ember._action,a=l((i=function(){function e(){var t,n,r,o;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),t=this,n="state",o=this,(r=a)&&Object.defineProperty(t,n,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(o):void 0}),this.state=0}var t,n,r
return t=e,(n=[{key:"setMeasuresState",value:function(){this.state=1}},{key:"setTrainingState",value:function(){this.state=2}},{key:"reset",value:function(){this.state=0}},{key:"isMenuState",get:function(){return 0===this.state}},{key:"isMeasureState",get:function(){return 1===this.state}},{key:"isTrainingState",get:function(){return 2===this.state}}])&&u(t.prototype,n),r&&u(t,r),e}()).prototype,"state",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l(i.prototype,"setMeasuresState",[n],Object.getOwnPropertyDescriptor(i.prototype,"setMeasuresState"),i.prototype),l(i.prototype,"setTrainingState",[r],Object.getOwnPropertyDescriptor(i.prototype,"setTrainingState"),i.prototype),l(i.prototype,"reset",[o],Object.getOwnPropertyDescriptor(i.prototype,"reset"),i.prototype),i)
e.default=s})),define("efitness/pages/calendar/controller",["exports","efitness/utils/calendar-helper","efitness/pages/calendar/-private/state","efitness/pages/calendar/-private/calendar"],(function(e,t,n,r){var o,i,a,u,l,s,c,f,p
function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,o)}function y(e){return function(){var t=this,n=arguments
return new Promise((function(r,o){var i=e.apply(t,n)
function a(e){b(i,r,o,a,u,"next",e)}function u(e){b(i,r,o,a,u,"throw",e)}a(void 0)}))}}function m(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=j(e)
if(t){var o=j(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return O(this,n)}}function O(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var k=(o=Ember._tracked,i=Ember._tracked,a=Ember._action,u=Ember._action,l=Ember._action,s=Ember._action,f=P((c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)})(c,Ember.Controller)
var o,i,a,u,l,s=w(c)
function c(){var e
return h(this,c),m(x(e=s.apply(this,arguments)),"model",f,x(e)),_(x(e),"event",void 0),m(x(e),"showBottomSheet",p,x(e)),_(x(e),"state",void 0),_(x(e),"calendar",void 0),e.showBottomSheet=!1,e.state=new n.default,e.calendar=new r.default,e}return o=c,(i=[{key:"selectDay",value:function(e){this.calendar.selectedDate=e,this.toggleBottomSheet()}},{key:"toggleBottomSheet",value:function(){this.showBottomSheet=!this.showBottomSheet,this.showBottomSheet||this.state.reset()}},{key:"getRecord",value:function(e,t){return t?this.store.peekRecord(e,t):this.store.createRecord(e)}},{key:"getEvent",value:function(){var e=this,n=this.model.events.find((function(n){return t.comparator.eq(n.day,e.calendar.selectedDate)}))
return n||(n=this.store.createRecord("event",{day:new Date(this.calendar.selectedDate.getTime())})),n}},{key:"saveMeasure",value:(l=y(regeneratorRuntime.mark((function e(t){var n,r
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getEvent(),(r=this.getRecord("measure",n.measureId)).weight=parseFloat(t.weight)||0,r.fat=parseFloat(t.fat)||0,r.water=parseFloat(t.water)||0,r.muscle=parseFloat(t.muscle)||0,r.boneDensity=parseFloat(t.boneDensity)||0,r.eventId=n.id,r.event=n,r.save(),n.measure=r,n.measureId=r.id,n.save(),this.toggleBottomSheet()
case 14:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"saveTraining",value:(u=y(regeneratorRuntime.mark((function e(t){var n,r
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.getEvent(),(r=this.getRecord("training",n.trainingId)).isRepeatable=t.isRepeatable,r.repeatOnDays=t.repeatOnDays,r.repeatOnWeeks=t.repeatOnWeeks,r.lastUntil=t.lastUntil,r.eventId=n.id,r.event=n,r.save(),n.training=r,n.trainingId=r.id,n.save(),this.toggleBottomSheet()
case 13:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"measure",get:function(){var e=this.getEvent()
return e&&e.measureId?this.store.peekRecord("measure",e.measureId):null}},{key:"training",get:function(){var e=this.getEvent()
return e&&e.trainingId?this.store.peekRecord("training",e.trainingId):null}}])&&v(o.prototype,i),a&&v(o,a),c}()).prototype,"model",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=P(c.prototype,"showBottomSheet",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P(c.prototype,"selectDay",[a],Object.getOwnPropertyDescriptor(c.prototype,"selectDay"),c.prototype),P(c.prototype,"toggleBottomSheet",[u],Object.getOwnPropertyDescriptor(c.prototype,"toggleBottomSheet"),c.prototype),P(c.prototype,"saveMeasure",[l],Object.getOwnPropertyDescriptor(c.prototype,"saveMeasure"),c.prototype),P(c.prototype,"saveTraining",[s],Object.getOwnPropertyDescriptor(c.prototype,"saveTraining"),c.prototype),c)
e.default=k})),define("efitness/pages/calendar/route",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var n=[],r=!0,o=!1,i=void 0
try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,o)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=c(e)
if(t){var o=c(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return s(this,n)}}function s(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(d,Ember.Route)
var t,r,s,c,f,p=l(d)
function d(){return i(this,d),p.apply(this,arguments)}return t=d,(r=[{key:"model",value:(c=regeneratorRuntime.mark((function e(){var t,r,o,i,a,u
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.store.findAll("event"),this.store.findAll("measure"),this.store.findAll("training"),this.store.findAll("routine")])
case 2:return t=e.sent,r=n(t,4),o=r[0],i=r[1],a=r[2],u=r[3],e.abrupt("return",{events:o,measures:i,training:a,routine:u})
case 9:case"end":return e.stop()}}),e,this)})),f=function(){var e=this,t=arguments
return new Promise((function(n,r){var i=c.apply(e,t)
function a(e){o(i,n,r,a,u,"next",e)}function u(e){o(i,n,r,a,u,"throw",e)}a(void 0)}))},function(){return f.apply(this,arguments)})}])&&a(t.prototype,r),s&&a(t,s),d}()
e.default=f})),define("efitness/pages/calendar/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"B2QLTSwK",block:'{"symbols":["@model"],"statements":[[10,"div"],[14,0,"h-full"],[12],[2,"\\n  "],[10,"header"],[14,0,"relative z-10 w-full py-2 text-center bg-white border-b-2 border-yellow-400"],[12],[2,"\\n    "],[10,"span"],[14,0,"font-sans text-lg font-semibold text-gray-800"],[12],[2,"\\n      "],[1,[32,0,["calendar","month"]]],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"section"],[14,0,"relative"],[12],[2,"\\n    "],[8,"calendar/grid",[],[["@date","@events","@increaseMonth","@decreaseMonth","@selectDay"],[[32,0,["calendar","date"]],[32,1,["events"]],[32,0,["calendar","incMonth"]],[32,0,["calendar","decMonth"]],[32,0,["selectDay"]]]],null],[2,"\\n"],[6,[37,0],[[32,0,["showBottomSheet"]]],null,[["default"],[{"statements":[[2,"      "],[8,"ui/bottom-sheet",[],[["@onClose"],[[32,0,["toggleBottomSheet"]]]],[["default"],[{"statements":[[2,"\\n"],[6,[37,0],[[32,0,["state","isMenuState"]]],null,[["default","else"],[{"statements":[[2,"          "],[8,"calendar/menu",[],[["@title","@setMeasuresState","@setTrainingState"],["Actions",[32,0,["state","setMeasuresState"]],[32,0,["state","setTrainingState"]]]],null],[2,"\\n"]],"parameters":[]},{"statements":[[6,[37,0],[[32,0,["state","isMeasureState"]]],null,[["default","else"],[{"statements":[[2,"          "],[8,"calendar/measure-form",[],[["@title","@date","@model","@onClose","@onSave"],["Measures",[32,0,["calendar","selectedDate"]],[32,0,["measure"]],[32,0,["toggleBottomSheet"]],[32,0,["saveMeasure"]]]],null],[2,"\\n"]],"parameters":[]},{"statements":[[6,[37,0],[[32,0,["state","isTrainingState"]]],null,[["default"],[{"statements":[[2,"          "],[8,"calendar/training-form",[],[["@title","@date","@model","@onClose","@onSave"],["Training",[32,0,["calendar","selectedDate"]],[32,0,["training"]],[32,0,["toggleBottomSheet"]],[32,0,["saveMeasure"]]]],null],[2,"\\n        "]],"parameters":[]}]]]],"parameters":[]}]]]],"parameters":[]}]]],[2,"      "]],"parameters":[]}]]],[2,"\\n"]],"parameters":[]}]]],[2,"  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["if"]}',meta:{moduleName:"efitness/pages/calendar/template.hbs"}})
e.default=t})),define("efitness/pages/index/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"1Cs5ehNh",block:'{"symbols":[],"statements":[[10,"div"],[14,0,"h-full"],[12],[2,"\\n  "],[10,"header"],[14,0,"flex flex-col items-center py-2 text-center border-b-2 border-red-600"],[12],[2,"\\n    "],[10,"span"],[14,0,"block text-red-600"],[12],[1,[30,[36,0],["title"],[["class"],["fill-current"]]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"section"],[14,0,"overflow-y-auto page-height"],[12],[2,"\\n    "],[8,"waves",[],[[],[]],[["default"],[{"statements":[[2,"\\n      "],[10,"div"],[14,0,"py-10 text-center"],[12],[2,"\\n        "],[10,"span"],[14,0,"font-serif text-2xl tracking-widest text-white uppercase"],[12],[2,"Today"],[13],[2,"\\n      "],[13],[2,"\\n    "]],"parameters":[]}]]],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["svg-jar"]}',meta:{moduleName:"efitness/pages/index/template.hbs"}})
e.default=t})),define("efitness/pages/routines/route",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=a(e)
if(t){var o=a(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(i,Ember.Route)
var t=o(i)
function i(){return n(this,i),t.apply(this,arguments)}return i}()
e.default=u})),define("efitness/pages/routines/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"hLc2PO7L",block:'{"symbols":[],"statements":[[10,"div"],[14,0,"h-full"],[12],[2,"\\n  "],[10,"header"],[14,0,"py-2 text-center border-b-2 border-green-400"],[12],[2,"\\n    "],[10,"div"],[14,0,"flex justify-between px-2"],[12],[2,"\\n      "],[10,"div"],[12],[13],[2,"\\n      "],[10,"span"],[14,0,"block font-sans text-lg font-semibold text-gray-800"],[12],[2,"Routines"],[13],[2,"\\n      "],[10,"span"],[14,0,"block text-green-400"],[12],[1,[30,[36,0],["add-24px"],[["class"],["fill-current"]]]],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[1,[30,[36,2],[[30,[36,1],null,null]],null]],[2,"\\n"],[13]],"hasEval":false,"upvars":["svg-jar","-outlet","component"]}',meta:{moduleName:"efitness/pages/routines/template.hbs"}})
e.default=t})),define("efitness/pages/settings/-private",["exports"],(function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.downloadFile=e.AsyncFileReader=void 0
var r=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),n(this,"input",void 0),n(this,"boundListener",void 0)
var t=document.createElement("INPUT")
this.input=t,this.input.setAttribute("type","file")}var r,o,i
return r=e,(o=[{key:"click",value:function(){var e=this
return new Promise((function(t,n){e.boundListener=e.onChange.bind(e,t),e.input.addEventListener("change",e.boundListener),e.input.click()}))}},{key:"onChange",value:function(e){var t=this
if(this.input.files&&1===this.input.files.length){var n=this.input.files[0],r=new FileReader
r.onload=function(n){n.target?e(n.target.result):e(""),t.input.removeEventListener("change",t.boundListener)},r.readAsText(n)}}},{key:"dispose",value:function(){this.input.remove()}}])&&t(r.prototype,o),i&&t(r,i),e}()
e.AsyncFileReader=r
e.downloadFile=function(e,t){var n=document.createElement("a"),r=new Blob([JSON.stringify(e)],{type:"text/plain"})
n.setAttribute("target","_blank"),n.setAttribute("href",URL.createObjectURL(r)),n.setAttribute("download",t),n.click(),n.remove()}})),define("efitness/pages/settings/controller",["exports","efitness/utils/constants","ember-concurrency","efitness/pages/settings/-private"],(function(e,t,n,r){var o,i,a,u,l,s,c,f,p,d,b,y,m,h,v
function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,o)}function O(e){return function(){var t=this,n=arguments
return new Promise((function(r,o){var i=e.apply(t,n)
function a(e){w(i,r,o,a,u,"next",e)}function u(e){w(i,r,o,a,u,"throw",e)}a(void 0)}))}}function x(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=E(e)
if(t){var o=E(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return S(this,n)}}function S(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var D=(o=Ember.inject.service,i=Ember.inject.service,a=Ember._tracked,u=Ember._tracked,l=(0,n.task)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settings.load(t.userId)
case 2:this.user=e.sent,this.user||(this.user={id:t.userId,height:null})
case 4:case"end":return e.stop()}}),e,this)}))).drop(),s=(0,n.task)(regeneratorRuntime.mark((function e(r){var o,i,a
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.target.value,e.next=3,(0,n.timeout)(500)
case 3:this.invalidHeight=!1,(i=o.replace(",",".")).match(this.heightPattern)&&i.length<=4?(a=parseFloat(i),isNaN(a)||this.settings.save({id:t.userId,height:a})):this.invalidHeight=!0
case 6:case"end":return e.stop()}}),e,this)}))).restartable(),c=Ember._action,f=Ember._action,d=z((p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)})(f,Ember.Controller)
var n,o,i,a,u,l,s,c=k(f)
function f(){var e
j(this,f)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return x(R(e=c.call.apply(c,[this].concat(n))),"settings",d,R(e)),x(R(e),"batchOperations",b,R(e)),x(R(e),"invalidHeight",y,R(e)),M(R(e),"heightPattern",/[0|1]{1}[,|.]\d{1,2}/),x(R(e),"user",m,R(e)),x(R(e),"loadSettings",h,R(e)),x(R(e),"saveSettings",v,R(e)),e}return n=f,(o=[{key:"upload",value:(s=O(regeneratorRuntime.mark((function e(){var t,n,o
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new r.AsyncFileReader,e.next=3,t.click()
case 3:n=e.sent,o=JSON.parse(n),this.uploadBackUp(o),t.dispose(),this.loadSettings.perform()
case 8:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"download",value:(l=O(regeneratorRuntime.mark((function e(){var t,n,o
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new Date,null===(n=prompt("Backup file name","backup-".concat(t.getFullYear(),".").concat(t.getMonth()+1,".").concat(t.getDate(),"-").concat(t.getHours(),".").concat(t.getMinutes())))||""===n||/[<>:"/\|?*]/g.test(n)){e.next=7
break}return e.next=5,this.createBackUp()
case 5:o=e.sent,(0,r.downloadFile)(o,n)
case 7:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"uploadBackUp",value:(u=O(regeneratorRuntime.mark((function e(t){var n=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.store.unloadAll(),!t){e.next=12
break}return t.events.forEach((function(e){return e.day=new Date(e.day)})),t.routines.forEach((function(e){return e.createdOn=new Date(e.createdOn)})),this.store.push({data:t.events}),this.store.push({data:t.exercises}),this.store.push({data:t.measures}),this.store.push({data:t.routines}),this.store.push({data:t.trainings}),e.next=11,this.batchOperations.saveAll(t)
case 11:t.settings.forEach((function(e){e&&n.settings.save(e)}))
case 12:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"createBackUp",value:(a=O(regeneratorRuntime.mark((function e(){var n,r=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={events:[],exercises:[],measures:[],routines:[],trainings:[],settings:[]},e.next=3,this.store.findAll("event")
case 3:return e.sent.forEach((function(e){return n.events.push(r.pullPayload(e))})),e.next=6,this.store.findAll("exercise")
case 6:return e.sent.forEach((function(e){return n.exercises.push(r.pullPayload(e))})),e.next=9,this.store.findAll("measure")
case 9:return e.sent.forEach((function(e){return n.measures.push(r.pullPayload(e))})),e.next=12,this.store.findAll("routine")
case 12:return e.sent.forEach((function(e){return n.routines.push(r.pullPayload(e))})),e.next=15,this.store.findAll("training")
case 15:return e.sent.forEach((function(e){return n.trainings.push(r.pullPayload(e))})),e.t0=n.settings,e.next=19,this.settings.load(t.userId)
case 19:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.abrupt("return",n)
case 22:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"pullPayload",value:function(e){return e.serialize({includeId:!0})}}])&&_(n.prototype,o),i&&_(n,i),f}()).prototype,"settings",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=z(p.prototype,"batchOperations",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=z(p.prototype,"invalidHeight",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),m=z(p.prototype,"user",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=z(p.prototype,"loadSettings",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=z(p.prototype,"saveSettings",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z(p.prototype,"upload",[c],Object.getOwnPropertyDescriptor(p.prototype,"upload"),p.prototype),z(p.prototype,"download",[f],Object.getOwnPropertyDescriptor(p.prototype,"download"),p.prototype),p)
e.default=D})),define("efitness/pages/settings/route",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=a(e)
if(t){var o=a(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(i,Ember.Route)
var t=o(i)
function i(){return n(this,i),t.apply(this,arguments)}return i}()
e.default=u})),define("efitness/pages/settings/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"7wEBhXNu",block:'{"symbols":[],"statements":[[11,"div"],[24,0,"h-full"],[4,[38,3],[[30,[36,0],[[32,0,["loadSettings"]]],null]],null],[12],[2,"\\n  "],[10,"header"],[14,0,"py-2 text-center border-b-2 border-pink-400"],[12],[2,"\\n    "],[10,"span"],[14,0,"font-sans text-lg font-semibold text-gray-800"],[12],[2,"Settings"],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"section"],[14,0,"flex flex-col items-center px-4 overflow-y-auto page-height"],[12],[2,"\\n    "],[10,"span"],[14,0,"block my-2"],[12],[1,[30,[36,4],["account_circle-24px"],[["class","width","height"],["text-pink-600 fill-current","64px","64px"]]]],[13],[2,"\\n    "],[10,"p"],[14,0,"mt-2 text-lg text-justify"],[12],[2,"\\n      Introduce your height (in meters) to calculate your Body Max Index (BMI). This value works as a rough estimation of your current condition, dividing it into three categories: underweight, normal weight and overweight. The BMI value will be displayed in\\n      "],[8,"link-to",[[24,0,"text-pink-600"],[24,"aria-label","Statistics page"]],[["@route"],["statistics"]],[["default"],[{"statements":[[2,"statistics page"]],"parameters":[]}]]],[2,".\\n    "],[13],[2,"\\n\\n"],[6,[37,2],[[30,[36,6],[[30,[36,5],[[32,0,["loadSettings","isRunning"]]],null],[32,0,["user"]]],null]],null,[["default"],[{"statements":[[2,"      "],[10,"div"],[14,0,"flex flex-col justify-center w-full mt-4"],[12],[2,"\\n        "],[10,"label"],[14,0,"mb-1 text-sm text-gray-800"],[14,"for","height"],[12],[2,"Height"],[13],[2,"\\n        "],[11,"input"],[24,0,"w-full h-10 px-2 text-right text-gray-700 border border-gray-500 appearance-none focus:border-pink-600"],[24,1,"height"],[24,"inputmode","decimal"],[24,"pattern","[0|1]{1}[,|.]\\\\d{1,2}"],[16,"placeholder",0],[16,2,[32,0,["user","height"]]],[24,4,"text"],[4,[38,1],["input",[30,[36,0],[[32,0,["saveSettings"]]],null]],null],[12],[13],[2,"\\n"],[6,[37,2],[[32,0,["invalidHeight"]]],null,[["default"],[{"statements":[[2,"          "],[10,"p"],[14,0,"text-xs italic text-red-500"],[12],[2,"Invalid Height value. It must follow 0.00 format"],[13],[2,"\\n"]],"parameters":[]}]]],[2,"      "],[13],[2,"\\n"]],"parameters":[]}]]],[2,"\\n    "],[10,"span"],[14,0,"block mt-5"],[12],[1,[30,[36,4],["folder-24px"],[["class","width","height"],["text-pink-600 fill-current","64px","64px"]]]],[13],[2,"\\n    "],[10,"p"],[14,0,"mt-2 text-lg text-justify"],[12],[2,"Optionally, you can download the data you have stored as a backup and restore it later in the same device or a different one."],[13],[2,"\\n    "],[10,"div"],[14,0,"flex flex-row w-full mt-6"],[12],[2,"\\n      "],[11,"button"],[24,0,"flex justify-center w-full px-4 py-2 mr-2 font-semibold text-white bg-pink-400 shadow hover:bg-pink-400 focus:shadow-outline focus:outline-none"],[24,4,"button"],[4,[38,1],["click",[32,0,["upload"]]],null],[12],[2,"\\n        "],[10,"span"],[12],[1,[30,[36,4],["cloud_upload-24px"],[["class","width","height"],["fill-current","24px","24px"]]]],[13],[2," Upload\\n      "],[13],[2,"\\n      "],[11,"button"],[24,0,"flex justify-center w-full px-4 py-2 font-semibold text-white bg-pink-600 shadow hover:bg-pink-600 focus:shadow-outline focus:outline-none"],[24,4,"button"],[4,[38,1],["click",[32,0,["download"]]],null],[12],[2,"\\n        "],[10,"span"],[12],[1,[30,[36,4],["cloud_download-24px"],[["class","width","height"],["fill-current","24px","24px"]]]],[13],[2," Download\\n      "],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["perform","on","if","did-insert","svg-jar","not","and"]}',meta:{moduleName:"efitness/pages/settings/template.hbs"}})
e.default=t})),define("efitness/pages/statistics/controller",["exports","efitness/utils/wrappers"],(function(e,t){var n,r,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b,y,m,h,v,g,w=(n=Ember._tracked,b=(r=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(d,Ember.Controller)
var n,r,i,f=c(d)
function d(){var e
u(this,d)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a(p(e=f.call.apply(f,[this].concat(n))),"model",o,p(e)),e}return n=d,(r=[{key:"statistics",get:function(){var e=this,n=[]
return this.model.events.forEach((function(r){if(r.measureId){var o=new t.StatisticsBox,i=e.store.peekRecord("measure",r.measureId)
i&&(o.date=r.day,o.weight=i.weight,o.fat=i.fat,o.water=i.water,o.muscle=i.muscle,o.boneDensity=i.boneDensity,n.push(o))}})),n.sortBy("date")}},{key:"userMeasures",get:function(){return this.model.userSettings&&this.lastMeasures?{height:this.model.userSettings.height,weight:this.lastMeasures.weight}:null}},{key:"lastMeasures",get:function(){return this.statistics[this.statistics.length-1]}}])&&l(n.prototype,r),i&&l(n,i),d}()).prototype,y="model",m=[n],h={configurable:!0,enumerable:!0,writable:!0,initializer:null},g={},Object.keys(h).forEach((function(e){g[e]=h[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),g=m.slice().reverse().reduce((function(e,t){return t(b,y,e)||e}),g),v&&void 0!==g.initializer&&(g.value=g.initializer?g.initializer.call(v):void 0,g.initializer=void 0),void 0===g.initializer&&(Object.defineProperty(b,y,g),g=null),o=g,r)
e.default=w})),define("efitness/pages/statistics/route",["exports","efitness/utils/constants"],(function(e,t){var n,r,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var n=[],r=!0,o=!1,i=void 0
try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function l(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,o)}function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=m(e)
if(t){var o=m(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return b(this,n)}}function b(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h,v,g,w,O,x,j=(n=Ember.inject.service,h=(r=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(h,Ember.Route)
var n,r,i,u,b,m=d(h)
function h(){var e
c(this,h)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return s(y(e=m.call.apply(m,[this].concat(n))),"settings",o,y(e)),e}return n=h,(r=[{key:"model",value:(u=regeneratorRuntime.mark((function e(){var n,r,o,i,u
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.store.findAll("event"),this.store.findAll("measure"),this.settings.load(t.userId)])
case 2:return n=e.sent,r=a(n,3),o=r[0],i=r[1],u=r[2],e.abrupt("return",{events:o,measures:i,userSettings:u})
case 8:case"end":return e.stop()}}),e,this)})),b=function(){var e=this,t=arguments
return new Promise((function(n,r){var o=u.apply(e,t)
function i(e){l(o,n,r,i,a,"next",e)}function a(e){l(o,n,r,i,a,"throw",e)}i(void 0)}))},function(){return b.apply(this,arguments)})}])&&f(n.prototype,r),i&&f(n,i),h}()).prototype,v="settings",g=[n],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},x={},Object.keys(w).forEach((function(e){x[e]=w[e]})),x.enumerable=!!x.enumerable,x.configurable=!!x.configurable,("value"in x||x.initializer)&&(x.writable=!0),x=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),x),O&&void 0!==x.initializer&&(x.value=x.initializer?x.initializer.call(O):void 0,x.initializer=void 0),void 0===x.initializer&&(Object.defineProperty(h,v,x),x=null),o=x,r)
e.default=j}))
define("efitness/pages/statistics/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"mDF7rgXq",block:'{"symbols":[],"statements":[[10,"div"],[14,0,"h-full"],[12],[2,"\\n  "],[10,"header"],[14,0,"py-2 text-center border-b-2 border-blue-400"],[12],[2,"\\n    "],[10,"span"],[14,0,"font-sans text-lg font-semibold text-gray-800"],[12],[2,"Statistics"],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"section"],[14,0,"overflow-y-auto page-height"],[12],[2,"\\n"],[6,[37,0],[[32,0,["userMeasures"]]],null,[["default"],[{"statements":[[2,"      "],[8,"bmi",[],[["@measures"],[[32,0,["userMeasures"]]]],null],[2,"\\n      "],[8,"measures-inline",[],[["@measures"],[[32,0,["statistics"]]]],null],[2,"\\n      "],[8,"measures-chart",[],[["@model","@measures"],[[32,0,["statistics"]],[32,0,["userMeasures"]]]],null],[2,"\\n"]],"parameters":[]}]]],[2,"  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["if"]}',meta:{moduleName:"efitness/pages/statistics/template.hbs"}})
e.default=t})),define("efitness/router",["exports","efitness/config/environment"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return a(this,n)}}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(a,Ember.Router)
var n=i(a)
function a(){var e
r(this,a)
for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l]
return s(u(e=n.call.apply(n,[this].concat(i))),"location",t.default.locationType),s(u(e),"rootURL",t.default.rootURL),e}return a}()
e.default=c,c.map((function(){this.route("calendar"),this.route("routines"),this.route("statistics"),this.route("settings")}))})),define("efitness/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/serializers/application",["exports","@ember-data/serializer/json-api"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t)
if(r){var o=Object.getOwnPropertyDescriptor(r,t)
return o.get?o.get.call(n):o.value}})(e,t,n||e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(f,e)
var t,n,l,c=u(f)
function f(){return r(this,f),c.apply(this,arguments)}return t=f,(n=[{key:"keyForAttribute",value:function(e){return Ember.String.camelize(e)}},{key:"normalizeResponse",value:function(e,t,n,r,o){return Array.isArray(n)&&(n=n.map((function(e){var n=e.id
delete e.id
var r={}
for(var o in e)e.hasOwnProperty(o)&&"type"!==o&&(r[o]=e[o])
return{id:n,attributes:r,type:e.type||t.name}}))),n={data:n},i(s(f.prototype),"normalizeResponse",this).call(this,e,t,n,r,o)}},{key:"serialize",value:function(e,t){return Object.assign(e.attributes(),{id:e.id,type:e.modelName})}}])&&o(t.prototype,n),l&&o(t,l),f}(t.default)
e.default=c})),define("efitness/services/-ea-motion",["exports","ember-animated/services/motion"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/services/batch-operations",["exports","idb","efitness/utils/constants"],(function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var n
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,o=function(){}
return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1
return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next()
return u=e.done,e},e:function(e){l=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function a(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,o)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=p(e)
if(t){var o=p(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(y,Ember.Service)
var r,i,f,p,d,b=c(y)
function y(){return u(this,y),b.apply(this,arguments)}return r=y,(i=[{key:"saveAll",value:(p=regeneratorRuntime.mark((function e(t){var n,r,i,a,u,l,s
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:n=e.sent,e.t0=regeneratorRuntime.keys(t)
case 5:if((e.t1=e.t0()).done){e.next=42
break}if(r=e.t1.value,i=t[r],!("settings"!==r&&i&&Array.isArray(i)&&i.length>0)){e.next=40
break}a=void 0,u=void 0,l=o(i),e.prev=12,l.s()
case 14:if((s=l.n()).done){e.next=32
break}if(a=s.value,u){e.next=20
break}return e.next=19,n.transaction(a.type,"readwrite").objectStore(a.type)
case 19:u=e.sent
case 20:return e.next=22,u.get(a.id)
case 22:if(!e.sent){e.next=28
break}return e.next=26,u.put(a)
case 26:e.next=30
break
case 28:return e.next=30,u.add(a)
case 30:e.next=14
break
case 32:e.next=37
break
case 34:e.prev=34,e.t2=e.catch(12),l.e(e.t2)
case 37:return e.prev=37,l.f(),e.finish(37)
case 40:e.next=5
break
case 42:n.close()
case 43:case"end":return e.stop()}}),e,this,[[12,34,37,40]])})),d=function(){var e=this,t=arguments
return new Promise((function(n,r){var o=p.apply(e,t)
function i(e){a(o,n,r,i,u,"next",e)}function u(e){a(o,n,r,i,u,"throw",e)}i(void 0)}))},function(e){return d.apply(this,arguments)})},{key:"openDatabase",value:function(){return(0,t.openDB)(n.databaseName,n.databaseVersion,{upgrade:function(e){n.models.forEach((function(t){e.objectStoreNames.contains(t)||e.createObjectStore(t,{keyPath:"id"})}))}})}}])&&l(r.prototype,i),f&&l(r,f),y}()
e.default=d})),define("efitness/services/gestures",["exports","hammerjs"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(p,Ember.Service)
var n,u,s,f=a(p)
function p(){var e
r(this,p),c(l(e=f.apply(this,arguments)),"gestures",void 0)
var n=new t.default(document.body)
return n.get("swipe").set({direction:t.default.DIRECTION_ALL}),e.set("gestures",n),e}return n=p,(u=[{key:"addSwipeAction",value:function(e,t){this.gestures&&this.gestures.on(t,(function(){e()}))}},{key:"removeSwipeAction",value:function(e){this.gestures&&this.gestures.off(e)}}])&&o(n.prototype,u),s&&o(n,s),p}()
e.default=f})),define("efitness/services/service-worker-update-notify",["exports","ember-service-worker-update-notify/services/service-worker-update-notify"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/services/settings",["exports","idb"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments
return new Promise((function(o,i){var a=e.apply(t,n)
function u(e){r(a,o,i,u,l,"next",e)}function l(e){r(a,o,i,u,l,"throw",e)}u(void 0)}))}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=f(e)
if(t){var o=f(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return s(this,n)}}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(y,Ember.Service)
var n,r,s,f,d,b=l(y)
function y(){var e
return i(this,y),p(c(e=b.apply(this,arguments)),"version",void 0),p(c(e),"store",void 0),p(c(e),"dbName",void 0),e.version=1,e.store="user",e.dbName="SettingsStorage",e}return n=y,(r=[{key:"save",value:(d=o(regeneratorRuntime.mark((function e(t){var n,r
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:return n=e.sent,e.next=5,n.transaction(this.store,"readwrite").objectStore(this.store)
case 5:return r=e.sent,e.next=8,r.get(t.id)
case 8:if(!e.sent){e.next=14
break}return e.next=12,r.put(t)
case 12:e.next=16
break
case 14:return e.next=16,r.add(t)
case 16:n.close()
case 17:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"load",value:(f=o(regeneratorRuntime.mark((function e(t){var n,r
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openDatabase()
case 2:return n=e.sent,e.next=5,n.transaction(this.store).objectStore(this.store).get(t)
case 5:if(r=e.sent,n.close(),!r){e.next=11
break}return e.abrupt("return",r)
case 11:return e.abrupt("return",null)
case 12:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"openDatabase",value:function(){var e=this.store
return(0,t.openDB)(this.dbName,this.version,{upgrade:function(t){t.createObjectStore(e,{keyPath:"id"})}})}}])&&a(n.prototype,r),s&&a(n,s),y}()
e.default=d})),define("efitness/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/styles/tailwind.config",[],(function(){module.exports={theme:{extend:{}},variants:{textColor:["responsive","hover","focus","active","visited"],borderWidth:["responsive","hover","focus","active","visited"],borderColor:["responsive","hover","focus","active","visited"]},plugins:[]}})),define("efitness/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("efitness/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("efitness/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("efitness/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("efitness/utils/binary-helper",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.changeFlag=e.readFlag=e.weeks=e.days=void 0
e.days={None:0,Monday:1,Tuesday:2,Wednesday:4,Thursday:8,Friday:16,Saturday:32,Sunday:64}
e.weeks={None:0,Week1:1,Week2:2,Week3:4,Week4:8}
e.readFlag=function(e,t){return 0!=(e&t)}
e.changeFlag=function(e,t){return e^t}})),define("efitness/utils/calendar-helper",["exports"],(function(e){function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(e,"__esModule",{value:!0}),e.monthGenerator=e.dateHelper=e.comparator=void 0
var i=new(function(){function e(){n(this,e)}return o(e,[{key:"eq",value:function(e,t){return!(!e||!t)&&(e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate())}},{key:"gte",value:function(e,t){return this.resetDate(e)>=this.resetDate(t)}},{key:"lte",value:function(e,t){return this.resetDate(e)<=this.resetDate(t)}},{key:"resetDate",value:function(e){var t=new Date(e.getTime())
return t.setHours(0,0,0,0),t}}]),e}())
e.comparator=i
var a=new(function(){function e(){n(this,e),t(this,"millisecondsInADay",864e5)}return o(e,[{key:"getWeekDays",value:function(e){var t=this.resetTime(e),n=t.getDay(),r=t.getDate()-n+(0==n?-6:1),o=t
o.setDate(r)
var i=new Date(o.getTime()+6*this.millisecondsInADay)
return{first:o,last:i}}},{key:"increaseMonth",value:function(e){var t=new Date(e.getTime())
return t.setMonth(t.getMonth()+1),t}},{key:"decreaseMonth",value:function(e){var t=new Date(e.getTime())
return t.setMonth(t.getMonth()-1),t}},{key:"daysInMonth",value:function(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}},{key:"firstDayOfMonthInWeek",value:function(e){return new Date(e.getFullYear(),e.getMonth(),1).getDay()}},{key:"resetTime",value:function(e){var t=new Date(e.getTime())
return t.setHours(0,0,0,0),t}}]),e}())
e.dateHelper=a
var u=new(function(){function e(){n(this,e),t(this,"divideIntoWeeks",(function(e,t){for(var n=[];e.length;)n.push(e.splice(0,t))
return n}))}return o(e,[{key:"generate",value:function(e){var t=this.generateDays(e)
return this.divideIntoWeeks(t,7)}},{key:"generateDays",value:function(e){var t,n=a.daysInMonth(a.decreaseMonth(e)),r=a.daysInMonth(e),o=new Date(e.getFullYear(),e.getMonth(),1),i=a.firstDayOfMonthInWeek(o),u=1===i,l=1!==i
u?t=1:(t=0==i?n-5:n-i+2,o.setMonth(o.getMonth()-1))
for(var s=[],c=0;c<42;c++)o.setDate(t),s.push(new Date(o.getTime())),t++,l&&t>n?(t=1,o=new Date(o.getFullYear(),o.getMonth()+1,t),l=!1,u=!0):u&&t>r&&(t=1,o=new Date(o.getFullYear(),o.getMonth()+1,t),u=!1)
return s}}]),e}())
e.monthGenerator=u})),define("efitness/utils/constants",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.userId=e.days=e.months=e.Period=e.Swipe=e.models=e.databaseVersion=e.databaseName=void 0
e.databaseName="FitnessAdapter"
e.databaseVersion=1
var t,n
e.models=["event","exercise","measure","routine","training"],e.Swipe=t,function(e){e.Up="swipeup",e.Down="swipedown",e.Left="swipeleft",e.Right="swiperight"}(t||(e.Swipe=t={})),e.Period=n,function(e){e.week="week",e.month="month",e.year="year"}(n||(e.Period=n={}))
e.months=["January","February","March","April","Mai","June","July","August","September","October","November","December"]
e.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
e.userId="186731fc-2248-4626-9ceb-c5c724355d55"})),define("efitness/utils/service-worker-has-update",["exports","ember-service-worker-update-notify/utils/service-worker-has-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("efitness/utils/wrappers",["exports"],(function(e){var t,n,r,o,i,a,u,l,s,c,f,p,d,b,y,m,h,v,g,w
function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=k(e)
if(t){var o=k(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return _(this,n)}}function _(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.StatisticsBox=e.MeasuresBox=e.TrainingBox=void 0
var z=(t=Ember._tracked,n=Ember._tracked,r=Ember._tracked,o=Ember._tracked,a=M((i=function e(t,n,r,o){R(this,e),S(this,"repeatOnDays",a,this),S(this,"repeatOnWeeks",u,this),S(this,"isRepeatable",l,this),S(this,"lastUntil",s,this),this.isRepeatable=t,this.repeatOnDays=n,this.repeatOnWeeks=r,this.lastUntil=o}).prototype,"repeatOnDays",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=M(i.prototype,"repeatOnWeeks",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=M(i.prototype,"isRepeatable",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=M(i.prototype,"lastUntil",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)
e.TrainingBox=z
var D=(c=Ember._tracked,f=Ember._tracked,p=Ember._tracked,d=Ember._tracked,b=Ember._tracked,m=M((y=function e(){R(this,e),S(this,"weight",m,this),S(this,"fat",h,this),S(this,"water",v,this),S(this,"muscle",g,this),S(this,"boneDensity",w,this)}).prototype,"weight",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=M(y.prototype,"fat",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=M(y.prototype,"water",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=M(y.prototype,"muscle",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=M(y.prototype,"boneDensity",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y)
e.MeasuresBox=D
var T=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)})(n,e)
var t=j(n)
function n(){var e
R(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return E(P(e=t.call.apply(t,[this].concat(o))),"date",void 0),e}return n}(D)
e.StatisticsBox=T})),define("efitness/config/environment",[],(function(){try{var e="efitness/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("efitness/app").default.create({name:"efitness",version:"0.0.0"})
