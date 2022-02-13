"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Saga;

var _axios = _interopRequireDefault(require("axios"));

var _googleapi_credentials = _interopRequireDefault(require("./googleapi_credentials.store"));

var _effects = require("redux-saga/effects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const requestItems = async () => {
  response = await _axios.default.get("/api/googleapi_credentialss/");
  return response.data;
};

const requestSave = async item => {
  response = await _axios.default.post("/api/googleapi_credentials/", item);
  return response.data;
};

const requestItem = async _id => {
  response = await _axios.default.get("/api/googleapi_credentials/", item);
  return response.data;
};

const requestDelete = async _id => {
  response = await _axios.default.delete("/api/googleapi_credentials/" + _id);
  return response.data;
};

function* doRequestItems() {
  try {
    const items = yield requestItems();
    yield (0, _effects.put)({
      type: _googleapi_credentials.default.Actions.ResponseItems,
      payload: items
    });
  } catch (error) {
    yield (0, _effects.put)({
      type: _googleapi_credentials.default.Actions.ErrorItems,
      payload: error.message
    });
  }
}

function* doRequestSave(action) {
  try {
    const item = yield requestSave(action.payload);
    yield (0, _effects.put)({
      type: _googleapi_credentials.default.Actions.ResponseSave,
      payload: item
    });
  } catch (error) {
    yield (0, _effects.put)({
      type: _googleapi_credentials.default.Actions.ErrorSave,
      payload: error.message
    });
  }
}

function* doRequestItem(action) {
  try {
    const item = yield requestItem(action.payload);
    yield (0, _effects.put)({
      type: _googleapi_credentials.default.Actions.ResponseItem,
      payload: item
    });
  } catch (error) {
    yield (0, _effects.put)({
      type: _googleapi_credentials.default.Actions.ErrorItem,
      payload: error.message
    });
  }
}

function* doRequestDelete(action) {
  try {
    const item = yield requestDelete(action.payload);
    yield (0, _effects.put)({
      type: _googleapi_credentials.default.Actions.ResponseDelete,
      payload: item
    });
  } catch (error) {
    yield (0, _effects.put)({
      type: _googleapi_credentials.default.Actions.ErrorDelete,
      payload: error.message
    });
  }
}

function* Saga() {
  yield (0, _effects.takeLatest)(_googleapi_credentials.default.Actions.RequestItems, doRequestItems);
  yield (0, _effects.takeLatest)(_googleapi_credentials.default.Actions.RequestItem, doRequestItem);
  yield (0, _effects.takeLatest)(_googleapi_credentials.default.Actions.RequestSave, doRequestSave);
  yield (0, _effects.takeLatest)(_googleapi_credentials.default.Actions.RequestDelete, doRequestDelete);
}