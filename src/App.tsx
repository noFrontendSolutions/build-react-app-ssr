import { Home } from "./components/Home"
import Layout from "./Layout"
import { Route, Routes } from "react-router-dom"
import { Movies } from "./Movies"
import { Listing } from "./components/Listing"
import { QueryClient, QueryClientProvider, Hydrate } from "react-query"
import { AirbnbDocument } from "../src_backend/database/mongo-connect-airbnb"

const App = ({ state }: { state: AirbnbDocument[] }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={state}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home state={state} />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/airbnb/:id" element={<Listing />} />
          </Routes>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export { App }
