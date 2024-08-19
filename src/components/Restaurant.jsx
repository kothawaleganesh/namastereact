import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to={"/restaurants/" + data.id}>View Menu</Link>
      </div>
    </div>
  );
};

export default Restaurant;
