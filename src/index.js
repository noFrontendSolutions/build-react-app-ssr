import React from "react"
import ReactDOM from "react-dom"
//import ReactLogo3d from "./ReactLogo3d"
//import ReactLogo2d from "./ReactLogo2d"
import ClassicLandingPage from "./React-Classic"
//import { Canvas } from "@react-three/fiber"
import './styles/tailwind-style'
import './styles/my-style'

//ReactDOM.render(<Canvas>
//    <ReactLogo3d position={[0, 0, 0]} color={"#60DAF8"} scale={1.5}/>
//    <ReactLogo3d position={[2, 2, -4]} color={"red"} scale ={1.5}/>
//    </Canvas>, document.querySelector("#react-logo-3d"))



ReactDOM.render(<ClassicLandingPage />, document.querySelector("#root") )