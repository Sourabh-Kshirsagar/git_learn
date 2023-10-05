import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import RestourantCards from "./RestourantCards";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import PageDetails from "./PageDetails";
import { filterData } from "../utils/helper";

const BodyComponent = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestroData, setAllRestroData] = useState([]);
  const [filteredRestroData, setFilteredRestroData] = useState([]);

  useEffect(() => {
    getRestro();
  }, []);
  async function getRestro() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7616375&lng=75.8893399&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const restaurantsData =
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestroData(restaurantsData);
    setFilteredRestroData(restaurantsData);
  }

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <input
            className="mr-3 w-25 form-control mt-5"
            type="text"
            placeholder="Search Box"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button
            className="btn w-25 mt-5 btn-primary ml-2"
            type="button"
            onClick={() => {
              const filteredRestro = filterData(searchTxt, allRestroData);
              setFilteredRestroData(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="display-setting container Align_Data">
        {filteredRestroData.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestroData.map((restaurant) => (
            <Link
              to={"/PageDetails/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestourantCards {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default BodyComponent;
