import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>BACK</div>
        <div className={styles.center}>
          <div className={styles.topText}>DIGITAL ARTIST</div>
          <div className={styles.bottomText}>BANKSY_IS_DEAD</div>
        </div>
        <div className={styles.right}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
