export type NavData = {
  activeClass: boolean;
  to: string;
  text: string;
}

const navData = [
  {
    activeClass: true,
    to: "intro",
    text: {
      en: "Home",
      vi: "Trang chủ",
    },
  },
  {
    activeClass: false,
    to: "proficiency",
    text: {
      en: "Experience",
      vi: "Kinh nghiệm",
    },
  },
  {
    activeClass: false,
    to: "about",
    text: {
      en: "About",
      vi: "Giới thiệu",
    },
  },
  {
    activeClass: false,
    to: "portfolio",
    text: {
      en: "Portfolio",
      vi: "Dự án",
    },
  },
];

export default navData;