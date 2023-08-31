import React from "react";
import { toggleAtom } from "@/store";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";

const BurgerMenu = () => {
  const toggle = useStore(toggleAtom);
  return (
    <motion.button
      type="button"
      aria-label="Menu"
      aria-controls="primary-navigation"
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.35 }}
      onClick={() => toggleAtom.set(!toggle)}
      className="burger"
    >
      <motion.span
        animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
        className="line-1"
      ></motion.span>
      <motion.span
        animate={{
          width: toggle ? 0 : 24,
        }}
        transition={{ duration: 0.2 }}
        className="line-2"
      ></motion.span>
      <motion.span
        animate={{
          rotateZ: toggle ? -45 : 0,
          y: toggle ? -8 : 0,
          width: toggle ? 32 : 24,
        }}
        className="line-3"
      ></motion.span>
    </motion.button>
  );
};

export default BurgerMenu;
