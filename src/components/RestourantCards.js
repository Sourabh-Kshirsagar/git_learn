import "bootstrap/dist/css/bootstrap.css";
import { IMG_URL } from "../constants";

const RestourantCards = ({
  name,
  id,
  cloudinaryImageId,
  locality,
  areaName,
  avgRatingString,
}) => {
  return (
    <>
      <div className="row col-sm-12 col-lg-6 col-md-6 mb-3">
        <div className="card card-style">
          <img
            className="card-img-top mt-3"
            src={IMG_URL + cloudinaryImageId}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <b>Restaurant ID - </b>
              {id}
            </p>
            <p className="card-title">
              {" "}
              <b>Restaurant Name - </b>
              {name}
            </p>
            <p className="card-text">
              {" "}
              <b>Restaurant Address - </b>
              {locality + " - " + areaName}
            </p>
            <p className="card-text">
              {" "}
              <b>Restaurant Ratings - </b>
              {avgRatingString} Stars
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestourantCards;
