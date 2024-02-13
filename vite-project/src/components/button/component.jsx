import classNames from 'classnames'
import styles from './styles.module.css'

export const Button = ({ onClick, className, children, state}) => {
    return <button disabled={state} className={classNames(styles.root, className )} onClick = {onClick}>{children}</button>
} 

