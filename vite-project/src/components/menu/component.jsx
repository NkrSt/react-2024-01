import styles from './styles.module.css'
export const Menu = ({ menu }) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.h3}>Меню</h3>
      <ul className={styles.ul}>
        {menu.map(({ name, id }) => {
          return <li key={id} className={styles.li}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
