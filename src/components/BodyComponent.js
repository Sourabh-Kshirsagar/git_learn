import { async } from "regenerator-runtime";
import { restro } from "../constants";
import RestourantCards from "./RestourantCards";
import { useState, useEffect } from "react";

// This function gives the filterd list of cards and filterData1 returnn this data at functin all
function filterDataa(SearchTxt, restroData) {
  const filterData1 = restroData.filter((rest) =>
    rest.description.tolowercase().includes(SearchTxt.tolowercase())
  );
  return filterData1;
}

const BodyComponent = () => {
  const [SearchTxt, setSearchTxt] = useState("");
  const [restroData, setrestData] = useState(restro);

  // by calling the api the above pasing of restro in usestate it use as a initial value for the UI

  useEffect(() => {
    console.log("call back called");
    // This another function is used as a call back function
    getRestro();
    // call the api on first load of the page because the dependency arry is empty
  }, []);

  // with this we make a api call in our function and parse this data into json format
  async function getRestro() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7335122&lng=75.84994569999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // optional chaining
    setrestData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  }

  console.log("Reander");
  // }, [SearchTxt]);
  // [SearchTxt]); in this way we inject the dependeny now on every search text changes it will call the useEffect
  // [] this is dependency array in useEffect with this it did'nt call after every re render
  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="Search Box"
          value={SearchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <button
          type="button"
          onClick={() => {
            const data = filterDataa(SearchTxt, restroData);
            setrestData(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="display-setting container">
        {restro.map((restData) => {
          return <RestourantCards {...restData} key={restData.id} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
