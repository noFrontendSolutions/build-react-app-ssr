import { useState } from "react"
import reactLogo from "../../static-assets/react-logo.png"

const App = ({ initialState = 0 }) => {
  const [count, setCount] = useState(initialState)

  return (
    <div className="relative p-8 h-screen flex flex-col items-center  text-gray-100 bg-reactGray text-2xl">
      <img src={reactLogo} className="h-96 w-96 animate-spin-slow" />
      <span className="inline-flex mt-16 text-4xl">
        <h1>Welcome to React -</h1>
        <p className="ml-2 text-reactBlue">SSR</p>
      </span>
      <p className="mt-10">
        Edit <span className="text-reactBlue">src/client/App.tsx</span> and save
        to rerender.
      </p>

      <p className="mt-4">
        Or try out SSR-development mode
        <span className="text-reactBlue"> (npm run dev-ssr) </span>first.
      </p>
      <div className="absolute flex items-center bottom-20 text-sm">
        <div className="relative mx-8 mt-2 h-14 w-14 bg-reactBlue rounded-b-lg">
          <button
            onClick={() => setCount(count - 1)}
            className="absolute inset-0 bottom-1 bg-reactGray rounded-b-lg text-3xl font-bold z-10 text-reactBlue"
          >
            -
          </button>
        </div>
        <div className="flex flex-col items-start pt-6">
          <p>
            Current Count: <span className="ml-4 text-reactBlue">{count}</span>
          </p>
          <p>
            Initial State:
            <span className="ml-4 text-red-400">
              {initialState !== 0 ? initialState : "undefined"}
            </span>
          </p>
        </div>
        <div className="relative mx-8 mt-2 h-14 w-14 bg-reactBlue rounded-b-lg">
          <div className="absolute inset-0 bottom-1 bg-reactGray rounded-b-lg z-0 hover:botton-0"></div>
          <button
            onClick={() => setCount(count + 1)}
            className="absolute inset-0 bottom-2 text-3xl font-bold z-10 text-reactBlue"
          >
            +
          </button>
        </div>
      </div>
      <p className="absolute bottom-10 text-sm text-reactBlue">
        {initialState !== 0
          ? ""
          : "Notice that your App has to be rendered on the server to receive an initial state."}
      </p>
    </div>
  )
}

export default App
