import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css"
export const Restaurant = ({ restaurant }) => {
const {key, name, menu, reviews} = restaurant
  return (
    <div className={styles.root} key={key}>
      <h2 className={styles.h2}>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
