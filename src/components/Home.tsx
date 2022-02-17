import { useQuery } from "react-query"
import { Link, useLocation } from "react-router-dom"
import { AirbnbDocument } from "src-backend/database/mongo-connect-airbnb"
import { AirbnbCard } from "../components/AirbnbCard"
import ErrorComponent from "../components/ErrorComponent"
import LoadingSpinner from "../components/LoadingSpinner"

export const Home = ({ state }: { state: AirbnbDocument[] }) => {
  const location = useLocation()
  const url = location.pathname
  const { data, isLoading, error } = useQuery<AirbnbDocument[], Error>(
    url,
    () => fetchData(url, url),
    {
      initialData: state,
    }
  )
  //const { data, isLoading, error } = useAirbnbData()
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && (
        <ErrorComponent message={error.message} name={error.name} type={500} />
      )}
      {data &&
        data.map((elm: AirbnbDocument) => (
          <Link
            to={`/airbnb/listings/${elm._id}`}
            key={elm._id}
            className="listing-frame"
            state={elm}
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
    </>
  )
}

const fetchData = async (
  key: string,
  url: string
): Promise<AirbnbDocument[]> => {
  const response = await fetch(url)
  return response.json()
}
