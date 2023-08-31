export type NavData = {
  activeClass: boolean;
  to: string;
  text: string;
}

const navData = [
  {
    activeClass: true,
    to: "intro",
    text: "Home",
  },
  {
    activeClass: false,
    to: "profiency",
    text: "Profiency",
  },
  {
    activeClass: false,
    to: "about",
    text: "About",
  },
  {
    activeClass: false,
    to: "portfolio",
    text: "Protfolio",
  },
];

export default navData;