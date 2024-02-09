import styles from './styles.module.css'
import { AuthorizationContol } from '../authorization-control/component';


export const Header = () => {
  return <div className={styles.root}>
    Header<AuthorizationContol/>  
    </div>;
};
