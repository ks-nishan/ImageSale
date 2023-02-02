import styles from "../styles/FirstCom.module.css";
import AdCom from "./AdComp";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import Image from "next/image";

import { products } from "../public/data";

import img1 from "../public/images/img1.png";
import img2 from "../public/images/img2.png";
import img3 from "../public/images/img3.png";
import img5 from "../public/images/img5.png";

const FirstComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {/* {products.map((item) => (
          <AdCom item={item} key={item.id} />
        ))} */}
        <din className={styles.firstCard}>
          <Image src={img1} />
          <div className={styles.infoContainer}>
            <p>info</p>
            <p>price</p>
          </div>
        </din>

        <din className={styles.firstCard}>
          <Image src={img2} />
          <div className={styles.infoContainer}>
            <p>info</p>
            <p>price</p>
          </div>
        </din>

        <din className={styles.firstCard}>
          <Image src={img3} />
          <div className={styles.infoContainer}>
            <p>info</p>
            <p>price</p>
          </div>
        </din>

        <din className={styles.firstCard}>
          <Image src={img2} />
          <div className={styles.infoContainer}>
            <p>info</p>
            <p>price</p>
          </div>
        </din>

        <din className={styles.firstCard}>
          <Image src={img5} />
          <div className={styles.infoContainer}>
            <p>info</p>
            <p>price</p>
          </div>
        </din>
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
