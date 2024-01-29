import classNames from "classnames";
import styles from "./styles.module.css";
import { useState } from "react";
import { Button } from "../button/component";

export const Dish = ({ dish, className }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={classNames(styles.root, className)}>
      {dish.name}
      <div>
        <Button
          onClick={() => {
            if (count < 5) setCount(count + 1);
          }}
          state={count === 5}
        >
          +
        </Button>
        {count}
        <Button
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
          state={count === 0}
        >
          -
        </Button>
      </div>
    </div>
  );
};
