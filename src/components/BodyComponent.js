// This is the way how we have named import form any file
import { restro } from "../constants";

// This is the defaultu import form the file where it is created or defined
import RestourantCards from "./RestourantCards";
import { useState } from "react";

function filterData(SearchTxt, restroData) {
  return restroData.filter((rest) =>
    restroData.description.includes(SearchTxt)
  );
}

const BodyComponent = () => {
  const [SearchTxt, setSearchTxt] = useState();
  const [restroData, setrestData] = useState(restro);

  // const [searchClick, setSearchClick] = useState("false");
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
            // Here we need to filter the data that's why we call a function here which is
            // used to filter our data it is with two param one is the text that is enterd in the input
            // box and other is the data object

            const data = filterData(SearchTxt, restroData);
            setrestData(data);
          }}
        >
          Search
        </button>
        {/* <h1>{searchClick}</h1>
        <button
          type="button"
          onClick={() => {
            if (searchClick == "false") {
              setSearchClick("true");
            } else setSearchClick("false");
          }}
        >
          Search Now
        </button> */}
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
