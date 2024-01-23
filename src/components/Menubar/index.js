import { SlPencil } from "react-icons/sl";
import { BsEraser } from "react-icons/bs";
import { FaUndoAlt, FaRedoAlt, FaFileDownload } from "react-icons/fa";
import styles from "./index.module.css";

const Menubar = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <SlPencil className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <BsEraser className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaUndoAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaRedoAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaFileDownload className={styles.icon} />
      </div>
    </div>
  );
};

export default Menubar;
