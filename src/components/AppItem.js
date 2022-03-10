import "./stylesheets/AppMenu.css";

const AppItem = ({ item }) => {
  return (
    <div>
      <div className="app-item bright-text">{item.icon}</div>
      <div className="app-item-hover center-text dull-text">{item.name}</div>
    </div>
  );
};

export default AppItem;
