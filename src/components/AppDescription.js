import { AiFillTrophy } from "react-icons/ai";

const AppDescription = ({ item, tab }) => {
  if (item === undefined) return "";
  else if (tab === "Games")
    return (
      <div id="app-desc">
        <div className="app-logo">{item.name}</div>
        <div className="app-desc-container">
          <div>
            <button className="app-btn">Play</button>
            <button className="app-btn app-options">...</button>
          </div>
          <button className="app-btn app-progress">
            <AiFillTrophy />
            <div>
              Progress <div>0%</div>
            </div>
            <div>
              Earned <div>0/41</div>
            </div>
          </button>
        </div>
      </div>
    );
  else if (tab === "Media")
    return (
      <div id="app-desc">
        <div className="app-logo">{item.name}</div>
        <div className="app-desc-container">
          <button className="app-btn">Open</button>
        </div>
      </div>
    );
};

export default AppDescription;
