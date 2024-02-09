import { Dish } from "../dish/component";
import styles from './styles.module.css'

export const Menu = ({ menu}) => {
  return (
    <ul className={styles.root}>
      {menu.map((id) => (
        <li>
          <Dish id={id} />
        </li>
      ))}
    </ul>
  );
};
