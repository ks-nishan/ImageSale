import styles from "../styles/SecondCom.module.css";
import Image from "next/image";

import { pics } from "../public/data";

const SecondComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.topTitle}>Pellentesque ut consectetur nulla</p>
        <div className={styles.titleContainer}>
          <p className={styles.bottomTitle}>
            <span className={styles.boldText}>Eget quis</span> ultrices id{"\n"}
            eu nec
            <span className={styles.boldText}> nulla. {"  "}</span>
            <button className={styles.borderBtn}>Sometimes</button>
          </p>
        </div>
        <div className={styles.picContainer}>
          {pics.map((item) => (
            <div className={styles.firstContainer}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.img}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <p className={styles.picDesc}>{item.des}</p>
              <p className={styles.picInfo}>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondComp;
