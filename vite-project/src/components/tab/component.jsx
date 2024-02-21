import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Tab = ({id, onClick}) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id))

  return (
        <button onClick={onClick} >{restaurant.name}</button>
     )}
;
