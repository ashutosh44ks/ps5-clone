import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./stylesheets/ResultCard.css";
import { GiConsoleController } from "react-icons/gi";
import { MdMonitor } from "react-icons/md";

const ResultCard = ({ item }) => {
  let navigate = useNavigate();
  useEffect(() => {
    const card = document.querySelector(".card-container");
    card.addEventListener("click", () =>
      navigate("/ps5-clone/AppPage", item.Title)
    );
  });
  return (
    <div
      className="card-container"
      style={{ background: `url(${item.Poster})` }}
    >
      <div className="card-body">
        <div className="card-title">{item.Title}</div>
        <div className="card-info">
          <div className="card-price">{item.Year}</div>
          <div className="card-type">
            {item.Type === "game" ? <GiConsoleController /> : <MdMonitor />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
