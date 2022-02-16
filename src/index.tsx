import ReactDOM from "react-dom"
import { IState } from "./App"
import { ClientRouter } from "./routers/ClientRouter"
import "./styles/tailwind-styles"
//if you create a new css file, always link it into this file, just like you see above.

declare global {
  interface Window {
    __INITIAL_STATE__: IState[]
  }
}

ReactDOM.hydrate(
  <ClientRouter state={window.__INITIAL_STATE__} />,
  document.querySelector("#root")
)
