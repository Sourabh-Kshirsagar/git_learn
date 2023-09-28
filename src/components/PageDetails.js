import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
// we have an another hook from react-router-dom to get the ID of the component form the URL

const PageDetails = () => {
  // Here the useParams gives the id form the children of the createBrowserRouter
  const { SID } = useParams();

  const [pageData, setpageData] = useState(null);
  useEffect(() => {
    getPageData();
  }, []);

  async function getPageData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7616375&lng=75.8893399&restaurantId=" +
        SID
    );
    const json = await data.json();
    setpageData(json.data);
    console.log(json.data);
  }
  // ------------------------------------------------------------------------------------
  //  By this way we call the data from the API but dis'nt get success to get all the menu's
  // console.log(pageData[6].title);
  // const menuItems =
  //   pageData?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
  //     (itemCard) =>
  //       itemCard?.card?.card?.itemCards?.map((items) => items.card?.card?.name)
  //         .card?.info?.name
  //   );
  // ----------------------------------------------------------------------------------------
  // this we use for the item details
  const restaurant = pageData?.cards?.[0]?.card?.card?.info;
  // Here we go to deep in the API to get the details of the Restaurants

  // const restaurantDetails = pageData?.cards?.[0]?.card?.card?.info || "";
  // we also call the data like this and with restaurantDetails.name we get the name and another ingo

  // {/* Then we use CHAT GPT to get the data from the swiggy's API and we got it back */}
  // the below code is from CHAT GPT
  // this we use to get the menu information

  //This is for menu items
  const menuItems = [];
  //This is for menu items price
  const menuItemsPrice = [];

  const regularCards =
    pageData?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (regularCards) {
    for (const itemCard of regularCards) {
      if (itemCard?.card?.card?.itemCards) {
        for (const item of itemCard.card.card.itemCards) {
          if (item.card?.info) {
            menuItems.push(item.card.info.name);
            menuItemsPrice.push(item.card.info.price);
          }
        }
      }
    }
  }
  return (
    <>
      <div className="D-flex">
        <div>
          <h2>Restaurant Details and Menus</h2>
          <h5>User Searched For ID : {SID}</h5>
          <h5>Restaurant ID's : {restaurant?.id}</h5>
          <h5>Restaurant Name : {restaurant?.name}</h5>
          <img src={IMG_URL + restaurant?.cloudinaryImageId} />
          <h5>Restaurant City : {restaurant?.city}</h5>
          <h5>Restaurant Locality : {restaurant?.locality}</h5>
          <h5>Cost for Two : {restaurant?.costForTwoMessage}</h5>
          <h5>Avg Rating String : {restaurant?.avgRatingString}</h5>
        </div>
        <div className="menu-items">
          <h4>Menu Items</h4>
          {/* -------------------------------------------------------------------- */}
          {/* We called the data in this way also but did'nt successed */}
          {/* <p>
            {
              pageData.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR
                ?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.name
              console.log(
                Object.values(
                  pageData.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards?.[1]?.card?.card?.itemCards
                ).map((items) => {
                  items?.card?.info?.name;
                })
              )
            }
          </p> */}
          {/* -------------------------------------------------------------------- */}

          {/* Then we use CHAT GPT to get the data from the swiggy's API and we got it back */}
          <ul>
            {menuItems.map((itemName, index) => (
              <li key={index}>{itemName}</li>
            ))}
          </ul>
          {/* In this way we got the menu items with price information */}
          {/* <ul>
            {menuItems.map((itemName, index) => (
              <li key={index}>
                {itemName} - {menuItemsPrice[index]}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
};
export default PageDetails;
