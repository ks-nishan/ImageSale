import styles from "../styles/AdCom.module.css";

import Image from "next/image";

const AdComp = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={item.img} />
      </div>
      <div className={styles.descContainer}>
        <p className={styles.dis}>{item.desc}</p>
        <p className={styles.price}>{item.price}</p>
      </div>
    </div>
  );
};

export default AdComp;
