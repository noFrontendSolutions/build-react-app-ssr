import { useLocation } from "react-router-dom"
import { IState } from "../App"

const Listing = () => {
  const location = useLocation()
  const data = location.state as IState
  console.log(data)

  return <div>Listing</div>
}

export default Listing
