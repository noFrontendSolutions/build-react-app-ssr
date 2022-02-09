/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src_backend/server.ts":
/*!*******************************!*\
  !*** ./src_backend/server.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar cors = __webpack_require__(/*! cors */ \"cors\");\r\nvar mongoConnectAirbnb = __webpack_require__(/*! ./database/mongo-connect-airbnb.js */ \"./src_backend/database/mongo-connect-airbnb.js\");\r\nvar MongoClient = (__webpack_require__(/*! mongodb */ \"mongodb\").MongoClient);\r\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\r\nvar url = process.env.MONGO_URI;\r\nvar port = process.env.PORT || 3000;\r\nvar app = express();\r\napp.use(express.json());\r\napp.use(cors());\r\napp.get(\"/airbnb\", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\r\n    var client, initialLoad;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                client = new MongoClient(url);\r\n                return [4, mongoConnectAirbnb.initialConnectionAirbnb(client)];\r\n            case 1:\r\n                initialLoad = _a.sent();\r\n                return [4, client.close()];\r\n            case 2:\r\n                _a.sent();\r\n                res.send(initialLoad);\r\n                return [2];\r\n        }\r\n    });\r\n}); });\r\napp.listen(port, function () {\r\n    console.log(\"Server listening on port \".concat(port));\r\n});\r\n\n\n//# sourceURL=webpack://dev-environment/./src_backend/server.ts?");

/***/ }),

/***/ "./src_backend/database/mongo-connect-airbnb.js":
/*!******************************************************!*\
  !*** ./src_backend/database/mongo-connect-airbnb.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\r\n\r\nconst initialConnectionAirbnb = async (client) => {\r\n  //const url = process.env.MONGO_URI\r\n  const dbName = process.env.DB_NAME;\r\n  const dbCollection = process.env.DB_COLLECTION;\r\n\r\n  //const client = new MongoClient(url);\r\n\r\n  await client.connect();\r\n  console.log(\"Connected successfully to server\");\r\n  const db = client.db(dbName);\r\n  const collection = db.collection(dbCollection);\r\n  const results = await collection\r\n    .find({ \"address.suburb\": \"Manhattan\" })\r\n    .limit(10)\r\n    .toArray();\r\n  return results;\r\n};\r\n\r\nmodule.exports = { initialConnectionAirbnb };\r\n\n\n//# sourceURL=webpack://dev-environment/./src_backend/database/mongo-connect-airbnb.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src_backend/server.ts");
/******/ 	
/******/ })()
;