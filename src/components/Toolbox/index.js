import styles from './index.module.css'
import { COLORS } from '../../constants/constants';
import { useSelector , useDispatch } from 'react-redux';
import { MENU_ITEMS } from '../../constants/constants';
import { changeColor , changeBrushSize } from '@/slice/toolboxSlice'; 
import cx from "classnames";

const Toolbox = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
   const emptyToolOption = activeMenuItem === '';
   const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
   const showBrushToolOption =
     activeMenuItem === MENU_ITEMS.PENCIL ||
     activeMenuItem === MENU_ITEMS.ERASER;


    const updateBrushSize = (e)=>{
      dispatch(changeBrushSize({item:activeMenuItem,size:e.target.value}));
    }

    const updateColor = (newColor)=>{
      dispatch(changeColor({ item: activeMenuItem, color : newColor }));
    }
    const { color } = useSelector(
      (state) => state.toolbox[activeMenuItem] || {}
    );


    if( emptyToolOption) return;
  return (
    <div className={styles.toolBoxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke color</h4>
          <div className={styles.itemContainer}>
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => updateColor(COLORS.BLACK)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => updateColor(COLORS.BLUE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => updateColor(COLORS.GREEN)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => updateColor(COLORS.ORANGE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => updateColor(COLORS.RED)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.YELLOW,
              })}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={() => updateColor(COLORS.YELLOW)}
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
