import React from "react";
import type { PropsWithChildren } from "react";
import { motion, type MotionProps } from "framer-motion";

const CardsWrapper = ({
  children,
  className,
  ...attr
}: PropsWithChildren<MotionProps & { className: string }>) => {
  return (
    <motion.div className={className} {...attr}>
      {children}
    </motion.div>
  );
};

export default CardsWrapper;
