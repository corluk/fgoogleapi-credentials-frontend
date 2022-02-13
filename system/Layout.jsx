import { HomePage, FormComponent } from ".." 

import {Routes,Route,Link} from "react-router-dom"


export default ()=>{
    console.log(HomePage)
    console.log("getted from ")
    return <div>
        <div>
            <Link to="/form/">Form </Link>
            </div>
        <Routes>
            <Route  path="/" element={<HomePage  />} >
                
                <Route path="/form/" element={<FormComponent />} />     
            </Route>

        </Routes>
    </div>
}