import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./stylesheets/AppPage.css";

const AppPage = () => {
  const { state } = useLocation();
  console.log(state);
  const [bgUrl, setBgUrl] = useState(
    "https://i.ytimg.com/vi/yTXZEnGrZpw/maxresdefault.jpg"
  );
  useEffect(() => {
    //https://rapidapi.com/contextualwebsearch/api/web-search/
    const options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
      params: {
        q: `${state} game wallpaper`,
        pageNumber: "1",
        pageSize: "1",
        autoCorrect: "true",
      },
      headers: {
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key": "ccea0af5f9msh9ee007c92712d24p129e6bjsnf00c25d283ed",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data.value[0].url);
        setBgUrl(response.data.value[0].url);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
      <div className="bg" style={{ background: `url(${bgUrl})` }}></div>
      <div id="app-page">
        <header>{}</header>
        <div id="app-page-body">Hello</div>
      </div>
    </>
  );
};

export default AppPage;
