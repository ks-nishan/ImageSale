import styles from "../styles/AdCom.module.css";

import Image from "next/image";

const AdComp = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={item.img}
          style={{
            width: `${item.width}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <p className={styles.dis}>{item.desc}</p>
      <div className={styles.priceContainer}>
        <p className={styles.price}>{item.price}</p>
      </div>
    </div>
  );
};

export default AdComp;
