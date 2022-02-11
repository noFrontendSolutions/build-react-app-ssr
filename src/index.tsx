import ReactDOM from "react-dom";
import {App} from "./App";
import { HashRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Movies } from "./Movies";
import "./styles/tailwind-style";
import Listing from "./components/Listing";
//if you create a new css file, always link it into this file, just like you see below.

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/airbnb/:id" element={<Listing />}/>
      </Routes>
    </HashRouter>
  </QueryClientProvider>,
  document.querySelector("#root")
);
