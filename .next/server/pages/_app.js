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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"useLogin\": () => (/* binding */ useLogin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthContextProvider({ children  }) {\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    async function handleCookies(cookie) {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(null, \"quizz.user\", cookie.token, {\n            maxAge: 60 * 60 * 24\n        });\n        const { [\"quizz.user\"]: user  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\n        const decode = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(user);\n        console.log(decode);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: {\n            user: user1,\n            setUser,\n            handleCookies\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/mnt/3CADBCB14D0A481E/nextjs/quizz/src/contexts/useLoginRegister.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n}\n// function useNewUser() {\n//   const data = useContext();\n//   return data;\n// }\nfunction useLogin() {\n    const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlTG9naW5SZWdpc3Rlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0U7QUFDakI7QUFDZDtBQUVuQyxLQUFLLENBQUNPLFdBQVcsaUJBQUdOLG9EQUFhO0FBRTFCLFNBQVNPLG1CQUFtQixDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELEtBQUssTUFBRUMsS0FBSSxNQUFFQyxPQUFPLE1BQUlSLCtDQUFRO21CQUVqQlMsYUFBYSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztRQUNwQ1Qsa0RBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBWSxhQUFFUyxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDO1lBQzNDQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLENBQUM7UUFFRCxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQVksY0FBR0wsSUFBSSxFQUFDLENBQUMsR0FBR0wscURBQVk7UUFDN0MsS0FBSyxDQUFDVyxNQUFNLEdBQUdWLGlEQUFVLENBQUNJLElBQUk7UUFDOUJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNO0lBQ3BCLENBQUM7SUFFRCxNQUFNLDZFQUNIVCxXQUFXLENBQUNZLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ1YsSUFBSSxFQUFKQSxLQUFJO1lBQUVDLE9BQU87WUFBRUMsYUFBYTtRQUFDLENBQUM7a0JBQzFESCxRQUFROzs7Ozs7QUFHZixDQUFDO0FBRUQsRUFBMEI7QUFDMUIsRUFBK0I7QUFFL0IsRUFBaUI7QUFDakIsRUFBSTtBQUVHLFNBQVNZLFFBQVEsR0FBRyxDQUFDO0lBQzFCLEtBQUssQ0FBQ0MsSUFBSSxHQUFHcEIsaURBQVUsQ0FBQ0ssV0FBVztJQUVuQyxNQUFNLENBQUNlLElBQUk7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGFwcC8uL3NyYy9jb250ZXh0cy91c2VMb2dpblJlZ2lzdGVyLmpzeD84MzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNvb2tpZXMoY29va2llKSB7XG4gICAgc2V0Q29va2llKG51bGwsIFwicXVpenoudXNlclwiLCBjb29raWUudG9rZW4sIHtcbiAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0LFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBbXCJxdWl6ei51c2VyXCJdOiB1c2VyIH0gPSBwYXJzZUNvb2tpZXMoKTtcbiAgICBjb25zdCBkZWNvZGUgPSBqd3RfZGVjb2RlKHVzZXIpO1xuICAgIGNvbnNvbGUubG9nKGRlY29kZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyLCBoYW5kbGVDb29raWVzIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbi8vIGZ1bmN0aW9uIHVzZU5ld1VzZXIoKSB7XG4vLyAgIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KCk7XG5cbi8vICAgcmV0dXJuIGRhdGE7XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpbigpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInNldENvb2tpZSIsInBhcnNlQ29va2llcyIsImp3dF9kZWNvZGUiLCJhdXRoQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ29va2llcyIsImNvb2tpZSIsInRva2VuIiwibWF4QWdlIiwiZGVjb2RlIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VMb2dpbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/useLoginRegister.jsx\n");

/***/ }),

/***/ "./src/contexts/useSetResponse.jsx":
/*!*****************************************!*\
  !*** ./src/contexts/useSetResponse.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContextResponse),\n/* harmony export */   \"useQuestion\": () => (/* binding */ useQuestion)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ResponseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction ContextResponse({ children  }) {\n    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResponseContext.Provider, {\n        value: {\n            selected,\n            setSelected\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/mnt/3CADBCB14D0A481E/nextjs/quizz/src/contexts/useSetResponse.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n};\nfunction useQuestion() {\n    const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ResponseContext);\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlU2V0UmVzcG9uc2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFFbEUsS0FBSyxDQUFDSSxlQUFlLGlCQUFHSCxvREFBYTtBQUV0QixRQUFRLENBQUNJLGVBQWUsQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxLQUFLLE1BQUVDLFFBQVEsTUFBRUMsV0FBVyxNQUFJTCwrQ0FBUTtJQUV4QyxNQUFNLDZFQUNIQyxlQUFlLENBQUNLLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ0gsUUFBUTtZQUFFQyxXQUFXO1FBQUMsQ0FBQztrQkFDdkRGLFFBQVE7Ozs7OztBQUdmLENBQUM7QUFFTSxTQUFTSyxXQUFXLEdBQUcsQ0FBQztJQUM3QixLQUFLLENBQUNDLElBQUksR0FBR1YsaURBQVUsQ0FBQ0UsZUFBZTtJQUV2QyxNQUFNLENBQUNRLElBQUk7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGFwcC8uL3NyYy9jb250ZXh0cy91c2VTZXRSZXNwb25zZS5qc3g/ZjIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVzcG9uc2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZXh0UmVzcG9uc2UoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZXNwb25zZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUmVzcG9uc2VDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUXVlc3Rpb24oKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KFJlc3BvbnNlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiUmVzcG9uc2VDb250ZXh0IiwiQ29udGV4dFJlc3BvbnNlIiwiY2hpbGRyZW4iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVF1ZXN0aW9uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/useSetResponse.jsx\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_useSetResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/useSetResponse */ \"./src/contexts/useSetResponse.jsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_useLoginRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/useLoginRegister */ \"./src/contexts/useLoginRegister.jsx\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_useLoginRegister__WEBPACK_IMPORTED_MODULE_5__.AuthContextProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_useSetResponse__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/mnt/3CADBCB14D0A481E/nextjs/quizz/src/pages/_app.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/3CADBCB14D0A481E/nextjs/quizz/src/pages/_app.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"/mnt/3CADBCB14D0A481E/nextjs/quizz/src/pages/_app.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/3CADBCB14D0A481E/nextjs/quizz/src/pages/_app.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3lCO0FBQ1Y7QUFDQztBQUNtQjtTQUV6REcsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSw2RUFDSEgsMkVBQW1COzt3RkFDakJGLGdFQUFlO3NHQUNiSSxTQUFTO3VCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozt3RkFFekJKLDBEQUFjOzs7Ozs7Ozs7OztBQUdyQixDQUFDO0FBRUQsaUVBQWVFLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhcHAvLi9zcmMvcGFnZXMvX2FwcC5qc3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgQ29udGV4dFJlc3BvbnNlIGZyb20gXCIuLi9jb250ZXh0cy91c2VTZXRSZXNwb25zZVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IEF1dGhDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvdXNlTG9naW5SZWdpc3RlclwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHRQcm92aWRlcj5cbiAgICAgIDxDb250ZXh0UmVzcG9uc2U+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ29udGV4dFJlc3BvbnNlPlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJDb250ZXh0UmVzcG9uc2UiLCJUb2FzdENvbnRhaW5lciIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

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