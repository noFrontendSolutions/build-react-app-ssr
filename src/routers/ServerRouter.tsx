import { App } from "../App"
import { StaticRouter } from "react-router-dom/server"
import { AirbnbDocument } from "src-backend/database/mongo-connect-airbnb"

const ServerRouter = ({
  url,
  state,
}: {
  url: string
  state: AirbnbDocument[]
}) => {
  return (
    <StaticRouter location={url}>
      <App state={state} />
    </StaticRouter>
  )
}

export default ServerRouter
