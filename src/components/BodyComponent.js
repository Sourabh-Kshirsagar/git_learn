import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import RestourantCards from "./RestourantCards";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import PageDetails from "./PageDetails";

const BodyComponent = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestroData, setAllRestroData] = useState([]);
  const [filteredRestroData, setFilteredRestroData] = useState([]);

  useEffect(() => {
    getRestro();
  }, []);
  // use the useEffect to call the api

  async function getRestro() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7616375&lng=75.8893399&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const restaurantsData =
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // Here we go to the restaurant after that we will fetch the information from restaurantsData variable
    setAllRestroData(restaurantsData);
    setFilteredRestroData(restaurantsData);
    // Here we set the data to the useState variable
    // console.log(restaurantsData[19].info.name);
  }

  // filterFunction to filter the searched result and it will return the filtered result in the variable filteredData
  function filterData(searchText, allRestroData) {
    const filteredData = allRestroData.filter((rest) =>
      rest?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filteredData;
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
              // Here we call the filterData function with two argu searchTxt and allRestroData which giuves the searched value
              // which is stored in variable filteredRestro and then set to filteredRestroData stateVariable
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
          // get the value from filteredRestroData to restaurant and map the data to the UI
          filteredRestroData.map((restaurant) => (
            // Now instead of direct render the component we gave the link to it and pass the Dynamic rauting
            // with page name (PageDetails) and restaurant ID
            <Link
              to={"/PageDetails/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestourantCards {...restaurant.info} />
            </Link>
            // {...restaurant.info} this is object destructured with this we call the data by the end value
          ))
        )}
      </div>
    </>
  );
};

export default BodyComponent;

// Assignment

// What are various ways to add images into our App? Explain with code examples
// What would happen if we do console.log(useState())?
// How will useEffect behave if we don't add a dependency array ?
// What is SPA?
// What is difference between Client Side Routing and Server Side Routing?
