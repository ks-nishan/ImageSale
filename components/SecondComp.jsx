import styles from "../styles/SecondCom.module.css";
import Image from "next/image";

import img6 from "../public/images/img6.png";
import img7 from "../public/images/img7.png";
import img8 from "../public/images/img8.png";

const SecondComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.topTitle}>Pellentesque ut consectetur nulla</p>
        <div className={styles.bottomTitleCon}></div>
        <p className={styles.bottomTitle}>
          <span className={styles.boldText}>Eget quis</span> ultrices id{"\n"}
          eu nec
          <span className={styles.boldText}> nulla.</span>
          <button className={styles.borderBtn}>sometimes</button>
        </p>
        <div className={styles.picContainer}>
          <div className={styles.firstContainer}>
            <Image src={img6} style={{ width: "100%" }} />
            <p className={styles.picDesc}>Ultrices fames neque pharetra</p>
            <p className={styles.picInfo}>Nulla faucibus</p>
          </div>
          <div className={styles.secondContainer}>
            <Image src={img7} style={{ width: "100%" }} />
            <p className={styles.picDesc}>Ultrices fames neque pharetra</p>
            <p className={styles.picInfo}>Nulla faucibus</p>
          </div>
          <div className={styles.thirdContainer}>
            <Image src={img8} style={{ width: "100%" }} />
            <p className={styles.picDesc}>Ultrices fames neque pharetra</p>
            <p className={styles.picInfo}>Nulla faucibus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondComp;
