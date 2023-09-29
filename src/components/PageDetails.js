import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
const PageDetails = () => {
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
  const restaurant = pageData?.cards?.[0]?.card?.card?.info;
  const menuItems = [];
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
          <ul>
            {menuItems.map((itemName, index) => (
              <li key={index}>{itemName}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default PageDetails;
