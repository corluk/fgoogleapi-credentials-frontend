import axios from "axios"
import ComponentStore from "./component.store" 
import {put,takeLatest} from "redux-saga/effects"
const requestItems = async ()=>{

    response = await  axios.get("/api/components/")
     return response.data 
 }


const requestSave = async (item)=>{
    response = await  axios.post("/api/component/",item)
    return response.data 
}

const  requestItem = async (_id)=>{

    response = await  axios.get("/api/component/",item)
    return response.data 
}
const requestDelete = async (_id) =>{

    response = await  axios.delete("/api/component/"+_id )
    return response.data 
}

function* doRequestItems(){
    try {
       
        const items  =      yield requestItems()
        yield put({type:ComponentStore.Actions.ResponseItems,payload:items})

    } catch (error) {
        yield put({type:ComponentStore.Actions.ErrorItems,payload:error.message})
    }
}




function* doRequestSave(action){
    try {
       
        const item  =  yield requestSave(action.payload)
        yield put({type:ComponentStore.Actions.ResponseSave,payload:item})

    } catch (error) {
        yield put({type:ComponentStore.Actions.ErrorSave,payload:error.message})
    }
}

function* doRequestItem(action){
    try {
       
        const item  =      yield requestItem(action.payload)
        yield put({type:ComponentStore.Actions.ResponseItem,payload:item})

    } catch (error) {
        yield put({type:ComponentStore.Actions.ErrorItem,payload:error.message})
    }
}

function* doRequestDelete(action){
    try {
       
        const item  =  yield requestDelete(action.payload)
        yield put({type:ComponentStore.Actions.ResponseDelete,payload:item})

    } catch (error) {
        yield put({type:ComponentStore.Actions.ErrorDelete,payload:error.message})
    }
}
export default function* Saga(){
    yield takeLatest(ComponentStore.Actions.RequestItems,doRequestItems)
    yield takeLatest(ComponentStore.Actions.RequestItem,doRequestItem)
    yield takeLatest(ComponentStore.Actions.RequestSave,doRequestSave)
    yield takeLatest(ComponentStore.Actions.RequestDelete,doRequestDelete)



}