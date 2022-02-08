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

/***/ "./src/contexts/useLoginRegister.jsx":
/*!*******************************************!*\
  !*** ./src/contexts/useLoginRegister.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"useLogin\": () => (/* binding */ useLogin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthContextProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    async function handleSetCookies(cookie) {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(null, \"quizz.user\", cookie, {\n            maxAge: 60 * 60 * 24\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: {\n            user,\n            setUser,\n            handleSetCookies\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\contexts\\\\useLoginRegister.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n// function useNewUser() {\n//   const data = useContext();\n//   return data;\n// }\nfunction useLogin() {\n    const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlTG9naW5SZWdpc3Rlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0U7QUFDakI7QUFDZDtBQUVuQyxLQUFLLENBQUNPLFdBQVcsaUJBQUdOLG9EQUFhO0FBRTFCLFNBQVNPLG1CQUFtQixDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELEtBQUssTUFBRUMsSUFBSSxNQUFFQyxPQUFPLE1BQUlSLCtDQUFRO21CQUVqQlMsZ0JBQWdCLENBQUNDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZDVCxrREFBUyxDQUFDLElBQUksRUFBRSxDQUFZLGFBQUVTLE1BQU0sRUFBRSxDQUFDO1lBQ3JDQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSFAsV0FBVyxDQUFDUSxRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNOLElBQUk7WUFBRUMsT0FBTztZQUFFQyxnQkFBZ0I7UUFBQyxDQUFDO2tCQUM3REgsUUFBUTs7Ozs7O0FBR2YsQ0FBQztBQUVELEVBQTBCO0FBQzFCLEVBQStCO0FBRS9CLEVBQWlCO0FBQ2pCLEVBQUk7QUFFRyxTQUFTUSxRQUFRLEdBQUcsQ0FBQztJQUMxQixLQUFLLENBQUNDLElBQUksR0FBR2hCLGlEQUFVLENBQUNLLFdBQVc7SUFFbkMsTUFBTSxDQUFDVyxJQUFJO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhcHAvLi9zcmMvY29udGV4dHMvdXNlTG9naW5SZWdpc3Rlci5qc3g/ODMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aENvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTZXRDb29raWVzKGNvb2tpZSkge1xyXG4gICAgc2V0Q29va2llKG51bGwsIFwicXVpenoudXNlclwiLCBjb29raWUsIHtcclxuICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2V0VXNlciwgaGFuZGxlU2V0Q29va2llcyB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB1c2VOZXdVc2VyKCkge1xyXG4vLyAgIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KCk7XHJcblxyXG4vLyAgIHJldHVybiBkYXRhO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW4oKSB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiand0X2RlY29kZSIsImF1dGhDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVTZXRDb29raWVzIiwiY29va2llIiwibWF4QWdlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUxvZ2luIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/useLoginRegister.jsx\n");

/***/ }),

/***/ "./src/contexts/useSetResponse.jsx":
/*!*****************************************!*\
  !*** ./src/contexts/useSetResponse.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContextResponse),\n/* harmony export */   \"useQuestion\": () => (/* binding */ useQuestion)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ResponseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction ContextResponse({ children  }) {\n    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResponseContext.Provider, {\n        value: {\n            selected,\n            setSelected\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\contexts\\\\useSetResponse.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n};\nfunction useQuestion() {\n    const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ResponseContext);\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlU2V0UmVzcG9uc2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFFbEUsS0FBSyxDQUFDSSxlQUFlLGlCQUFHSCxvREFBYTtBQUV0QixRQUFRLENBQUNJLGVBQWUsQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxLQUFLLE1BQUVDLFFBQVEsTUFBRUMsV0FBVyxNQUFJTCwrQ0FBUTtJQUV4QyxNQUFNLDZFQUNIQyxlQUFlLENBQUNLLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ0gsUUFBUTtZQUFFQyxXQUFXO1FBQUMsQ0FBQztrQkFDdkRGLFFBQVE7Ozs7OztBQUdmLENBQUM7QUFFTSxTQUFTSyxXQUFXLEdBQUcsQ0FBQztJQUM3QixLQUFLLENBQUNDLElBQUksR0FBR1YsaURBQVUsQ0FBQ0UsZUFBZTtJQUV2QyxNQUFNLENBQUNRLElBQUk7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGFwcC8uL3NyYy9jb250ZXh0cy91c2VTZXRSZXNwb25zZS5qc3g/ZjIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFJlc3BvbnNlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRleHRSZXNwb25zZSh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVzcG9uc2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNlbGVjdGVkLCBzZXRTZWxlY3RlZCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9SZXNwb25zZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXN0aW9uKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KFJlc3BvbnNlQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJSZXNwb25zZUNvbnRleHQiLCJDb250ZXh0UmVzcG9uc2UiLCJjaGlsZHJlbiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlUXVlc3Rpb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/useSetResponse.jsx\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_useSetResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/useSetResponse */ \"./src/contexts/useSetResponse.jsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_useLoginRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/useLoginRegister */ \"./src/contexts/useLoginRegister.jsx\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_useLoginRegister__WEBPACK_IMPORTED_MODULE_5__.AuthContextProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_useSetResponse__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\_app.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\_app.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\_app.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\_app.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3lCO0FBQ1Y7QUFDQztBQUNtQjtTQUV6REcsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSw2RUFDSEgsMkVBQW1COzt3RkFDakJGLGdFQUFlO3NHQUNiSSxTQUFTO3VCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozt3RkFFekJKLDBEQUFjOzs7Ozs7Ozs7OztBQUdyQixDQUFDO0FBRUQsaUVBQWVFLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhcHAvLi9zcmMvcGFnZXMvX2FwcC5qc3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XHJcbmltcG9ydCBDb250ZXh0UmVzcG9uc2UgZnJvbSBcIi4uL2NvbnRleHRzL3VzZVNldFJlc3BvbnNlXCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy91c2VMb2dpblJlZ2lzdGVyXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIDxDb250ZXh0UmVzcG9uc2U+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0NvbnRleHRSZXNwb25zZT5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L0F1dGhDb250ZXh0UHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJDb250ZXh0UmVzcG9uc2UiLCJUb2FzdENvbnRhaW5lciIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();