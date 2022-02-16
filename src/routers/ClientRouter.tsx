import { BrowserRouter } from "react-router-dom"
import { App, IState } from "../App"

export const ClientRouter = ({ state }: { state: any }) => {
  return (
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  )
}

export default ClientRouter
