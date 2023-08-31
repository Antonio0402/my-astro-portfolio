import frontendMentor from "../asset/frontendmentor-solutions.png";
import travelTour from "../asset/travel-tour-website.png";
import realtor from "../asset/realtor-nextjs.png";
import cryptoverse from "../asset/cryptoverse.png";
import movieOn from "../asset/movieOn-figma.jpg";
import hostel from "../asset/hostel-figma.png";
import blog from "../asset/pern-stack-blog.png";
import portfolio from "../asset/portfolio.png";

const projectsData = [
  {
    img: frontendMentor,
    title: "All my Frontend Mentor Challenges",
    desc: "This is my profile site which includes all the completed challenges I've ever taken. There are a lot of cool visiual UI/UX design helping strengthen my skills in HTML, CSS and JavaScript/TypeScript as well as other React state management libs by solving these challanges.",
    techs: ["Tailwind", "React", "Zustand", "Redux-Toolkit", "Styled Componets", "Bootstrap"],
    link: "https://www.frontendmentor.io/profile/Antonio0402/solutions",
  },
  {
    img: travelTour,
    title: "Travel Tour Website",
    desc: "Travel Tour Website allows user to find and select tour by seamlesslly choosing customized marker on map",
    techs: ["CharkUI", "React", "Jotai", "React-Query", "Google API", "Serverless Function"],
    link: "https://travel-tour-website-citd.netlify.app/",
    code: "https://github.com/Antonio0402/travel-tour-website"
  },
  {
    img: realtor,
    title: "Realtor Website",
    desc: "Realtor Website is a full features commercial website supports for all kind of real estate services like rent an buy",
    techs: ["CharkUI", "Next.js", "Jotai", "React-Query", "Rapid API", "SSR", "SSG"],
    link: "https://realtor-nextjs-project.vercel.app/",
    code: "https://github.com/Antonio0402/realtor-nextjs-project"
  },
  {
    img: cryptoverse,
    title: "Crypto Website",
    desc: "Crypto Website is a website for providing market infos and updated news related to crypto currencies world",
    techs: ["Ant Design", "Next.js", "Redux toolkits", "Rapid API", "SSR", "SSG"],
    link: "https://crypto-nextjs-project.vercel.app/",
    code: "https://github.com/Antonio0402/crypto-nextjs-project"
  },
  {
    img: movieOn,
    title: "MovieOn online streaming App Design",
    desc: "Movie streaming app with social feature and watch party",
    techs: ["Figma"],
    link: "https://www.figma.com/proto/1KfuyzvZSS2Ojf191hMVXh/MoviON---Movie-Streaming-App-UI-Kit?node-id=389-4575&scaling=scale-down&page-id=0%3A1&starting-point-node-id=389%3A4547&show-proto-sidebar=1",
  },
  {
    img: hostel,
    title: "Hostel Landing page",
    desc: "A landing page draft desing to promote my family business, which allow user to actively make appointment to receive an booking services",
    techs: ["Figma"],
    link: "https://www.figma.com/proto/1KfuyzvZSS2Ojf191hMVXh/MoviON---Movie-Streaming-App-UI-Kit?node-id=389-4575&scaling=scale-down&page-id=0%3A1&starting-point-node-id=389%3A4547&show-proto-sidebar=1",
  },
  {
    img: blog,
    title: "Pern Stack Blog Page",
    desc: "A full stack blog page using PERN stack - PostgreSQL, Express, React, Node.Js Create, Read, Update, and Delete blogs",
    techs: ["PostgreSQL", "Express", "React", "Node.Js", "Jotai", "React-Query", "CUBE CSS", "Tailwind"],
    link: "https://fullstack-blog-client.onrender.com/",
    code: "https://github.com/Antonio0402/pern-stack-blog"
  },
  {
    img: portfolio,
    title: "Portfolio",
    desc: "My portfolio Website showcasing my skills and side projects",
    techs: ["Astro", "CSS", "React", "Nano Store", "Framer Motion"],
    link: "",
    code: "https://github.com/Antonio0402/my-astro-portfolio"
  },
]

export default projectsData;