import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
//don't delete line 5 if you don't want to deal with webpack. Even if you don't intend to use TailwindCSS.
import './styles/tailwind-style'

//if you create a new css file, always link it into this file, just like you see below. 
import './styles/my-style'


ReactDOM.render(<App />, document.querySelector("#root") )