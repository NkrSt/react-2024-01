import { useContext } from "react";
import styles from "./styles.module.css";
import { useReviewForm } from "./use-review-form";
import { UserContext } from "../../contexts/user";

export const ReviewForm = () => {
  const { form, setText, setRating  } = useReviewForm();
  const {user} = useContext(UserContext)
  return (
    <div className={styles.root}>
      <div className={styles.field}>
{user}
      </div>
      <div className={styles.field}>
        <label htmlFor="text">Text</label>
        <input
          id="text"
          type="text"
          value={form.text}
          onChange={setText}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={setRating}
        />
      </div>
    </div>
  );
};
