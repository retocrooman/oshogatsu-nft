/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./constant/network.js":
/*!*****************************!*\
  !*** ./constant/network.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goerli\": () => (/* binding */ goerli)\n/* harmony export */ });\nconst goerli = {\n    id: 5,\n    name: \"Goerli\",\n    network: \"goerli\",\n    nativeCurrency: {\n        name: \"Goerli Ether\",\n        symbol: \"ETH\",\n        decimals: 18\n    },\n    rpcUrls: {\n        alchemy: {\n            http: [\n                \"https://eth-goerli.alchemyapi.io/v2\"\n            ]\n        },\n        default: {\n            http: [\n                \"https://rpc.ankr.com/eth_goerli\"\n            ]\n        },\n        infura: {\n            http: [\n                \"https://goerli.infura.io/v3\"\n            ]\n        },\n        public: {\n            http: [\n                \"https://rpc.ankr.com/eth_goerli\"\n            ]\n        }\n    },\n    blockExplorers: {\n        etherscan: {\n            name: \"Etherscan\",\n            url: \"https://goerli.etherscan.io\"\n        },\n        default: {\n            name: \"Etherscan\",\n            url: \"https://goerli.etherscan.io\"\n        }\n    },\n    testnet: true\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudC9uZXR3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxNQUFNLEdBQUc7SUFDbEJDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLElBQUksRUFBRSxRQUFRO0lBQ2RDLE9BQU8sRUFBRSxRQUFRO0lBQ2pCQyxjQUFjLEVBQUU7UUFBRUYsSUFBSSxFQUFFLGNBQWM7UUFBRUcsTUFBTSxFQUFFLEtBQUs7UUFBRUMsUUFBUSxFQUFFLEVBQUU7S0FBRTtJQUNyRUMsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRTtZQUFFQyxJQUFJLEVBQUU7Z0JBQUMscUNBQXFDO2FBQUM7U0FBRTtRQUMxREMsT0FBTyxFQUFFO1lBQUVELElBQUksRUFBRTtnQkFBQyxpQ0FBaUM7YUFBQztTQUFFO1FBQ3RERSxNQUFNLEVBQUU7WUFBRUYsSUFBSSxFQUFFO2dCQUFDLDZCQUE2QjthQUFDO1NBQUU7UUFDakRHLE1BQU0sRUFBRTtZQUFFSCxJQUFJLEVBQUU7Z0JBQUMsaUNBQWlDO2FBQUM7U0FBRTtLQUN0RDtJQUNESSxjQUFjLEVBQUU7UUFDZEMsU0FBUyxFQUFFO1lBQUVaLElBQUksRUFBRSxXQUFXO1lBQUVhLEdBQUcsRUFBRSw2QkFBNkI7U0FBRTtRQUNwRUwsT0FBTyxFQUFFO1lBQUVSLElBQUksRUFBRSxXQUFXO1lBQUVhLEdBQUcsRUFBRSw2QkFBNkI7U0FBRTtLQUNuRTtJQUNEQyxPQUFPLEVBQUUsSUFBSTtDQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5LW9mLW5mdC1zdG9yZS10ZXN0Ly4vY29uc3RhbnQvbmV0d29yay5qcz82YWU1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnb2VybGkgPSB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogJ0dvZXJsaScsXG4gICAgbmV0d29yazogJ2dvZXJsaScsXG4gICAgbmF0aXZlQ3VycmVuY3k6IHsgbmFtZTogJ0dvZXJsaSBFdGhlcicsIHN5bWJvbDogJ0VUSCcsIGRlY2ltYWxzOiAxOCB9LFxuICAgIHJwY1VybHM6IHtcbiAgICAgIGFsY2hlbXk6IHsgaHR0cDogWydodHRwczovL2V0aC1nb2VybGkuYWxjaGVteWFwaS5pby92MiddIH0sXG4gICAgICBkZWZhdWx0OiB7IGh0dHA6IFsnaHR0cHM6Ly9ycGMuYW5rci5jb20vZXRoX2dvZXJsaSddIH0sXG4gICAgICBpbmZ1cmE6IHsgaHR0cDogWydodHRwczovL2dvZXJsaS5pbmZ1cmEuaW8vdjMnXSB9LFxuICAgICAgcHVibGljOiB7IGh0dHA6IFsnaHR0cHM6Ly9ycGMuYW5rci5jb20vZXRoX2dvZXJsaSddIH0sXG4gICAgfSxcbiAgICBibG9ja0V4cGxvcmVyczoge1xuICAgICAgZXRoZXJzY2FuOiB7IG5hbWU6ICdFdGhlcnNjYW4nLCB1cmw6ICdodHRwczovL2dvZXJsaS5ldGhlcnNjYW4uaW8nIH0sXG4gICAgICBkZWZhdWx0OiB7IG5hbWU6ICdFdGhlcnNjYW4nLCB1cmw6ICdodHRwczovL2dvZXJsaS5ldGhlcnNjYW4uaW8nIH0sXG4gICAgfSxcbiAgICB0ZXN0bmV0OiB0cnVlLFxuICB9OyJdLCJuYW1lcyI6WyJnb2VybGkiLCJpZCIsIm5hbWUiLCJuZXR3b3JrIiwibmF0aXZlQ3VycmVuY3kiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJhbGNoZW15IiwiaHR0cCIsImRlZmF1bHQiLCJpbmZ1cmEiLCJwdWJsaWMiLCJibG9ja0V4cGxvcmVycyIsImV0aGVyc2NhbiIsInVybCIsInRlc3RuZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constant/network.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _constant_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constant/network */ \"./constant/network.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    _constant_network__WEBPACK_IMPORTED_MODULE_7__.goerli\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__.alchemyProvider)({\n        apiKey: \"y8qlo3CaD9LfXJLHd0Jy7c3GfZXAssY7\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction MyApp({ Component: Component , pageProps: pageProps  }) {\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! @lottiefiles/lottie-player */ \"@lottiefiles/lottie-player\", 23)));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/pc220557/Documents/repositories/develop/codefox/oshogatsu-nft/pages/_app.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                \";\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pc220557/Documents/repositories/develop/codefox/oshogatsu-nft/pages/_app.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pc220557/Documents/repositories/develop/codefox/oshogatsu-nft/pages/_app.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFCO0FBRUs7QUFFaUI7QUFJWDtBQUMwQztBQUNoQjtBQUNGO0FBRVg7QUFFN0MsTUFBTSxFQUFFVSxNQUFNLEdBQUVDLFFBQVEsR0FBRSxHQUFHUCxzREFBZSxDQUMxQztJQUFDSyxxREFBTTtDQUFDLEVBQ1I7SUFBQ0Ysd0VBQWUsQ0FBQztRQUFFSyxNQUFNLEVBQUVDLGtDQUFrQztLQUFFLENBQUM7SUFBRUwsc0VBQWMsRUFBRTtDQUFDLENBQ3BGO0FBQ0QsTUFBTSxFQUFFUSxVQUFVLEdBQUUsR0FBR2YseUVBQWlCLENBQUM7SUFDdkNnQixPQUFPLEVBQUUsbUJBQW1CO0lBQzVCUCxNQUFNO0NBQ1AsQ0FBQztBQUVGLE1BQU1RLFdBQVcsR0FBR2IsbURBQVksQ0FBQztJQUMvQmMsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVU7SUFDVkwsUUFBUTtDQUNULENBQUM7QUFFYSxTQUFTUyxLQUFLLENBQUMsRUFDNUJDLFNBQVMsRUFBRUEsU0FBUyxHQUNwQkMsU0FBUyxFQUFFQSxTQUFTLEdBQ3JCLEVBQUU7SUFDRHRCLHNEQUFlLENBQUMsSUFBTSwwSkFBb0MsQ0FBQyxDQUFDO0lBQzVELHFCQUNFLDhEQUFDTSw4Q0FBVztRQUFDa0IsTUFBTSxFQUFFTixXQUFXO2tCQUM5Qiw0RUFBQ2hCLHNFQUFrQjtZQUFDUSxNQUFNLEVBQUVBLE1BQU07OzhCQUNoQyw4REFBQ1csU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTtnQkFBQSxHQUM5Qjs7Ozs7O2dCQUFxQjs7Ozs7WUFDVCxDQUNmO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcHktb2YtbmZ0LXN0b3JlLXRlc3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7XG4gIGdldERlZmF1bHRXYWxsZXRzLFxuICBSYWluYm93S2l0UHJvdmlkZXJcbn0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvYWxjaGVteVwiO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xuXG5pbXBvcnQgeyBnb2VybGkgfSBmcm9tIFwiLi4vY29uc3RhbnQvbmV0d29ya1wiO1xuXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW2dvZXJsaV0sXG4gIFthbGNoZW15UHJvdmlkZXIoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQgfSksIHB1YmxpY1Byb3ZpZGVyKCldXG4pO1xuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6IFwiTXkgUmFpbmJvd0tpdCBBcHBcIixcbiAgY2hhaW5zXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7XG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBwYWdlUHJvcHM6IHBhZ2VQcm9wc1xufSkge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gaW1wb3J0KFwiQGxvdHRpZWZpbGVzL2xvdHRpZS1wbGF5ZXJcIikpO1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiYWxjaGVteVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJnb2VybGkiLCJjaGFpbnMiLCJwcm92aWRlciIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BTENIRU1ZX0lEIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VFZmZlY3QiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "@lottiefiles/lottie-player":
/*!*********************************************!*\
  !*** external "@lottiefiles/lottie-player" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@lottiefiles/lottie-player");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();