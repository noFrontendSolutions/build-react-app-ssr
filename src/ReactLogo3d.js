import React from 'react'
import { Canvas } from '@react-three/fiber'
import Ellipse3d from "./components/3d/Ellipse3d"
import Sphere from "./components/2d/Sphere"

const ReactLogo3d = () => {
    return (
      <Canvas>
        <Ellipse3d eccentricity={[1, 1.2]} plane={"x-y"} color={"#60DAF8"} />
        <Ellipse3d eccentricity={[1, 1.2]} plane={"x-z"} color={"#60DAF8"}/>
        <Ellipse3d eccentricity={[1, 1.2]} plane={"y-z"} color={"#60DAF8"}/>
        <Sphere color={"#60DAF8"}/>
      </Canvas>
    )
}

export default ReactLogo3d