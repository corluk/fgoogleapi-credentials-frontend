"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Saga;

var _axios = _interopRequireDefault(require("axios"));

var _component = _interopRequireDefault(require("./component.store"));

var _effects = require("redux-saga/effects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const requestItems = async () => {
  response = await _axios.default.get("/api/components/");
  return response.data;
};

const requestSave = async item => {
  response = await _axios.default.post("/api/component/", item);
  return response.data;
};

const requestItem = async _id => {
  response = await _axios.default.get("/api/component/", item);
  return response.data;
};

const requestDelete = async _id => {
  response = await _axios.default.delete("/api/component/" + _id);
  return response.data;
};

function* doRequestItems() {
  try {
    const items = yield requestItems();
    yield (0, _effects.put)({
      type: _component.default.Actions.ResponseItems,
      payload: items
    });
  } catch (error) {
    yield (0, _effects.put)({
      type: _component.default.Actions.ErrorItems,
      payload: error.message
    });
  }
}

function* doRequestSave(action) {
  try {
    const item = yield requestSave(action.payload);
    yield (0, _effects.put)({
      type: _component.default.Actions.ResponseSave,
      payload: item
    });
  } catch (error) {
    yield (0, _effects.put)({
      type: _component.default.Actions.ErrorSave,
      payload: error.message
    });
  }
}

function* doRequestItem(action) {
  try {
    const item = yield requestItem(action.payload);
    yield (0, _effects.put)({
      type: _component.default.Actions.ResponseItem,
      payload: item
    });
  } catch (error) {
    yield (0, _effects.put)({
      type: _component.default.Actions.ErrorItem,
      payload: error.message
    });
  }
}

function* doRequestDelete(action) {
  try {
    const item = yield requestDelete(action.payload);
    yield (0, _effects.put)({
      type: _component.default.Actions.ResponseDelete,
      payload: item
    });
  } catch (error) {
    yield (0, _effects.put)({
      type: _component.default.Actions.ErrorDelete,
      payload: error.message
    });
  }
}

function* Saga() {
  yield (0, _effects.takeLatest)(_component.default.Actions.RequestItems, doRequestItems);
  yield (0, _effects.takeLatest)(_component.default.Actions.RequestItem, doRequestItem);
  yield (0, _effects.takeLatest)(_component.default.Actions.RequestSave, doRequestSave);
  yield (0, _effects.takeLatest)(_component.default.Actions.RequestDelete, doRequestDelete);
}