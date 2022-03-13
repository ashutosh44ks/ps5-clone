import "./stylesheets/ResultCard.css";

const ResultCard = ({ item }) => {
  return (
    <div className="card-container" style={{background:`url(${item.Poster})`}}>
      <div className="card-body">
        <div className="card-title">
          {item.Title}
        </div>
        <div className="card-info">
          <div className="card-price">
            {item.Year}
          </div>
          <div className="card-type">
            {item.Type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
