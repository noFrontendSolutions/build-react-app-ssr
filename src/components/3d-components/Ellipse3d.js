import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import EllipsePath from '../ellipse-path'

//Here is where we use the created EllipsePath instance from the ellipse-path.js file: the first argument of the tubeGeometry in the mesh.
//tubeGeometry args: [path : Curve, tubularSegments : Integer, radius : Float, radialSegments : Integer, closed : Boolean]
//consult the THREE.js documentation for max and min values
//You also notice that it's here where we put the ellipse into motion (useFrame, useRef). I.e. the 2d/3d React Logos consist of 4 individually moving parts. Maybe a better approach would be to create the Logo first and then put the whole thing into motion.  

//The zRotation prop doesn't refer to dynamic rotation, but the initial values of the ellipse mesh (x,y,z-rotation). It just tilts the respective axis of the corresponding mesh to the passed in angle.. 

const Ellipse3d = (props) => {
    const path = new EllipsePath(props.eccentricity[0], props.eccentricity[1], props.plane)
    const xDynamic = props.rotationSpeed[0]
    const yDynamic = props.rotationSpeed[1]
    const zDynamic = props.rotationSpeed[2]
    const mesh = useRef()

    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.01 
        mesh.current.rotation.y += 0.01
        mesh.current.rotation.z += 0.01
    })
    return (
        <>
            <mesh ref={mesh} scale={props.scale} rotation-z={props.zRotation} position={[props.position[0], props.position[1], props.position[2]]}>
                <tubeGeometry args={[path, 60, 0.08, 20, true]} />
                <meshPhysicalMaterial color={props.color} />
            </mesh>
        </>
    )
}

export default Ellipse3d

