import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { AirbnbCard } from "./components/AirbnbCard";
import LoadingSpinner from "./components/LoadingSpinner";
//import { useFetch } from "./custom-hooks/useFetch";
import Layout from "./Layout";

interface IState {
  _id: string;
  name: string;
  summary: string;
  beds: number;
  images: { picture_url: string };
  address: { government_area: string };
}

const App = () => {
  const [initialData, setInitialData] = useState<IState[]>(null);
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:3000/airbnb").then((res) => res.json())
  );

  //useFetch("http://localhost:3000/airbnb").then((elm) => setInitialData(elm));

  return (
    <Layout>
      {isLoading && <LoadingSpinner />}
      {data &&
        data.map((elm: IState) => (
          <AirbnbCard
            key={elm._id}
            name={elm.name}
            summary={elm.summary}
            beds={elm.beds}
            picture_url={elm.images.picture_url}
            government_area={elm.address.government_area}
          />
        ))}
    </Layout>
  );
};

export default App;
