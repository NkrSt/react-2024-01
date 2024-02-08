import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import classNames from 'classnames';
import styles from './styles.module.css'
import { ReviewForm } from "../review-form/component";
import { UserContext } from "../../contexts/user";
import { useContext } from "react";

export const Restaurant = ({ restaurant, className }) => {
  const  {user} = useContext(UserContext)
  return (  
    <div className={classNames(styles.root, className)}>
      <div>{restaurant.name}</div>
      <h3>Menu</h3>
      <Menu menu={restaurant.menu} />
      <h3>Reviews</h3>
      <Reviews reviews={restaurant.reviews} />
      {user && <ReviewForm/>}
    </div>
  );
};
