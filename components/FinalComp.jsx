import styles from "../styles/FinalCom.module.css";
import image from "../public/images/img9.png";
import Image from "next/image";

const FinalComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.topic}>
            <h1 className={styles.topText}>Odio morbi</h1>
            <h1 className={styles.centerText}>Urna aliquam tinc</h1>
            <h1 className={styles.bottomText}>Aliquam Pellentesque</h1>
            <p className={styles.para}>
              Sed nunc nunc sagittis nulla varius. Vitae justo volutpat dolor
              ac. Elementum sed aliquet lorem sapien volutpat. In sed velit
              pretium sed. In quisque adipiscing congue faucibus. Enim orci
              feugiat mattis ultricies enim arcu cras mattis aliquet. Consequat
              amet amet mauris ac at est erat. Diam egestas volutpat purus
              accumsan nulla tellus faucibus. Viverra eleifend amet egestas
              tincidunt posuere{" "}
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            className={styles.image}
            src={image}
            style={{ height: "450px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FinalComp;
