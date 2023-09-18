import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import style from "./carousel.module.css";

const Carousel = ({
  certificates,
}: {
  certificates: { img: ImageMetadata; name: string }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState("left");
  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev + 1 === certificates.length ? 0 : prev + 1
    );
  };
  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? certificates.length - 1 : prev - 1
    );
  };
  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };
  return (
    <div className={style.carousel}>
      <AnimatePresence>
        <motion.figure
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className={style.certificate_slider}
          key={currentIndex}
        >
          <img
            src={certificates[currentIndex].img.src}
            alt="certificates picture"
            width={certificates[currentIndex].img.width}
            height={certificates[currentIndex].img.height}
          />
          <figcaption>{certificates[currentIndex].name}</figcaption>
        </motion.figure>
      </AnimatePresence>
      <div className={style.slide_direction}>
        <motion.div
          className={style.left}
          onClick={handlePrev}
          variants={slideVariants}
          whileHover="hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 96 960 960"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </motion.div>
        <motion.div
          className={style.right}
          onClick={handleNext}
          variants={slideVariants}
          whileHover="hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 96 960 960"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </motion.div>
      </div>
      <div className={style.indicator}>
        {certificates.map((_, index) => (
          <motion.div
            variants={dotVariants}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            key={index}
            className={`${style.dot} ${
              currentIndex === index ? style.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

const slideVariants: Variants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
  hover: {
    scale: 1.2,
    backgroundColor: "var(--orange)",
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

const dotVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
    scale: 1.3,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 1000,
      damping: "10",
    },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};
export default Carousel;
