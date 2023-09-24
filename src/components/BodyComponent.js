import { async } from "regenerator-runtime";
import { restro } from "../constants";
import RestourantCards from "./RestourantCards";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

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

  useEffect(() => {
    getRestro();
  }, []);
  async function getRestro() {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await data.json();
    setAllRestroData(json);
    setfilteredRestroData(json);
  }
  // if (!AllRestroData) return null;
  return AllRestroData.length == 0 ? (
    <Shimmer />
  ) : (
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
