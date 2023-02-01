import styles from "../styles/FirstCom.module.css";
import AdCom from "./AdComp";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

import { products } from "../public/data";

const FirstComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {products.map((item) => (
          <AdCom item={item} key={item.id} />
        ))}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.firstSection}>
          <p className={styles.topText}>Children of </p>
          <p className={styles.middleText}>FORGOTTEN</p>
          <p className={styles.bottomText}> GOD </p>
        </div>
        <div className={styles.secondSection}>
          <p className={styles.text}>EXPLORE MORE ARTWORKS</p>
          <div className={styles.icon}>
            <DownloadForOfflineOutlinedIcon />
          </div>
        </div>
      </div>
      <button className={styles.thirdSection}>START BIDDING</button>
    </div>
  );
};

export default FirstComp;
