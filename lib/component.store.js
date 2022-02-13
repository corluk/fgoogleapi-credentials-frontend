"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Actions = {
  RequestItems: "/app/request/component/items",
  ResponseItems: "/app/response/component/items",
  ErrorItems: "/app/error/component/items",
  RequestSave: "/app/request/component/save",
  ResponseSave: "/app/response/component/save",
  ErrorSave: "/app/error/component/save",
  RequestItem: "/app/request/component/item",
  ResponseItem: "/app/response/component/item",
  ErrorItem: "/app/error/component/item",
  RequestDelete: "/app/request/component/delete",
  ResponseDelete: "/app/response/component/delete",
  ErrorDelete: "/app/error/component/delete"
};

const Reducer = (state = {
  items: [],
  message: {
    type: "",
    content: ""
  },
  item: {}
}, action) => {
  switch (action.type) {
    case Actions.ResponseItems:
      return { ...state,
        ...{
          items: action.payload
        }
      };

    case Actions.ResponseItem:
      return { ...state,
        ...{
          item: action.payload
        }
      };

    case Actions.ResponseSave:
      return { ...state,
        ...{
          item: action.payload,
          message: {
            type: "success",
            content: "saved"
          }
        }
      };

    case Actions.ResponseDelete:
      return { ...state,
        ...{
          message: {
            type: "success",
            content: "deleted"
          }
        }
      };

    case Actions.ErrorDelete:
    case Actions.ErrorItem:
    case Actions.ErrorSave:
    case Actions.ErrorItems:
      return { ...state,
        ...{
          message: {
            type: "error",
            content: action.payload
          }
        }
      };

    default:
      return state;
  }
};

var _default = {
  Actions,
  Reducer
};
exports.default = _default;