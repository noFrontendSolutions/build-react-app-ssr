import { useLocation } from "react-router-dom"
import { AirbnbDocument } from "src_backend/database/mongo-connect-airbnb"

const Listing = () => {
  const location = useLocation()
  const state = location.state as AirbnbDocument
  return (
    <>
      <img src={state.images.picture_url} />
      <p>{state.name}</p>
    </>
  )
}

export { Listing }
