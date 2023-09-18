import "bootstrap/dist/css/bootstrap.css";

const RestourantCards = ({ url, title, id }) => {
  return (
    <>
      <div className="row col-sm-12 col-lg-3 col-md-3 mb-3">
        <div className="card card-style">
          <img className="card-img-top mt-3" src={url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{id}</h5>
            <p className="card-text">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestourantCards;
