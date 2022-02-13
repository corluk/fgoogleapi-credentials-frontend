import  { Saga , Store } from ".." 
 
import  {applyMiddleware, createStore} from "redux"
import createSagaMiddleware from 'redux-saga'
import { fork } from "redux-saga/effects"

function* RootSaga () {

    fork(Saga)
}   
const sagaMiddleware = createSagaMiddleware()
const RootStore = createStore(Store.Reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(RootSaga)

export default RootStore