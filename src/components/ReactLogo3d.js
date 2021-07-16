import React from "react"
import Ellipse3d from "./3d-components/Ellipse3d"
import Sphere from "./3d-components/Sphere"

const ReactLogo3d = (props) => {
    return (
      <>
        <Ellipse3d  eccentricity={[1, 1.2]} plane={"x-y"} color={props.color} position={props.position} rotationSpeed ={props.rotationSpeed} />
        <Ellipse3d eccentricity={[1, 1.2]} plane={"x-z"} color={props.color} position={props.position} rotationSpeed={props.rotationSpeed}/>
        <Ellipse3d eccentricity={[1, 1.2]} plane={"y-z"} color={props.color} position={props.position} rotationSpeed={props.rotationSpeed}/>
        <Sphere color={props.color} position={props.position} scale={props.scale}/>
     </>
    )
}

export default ReactLogo3d