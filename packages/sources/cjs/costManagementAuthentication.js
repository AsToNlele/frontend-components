"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var objectWithoutProperties=require("./objectWithoutProperties-9e2b4e81.js");require("@redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors");var constants=require("./constants.js"),index=require("./index-1dfedd03.js"),delay=function delay(e,t){return new Promise((function(n){setTimeout(n.bind(null,t),e)}))};function patchSource(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(r,o){var c=Date.now(),i=e.id,s=objectWithoutProperties._objectWithoutProperties(e,["id"]);return function checkSource(){return index.axiosInstance.get("".concat(constants.COST_MANAGEMENT_API_BASE,"/sources/").concat(i,"/")).catch((function(e){return Date.now()-c>=t?Promise.reject("Cost Management failed tracking source: ".concat(JSON.stringify(e))):delay(n).then((function(){return checkSource()}))}))}().then((function(){return index.axiosInstance.patch("".concat(constants.COST_MANAGEMENT_API_BASE,"/sources/").concat(i,"/"),s)})).then((function(e){return r(e)})).catch((function(e){return o(e)}))}))}exports.delay=delay,exports.patchSource=patchSource;
