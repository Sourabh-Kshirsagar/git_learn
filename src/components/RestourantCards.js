const RestourantCards = ({ imageUrl, title, description, rating }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{rating} Stars</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestourantCards;
