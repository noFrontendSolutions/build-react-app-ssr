import * as THREE from 'three'

//I originally intended to use THREE.EllipseCurve to create the path instance for the tubeGeometry of the ellipse, but I had some issues with it. Luckily I found a different approach on stackoverflow. This is a generalisation of what I found to create the EllipsePath instance:

class EllipsePath extends THREE.Curve {
    constructor(xRadius, yRadius, plane) {
        super()
        this.xRadius = xRadius
        this.yRadius = yRadius
        this.plane = plane
    }

    getPoint(t = new THREE.Vector3()) {
        var radians = 2 * Math.PI * t
        if (this.plane === "x-y") return new THREE.Vector3(this.xRadius * Math.cos(radians),
            this.yRadius * Math.sin(radians), 0)
        if (this.plane === "x-z") return new THREE.Vector3(this.xRadius * Math.cos(radians), 0,
            this.yRadius * Math.sin(radians))
        if (this.plane === "y-z") return new THREE.Vector3(0, this.xRadius * Math.cos(radians),
            this.yRadius * Math.sin(radians))
    }
}

export default EllipsePath

//There is a slight issue with this approach, since this EllipsePath construcor gets called on every render. 
//It's the way it would work using plain THREE.js. But this approach doesn't use the full power of @react-thee/fiber. 
//I wonder if there is a way creating this ellipse path using only @react-three/fiber--a declaritive way to create the ellipse path. However, the documentation on this topic is a bit scarse.
