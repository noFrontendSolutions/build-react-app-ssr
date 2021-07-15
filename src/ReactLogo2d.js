import React from 'react'
import { Canvas } from '@react-three/fiber'
import Ellipse2d from "./components/2d/Ellipse2d"
import CircleShape from "./components/2d/Circle-Shape"

const ReactLogo2d = () => {
    return (
        <Canvas>
            <Ellipse2d zRotation={Math.PI / 5.5} eccentricity={[1, 2.9]} plane={"x-y"} color={"#60DAF8"}/>
            <Ellipse2d zRotation={-Math.PI / 5.5} eccentricity={[1, 2.9]} plane={"x-y"} color={"#60DAF8"}/>
            <Ellipse2d eccentricity={[2.9, 1]} plane={"x-y"} color={"#60DAF8"}/>
            <CircleShape color={"#60DAF8"}/>
        </Canvas>
    )
}

export default ReactLogo2d

//Here the zRotation prop doesn't refer to dynamic rotation, but the initial values of the ellipse mesh (x,y,z-rotation). It just tilts the x-y axes of the corresponding mesh to 45° (PI/4). 