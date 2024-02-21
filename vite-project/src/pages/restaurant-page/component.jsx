import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { restaurants } from "../../constants/mock";
import styles from './styles.module.css'
import { useSelector } from "react-redux";

export const RestaurantPage = () => {
  
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );
  return (
    <div className={styles.root}>
      <RestaurantTabs
        onSelect={setActiveRestaurantId}
      />
      {activeRestaurant && <Restaurant id={activeRestaurant.id} />}
    </div>
  );
};
