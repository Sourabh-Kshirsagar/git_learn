import { async } from "regenerator-runtime";
import { restro } from "../constants";
import RestourantCards from "./RestourantCards";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// This function gives the filterd list of cards and filterData1 returnn this data at functin all
function filterDataa(SearchTxt, AllRestroData) {
  const filterData1 = AllRestroData.filter((rest) =>
    rest.title?.toLowerCase()?.includes(SearchTxt?.toLowerCase())
  );
  return filterData1;
}

const BodyComponent = () => {
  const [SearchTxt, setSearchTxt] = useState("");
  const [AllRestroData, setAllRestroData] = useState("");
  const [filteredRestroData, setfilteredRestroData] = useState("");

  // by calling the api the above pasing of restro in usestate it use as a initial value for the UI

  useEffect(() => {
    // console.log("userEffect Called");
    // This another function is used as a call back function
    getRestro();
    // call the api on first load of the page because the dependency arry is empty
  }, []);

  // with this we make a api call in our function and parse this data into json format

  async function getRestro() {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await data.json();
    // console.log("data------->", json);
    setAllRestroData(json);
    setfilteredRestroData(json);
    // in this way we pass the api data into setrestroData function to bind over UI
  }

  // console.log("Reander");
  // }, [SearchTxt]);
  // [SearchTxt]); in this way we inject the dependeny now on every search text changes it will call the useEffect
  // [] this is dependency array in useEffect with this it did'nt call after every re render

  // to load the shimmer UI we have to put a condition
  // or
  // we have to go for the conditional rendering
  // if restro is empty load shimmer UI
  // if restro has data then load actual data to UI

  // this is know as early return
  if (!AllRestroData) return null;

  // this is for when we does'nt have any thing related to filtered data
  if (filteredRestroData?.length == 0)
    return (
      <>
        <h2>No Card Found !!</h2>
      </>
    );
  return AllRestroData.length == 0 ? (
    <Shimmer />
  ) : (
    // in this way we called shimmer UI with conditional rendering
    <>
      <div className="container">
        <div className="row mb-3">
          <input
            className="mr-3 w-25 form-control mt-5"
            type="text"
            placeholder="Seach Box"
            value={SearchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />

          <button
            className="btn w-25 mt-5 btn-primary ml-2"
            type="button"
            onClick={() => {
              const data = filterDataa(SearchTxt, AllRestroData);
              // console.log("fucntion", data);
              setfilteredRestroData(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="display-setting container Align_Data">
        {filteredRestroData.map((restData) => {
          return <RestourantCards {...restData} key={restData.id} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
