import { useNavigate } from "react-router-dom";
import "./stylesheets/ResultCard.css";
import { GiConsoleController } from "react-icons/gi";
import { MdMonitor } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";

const ResultCard = ({ item, type }) => {
  let navigate = useNavigate();
  if (type === "player-card")
    return (
      <div
        className="card-container"
        onClick={() => navigate("/ps5-clone/PlayerPage")}
      >
        <img className="user-pic" src={item.pic} alt="user pic here" />
        <div className="user-card-body">
          <div className="card-name">{item.name}</div>
          <div className="card-type" style={{ float: "right" }}>
            {<BiUserPin />}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className="card-container"
        style={{ background: `url(${item.Poster})` }}
        onClick={() => {
          item.Type === "game"
            ? navigate("/ps5-clone/AppPage", { state: item.Title })
            : navigate("/ps5-clone/MediaPage", { state: item.Title });
        }}
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
