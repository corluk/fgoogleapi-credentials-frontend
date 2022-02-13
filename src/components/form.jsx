import React, { useReducer , createContext } from "react" 
import {Button} from "@mui/material" 
import ClientIdField from "./form/client_id.field"
export const FormContext = createContext()
export const Actions = {

    SetClientId : "/app/setclient_id" ,
    SetClientSecret : "/app/setclient_secret" , 
    SetRedirectUri : "/app/set/redirecturi" , 
    SetAccessType : "/app/set/accesstype"
}

const reducer = (state , action  ) =>{

    switch(action.type){
        case Actions.SetClientId : 
            return {...state , ...{client_id  : action.payload }}
        case Actions.SetClientSecret: 
            return {...state,...{client_secret:action.payload}} 
        case Actions.RedirectUri : 
            return {...state,...{redirect_uri : action.payload}} 
        case Actions.AccessType : 
            return {...state,...{access_type:action.payload}}
        default :
            return state 
    }
}
export default ()=>{

    const initialState = { client_id: "", client_secret:"", redirect_uri : "" , access_type : "code"}
    const [state, localDispatcher ] = useReducer(reducer,initialState)
    return <div> 
        <Button onClick={()=> console.log(state)}/>
        <FormContext.Provider value={{state,localDispatcher}}>
            <ClientIdField />

        </FormContext.Provider>
        

    </div>
}