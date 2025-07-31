import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"
import {SiPython,SiJavascript,SiC,SiHtml5,SiCplusplus} from "react-icons/si" // Added SiCplusplus
import { FaJava, FaUser, FaHome, FaGraduationCap } from "react-icons/fa"; // Added more icons
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
                </select>
                <select name="" id="">
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
                <button><FaHome /> home</button> {/* Added home icon */}
                <button><FaGraduationCap /> learn Courses</button> {/* Added graduation cap icon */}
                <button><FaUser /> profile</button>
            </nav>
           <h1>learn programs for free</h1>
           <div id='div12'>
            <div id='div1'>
           <button onClick={()=>{nav("/python")}}> <SiPython/> Python</button>
           <button onClick={()=>{nav("/javascript")}}><SiJavascript/>Javascript</button>
           <button onClick={()=>{nav("/c")}}><SiC/>C</button>
           <button onClick={()=>{nav("/c++")}}><SiCplusplus/>C++</button> {/* Better C++ icon */}
           <button onClick={()=>{nav("/html")}}><SiHtml5/>HTML</button>
           </div>
                       
           <div id="div2">
           <button onClick={()=>{nav("/css")}}><MdCss/>CSS</button>
           <button onClick={()=>{nav("/sql")}}><PiFileSql/>SQL</button>
           <button onClick={()=>{nav("/java")}}><FaJava/>Java</button>
           </div>
           
           {/* Updated information section */}
           <div id='car'>
               <div className="info-header">
                   <h2>Why Choose Programiz?</h2>
                   <p>Learn programming with our comprehensive tutorials, examples, and interactive coding environment</p>
               </div>
               
               <div className="features-grid">
                   <div className="feature-card">
                       <h3>📚 Comprehensive Tutorials</h3>
                       <p>Step-by-step guides covering programming fundamentals to advanced concepts</p>
                   </div>
                   <div className="feature-card">
                       <h3>💻 Interactive Examples</h3>
                       <p>Try out code examples directly in your browser with our online compiler</p>
                   </div>
                   <div className="feature-card">
                       <h3>🎯 Beginner Friendly</h3>
                       <p>Start from basics with clear explanations and practical examples</p>
                   </div>
                   <div className="feature-card">
                       <h3>🚀 Practice Exercises</h3>
                       <p>Reinforce your learning with hands-on coding challenges and projects</p>
                   </div>
               </div>
               
               <div className="stats-section">
                   <div className="stat-item">
                       <span className="stat-number">2M+</span>
                       <span className="stat-label">Students Learning</span>
                   </div>
                   <div className="stat-item">
                       <span className="stat-number">8+</span>
                       <span className="stat-label">Programming Languages</span>
                   </div>
                   <div className="stat-item">
                       <span className="stat-number">500+</span>
                       <span className="stat-label">Code Examples</span>
                   </div>
                   <div className="stat-item">
                       <span className="stat-number">100%</span>
                       <span className="stat-label">Free Content</span>
                   </div>
               </div>
           </div>
            </div>
        </div>
    )
}

export default Home