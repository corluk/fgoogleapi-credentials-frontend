import React, { useContext } from "react" 
import { FormContext , Actions } from "../form"
import { TextField } from "@mui/material"


export default ()=>{

    const formContext = useContext(FormContext) 
    console.log(formContext)
    return <div>
        <TextField value={formContext.state.client_id} onChange={(e)=> formContext.localDispatcher({type:Actions.SetClientId,payload:e.target.value })} /> 
    </div>
}