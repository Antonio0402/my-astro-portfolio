import React from "react";
import { motion, type MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

const MotionContainer = ({
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

export default MotionContainer;
