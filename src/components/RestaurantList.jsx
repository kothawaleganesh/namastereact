import React from "react";
import restaurants from "../Data/RestaurentData";
const Restaurant = (data) => {
  return (
    <div class="restaurant-card">
      <img
        src={data.image}
        className="restaurant-image"
        alt="restaurant-image"
      ></img>
      <div className="restaurant-info">
        <h2 className="restaurant-name">{data.name}</h2>
        <p className="restaurant-description">{data.description}</p>
        <p className="restaurant-location">{data.location}</p>
        <p className="restaurant-rating">Rating: {data.rating}</p>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        if (!restaurant) {
          return null;
        }

        const { id, name, rating, description, location, image } = restaurant;
        const { city, state, zipCode, street } = location;
        const fullLocation = `${city}, ${state}, ${zipCode}, ${street}`;

        return (
          <Restaurant
            key={id}
            name={name}
            rating={rating}
            description={description}
            location={fullLocation}
            image={image}
          />
        );
      })}
    </div>
  );
};
export default RestaurantList;
