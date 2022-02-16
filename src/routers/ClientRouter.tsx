import { BrowserRouter } from "react-router-dom"
import { App, IState } from "../App"

export const ClientRouter = ({ state }: { state: IState[] }) => {
  return (
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  )
}

export default ClientRouter
