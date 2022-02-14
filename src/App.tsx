import Home from "./components/Home"
import Layout from "./Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Movies } from "./Movies"
import { Listing } from "./components/Listing"

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

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/airbnb/:id" element={<Listing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { App, IState }
