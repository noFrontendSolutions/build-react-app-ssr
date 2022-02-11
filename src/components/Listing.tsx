import { useLocation } from "react-router-dom"

const Listing = () => {
    const location = useLocation()
    console.log(location.state)
    
  return (
    <div>Listing</div>
  )
}

export default Listing