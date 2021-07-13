//import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
// @ts-ignore

//import myImage from "./assets/tailwind.png"

// @ts-ignore
import * as THREE from 'three'

const Ellipse3d = (props) => {
  
  class Ellipse extends THREE.Curve {

    /**
     * @param {any} xRadius
     * @param {any} yRadius
     */
    constructor(xRadius, yRadius) {

      super();

      // add radius as a property
      this.xRadius = xRadius;
      this.yRadius = yRadius;


    }

    getPoint(t, optionalTarget = new THREE.Vector3()) {

      const point = optionalTarget;
      var radians = 2 * Math.PI * t;

      return new THREE.Vector3(this.xRadius * Math.cos(radians),
        this.yRadius * Math.sin(radians),
        0);


    }
    
  }
  const path = new Ellipse(props.axis[0], props.axis[1])
  
    return (
      
        <mesh rotation-z={props.zRotation}>
          <tubeGeometry  args={[path, 100, 0.1, 20, false]}/>
          <meshBasicMaterial color="cyan" />
        </mesh>
      
    );
}

export default Ellipse3d