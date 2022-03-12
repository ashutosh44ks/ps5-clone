import "./stylesheets/ResultCard.css";

const ResultCard = ({ title="Title", price="Free", type="G"}) => {
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="card-title">
          {title}
        </div>
        <div className="card-info">
          <div className="card-price">
            {price}
          </div>
          <div className="card-type">
            {type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
