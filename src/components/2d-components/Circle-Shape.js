import React, { useRef } from 'react'

//sphereGeometry args: [radius : Float, widthSegments : Integer, heightSegments : Integer]
//consult THREE.js documentaion for max and min values

const CircleShape = (props) => {
    const mesh = useRef()
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