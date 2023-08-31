import React from "react";
import type { MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const CardItem = ({
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

export default CardItem;
