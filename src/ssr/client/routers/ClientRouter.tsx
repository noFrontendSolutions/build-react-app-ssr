import { BrowserRouter } from "react-router-dom"
import App from "../../../client/App"

const ClientRouter = ({ initialState }: { initialState: number }) => {
  return (
    <BrowserRouter>
      <App initialState={initialState} />
    </BrowserRouter>
  )
}

export default ClientRouter
