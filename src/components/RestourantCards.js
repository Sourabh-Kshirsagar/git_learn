import "bootstrap/dist/css/bootstrap.css";
import { IMG_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestourantCards = ({
  name,
  id,
  cloudinaryImageId,
  locality,
  areaName,
  avgRatingString,
  // get the userPD from Body Component to show props Drilling
  userPD,
}) => {
  // user form context
  const { user } = useContext(UserContext);
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
            <p>{userPD.name}</p>
            {/* this is the user form context */}
            <p>
              {user.name} - {user.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestourantCards;
