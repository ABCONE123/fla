(()=>{var e={n:r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return e.d(o,{a:o}),o},d:(r,o)=>{for(var t in o)e.o(o,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:o[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};(()=>{"use strict";e.r(r);const o=flarum.core.compat["admin/app"];var t=e.n(o);t().initializers.add("flarum-likes",(function(){t().extensionData.for("flarum-likes").registerPermission({icon:"far fa-thumbs-up",label:t().translator.trans("flarum-likes.admin.permissions.like_posts_label"),permission:"discussion.likePosts"},"reply")}))})(),module.exports=r})();
//# sourceMappingURL=admin.js.map