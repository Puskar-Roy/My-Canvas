import { SlPencil } from "react-icons/sl";
import { BsEraser } from "react-icons/bs";
import { FaUndoAlt, FaRedoAlt, FaFileDownload } from "react-icons/fa";
import styles from "./index.module.css";
import { useDispatch , useSelector} from "react-redux";
import { MENU_ITEMS } from "@/constants/constants";
import { menuItemClick , actionItemClick } from "@/slice/menuSlice";
import cx from "classnames";


const Menubar = () => {
    const dispatch = useDispatch();
      const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const handleMenuClick = (itemName)=>{
      dispatch(menuItemClick(itemName));
    }
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => {
          handleMenuClick(MENU_ITEMS.PENCIL);
        }}
      >
        <SlPencil className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => {
          handleMenuClick(MENU_ITEMS.ERASER);
        }}
      >
        <BsEraser className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.UNDO,
        })}
      >
        <FaUndoAlt className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.REDO,
        })}
      >
        <FaRedoAlt className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.DOWNLOAD,
        })}
      >
        <FaFileDownload className={styles.icon} />
      </div>
    </div>
  );
};

export default Menubar;
