import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movies } from "./Movies";
import "./styles/tailwind-style";
//if you create a new css file, always link it into this file, just like you see below.

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Movies" element={<Movies />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector("#root")
);
