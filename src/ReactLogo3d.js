import React from "react"
import Ellipse3d from "./components/3d/Ellipse3d"
import Sphere from "./components/3d/Sphere"

const ReactLogo3d = (props) => {
    return (
      <>
        <Ellipse3d  eccentricity={[1, 1.2]} plane={"x-y"} color={props.color} position={props.position}/>
        <Ellipse3d eccentricity={[1, 1.2]} plane={"x-z"} color={props.color} position={props.position}/>
        <Ellipse3d eccentricity={[1, 1.2]} plane={"y-z"} color={props.color} position={props.position}/>
        <Sphere color={props.color} position={props.position} scale={props.scale}/>
     </>
    )
}

export default ReactLogo3d