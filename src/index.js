import React from "react"
import ReactDOM from "react-dom"
import { Canvas, useFrame } from '@react-three/fiber'
import Ellipse3d from "./App"
import './style.css';

ReactDOM.render(
    <Canvas>
        <Ellipse3d axis={[1, 3]} zRotation = {Math.PI / 4} />
        <Ellipse3d axis={[3, 1]} zRotation = {Math.PI / 4} />
    </Canvas>, 
document.querySelector("#root"))
