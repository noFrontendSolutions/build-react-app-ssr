import React, { useState} from 'react'
import ReactLogo2d from "./components/ReactLogo2d"
import ReactLogo3d from "./components/ReactLogo3d"
import { Canvas } from "@react-three/fiber"

const App = () => {
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
                    <button onClick={() => setRender(render = "3d")} className= "fancy-btn">
                        <div className = "fancy-btn-shadow">
                        </div>
                        <div className="fancy-btn-text">3D
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
                    <ReactLogo3d position={[0, 1, 0]} color={"#60DAF8"} scale={2.5} rotationSpeed = {[1, 1, 1]} />
                    <ReactLogo3d position={[-6, -8, -18]} color={"#C8362E"} scale={2} rotationSpeed={[1, 1, 0]} />
                    <ReactLogo3d position={[6, -4, -10]} color={"#C8362E"} scale={2} rotationSpeed={[1, 0, 1]}/>
                    <ReactLogo3d position={[0, -16, -24]} color={"#60DAF8"} scale={3} rotationSpeed={[0, 1, 1]} />
                </Canvas>
            </div>
            <div className= "pt-10 flex flex-col items-center">
                <h2 className="text-3xl font-md text-gray-300">
                Edit src/App.js and save to reload
                </h2>
                <a id="react-blue" href="https://github.com/pmndrs/react-three-fiber" target="_blank" className="mt-4 text-2xl font-md">
                Learn @react-three/fiber
                </a>
            </div>
        </div>
    )
}

export default App