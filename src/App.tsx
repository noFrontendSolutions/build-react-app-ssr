import React from "react"
import myImage from "./assets/tailwind.png"

const App = () => {
    return (
      <div className="h-screen bg-gray-200 p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Greetings from React and TailwindCSS!
        </h1>
        <img src={myImage} className="object-scale-down"></img>
      </div>
    );
}
export default App