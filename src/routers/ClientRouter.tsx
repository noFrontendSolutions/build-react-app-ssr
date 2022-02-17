import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { AirbnbDocument } from "src-backend/database/mongo-connect-airbnb"
import { App } from "../App"

export const ClientRouter = ({ state }: { state: AirbnbDocument[] }) => {
  return (
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  )
}
