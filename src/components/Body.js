import { IMG_CDN_URL,restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import About from "./About";
import { Link } from "react-router-dom";


// What is state
// what is React Hooks? - functions,
// What is useState

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
  restaurant.data.name.includes(searchText)
    
  );

  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);


  useEffect( () =>{
    getRestaurants();
  },[]);

  //console.log('rendered');
   async function getRestaurants(){
    const restaurantList = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4973592&lng=88.3746164&"+"page_type=DESKTOP_WEB_LISTING");
  
    const getRestaurantsApi = await restaurantList.json();
    setAllRestaurants(getRestaurantsApi?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(getRestaurantsApi?.data?.cards[2]?.data?.data?.cards)
  }

  if(!allRestaurants) return null;

  return allRestaurants?.length === 0 ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link  to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
