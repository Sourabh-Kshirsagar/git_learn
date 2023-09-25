import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// we have an another hook from react-router-dom to get the ID of the component form the URL

const PageDetails = () => {
  // Here the useParams gives the id form the children of the createBrowserRouter
  const { ids } = useParams();

  const [pageData, setpageData] = useState(null);
  useEffect(() => {
    getPageData();
  }, []);

  async function getPageData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await data.json();
    setpageData(json);
  }
  //   console.log(pageData[6].title);
  return (
    <>
      <h2>Details of the above clicked Page : </h2>
      <h3>Page ID = {ids}</h3>
      <h3>Page ID = {pageData.id}</h3>
    </>
  );
};
export default PageDetails;
