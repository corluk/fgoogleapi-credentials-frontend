import React from "react"
import ReactDOM  from "react-dom"
import { Provider } from "react-redux"
import {BrowserRouter} from "react-router-dom"
import Layout from "./system/Layout"
import Store from "./system/root.store"
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { tr } from 'date-fns/locale'
import { ThemeProvider } from "@mui/system"
import Theme from "./system/theme"
const RootApp  = ()=> (<Provider store={Store}> 
<BrowserRouter> 
    <LocalizationProvider locale={tr} dateAdapter={AdapterDateFns}> 
        <ThemeProvider theme={Theme}>
             <Layout />
        </ThemeProvider>
    </LocalizationProvider>
</BrowserRouter>
</Provider>)

ReactDOM.render(<RootApp />,document.getElementById("app"))