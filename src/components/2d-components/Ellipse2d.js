import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import EllipsePath from '../ellipse-path'

//Here is where we use the created EllipsePath instance from the ellipse-path.js file: as the first argument of the tubeGeometry in the mesh.
//tubeGeometry args: [path : Curve, tubularSegments : Integer, radius : Float, radialSegments : Integer, closed : Boolean]
//consult the THREE.js documentation for max and min values

//You also notice that it's here where we put the ellipse into motion (useFrame, useRef). I.e. the 2d/3d React Logos consist of 4 individually moving parts. Maybe a better approach would be to create the Logo first and then put the whole thing into motion.  

const Ellipse2d = (props) => {
    const path = new EllipsePath(props.eccentricity[0], props.eccentricity[1], props.plane)
    const mesh = useRef()
    useFrame((state, delta) => {
        mesh.current.rotation.z += 0.01
    })
    return (
        <>
            <directionalLight />
            <mesh ref={mesh} rotation-z={props.zRotation}>
                <tubeGeometry args={[path, 80, 0.1, 30, true]} />
                <meshBasicMaterial color={props.color} />
            </mesh>
        </>
    )
}

export default Ellipse2d
