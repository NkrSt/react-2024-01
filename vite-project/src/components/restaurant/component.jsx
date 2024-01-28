import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <div>{restaurant.name}</div>
      <h3>Menu</h3>
      <Menu menu={restaurant.menu} />
      <h3>Reviews</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
