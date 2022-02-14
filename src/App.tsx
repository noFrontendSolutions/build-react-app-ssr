import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { useAirbnbData } from "."
import { AirbnbCard } from "./components/AirbnbCard"
import ErrorComponent from "./components/ErrorComponent"
import LoadingSpinner from "./components/LoadingSpinner"
import Layout from "./Layout"

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
  const { data, isLoading, error } = useAirbnbData()
  return (
    <Layout>
      {isLoading && <LoadingSpinner />}
      {error && (
        <ErrorComponent message={error.message} name={error.name} type={500} />
      )}
      {data &&
        data.map((elm: IState) => (
          <Link
            to={`/airbnb/${elm._id}`}
            key={elm._id}
            className="listing-frame"
          >
            <AirbnbCard
              name={elm.name}
              summary={elm.summary}
              beds={elm.beds}
              picture_url={elm.images.picture_url}
              government_area={elm.address.government_area}
            />
          </Link>
        ))}
    </Layout>
  )
}

export { App, IState }
