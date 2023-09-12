import { restro } from "../constants";
import RestourantCards from "./RestourantCards";
import { useState } from "react";

function filterDataa(SearchTxt, restroData) {
  const filterData1 = restroData.filter((rest) =>
    rest.description.tolowercase().includes(SearchTxt.tolowercase())
  );
  return filterData1;
}

const BodyComponent = () => {
  const [SearchTxt, setSearchTxt] = useState("");
  const [restroData, setrestData] = useState(restro);
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
