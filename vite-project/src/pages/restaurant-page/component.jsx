import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { restaurants } from "../../constants/mock";
import styles from './styles.module.css'

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );
  return (
    <div className={styles.root}>
      <RestaurantTabs
        restaurants={restaurants}
        onSelect={setActiveRestaurantId}
      />
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
};
