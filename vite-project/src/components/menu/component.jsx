import { Dish } from "../dish/component";
import classNames from 'classnames';
import styles from './styles.module.css'

export const Menu = ({ menu, className }) => {
  return (
    <ul className={classNames(styles.root, className)}>
      {menu.map((dish) => (
        <li>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  );
};
