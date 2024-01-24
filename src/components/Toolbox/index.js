import styles from './index.module.css'
import { COLORS } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { MENU_ITEMS } from '../../constants/constants';
import cx from "classnames";
const Toolbox = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
   const emptyToolOption = activeMenuItem === '';
   const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
   const showBrushToolOption =
     activeMenuItem === MENU_ITEMS.PENCIL ||
     activeMenuItem === MENU_ITEMS.ERASER;
    const updateBrushSize = ()=>{

    }
    if( emptyToolOption) return;
  return (
    <div className={styles.toolBoxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke color</h4>
          <div className={styles.itemContainer}>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLACK }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLUE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.GREEN }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.ORANGE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.RED }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.YELLOW }}
            />
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush Size</h4>
          <div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Toolbox
