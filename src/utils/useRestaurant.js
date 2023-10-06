import { useState, useEffect } from "react";
import { FETCH_API_URL } from "../constants";

// Here we created Hook which is used to fetch the data from the API and set in to the useRestaurant method
const useRestaurant = (SID) => {
  const [pageData, setpageData] = useState(null);
  useEffect(() => {
    getPageData();
  }, []);

  async function getPageData() {
    const data = await fetch(FETCH_API_URL + SID);
    const json = await data.json();
    setpageData(json.data);
    console.log(json.data);
  }
  return pageData;
};
export default useRestaurant;

// Hook is different from the normal function as functional component returns the JSX but the
// Hook always returns the javascript or some logical operation
