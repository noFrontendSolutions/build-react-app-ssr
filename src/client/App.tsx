import "react-hot-loader"
import { hot } from "react-hot-loader/root"
import { useState } from "react"
import reactLogo from "../../static-assets/react-logo.png"

interface ButtonProps {
  type: "increment" | "decrement"
  content: string
  count: number
  setCount: (count: number) => void
}

const App = ({ initialState = 0 }) => {
  const [count, setCount] = useState(initialState)

  return (
    <div className="relative p-8 h-screen flex flex-col items-center text-gray-100 bg-reactGray text-2xl">
      <img src={reactLogo} className="h-96 w-96 animate-spin-slow" />
      <span className="inline-flex mt-16 text-4xl">
        <h1>Welcome to React</h1>
        {initialState !== 0 && <p className="ml-2 text-reactBlue"> - SSR</p>}
      </span>
      {initialState === 0 && (
        <>
          <p className="mt-10">
            Edit <span className="text-reactBlue">src/client/App.tsx</span> and
            save to rerender. <br />
          </p>
          <p className="mt-4">AND maintain the current state...</p>
        </>
      )}
      {initialState !== 0 && (
        <p className="mt-10">
          Edit{" "}
          <span className="text-reactBlue">
            src/ssr/client/App.tsx<span className="text-gray-100"> or </span>
            src/ssr/server/dev-server.tsx
          </span>{" "}
          and hit refresh to rerender.
        </p>
      )}
      <div className="w-full sm:w-3/4 xl:w-1/2 2xl:w-1/3  absolute flex items-center justify-between bottom-36">
        <Button
          type="decrement"
          content="-"
          count={count}
          setCount={setCount}
        />
        <div className="flex flex-col items-start  pt-6">
          <p>
            Current State:{" "}
            <span className="ml-4 w-20 text-reactBlue">{count}</span>
          </p>
          <p>
            Initial State:
            <span className="ml-11 w-20 text-red-400">
              {initialState !== 0 ? initialState : "undefined"}
            </span>
          </p>
        </div>
        <Button
          type="increment"
          content="+"
          count={count}
          setCount={setCount}
        />
      </div>
      {initialState === 0 && (
        <>
          <p className="absolute bottom-14 text-sm text-reactBlue">
            Notice that your App has to be rendered on the server to receive an
            initial state.
          </p>
          <p className="absolute bottom-8 text-sm text-reactBlue">
            Try out SSR-development mode
            <span className="text-white"> (npm run dev-ssr). </span>
          </p>
        </>
      )}
    </div>
  )
}

const Button = ({ type, content, count, setCount }: ButtonProps) => {
  return (
    <div className="relative mx-8 mt-2 h-14 w-14 bg-reactBlue rounded-b-lg">
      <div className="absolute inset-0 bottom-1 bg-reactGray rounded-b-lg z-0"></div>
      <button
        onClick={() => setCount(type === "increment" ? count + 1 : count - 1)}
        className="absolute inset-0 bottom-2 text-3xl font-bold z-10 text-reactBlue hover:text-white"
      >
        {content}
      </button>
    </div>
  )
}

//Notice the "hot" export of the App component. The "hot"-function is provided by the webpack "react-hot-loader plugin". It guarantees hot-module replacement in dev-mode throughout your app.
export default hot(App)
