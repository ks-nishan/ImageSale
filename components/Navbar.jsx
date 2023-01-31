import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>Back</div>
        <div className={styles.center}>
          <div className={styles.topText}>Digital Artist</div>
          <div className={styles.bottomText}>BANKSY_IS_DEAD</div>
        </div>
        <div className={styles.right}>toggle</div>
      </div>
    </div>
  );
};

export default Navbar;
