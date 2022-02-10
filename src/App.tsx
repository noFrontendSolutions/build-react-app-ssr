import { useState, useEffect } from "react";
import { AirbnbContent } from "./components/Airbnb-Content";
import Layout from "./Layout";


interface Card {
  name: string
  summary: string
  beds: number
  imageUrl: string
}

const App = () => {
  const [initialData, setInitialData] = useState(null)

  useEffect(()=> {
      fetch("http://localhost:3000/airbnb")
      .then(res => res.json())
      .then(data => {
        setInitialData([...data])
      })
      //const initialLoad = JSON.parse(JSON.stringify(raw))
      //setInitialData([...raw]) 
  }, [])
  //console.log(initialData)
  //setTimeout(() => console.log(initialData[0].address), 1000)
  
  
  //console.log(Array.from(initialData))
  return (
    <Layout>
      {initialData && <AirbnbContent initialData = {initialData}/>}
    </Layout>
  );
};

export default App;
