import classNames from "classnames";
import { Button } from "../button/component";
import styles from './styles.module.css'

export const Header = ({isHighlited}) => {
  return (
    <header className={classNames (styles.root, styles.header, {
      [styles.highlited]: isHighlited,  
    })}>
      <Button onClick={() => console.log("Open Menu")}>
        <span>Menu</span>   
      </Button>
      <Button onClick={() => console.log("Open SignIn")}>
        <span>SignIn</span>
      </Button>
    </header>
  );
};
