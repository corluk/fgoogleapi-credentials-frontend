"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)("div", {
      children: "This is Home Page"
    }), (0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_reactRouterDom.Outlet, {})
    })]
  });
};

exports.default = _default;