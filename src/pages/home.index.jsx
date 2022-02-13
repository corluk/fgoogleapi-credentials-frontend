import React from "react" 
import { Outlet } from "react-router-dom"

export default ()=>{

    return <div>
        <div>This is Home Page</div>
        <div><Outlet /></div>
    </div>
}