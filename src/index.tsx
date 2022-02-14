import ReactDOM from "react-dom"
import { App } from "./App"
import { HashRouter, Route, Routes } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  useQuery,
} from "react-query"
import { Movies } from "./Movies"
import "./styles/tailwind-style"
import { Listing } from "./components/Listing"

//if you create a new css file, always link it into this file, just like you see below.

interface IState {
  _id: string
  name: string
  summary: string
  description: string
  access: string
  minimum_night: number
  maximum_nights: number
  neighborhood_overwiew: string
  beds: number
  images: { picture_url: string }
  address: { government_area: string }
}

const key = "AirbnbData"
const url = "http://localhost:3000/airbnb"

const fetchData = async (key: string, url: string): Promise<IState[]> => {
  const response = await fetch(url)
  return response.json()
}

export const useAirbnbData = () =>
  useQuery<IState[], Error>([key, url], () => fetchData(key, url))

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
