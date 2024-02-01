import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#Certificates", title: "Education & Certification" },
  { id: 4, link: "#services", title: "Services & Skills" },
  { id: 5, link: "#blog", title: "Blogs" },
  { id: 6, link: "#portfolio", title: "PortFolio" },
  { id: 7, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/shwetank-morey-a35484257",
    icon: <AiOutlineLinkedin />,
  },
  {
    id: 2,
    link: "https://www.facebook.com/spmorey",
    icon: <AiOutlineFacebook />,
  },
  {
    id: 3,
    link: "https://www.instagram.com/shwetaank_/",
    icon: <AiOutlineInstagram />,
  },
  {
    id: 4,
    link: "https://twitter.com/Spmorey87G",
    icon: <AiOutlineTwitter />,
  },
  {
    id: 5,
    link: "https://github.com/Shwetaank",
    icon: <AiOutlineGithub />,
  },
  {
    id: 6,
    link: "https://leetcode.com/spmorey87/",
    icon: <SiLeetcode />,
  },
  {
    id:7,
    link:"https://www.youtube.com/channel/UCxeMVxRuPquLErqmFH2Q5RA",
    icon: <FaYoutube />,
  },
];
