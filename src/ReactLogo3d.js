import React from 'react'
import { Canvas } from '@react-three/fiber'
import Ellipse3d from "./components/Ellipse3d"
import Sphere from "./components/Sphere"

const ReactLogo3d = () => {
    return (
      <Canvas>
        <Ellipse3d eccentricity={[1, 1.2]} plane={"x-y"} />
        <Ellipse3d eccentricity={[1, 1.2]} plane={"x-z"} />
        <Ellipse3d eccentricity={[1, 1.2]} plane={"y-z"} />
        <Sphere/>
      </Canvas>
    )
}

export default ReactLogo3d