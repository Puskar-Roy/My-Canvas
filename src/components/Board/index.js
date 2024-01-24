import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const Board = () => {
    const canvasRef = useRef(null)
    useEffect(()=>{
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    },[])
  return (
    <canvas ref={canvasRef}>
      <div></div>
    </canvas>
  );
};

export default Board;
