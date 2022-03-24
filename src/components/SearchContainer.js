import ResultCard from "../components/ResultCard";
import { useState, useEffect } from "react";
import Axios from "axios";

const SearchContainer = ({ tab, search }) => {
  const [mainData, setMainData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    Axios.get(`https://randomuser.me/api/?results=25`).then((response) => {
      const usernames = response.data.results.map((u) => ({
        pic: u.picture.medium,
        name: u.login.username,
      }));
      setUserData(usernames);
    });
  }, []);
  useEffect(() => {
    let type = "";
    switch (tab) {
      case "Games":
        type = "game";
        break;
      case "Media":
        type = "";
        break;
      case "Players":
        type = "players";
        break;
      default:
        type = "";
    }
    Axios.get(
      `https://www.omdbapi.com/?apikey=45ad3714&s=${search}&type=${type}&page=${1}`
    ).then((response) => {
      // console.log(response.data.Search);
      setMainData(response.data.Search);
    });
    if (type === "players") {
      // console.log(search);
      const resultCards = document.querySelectorAll(".card-container");
      resultCards.forEach((card) => {
        if (card.innerText.toLowerCase().includes(search.toLowerCase()))
          card.classList.remove("hide");
        else card.classList.add("hide");
      });
    }
  }, [search, tab]);

  if (tab === "Players")
    return (
      <>
        <div id="search-sort">
          {userData === undefined ? "" : "Most relevent results"}
        </div>
        <div id="search-results-container">
          {userData !== undefined
            ? userData.map((item, index) => (
                <ResultCard type="player-card" key={index} item={item} />
              ))
            : "No Results Found"}
        </div>
      </>
    );
  else
    return (
      <>
        <div id="search-sort">
          {mainData === undefined ? "" : "Most relevent results"}
        </div>
        <div id="search-results-container">
          {mainData !== undefined
            ? mainData.map((item) => (
                <ResultCard type="def" key={item.imdbID} item={item} />
              ))
            : "No Results Found"}
        </div>
      </>
    );
};

export default SearchContainer;
