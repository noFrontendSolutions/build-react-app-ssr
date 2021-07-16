import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

//sphereGeometry args: [radius : Float, widthSegments : Integer, heightSegments : Integer]
//consult THREE.js documentaion for max and min values

const Sphere = (props) => {
    const mesh = useRef()
    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
        mesh.current.rotation.z += 0.01
    })

    return (
        <>
            <mesh ref={mesh} position={[props.position[0], props.position[1], props.position[2]]}>
                <sphereGeometry args = {[props.scale / 4, 32, 32]} /> 
                <meshPhysicalMaterial color={props.color} />
            </mesh>
        </>
    )
}

export default Sphere