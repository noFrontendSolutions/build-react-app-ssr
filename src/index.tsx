import ReactDOM from "react-dom"
import App from "./App"
import './styles/tailwind-style'
//if you create a new css file, always link it into this file, just like you see below. 
import './styles/my-style'


ReactDOM.render(<App />, document.querySelector("#root") )