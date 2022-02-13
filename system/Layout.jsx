import { HomePage} from ".." 
import {Routes,Route,Link} from "react-router-dom"


export default ()=>{
    console.log(HomePage)
    console.log("getted from ")
    return <div>
        <Routes>
            <Route index element={<HomePage  />} />
        </Routes>
    </div>
}