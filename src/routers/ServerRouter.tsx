import { App, IState } from "../App"
import { StaticRouter } from "react-router-dom/server"

const ServerRouter = ({ url, state }: { url: string; state: IState[] }) => {
  return (
    <StaticRouter location={url}>
      <App state={state} />
    </StaticRouter>
  )
}

export default ServerRouter
