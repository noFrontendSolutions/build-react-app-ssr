import ReactDOM from "react-dom"
import { App } from "./App"
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  useQuery,
} from "react-query"
import "./styles/tailwind-style"

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
      <App />
    </Hydrate>
  </QueryClientProvider>,
  document.querySelector("#root")
)
