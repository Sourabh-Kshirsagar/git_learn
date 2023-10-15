import "bootstrap/dist/css/bootstrap.css";
import { IMG_URL } from "../constants";

const RestourantCards = ({
  name,
  id,
  cloudinaryImageId,
  locality,
  areaName,
  avgRatingString,
  user,
}) => {
  return (
    <>
      <div className>
        <div className="card card-style">
          <img
            className="card-img-top img-height"
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

            {/* props drilling example */}
            <p>{user.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestourantCards;
