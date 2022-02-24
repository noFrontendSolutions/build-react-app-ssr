import { StaticRouter } from "react-router-dom/server"
import App from "../App"

const ServerRouter = ({
  url,
  initialState,
}: {
  url: string
  initialState: number
}) => {
  return (
    <StaticRouter location={url}>
      <App initialState={initialState} />
    </StaticRouter>
  )
}

export default ServerRouter
