import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import classNames from 'classnames';
import styles from './styles.module.css'
import { ReviewForm } from "../review-form/component";

export const Restaurant = ({ restaurant, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div>{restaurant.name}</div>
      <h3>Menu</h3>
      <Menu menu={restaurant.menu} />
      <h3>Reviews</h3>
      <Reviews reviews={restaurant.reviews} />
      <ReviewForm/>
    </div>
  );
};
