import axios from "axios"
import googleapi_credentialsStore from "./googleapi_credentials.store" 
import {put,takeLatest} from "redux-saga/effects"
const requestItems = async ()=>{

    response = await  axios.get("/api/googleapi_credentialss/")
     return response.data 
 }


const requestSave = async (item)=>{
    response = await  axios.post("/api/googleapi_credentials/",item)
    return response.data 
}

const  requestItem = async (_id)=>{

    response = await  axios.get("/api/googleapi_credentials/",item)
    return response.data 
}
const requestDelete = async (_id) =>{

    response = await  axios.delete("/api/googleapi_credentials/"+_id )
    return response.data 
}

function* doRequestItems(){
    try {
       
        const items  =      yield requestItems()
        yield put({type:googleapi_credentialsStore.Actions.ResponseItems,payload:items})

    } catch (error) {
        yield put({type:googleapi_credentialsStore.Actions.ErrorItems,payload:error.message})
    }
}




function* doRequestSave(action){
    try {
       
        const item  =  yield requestSave(action.payload)
        yield put({type:googleapi_credentialsStore.Actions.ResponseSave,payload:item})

    } catch (error) {
        yield put({type:googleapi_credentialsStore.Actions.ErrorSave,payload:error.message})
    }
}

function* doRequestItem(action){
    try {
       
        const item  =      yield requestItem(action.payload)
        yield put({type:googleapi_credentialsStore.Actions.ResponseItem,payload:item})

    } catch (error) {
        yield put({type:googleapi_credentialsStore.Actions.ErrorItem,payload:error.message})
    }
}

function* doRequestDelete(action){
    try {
       
        const item  =  yield requestDelete(action.payload)
        yield put({type:googleapi_credentialsStore.Actions.ResponseDelete,payload:item})

    } catch (error) {
        yield put({type:googleapi_credentialsStore.Actions.ErrorDelete,payload:error.message})
    }
}
export default function* Saga(){
    yield takeLatest(googleapi_credentialsStore.Actions.RequestItems,doRequestItems)
    yield takeLatest(googleapi_credentialsStore.Actions.RequestItem,doRequestItem)
    yield takeLatest(googleapi_credentialsStore.Actions.RequestSave,doRequestSave)
    yield takeLatest(googleapi_credentialsStore.Actions.RequestDelete,doRequestDelete)



}