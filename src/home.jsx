import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"
import {SiPython,SiJavascript,SiC,SiHtml5,} from "react-icons/si"
import { FaJava } from "react-icons/fa6";
import { MdCss } from "react-icons/md";
import { PiFileSql } from "react-icons/pi";

function Home(){
    var nav=useNavigate()
    return(
        <div>
            <nav>
                <span>Programiz</span>
                <select name="" id="">
                    <option value="">Courses</option>
                    <option value="">python</option>
                    <option value="">javascript</option>
                    <option value="">c</option>
                    <option value="">c++</option>
                    <option value="">html</option>
                    <option value="">css</option>
                    <option value="">java</option>
                    <option value="">sql</option>
                </select><select name="" id="">
                    <option value="">Examples</option>
                    <option value="">python</option>
                    <option value="">javascript</option>
                    <option value="">c</option>
                    <option value="">c++</option>
                    <option value="">html</option>
                    <option value="">css</option>
                    <option value="">java</option>
                    <option value="">sql</option>
                </select>
                <input id='navinput' placeholder='Search programs & examples' type="text" />
                <button>home</button>
                <button>learn Courses</button>
                <button>profile</button>
            </nav>
           <h1>learn programs for free</h1>
           <div id='div12'>
            <div id='div1'>
           <button onClick={()=>{nav("/python")}}> <SiPython/> Python</button>
           <button onClick={()=>{nav("/javascript")}}><SiJavascript/>Javascript</button>
           <button onClick={()=>{nav("/c")}}><SiC/>C</button>
           <button onClick={()=>{nav("/c++")}}>C++</button>
           <button onClick={()=>{nav("/html")}}><SiHtml5/>HTML</button>
           </div>
           
           <div id="div2">
           <button onClick={()=>{nav("/css")}}><MdCss/>CSS</button>
           <button onClick={()=>{nav("/sql")}}><PiFileSql/>SQL</button>
           <button onClick={()=>{nav("/java")}}><FaJava/>Java</button>
           </div>
           <div id='car'></div>

           </div>
        </div>
    )
}
export default Home