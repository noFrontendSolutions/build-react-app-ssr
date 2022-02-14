import { useAirbnbData } from "../index"

const Listing = () => {
  const { data, isLoading, isError } = useAirbnbData()

  console.log(data)

  return <div>Listing</div>
}

export { Listing }
