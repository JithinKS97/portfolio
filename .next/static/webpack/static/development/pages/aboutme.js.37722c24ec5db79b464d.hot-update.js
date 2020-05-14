webpackHotUpdate("static/development/pages/aboutme.js",{

/***/ "./markdown/aboutme.md":
/*!*****************************!*\
  !*** ./markdown/aboutme.md ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nI'm a person who cannot stop marveling about the existence of this wonderfully strange Universe of ours.\n\nThe thought that all these things that we see around us exist and we got lucky enough to be born as a being who is capable of looking at it and wonder about it always leaves me in awe.\n\nI think this feeling of mystery is one of the most beautiful feelings that we can experience as human beings. It is this same feeling that lead great minds in the past to reveal a lot of its mysteries.\n\n\nNow we have a pile of evidence that our Universe began in an event called Big Bang that happened 13.7 billion years ago. Even though we still don't know what caused the Big bang, we have theories that are powerful enough to explain what happened a very tiny fraction of a second after the Big bang to the formation of stars, planets, galaxies and even what will eventually happen to the Universe in the far distant future. We have theories that explain how an intelligent species like ourselves evolved from molecules that could do nothing but just create copies of themselves.\n\nBut we are still far far away. \"We are at least 5 Einsteins away from understanding its true nature\", a quote that I recall from a book that I read recently.\n\nI think we can accelerate this understanding using the technologies that we have been developing recently. Improving the way Science and Math are taught using the latest developments in technology can bring a great change. My goal in life is to do whatever that I can towards this.");

/***/ }),

/***/ "./pages/aboutme.js":
/*!**************************!*\
  !*** ./pages/aboutme.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./theme.js");


var _this = undefined,
    _jsxFileName = "/home/jithinks/Desktop/portfolio/pages/aboutme.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var AboutMe = function AboutMe(props) {
  var content = props["default"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, style), __jsx("div", {
    className: "about-me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }))));
};

var style = "\n  .about-me {\n    background-color:#101010;\n    color:lightgrey;\n    padding:20px;\n    border-radius:".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].borderRadius, ";\n  }\n  .aboutme p {\n    color:grey;\n  }\n");

AboutMe.getInitialProps = function _callee(ctx) {
  var res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(__webpack_require__(/*! ../markdown/aboutme.md */ "./markdown/aboutme.md"));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (AboutMe);

/***/ })

})
//# sourceMappingURL=aboutme.js.37722c24ec5db79b464d.hot-update.js.map