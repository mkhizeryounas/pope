"use strict";function prop(e,r){if("object"!=typeof e||"string"!=typeof r)return e;for(var n=r.split("."),o=0;o<n.length;o++){var p=n[o];if(null===(e=e.hasOwnProperty(p)?e[p]:null))break}return e}function pope(e,r,n){n=n||{skipUndefined:!1,throwOnUndefined:!1};for(var o,p=/{{2}(.+?)}{2}/g,t=e;null!==(o=p.exec(e));){var i=o[1].trim();if(i){var f=prop(r,i);if(void 0!==f&&null!==f)t=t.replace(o[0],f);else{if(n.throwOnUndefined){var l=new Error("Missing value for "+o[0]);throw l.key=i,l.code="E_MISSING_KEY",l}n.skipUndefined||(t=t.replace(o[0],""))}}}return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.pope=pope,exports.prop=prop;
