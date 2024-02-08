import classNames from 'classnames';
import styles from './styles.module.css'
import { AuthorizationContol } from '../authorization-control/component';


export const Header = ({className}) => {
  return <div className={classNames(styles.root, className)}>
    Header<AuthorizationContol/>
    </div>;
};
