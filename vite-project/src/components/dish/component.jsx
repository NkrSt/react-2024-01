import styles from "./styles.module.css";
import { useState } from "react";
import { Button } from "../button/component";
import { useSelector } from "react-redux";
import { selectDish } from "../../redux/entities/dish/selectors";

export const Dish = ({id}) => {
const dish = useSelector((state) => selectDish(state, id))
  const [count, setCount] = useState(0);
  return (
    <div className={styles.root}>
      {dish.name}
      <div>
        <Button onClick={() => {setCount(count + 1);}} state={count === 5}>
          +</Button>
          {count}
        <Button onClick={() => {setCount(count - 1);}} state={count === 0}>
          -</Button>
      </div>
    </div>
  );
};
