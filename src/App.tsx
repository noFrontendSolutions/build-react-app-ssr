import { Home } from "./components/Home"
import Layout from "./Layout"
import { Route, Routes } from "react-router-dom"
import { Movies } from "./Movies"
import { Listing } from "./components/Listing"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"

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
const queryClient = new QueryClient()

const App = ({ state }: { state: IState[] }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/airbnb/:id" element={<Listing />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  )
}

export { App, IState }
