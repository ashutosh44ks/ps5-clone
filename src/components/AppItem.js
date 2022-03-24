import { useNavigate } from "react-router-dom";
import "./stylesheets/AppMenu.css";

const AppItem = ({ item }) => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        item.type === "sys" && navigate(`/ps5-clone/${item.name}`);
      }}
    >
      <div className="app-item bright-text">{item.icon}</div>
      <div className="app-item-hover dull-text">{item.name}</div>
    </div>
  );
};

export default AppItem;
