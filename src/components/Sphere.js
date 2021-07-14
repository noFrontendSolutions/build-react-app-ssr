import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Sphere = (props) => {
    const mesh = useRef()
    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
        mesh.current.rotation.z += 0.01
    })

    return (
        <>
            <ambientLight intensity={0.1} />
            <directionalLight />
            <mesh ref = {mesh}>
                <sphereGeometry args = {[0.3, 32, 32]} />
                <meshPhysicalMaterial color="#60DAF8" />
            </mesh>
        </>
    )
}

export default Sphere