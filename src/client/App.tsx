import { hot } from "react-hot-loader/root"
import { useState, useEffect } from "react"
import reactLogo from "../../static-assets/react-logo.png"

interface ButtonProps {
  type: "increment" | "decrement"
  content: string
  count: number
  setCount: (count: number) => void
}

const App = ({ initialState = 0 }) => {
  const [count, setCount] = useState(initialState)
  const [initialFetchedState, setInitialFetchedState] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!initialState) {
      ;(async () => {
        try {
          setIsLoading(true)
          const data = await fetchInitialState()
          setInitialFetchedState(data.randomNumber)
          setCount(data.randomNumber)
          setIsLoading(false)
        } catch (error) {
          console.log(error)
          setIsLoading(false)
        }
      })()
    }
  }, [])

  return (
    <div className="relative p-8 h-screen flex flex-col items-center text-gray-100 bg-reactGray text-2xl">
      {isLoading && <LoadingSpinner />}
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
          <p className="mt-4">AND maintain the current state.</p>
        </>
      )}
      {initialState !== 0 && (
        <p className="mt-10">
          Edit{" "}
          <span className="text-reactBlue">
            src/client/App.tsx<span className="text-gray-100"> or </span>
            src/ssr/server/server.tsx
          </span>{" "}
          and hit refresh to rerender.
        </p>
      )}
      <div className="w-full sm:w-3/4 xl:w-1/2 2xl:w-1/3  absolute flex items-center justify-between bottom-36">
        <FancyButton
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
              {initialState !== 0
                ? initialState
                : initialState === 0 && initialFetchedState !== 0
                ? initialFetchedState
                : "undefined"}
            </span>
          </p>
        </div>
        <FancyButton
          type="increment"
          content="+"
          count={count}
          setCount={setCount}
        />
      </div>
    </div>
  )
}

const fetchInitialState = async () => {
  const response = await fetch("http://localhost:8081/heavy-load")
  const data: { randomNumber: number } = await response.json()
  return data
}

const FancyButton = ({ type, content, count, setCount }: ButtonProps) => {
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

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-0 bg-opacity-0">
      <div className="z-10 h-36 w-36 border-4 border-reactBlue border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

//Notice the "hot" export of the App component. The "hot"-function is provided by the webpack "react-hot-loader plugin". It guarantees hot-module replacement in dev-mode throughout your app.

export default hot(App)
