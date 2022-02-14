import ReactDOM from "react-dom"
import { App } from "./App"
import { HashRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider, Hydrate } from "react-query"
import { Movies } from "./Movies"
import "./styles/tailwind-style"
import Listing from "./components/Listing"
//if you create a new css file, always link it into this file, just like you see below.

declare global {
  interface Window {
    __INITIAL_STATE__: any
  }
}

const dehydratedState = window.__INITIAL_STATE__
const queryClient = new QueryClient()

ReactDOM.hydrate(
  <QueryClientProvider client={queryClient}>
    <Hydrate state={dehydratedState}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/airbnb/:id" element={<Listing />} />
        </Routes>
      </HashRouter>
    </Hydrate>
  </QueryClientProvider>,
  document.querySelector("#root")
)
