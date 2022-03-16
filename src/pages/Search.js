import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./stylesheets/Search.css";
import ResultCard from "../components/ResultCard";
import { FaMicrophone } from "react-icons/fa";

function Search() {
  // let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searchTab, setSearchTab] = useState("All");
  useEffect(() => {
    const navBtns = document.querySelectorAll(".nav-item");
    const activeNavBtn = document.querySelector(".active");
    for (let i = 0; i < navBtns.length; i++) {
      navBtns[i].addEventListener("click", () => {
        activeNavBtn.classList.remove("active");
        navBtns[i].classList.add("active");
        setSearchTab(navBtns[i].innerHTML);
      });
    }
    getData(1);
    // const cards = document.querySelectorAll(".card-container");
    // for (let i = 0; i < cards.length; i++) {
    //   cards[i].addEventListener("click", () => {
    //     console.log("click recorded");
    //     navigate("/ps5-clone/AppPage", data[i].Title);
    //   });
    // }
  }, [search, searchTab]);
  const getData = (page) => {
    let type = "";
    switch (searchTab) {
      case "All":
        type = "";
        break;
      case "Games":
        type = "game";
        break;
      case "Media":
        type = "";
        break;
      default:
        type = "none";
    }
    Axios.get(
      `https://www.omdbapi.com/?apikey=45ad3714&s=${search}&type=${type}&page=${page}`
    ).then((response) => {
      console.log(response.data.Search);
      setData(response.data.Search);
    });
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
      <div id="search-sort">
        {data === undefined ? "" : "Most relevent results"}
      </div>
      <div id="search-results-container">
        {data !== undefined
          ? data.map((item) => <ResultCard key={item.imdbID} item={item} />)
          : "No Results Found"}
      </div>
    </div>
  );
}

export default Search;
