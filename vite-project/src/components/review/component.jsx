// import { restaurants } from "../../constants/mock"

import classNames from 'classnames';
import styles from './styles.module.css'

export const Review = ({ review, className}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div>{review.text}</div>
    </div>
  );
};
