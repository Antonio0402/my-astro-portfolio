import React from 'react';
import navData from '@/data/navData';
import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { toggleAtom } from '@/store';
import { fadeIn, staggerContainer } from '@/utils/motion';
import NavLink from './NavLink';
import UnstyledButton from './UnstyledButton';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const MobileNavLink = () => {
  const toggle = useStore(toggleAtom);
  const { i18n } = useTranslation('translation', { useSuspense: false });
  const currentLanguage = i18n?.language || i18next?.language;
  // const currentLanguage = i18next?.options?.lng;

  if (toggle) {
    return (
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="nav-list--mobile">
        <ul className="nav-links--mobile">
          {navData.map((item, id) => {
            console.log('currentLanguage', i18n);
            // console.log('item', item.text[currentLanguage]);
            return (
              <motion.li variants={fadeIn('right', 'spring', id * 0.2)} className="nav-link" role="list" key={id}>
                <NavLink
                  to={item?.to}
                  activeClass={item?.activeClass}
                  text={item?.text[i18n.language]}
                  isMobile={true}
                />
              </motion.li>
            );
          })}
          <NavLink to="contact" isMobile={true}>
            <UnstyledButton variant="filled" size="sm">
              {currentLanguage === 'en' ? 'Contact' : 'Liên hệ'}
            </UnstyledButton>
          </NavLink>
        </ul>
      </motion.div>
    );
  }
  return null;
};

export default MobileNavLink;
