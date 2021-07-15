import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


//sphereGeometry args: [radius : Float, widthSegments : Integer, heightSegments : Integer]
//consult THREE.js documentaion for max and min values

const CircleShape = (props) => {
    const mesh = useRef()
    useFrame((state, delta) => {
        mesh.current.rotation.z += 0.01
    })
    return (
        <>
            <mesh ref={mesh}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial color={props.color} />
            </mesh>
        </>
    )
}

export default CircleShape