import { useState, useEffect } from "react";
import "./stylesheets/Search.css";
import { FaMicrophone } from "react-icons/fa";
import SearchContainer from "../components/SearchContainer";

function Search() {
  const [search, setSearch] = useState("");
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
  }, [search, searchTab]);
  
  

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
      <SearchContainer tab={searchTab} search={search}/>
    </div>
  );
}

export default Search;
