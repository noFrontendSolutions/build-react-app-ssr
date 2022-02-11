//import { useState, useEffect } from "react";
//import { useFetch } from "./custom-hooks/useFetch";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AirbnbCard } from "./components/AirbnbCard";
import ErrorComponent from "./components/ErrorComponent";
import LoadingSpinner from "./components/LoadingSpinner";
import Layout from "./Layout";

interface IState {
  _id: string;
  name: string;
  summary: string;
  description: string;
  access: string;
  minimum_night: number;
  maximum_nights: number;
  neighborhood_overwiew: string;
  beds: number;
  images: { picture_url: string };
  address: { government_area: string };
}

// interface IState {
//   _id: string;
//   name: string;
//   summary: string;
//   beds: number;
//   images: { picture_url: string };
//   address: { government_area: string };
// }

const fetchData = async (key: string, url: string): Promise<IState[]> => {
  const response = await fetch(url);
  return response.json();
};

const App = () => {
  const key = "AirbnbData";
  const url = "http://localhost:3000/airbnb";
  const { isLoading, error, data } = useQuery<IState[], Error>([key, url], () =>
    fetchData(key, url)
  );
  
  //const [initialData, setInitialData] = useState<IState[]>(null);
  //useFetch("http://localhost:3000/airbnb").then((elm) => setInitialData(elm));

  return (
      <Layout>
        {isLoading && <LoadingSpinner />}
        {error && (
          <ErrorComponent
            message={error.message}
            name={error.name}
            type={500}
          />
        )}
        {data &&
          data.map((elm: IState) => (
            <Link to="/airbnb/:id" key={elm._id} className="listing-frame" state = {{id: elm._id}}>
              <AirbnbCard
                name={elm.name}
                summary={elm.summary}
                beds={elm.beds}
                picture_url={elm.images.picture_url}
                government_area={elm.address.government_area}
              />
            </Link>
          ))}
      </Layout>
  );
};

export { App };
