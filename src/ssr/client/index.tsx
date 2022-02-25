import ReactDOM from "react-dom"
import ClientRouter from "./routers/ClientRouter"
import "./styles/tailwind-styles"
//if you create a new css file, always link it into this file, just like you see above.

declare global {
  interface Window {
    __INITIAL_STATE__: number
  }
}

ReactDOM.hydrate(
  <ClientRouter initialState={window.__INITIAL_STATE__} />,
  document.querySelector("#root")
)
