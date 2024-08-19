import { useEffect, useState } from "react";
import { SWIGGY_API_RESTAURANT_MENU } from "../Data/AppConfig";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  let { resId } = useParams();
  const [restaurantMenus, setRestaurantMenus] = useState([]);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    let res = await fetch(SWIGGY_API_RESTAURANT_MENU + resId);
    let result = await res.json();
    setRestaurantMenus(result?.data);
  };

  if (restaurantMenus.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1 className="restaurant-name">
        {restaurantMenus?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h2 className="restaurant-description">
        {restaurantMenus?.cards[2]?.card?.card?.info?.city}
      </h2>
      <ul>
        {restaurantMenus?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (menu) => (
            <li>{menu?.card?.info?.name}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
