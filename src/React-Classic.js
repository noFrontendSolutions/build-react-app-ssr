import React, { useState} from 'react'
import ReactLogo2d from "./ReactLogo2d"
import ReactLogo3d from "./ReactLogo3d"
import { Canvas } from "@react-three/fiber"



const ClassicLandingPage = () => {
    let [render, setRender] = useState("2d")
    if(render === "2d") {
        return (
            <div id = "react-gray" className = "h-full w-full p-24">
                <div className = "h-2/5 w-full">
                    <Canvas>
                        <ReactLogo2d />
                    </Canvas>
                </div>
                <h1 className = "mt-20 text-5xl font-bold text-center text-gray-100">Welcome to React</h1>
                <div className = "flex justify-center items-center mt-20">
                    <button onClick={() => setRender(render = "3d")} className= "relative font-black text-3xl text-gray-700">
                        <div className = "absolute inset-x-0 h-full -bottom-2 bg-gray-100 border border-red-300 bg-red-300 rounded-lg">
                        </div>
                        <div className="relative border border-gray-400 rounded-lg py-4 px-16 bg-gray-100 transition transform duration-500 hover:translate-y-2">3D
                        </div>
                     </button>
                </div>
            </div>
        )
    }
    return (
        <div id="background-gradient" className="h-full w-full p-16">
            <div className="h-2/3 w-full">
                <Canvas>
                    <pointLight position={[0, 0, 10]} />
                    <ReactLogo3d position={[0, 1, 0]} color={"#60DAF8"} scale={2.5}/>
                    <ReactLogo3d position={[-6, -8, -18]} color={"#C8362E"} scale={2} />
                    <ReactLogo3d position={[6, -4, -10]} color={"#C8362E"} scale={2} />
                    <ReactLogo3d position={[0, -16, -24]} color={"#C8362E"} scale={2} />
                </Canvas>
            </div>
            <div className= "flex flex-col items-center">
                <h2 className="mt-4 text-3xl font-md text-gray-300">
                Edit src/App.js and save to reload
                </h2>
                <a id="react-blue" className="mt-4 text-2xl font-md">
                Learn @react-three/fiber
                </a>
            </div>
        </div>
    )
}

export default ClassicLandingPage