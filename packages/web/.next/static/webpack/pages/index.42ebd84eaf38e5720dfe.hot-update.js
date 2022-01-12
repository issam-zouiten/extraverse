webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SEO; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"../../node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/izouiten/Desktop/nextjs_app/project00/packages/web/src/components/seo.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction SEO(_ref) {\n  var _this = this;\n\n  var _ref$description = _ref.description,\n      description = _ref$description === void 0 ? 'startup landing descriptions' : _ref$description,\n      _ref$author = _ref.author,\n      author = _ref$author === void 0 ? 'Issam zoi, Inc' : _ref$author,\n      meta = _ref.meta,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Z infinity' : _ref$title;\n  var metaData = [{\n    name: \"description\",\n    content: description\n  }, {\n    property: \"og:title\",\n    content: title\n  }, {\n    property: \"og:description\",\n    content: description\n  }, {\n    property: \"og:type\",\n    content: \"website\"\n  }, {\n    name: \"twitter:card\",\n    content: \"summary\"\n  }, {\n    name: \"twitter:creator\",\n    content: author\n  }, {\n    name: \"twitter:title\",\n    content: title\n  }, {\n    name: \"twitter:description\",\n    content: description\n  }].concat(meta);\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, title), metaData.map(function (_ref2, i) {\n    var name = _ref2.name,\n        content = _ref2.content;\n    return __jsx(\"meta\", {\n      key: i,\n      name: name,\n      content: content,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }\n    });\n  }));\n}\n_c = SEO;\nSEO.defaultProps = {\n  lang: \"en\",\n  meta: [],\n  description: \"\"\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"SEO\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VvLmpzP2JlYjEiXSwibmFtZXMiOlsiU0VPIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJtZXRhIiwidGl0bGUiLCJtZXRhRGF0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJjb25jYXQiLCJtYXAiLCJpIiwiZGVmYXVsdFByb3BzIiwibGFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxPQUtaO0FBQUE7O0FBQUEsOEJBSkRDLFdBSUM7QUFBQSxNQUpEQSxXQUlDLGlDQUphLDhCQUliO0FBQUEseUJBSERDLE1BR0M7QUFBQSxNQUhEQSxNQUdDLDRCQUhRLGdCQUdSO0FBQUEsTUFGREMsSUFFQyxRQUZEQSxJQUVDO0FBQUEsd0JBRERDLEtBQ0M7QUFBQSxNQUREQSxLQUNDLDJCQURPLFlBQ1A7QUFDRCxNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxRQUFJLGVBRE47QUFFRUMsV0FBTyxFQUFFTjtBQUZYLEdBRGUsRUFLZjtBQUNFTyxZQUFRLFlBRFY7QUFFRUQsV0FBTyxFQUFFSDtBQUZYLEdBTGUsRUFTZjtBQUNFSSxZQUFRLGtCQURWO0FBRUVELFdBQU8sRUFBRU47QUFGWCxHQVRlLEVBYWY7QUFDRU8sWUFBUSxXQURWO0FBRUVELFdBQU87QUFGVCxHQWJlLEVBaUJmO0FBQ0VELFFBQUksZ0JBRE47QUFFRUMsV0FBTztBQUZULEdBakJlLEVBcUJmO0FBQ0VELFFBQUksbUJBRE47QUFFRUMsV0FBTyxFQUFFTDtBQUZYLEdBckJlLEVBeUJmO0FBQ0VJLFFBQUksaUJBRE47QUFFRUMsV0FBTyxFQUFFSDtBQUZYLEdBekJlLEVBNkJmO0FBQ0VFLFFBQUksdUJBRE47QUFFRUMsV0FBTyxFQUFFTjtBQUZYLEdBN0JlLEVBaUNmUSxNQWpDZSxDQWlDUk4sSUFqQ1EsQ0FBakI7QUFrQ0EsU0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFDLEtBQVIsQ0FERixFQUVHQyxRQUFRLENBQUNLLEdBQVQsQ0FBYSxpQkFBb0JDLENBQXBCO0FBQUEsUUFBR0wsSUFBSCxTQUFHQSxJQUFIO0FBQUEsUUFBU0MsT0FBVCxTQUFTQSxPQUFUO0FBQUEsV0FDWjtBQUFNLFNBQUcsRUFBRUksQ0FBWDtBQUFjLFVBQUksRUFBRUwsSUFBcEI7QUFBMEIsYUFBTyxFQUFFQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFk7QUFBQSxHQUFiLENBRkgsQ0FERjtBQVFEO0tBaER1QlAsRztBQWtEeEJBLEdBQUcsQ0FBQ1ksWUFBSixHQUFtQjtBQUNqQkMsTUFBSSxNQURhO0FBRWpCVixNQUFJLEVBQUUsRUFGVztBQUdqQkYsYUFBVztBQUhNLENBQW5CIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvc2VvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XG4gIGRlc2NyaXB0aW9uID0gJ3N0YXJ0dXAgbGFuZGluZyBkZXNjcmlwdGlvbnMnLFxuICBhdXRob3IgPSAnSXNzYW0gem9pLCBJbmMnLFxuICBtZXRhLFxuICB0aXRsZSA9ICdaIGluZmluaXR5Jyxcbn0pIHtcbiAgY29uc3QgbWV0YURhdGEgPSBbXG4gICAge1xuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6IGBvZzp0aXRsZWAsXG4gICAgICBjb250ZW50OiB0aXRsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxuICAgICAgY29udGVudDogYHdlYnNpdGVgLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpjcmVhdG9yYCxcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgXS5jb25jYXQobWV0YSk7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICB7bWV0YURhdGEubWFwKCh7IG5hbWUsIGNvbnRlbnQgfSwgaSkgPT4gKFxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICApKX1cbiAgICA8L0hlYWQ+XG4gICk7XG59XG5cblNFTy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhbmc6IGBlbmAsXG4gIG1ldGE6IFtdLFxuICBkZXNjcmlwdGlvbjogYGAsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/seo.js\n");

/***/ })

})