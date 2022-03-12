import { useState, useEffect } from "react";
import Axios from "axios";
import "./stylesheets/Search.css";
import ResultCard from "../components/ResultCard";
import { FaMicrophone } from "react-icons/fa";

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
        <li className="nav-item nav-item-search active">All</li>
        <li className="nav-item nav-item-search">Games</li>
        <li className="nav-item nav-item-search">Media</li>
        <li className="nav-item nav-item-search">Players</li>
      </ul>
      <div id="search-bar">
        <input
          placeholder="Search for games, movies, TV shows, players, and other apps"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="microphone-btn">
          <FaMicrophone />
        </button>
      </div>
      <div id="search-sort">Trending</div>
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
