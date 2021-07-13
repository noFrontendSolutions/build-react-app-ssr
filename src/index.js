import React from "react"
import ReactDOM from "react-dom"
import { Canvas, useFrame } from '@react-three/fiber'
import Ellipse3d from "./App"
import './style.css';

ReactDOM.render(
    <Canvas>
        <Ellipse3d eccentricity={[1, 1]} plane = {"x"}/>
        <Ellipse3d eccentricity={[1, 1]} plane={"y"} />
        <Ellipse3d eccentricity={[1, 1]} plane={"z"} />
    </Canvas>, 
document.querySelector("#root"))
