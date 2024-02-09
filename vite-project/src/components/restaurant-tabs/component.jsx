import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import {Tab} from "../tab/component"
import styles from "./styles.module.css"
import { useSelector } from "react-redux";

export const RestaurantTabs = ({onSelect}) => {
  const restaurantIds = useSelector(selectRestaurantIds)

  return (  
    <div className={styles.root}>
        {restaurantIds.map((id) => (

         <Tab id={id} onClick={() => onSelect(id)} />
        ))}
    </div>
  ) 
};
