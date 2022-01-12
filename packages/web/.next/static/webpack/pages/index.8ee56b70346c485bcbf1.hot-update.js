webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SEO; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"../../node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/izouiten/Desktop/nextjs_app/project00/packages/web/src/components/seo.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction SEO(_ref) {\n  var _this = this;\n\n  var _ref$description = _ref.description,\n      description = _ref$description === void 0 ? 'startup landing descriptions' : _ref$description,\n      _ref$author = _ref.author,\n      author = _ref$author === void 0 ? 'Issam , Inc' : _ref$author,\n      meta = _ref.meta,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Z infinity' : _ref$title;\n  var metaData = [{\n    name: \"description\",\n    content: description\n  }, {\n    property: \"og:title\",\n    content: title\n  }, {\n    property: \"og:description\",\n    content: description\n  }, {\n    property: \"og:type\",\n    content: \"website\"\n  }, {\n    name: \"twitter:card\",\n    content: \"summary\"\n  }, {\n    name: \"twitter:creator\",\n    content: author\n  }, {\n    name: \"twitter:title\",\n    content: title\n  }, {\n    name: \"twitter:description\",\n    content: description\n  }].concat(meta);\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, title), metaData.map(function (_ref2, i) {\n    var name = _ref2.name,\n        content = _ref2.content;\n    return __jsx(\"meta\", {\n      key: i,\n      name: name,\n      content: content,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }\n    });\n  }));\n}\n_c = SEO;\nSEO.defaultProps = {\n  lang: \"en\",\n  meta: [],\n  description: \"\"\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"SEO\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VvLmpzP2JlYjEiXSwibmFtZXMiOlsiU0VPIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJtZXRhIiwidGl0bGUiLCJtZXRhRGF0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJjb25jYXQiLCJtYXAiLCJpIiwiZGVmYXVsdFByb3BzIiwibGFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxPQUtaO0FBQUE7O0FBQUEsOEJBSkRDLFdBSUM7QUFBQSxNQUpEQSxXQUlDLGlDQUphLDhCQUliO0FBQUEseUJBSERDLE1BR0M7QUFBQSxNQUhEQSxNQUdDLDRCQUhRLGFBR1I7QUFBQSxNQUZEQyxJQUVDLFFBRkRBLElBRUM7QUFBQSx3QkFEREMsS0FDQztBQUFBLE1BRERBLEtBQ0MsMkJBRE8sWUFDUDtBQUNELE1BQU1DLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLFFBQUksZUFETjtBQUVFQyxXQUFPLEVBQUVOO0FBRlgsR0FEZSxFQUtmO0FBQ0VPLFlBQVEsWUFEVjtBQUVFRCxXQUFPLEVBQUVIO0FBRlgsR0FMZSxFQVNmO0FBQ0VJLFlBQVEsa0JBRFY7QUFFRUQsV0FBTyxFQUFFTjtBQUZYLEdBVGUsRUFhZjtBQUNFTyxZQUFRLFdBRFY7QUFFRUQsV0FBTztBQUZULEdBYmUsRUFpQmY7QUFDRUQsUUFBSSxnQkFETjtBQUVFQyxXQUFPO0FBRlQsR0FqQmUsRUFxQmY7QUFDRUQsUUFBSSxtQkFETjtBQUVFQyxXQUFPLEVBQUVMO0FBRlgsR0FyQmUsRUF5QmY7QUFDRUksUUFBSSxpQkFETjtBQUVFQyxXQUFPLEVBQUVIO0FBRlgsR0F6QmUsRUE2QmY7QUFDRUUsUUFBSSx1QkFETjtBQUVFQyxXQUFPLEVBQUVOO0FBRlgsR0E3QmUsRUFpQ2ZRLE1BakNlLENBaUNSTixJQWpDUSxDQUFqQjtBQWtDQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUMsS0FBUixDQURGLEVBRUdDLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLGlCQUFvQkMsQ0FBcEI7QUFBQSxRQUFHTCxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxPQUFULFNBQVNBLE9BQVQ7QUFBQSxXQUNaO0FBQU0sU0FBRyxFQUFFSSxDQUFYO0FBQWMsVUFBSSxFQUFFTCxJQUFwQjtBQUEwQixhQUFPLEVBQUVDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEWTtBQUFBLEdBQWIsQ0FGSCxDQURGO0FBUUQ7S0FoRHVCUCxHO0FBa0R4QkEsR0FBRyxDQUFDWSxZQUFKLEdBQW1CO0FBQ2pCQyxNQUFJLE1BRGE7QUFFakJWLE1BQUksRUFBRSxFQUZXO0FBR2pCRixhQUFXO0FBSE0sQ0FBbkIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZW8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU0VPKHtcbiAgZGVzY3JpcHRpb24gPSAnc3RhcnR1cCBsYW5kaW5nIGRlc2NyaXB0aW9ucycsXG4gIGF1dGhvciA9ICdJc3NhbSAsIEluYycsXG4gIG1ldGEsXG4gIHRpdGxlID0gJ1ogaW5maW5pdHknLFxufSkge1xuICBjb25zdCBtZXRhRGF0YSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6IGBvZzpkZXNjcmlwdGlvbmAsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcbiAgICAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNyZWF0b3JgLFxuICAgICAgY29udGVudDogYXV0aG9yLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxuICAgICAgY29udGVudDogdGl0bGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9LFxuICBdLmNvbmNhdChtZXRhKTtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIHttZXRhRGF0YS5tYXAoKHsgbmFtZSwgY29udGVudCB9LCBpKSA9PiAoXG4gICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICkpfVxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuU0VPLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFuZzogYGVuYCxcbiAgbWV0YTogW10sXG4gIGRlc2NyaXB0aW9uOiBgYCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/seo.js\n");

/***/ })

})