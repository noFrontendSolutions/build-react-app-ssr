import React, { useRef } from 'react'

//sphereGeometry args: [radius : Float, widthSegments : Integer, heightSegments : Integer]
//consult THREE.js documentaion for max and min values

const Sphere = (props) => {
    const mesh = useRef()
    return (
        <>
            <mesh ref={mesh} position={[props.position[0], props.position[1], props.position[2]]}>
                <sphereGeometry args = {[props.scale / 5, 32, 32]} /> 
                <meshPhysicalMaterial color={props.color} />
            </mesh>
        </>
    )
}

export default Sphere