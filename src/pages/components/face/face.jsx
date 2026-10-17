import { useEffect, useRef, useState } from "react";
import styles from "./face.module.css";

export default function Face() {
  const eye1 = useRef(null);
  const eye2 = useRef(null);

  const [isCrazy, setCrazy] = useState(false);

  useEffect(() => {
    const eyes = [eye1.current, eye2.current];

    function movePupil(eye, x, y) {
      eye.style.setProperty("--pupil-x", `${x}px`);
      eye.style.setProperty("--pupil-y", `${y}px`);
    }

    function getMaxDistance(eye) {
      const rect = eye.getBoundingClientRect();

      const eyeRadius = rect.width / 2 - 3;
      const pupilRadius = 15;

      return eyeRadius - pupilRadius;
    }

    // MODO DOIDO
    if (isCrazy) {
      let angle = 0;

      const interval = setInterval(() => {
        eyes.forEach((eye) => {
          const maxDistance = getMaxDistance(eye);
          const radius = maxDistance;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          movePupil(eye, x, y);
        });
        
        angle += 5;
        
      }, 50);
      
      const timeout = setTimeout(() => {
        setCrazy(false);
      }, 1000);
      
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
    
    movePupil(eyes[0], -25 , -40)
    movePupil(eyes[1], -25 , 40)


    // MODO NORMAL
    function handleMouseMove(event) {
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;

        const angle = Math.atan2(dy, dx);
        const maxDistance = getMaxDistance(eye);

        const x = Math.cos(angle) * maxDistance;
        const y = Math.sin(angle) * maxDistance;

        movePupil(eye, x, y);
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isCrazy]);

  return (
    <div className={styles.face}>
      <div ref={eye1} className={styles.eye1} onClick={() => setCrazy(true)} />

      <div ref={eye2} className={styles.eye2} onClick={() => setCrazy(true)} />
    </div>
  );
}
