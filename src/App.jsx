import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './home'
import Python from './python'
import Javascript from './javascript'
import C from './c'
import Cc from './c++'
import Html from './html'
import Css from './css'
import Sql from './sql'
import Java from './Java'
import Signup from './signup'
import Login from './login'

function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/python' element={<Python/>}></Route>
                <Route path='/c' element={<C/>}></Route>
                <Route path='/javascript' element={<Javascript/>}></Route>
                <Route path='/C++' element={<Cc/>}></Route>
                <Route path='/html' element={<Html/>}></Route>
                <Route path='/css' element={<Css/>}></Route>
                <Route path='/sql' element={<Sql/>}></Route>
                <Route path='/java' element={<Java/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/login' element={<Login/>}></Route>


            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App



