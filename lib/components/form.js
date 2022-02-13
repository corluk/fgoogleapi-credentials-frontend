"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormContext = exports.Actions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _client_id = _interopRequireDefault(require("./form/client_id.field"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FormContext = /*#__PURE__*/(0, _react.createContext)();
exports.FormContext = FormContext;
const Actions = {
  SetClientId: "/app/setclient_id",
  SetClientSecret: "/app/setclient_secret",
  SetRedirectUri: "/app/set/redirecturi",
  SetAccessType: "/app/set/accesstype"
};
exports.Actions = Actions;

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.SetClientId:
      return { ...state,
        ...{
          client_id: action.payload
        }
      };

    case Actions.SetClientSecret:
      return { ...state,
        ...{
          client_secret: action.payload
        }
      };

    case Actions.RedirectUri:
      return { ...state,
        ...{
          redirect_uri: action.payload
        }
      };

    case Actions.AccessType:
      return { ...state,
        ...{
          access_type: action.payload
        }
      };

    default:
      return state;
  }
};

var _default = () => {
  const initialState = {
    client_id: "",
    client_secret: "",
    redirect_uri: "",
    access_type: "code"
  };
  const [state, localDispatcher] = (0, _react.useReducer)(reducer, initialState);
  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)(_material.Button, {
      onClick: () => console.log(state)
    }), (0, _jsxRuntime.jsx)(FormContext.Provider, {
      value: {
        state,
        localDispatcher
      },
      children: (0, _jsxRuntime.jsx)(_client_id.default, {})
    })]
  });
};

exports.default = _default;