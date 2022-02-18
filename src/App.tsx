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
            <Route path="/airbnb/listings/:id" element={<Listing />} />
            <Route path="/airbnb/manhattan" element={<Home state={state} />} />
            <Route path="/airbnb/queens" element={<Home state={state} />} />
            <Route
              path="/airbnb/staten-island"
              element={<Home state={state} />}
            />
            <Route path="/airbnb/the-bronx" element={<Home state={state} />} />
            <Route path="/airbnb/brooklyn" element={<Home state={state} />} />
            <Route path="/" element={<Navigate to="/airbnb/manhattan" />} />
          </Routes>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export { App }
