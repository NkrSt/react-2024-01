import styles from './styles.module.css'

export const Button = ({ onClick, children, state}) => {
    return <button disabled={state} className={styles.root} onClick = {onClick}>{children}</button>
} 

