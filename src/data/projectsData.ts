import frontendMentor from "../asset/frontendmentor-solutions.webp";
import travelTour from "../asset/travel-tour-website.webp";
import realtor from "../asset/realtor-nextjs.webp";
import cryptoverse from "../asset/cryptoverse.webp";
import movieOn from "../asset/movieOn-figma.webp";
import hostel from "../asset/hostel-figma.webp";
import blog from "../asset/pern-stack-blog.webp";
import portfolio from "../asset/portfolio.webp";

const projectsData = [
  {
    img: frontendMentor,
    title: {
      en: "All my Frontend Mentor Challenges",
      vi: "Tất cả các dự án trên Frontend Mentor",
    },
    desc: {
      en: "This is my profile site which includes all the completed challenges I've ever taken. There are a lot of cool visiual UI/UX design helping strengthen and sharpen my skills in HTML, CSS and JavaScript/TypeScript as well as other React state management libs by solving these challenges.",
      vi: "Đây là link trang cá nhân trên Frontend Mentor bao gồm tất cả các thử thách mà tôi đã hoàn thành. Đó là một nền tảng cung cấp các thiết kế UI/UX đẹp mắt giúp tôi thực hành và nâng cao kỹ năng HTML, CSS và JavaScript/TypeScript cũng như cách áp dụng các thư viện state management của React.",
    },
    techs: ["Tailwind", "React", "Zustand", "Redux-Toolkit", "Styled Components", "Bootstrap"],
    link: "https://www.frontendmentor.io/profile/Antonio0402/solutions",
  },
  {
    img: travelTour,
    title: {
      en: "Travel Tour Website",
      vi: "Website du lịch",
    },
    desc: {
      en: "Travel Tour Website allows user to find and select tour by seamlessly choosing customized marker on map",
      vi: "Website du lịch cho phép người dùng tìm kiếm và chọn tour bằng cách chọn các điểm đánh dấu trên bản đồ của Google",
    },
    techs: ["CharkUI", "React", "Jotai", "React-Query", "Google API", "Serverless Function"],
    link: "https://travel-tour-website-citd.netlify.app/",
    code: "https://github.com/Antonio0402/travel-tour-website"
  },
  {
    img: realtor,
    title: {
      en: "Realtor Website",
      vi: "Website bất động sản",
    },
    desc: {
      en: "Realtor Website is a full features commercial website supports for all kind of real estate services like rent an buy",
      vi: "Website bất động sản là một website thương mại cung cấp đầy đủ các loại dịch vụ bất động sản từ cho thuê đến mua bán",
    },
    techs: ["CharkUI", "Next.js", "Jotai", "React-Query", "Rapid API", "SSR", "SSG"],
    link: "https://realtor-nextjs-project.vercel.app/",
    code: "https://github.com/Antonio0402/realtor-nextjs-project"
  },
  {
    img: cryptoverse,
    title: {
      en: "Crypto Website",
      vi: "Website tiền điện tử",
    },
    desc: {
      en: "Crypto Website is a website for providing market infos and updated news related to crypto currencies world",
      vi: "Website tiền điện tử là một website cung cấp thông tin thị trường và các tin tức mới nhất liên quan đến thế giới tiền điện tử",
    },
    techs: ["Ant Design", "Next.js", "Redux toolkit", "Rapid API", "SSR", "SSG"],
    link: "https://crypto-nextjs-project.vercel.app/",
    code: "https://github.com/Antonio0402/crypto-nextjs-project"
  },
  {
    img: movieOn,
    title: {
      en: "MovieOn - Movie Streaming App",
      vi: "MovieOn - Ứng dụng xem phim",
    },
    desc: {
      en: "Movie streaming app with social feature and watch party",
      vi: "Ứng dụng xem phim với các tính năng mạng xã hội và xem phim cùng nhau",
    },
    techs: ["Figma"],
    link: "https://www.figma.com/proto/1KfuyzvZSS2Ojf191hMVXh/MoviON---Movie-Streaming-App-UI-Kit?node-id=389-4575&scaling=scale-down&page-id=0%3A1&starting-point-node-id=389%3A4547&show-proto-sidebar=1",
  },
  {
    img: hostel,
    title: {
      en: "Hostel Landing page",
      vi: "Landing page cho nhà nghỉ",
    },
    desc: {
      en: "A landing page draft design to promote my family business, which allow user to actively make appointment to receive an booking services",
      vi: "Một bản thiết kế landing page để quảng bá cho nhà nghỉ của gia đình tôi, cho phép người dùng chủ động đặt lịch hẹn để nhận dịch vụ đặt phòng",
    },
    techs: ["Figma"],
    link: "https://www.figma.com/proto/h3YpSbqDuGEgDDl7BzoJyv/Hostel?node-id=19-78&t=lIun4MImgd85A6E1-1&scaling=min-zoom&content-scaling=fixed&page-id=19%3A73",
  },
  {
    img: blog,
    title: {
      en: "Pern Stack Blog Page",
      vi: "Blog page sử dụng PERN stack",
    },
    desc: {
      en: "A full stack blog page using PERN stack - PostgreSQL, Express, React, Node.Js Create, Read, Update, and Delete blogs",
      vi: "Một trang blog gồm cả clien và server sử dụng PERN stack - PostgreSQL, Express, React, Node.Js cho phép tạo, đọc, cập nhật và xóa các bài viết",
    },
    techs: ["PostgreSQL", "Express", "React", "Node.Js", "Jotai", "React-Query", "CUBE CSS", "Tailwind"],
    link: "https://fullstack-blog-client.onrender.com/",
    code: "https://github.com/Antonio0402/pern-stack-blog"
  },
  {
    img: portfolio,
    title: {
      en: "Portfolio",
      vi: "Portfolio",
    },
    desc: {
      en: "My portfolio Website showcasing my skills and side projects",
      vi: "Website portfolio giới thiệu các kỹ năng và dự án cá nhân của tôi",
    },
    techs: ["Astro", "CSS", "React", "Nano Store", "Framer Motion"],
    link: "",
    code: "https://github.com/Antonio0402/my-astro-portfolio"
  },
]

export default projectsData;