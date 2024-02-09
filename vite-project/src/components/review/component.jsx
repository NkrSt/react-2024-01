import { selectReview } from '../../redux/entities/review/selectors';
import { selectUser } from '../../redux/entities/user/selectors';
import styles from './styles.module.css'
import { useSelector } from 'react-redux';

export const Review = ({id}) => {
  const review = useSelector((state) => selectReview(state, id))
  const user = useSelector((state) => selectUser(state, review.userId))
  console.log(review);
  return (
    <div className={styles.root}>
      <div>{user.name}</div>
      <div>{review.text}</div>
    </div>
  );
};
