import React from "react";
import glassesEmoji from "../asset/glassesEmoji.webp";
import { motion } from "framer-motion";

const Emoji = ({ className }: { className: string }) => {
  return (
    <motion.img
      className={className}
      initial={{
        x: "-36%",
      }}
      whileInView={{
        x: "-24%",
        transition: {
          duration: 2,
        },
      }}
      src={glassesEmoji.src}
      alt=""
      width={glassesEmoji.width}
      height={glassesEmoji.height}
    />
  );
};

export default Emoji;
