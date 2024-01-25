import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css"
export const Restaurant = ({ restaurant }) => {
const {id, name, menu, reviews} = restaurant
  return (
    <div className={styles.root} key={id}>
      <h2 className={styles.h2}>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
