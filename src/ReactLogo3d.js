import React from 'react'
import { Canvas } from '@react-three/fiber'
import Ellipse3d from "./components/Ellipse3d"

const ReactLogo3d = () => {
    return (
      <Canvas>
        <Ellipse3d eccentricity={[1, 1.2]} plane={"x"} />
        <Ellipse3d eccentricity={[1, 1.2]} plane={"y"} />
        <Ellipse3d eccentricity={[1, 1.2]} plane={"z"} />
      </Canvas>
    )
}

export default ReactLogo3d