import { useState, useEffect } from "react";
import Axios from "axios";
import "./stylesheets/Search.css";
import ResultCard from "../components/ResultCard";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [search]);
  const getData = () => {
    Axios.get(`https://www.omdbapi.com/?apikey=45ad3714&s=${search}`).then(
      (response) => {
        console.log(response.data.Search);
        setData(response.data.Search);
      }
    );
  };
  return (
    <div id="search-page">
      <ul id="search-nav">
        <li>All</li>
        <li>Games</li>
        <li>Media</li>
        <li>Players</li>
      </ul>
      <div id="search-bar">
        <input
          placeholder="Search For games, movies, TV shows, players, and other apps"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Microphone Icon</button>
      </div>
      <div id="search-results-container">
        <ResultCard />
      </div>
    </div>
    // <div className="Search">
    //   Hello
    //   {data
    //       .map((item) => (
    //         <div key={item.imdbID}>{item.Title}</div>
    //       ))}
    // </div>
  );
}

export default Search;
