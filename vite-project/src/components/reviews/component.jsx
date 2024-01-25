import styles from './styles.module.css'
export const Reviews = ({reviews}) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.h3}>Отзывы</h3>
      <ul className={styles.ul}>
        {reviews.map(({ text }) => {
         return <li className={styles.li}>{text}</li>
        })}
      </ul>
    </div>
  );
};
