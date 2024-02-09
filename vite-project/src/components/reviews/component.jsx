import styles from './styles.module.css'
import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.root}>
      {reviews.map((id) => (
        <li>
          <Review id={id} />
        </li>
      ))}
    </ul>
  );
};
