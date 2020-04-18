webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TechnicalArticles.js":
/*!*****************************************!*\
  !*** ./components/TechnicalArticles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/jithinks/Desktop/portfolio/components/TechnicalArticles.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var MainContent = function MainContent() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, "General articles"), __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, articles.map(function (_ref) {
    var link = _ref.link,
        title = _ref.title;
    return __jsx(Link, {
      link: link,
      title: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 45
      }
    });
  })));
};

var Link = function Link(_ref2) {
  var link = _ref2.link,
      title = _ref2.title;
  return __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("a", {
    target: "_blank",
    href: link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, title));
};

var articles = [{
  title: "The most beautiful feeling...",
  link: "https://medium.com/@jithunni.ks/the-most-beautiful-feeling-b74aa7f82ba0"
}, {
  title: "Something that I wish to witness before I leave...",
  link: "https://medium.com/@jithunni.ks/everyone-who-has-ever-lived-every-story-that-has-ever-been-told-every-event-that-has-ever-a779464d8783"
}, {
  title: "Two questions that will help you to lead a fulfilled life!",
  link: "https://medium.com/@jithunni.ks/i-have-found-two-important-questions-to-which-you-need-to-find-answers-which-will-help-you-ea0470531a6b"
}];
/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GeneralArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GeneralArticles */ "./components/GeneralArticles.js");
/* harmony import */ var _components_TechnicalArticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TechnicalArticles */ "./components/TechnicalArticles.js");


var _this = undefined,
    _jsxFileName = "/home/jithinks/Desktop/portfolio/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Index = function Index(_ref) {
  var content = _ref.content;
  console.log(content);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, styles), __jsx("div", {
    className: "page-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "introduction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    source: content["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  })), __jsx(_components_GeneralArticles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })));
};

Index.getInitialProps = function _callee(ctx) {
  var content;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(__webpack_require__(/*! ../markdown/introduction.md */ "./markdown/introduction.md"));

        case 2:
          content = _context.sent;
          return _context.abrupt("return", {
            content: content
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var styles = "\n    .page-wrapper {\n        width:80vw;\n        margin:auto;\n        font-family:Roboto;\n    }\n";
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6881f3e4aece267e092a.hot-update.js.map