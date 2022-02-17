import { Home } from "./components/Home"
import Layout from "./Layout"
import { Navigate, Route, Routes } from "react-router-dom"
import { Listing } from "./components/Listing"
import { QueryClient, QueryClientProvider, Hydrate } from "react-query"
import { AirbnbDocument } from "../src-backend/database/mongo-connect-airbnb"

const App = ({ state }: { state: AirbnbDocument[] }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={state}>
        <Layout>
          <Routes>
            <Route path="/airbnb/:borough" element={<Home state={state} />} />
            <Route path="/airbnb/listings/:id" element={<Listing />} />
            <Route path="/" element={<Navigate to="/airbnb/manhattan" />} />
          </Routes>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export { App }
