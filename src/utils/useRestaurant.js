import { useState, useEffect } from "react";
import { FETCH_API_URL } from "../constants";

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
