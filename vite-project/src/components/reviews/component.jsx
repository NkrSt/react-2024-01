import classNames from 'classnames';
import styles from './styles.module.css'
import { Review } from "../review/component";

export const Reviews = ({ reviews, className }) => {
  return (
    <ul className={classNames(styles.root, className)}>
      {reviews.map((review) => (
        <li>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};
