import React from "react";
import ReactDOM from "react-dom";





import './index.css'
import Testing from "./Testing";
function App(){
   return (
      <div className="App">
         <div className="container">
            <Testing/>
         </div>
      </div>
   )
}
ReactDOM.render(
   <App/>
,document.getElementById('root'));