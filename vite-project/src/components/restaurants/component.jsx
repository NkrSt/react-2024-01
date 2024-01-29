import { Restaurant } from "../restaurant/component";
import styles from './styles.module.css'

export const Restaurants = ({ restaurants }) => {
  return (
    <div className={styles.root}>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};
