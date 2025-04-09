import React from 'react';
import type { NavData } from '../data/navData';
import type { ReactNode } from 'react';
import { Link } from 'react-scroll';
import { useStore } from '@nanostores/react';
import { toggleAtom } from '@/store';

const NavLink = ({
  activeClass,
  to,
  text,
  isMobile,
  children,
}: Partial<NavData & { isMobile: boolean; children: ReactNode }>) => {
  const toggle = useStore(toggleAtom);
  return (
    <Link
      activeClass={activeClass ? 'active' : ''}
      to={to}
      spy={true}
      smooth={true}
      offset={-96}
      onClick={() => isMobile && toggleAtom.set(!toggle)}
    >
      {text ? text : children}
    </Link>
  );
};

export default NavLink;
