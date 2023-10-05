import React, { type PropsWithChildren, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./card.module.css";
import { useStore } from "@nanostores/react";
import { openAtom } from "@/store";

type Props = PropsWithChildren & {
  title: string;
  subtitle?: string;
  index: 1 | 2;
};

const ExpandableCard = ({ title, subtitle, index, children }: Props) => {
  const isOpen = useStore(openAtom);
  return (
    <motion.div
      className={styles.card}
      onClick={() => openAtom.set(index)}
      whileHover={{
        border: "2px solid var(--orangeCard)",
        boxShadow: "0 8px 32px 0 rgba(251, 161, 40, 0.42)",
      }}
      layout
      transition={{
        layout: { duration: 1, type: "spring" },
        when: "beforeChildren",
        staggerChildren: 0.15,
      }}
    >
      {subtitle && (
        <motion.p layout="position" className={styles.subtitle}>
          {subtitle}
        </motion.p>
      )}
      <motion.h3 layout="position" className={styles.title}>
        {title}
      </motion.h3>
      {isOpen === index && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          layout
          className={styles.expand}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExpandableCard;
