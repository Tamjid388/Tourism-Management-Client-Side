"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export const PointerFollower = () => {
  const ref = useRef(null);
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      if (element) {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [xPoint, yPoint]);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        width: 25,
        height: 25,
        backgroundColor: "#ff0088",
        borderRadius: "50%",
        position: "fixed",
        zIndex: 50,
      }}
    />
  );
};
