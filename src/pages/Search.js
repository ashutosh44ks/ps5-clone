import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [search]);
  const getData = () => {
    Axios.get(`https://www.omdbapi.com/?apikey=45ad3714&s=${search}`).then((response) => {
      console.log(response.data.Search);
      setData(response.data.Search);
    });
  };
  return (
    <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
    // <div className="App">
    //   Hello
    //   {data
    //       .map((item) => (
    //         <div key={item.imdbID}>{item.Title}</div>
    //       ))}
    // </div>
  );
}

export default App;
