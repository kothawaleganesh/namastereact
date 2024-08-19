import React, { useEffect, useState } from "react";
import { IMAGE_SOURCE_URL, SWIGGY_API_URL } from "../Data/AppConfig";
import Restaurant from "./Restaurant";
import { ShimmerDiv } from "shimmer-effects-react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, [setSearchText]);

  const filteredRestaurants = restaurants.filter((item) => {
    return item?.info?.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const fetchRestaurants = async () => {
    let res = await fetch(SWIGGY_API_URL);
    let result = await res.json();
    setRestaurants(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (restaurants.length === 0) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ShimmerDiv class="restaurant-card" />
        <ShimmerDiv class="restaurant-card" />
        <ShimmerDiv class="restaurant-card" />
      </div>
    );
  }
  return (
    <div>
      <input
        id="SearchBox"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="restaurant-list">
        {filteredRestaurants.map(({ info }) => {
          return (
            <Restaurant
              key={info?.id}
              id={info?.id}
              name={info?.name}
              rating={info?.avgRating}
              description={info?.cuisines.join(", ")}
              location={info?.areaName}
              image={IMAGE_SOURCE_URL + info?.cloudinaryImageId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
