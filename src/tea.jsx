import React from 'react'
import "./python.css"

function Tea(){
    return (
        <div className="python-container">
            <h1>Java</h1>
            
            <p className="python-description">
                java is a popular, high-level, interpreted programming language known for its simplicity and readability.
                It is widely used in web development, data analysis, artificial intelligence, machine learning, and automation.
            </p>

            <div className="python-buttons">
                <button onClick={() => alert("Start Learning Python!")}>Learn java</button>
                <button onClick={() => alert("Run your Python code here!")}>Run Code</button>
                <button onClick={() => alert("Explore Python examples!")}>Examples</button>
            </div>

            <div className="python-features">
                <h2>Key Features of java</h2>
                <ul>
                    <li>Simple and easy to learn syntax</li>
                    <li>Interpreted language</li>
                    <li>Supports object-oriented and functional programming</li>
                    <li>Extensive standard library</li>
                    <li>Portable and cross-platform</li>
                    <li>Ideal for automation and scripting</li>
                    <li>Strong community support</li>
                </ul>
            </div>
        </div>
    );
}
export default Tea