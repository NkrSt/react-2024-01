import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from './styles.module.css'
import { ReviewForm } from "../review-form/component";
import { UserContext } from "../../contexts/user";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ( {id} ) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id)  )

  const  {user} = useContext(UserContext)
  return (  
    <div className={styles.root}>
      <div className={styles.title}>{restaurant.name}</div>
      <h3>Menu</h3>
      <Menu menu={restaurant.menu} />
      <h3>Reviews</h3>
      <Reviews reviews={restaurant.reviews} />
      {user && <ReviewForm/>}
    </div>
  );
};
