"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{383:function(n,t,e){e.d(t,{Bt:function(){return d},PI:function(){return l},eO:function(){return s},h_:function(){return f},mJ:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="b020810aa3cd987a958ad25364f86170",i="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},186:function(n,t,e){e.r(t),e.d(t,{default:function(){return i}});var r=e(439),a=e(383),c=e(791),u=e(689),o=e(184);function i(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],i=t[1],s=(0,u.UO)().movieId;if((0,c.useEffect)((function(){(0,a.Bt)(s).then(i).catch((function(n){console.log(n)}))}),[s]),e)return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.content,r=n.author;return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:r}),(0,o.jsx)("p",{children:e})]},t)}))})})}}}]);
//# sourceMappingURL=186.64145fe5.chunk.js.map