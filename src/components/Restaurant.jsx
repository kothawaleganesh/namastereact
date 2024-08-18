import React, { useState } from "react";

const Restaurant = (data) => {
  return (
    <div className="restaurant-card">
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

export default Restaurant;
