import React from "react";
import navData from "@/data/navData";
import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { toggleAtom } from "@/store";
import { fadeIn, staggerContainer } from "@/utils/motion";
import NavLink from "./NavLink";
import UnstyledButton from "./UnstyledButton";

const MobileNavLink = () => {
  const toggle = useStore(toggleAtom);
  if (toggle) {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="nav-list--mobile"
      >
        <ul className="nav-links--mobile">
          {navData.map((item, id) => (
            <motion.li
              variants={fadeIn("right", "spring", id * 0.2)}
              className="nav-link"
              role="list"
              key={id}
            >
              <NavLink
                to={item?.to}
                activeClass={item?.activeClass}
                text={item?.text}
                isMobile={true}
              />
            </motion.li>
          ))}
          <NavLink to="contact" isMobile={true}>
            <UnstyledButton variant="filled" size="sm">
              Contact
            </UnstyledButton>
          </NavLink>
        </ul>
      </motion.div>
    );
  }
  return null;
};

export default MobileNavLink;
