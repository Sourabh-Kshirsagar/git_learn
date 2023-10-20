import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
// We have useDispatch to provide the payload to update the store
import { useDispatch } from "react-redux";

const PageDetails = () => {
  const { SID } = useParams();
  // Here we called our custom hook to get the reataurant details and menu data
  const pageData = useRestaurant(SID);

  // const [pageData, setpageData] = useState(null);

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
  // useDispatch is the hook
  const dispatch = useDispatch();
  // on click of the button we call this function which is used toString
  // dispatch the payload and update the slice of our store
  const handleAddItem = () => {
    dispatch(addItem("House"));
  };

  // Now we are add the menu items in store with the food name for this we have a
  // function addFoodItem and we call it here

  const addFoodItem = (itemName) => {
    dispatch(addItem(itemName));
  };
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
        <div>
          <button className="btn btn-primary" onClick={() => handleAddItem()}>
            Add Items
          </button>
        </div>
        <div className="menu-items">
          <h4>Menu Items</h4>
          <ul>
            {menuItems.map((itemName, index) => (
              <li key={index}>
                {itemName} -{" "}
                <button onClick={() => addFoodItem(itemName)}>Add</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default PageDetails;
