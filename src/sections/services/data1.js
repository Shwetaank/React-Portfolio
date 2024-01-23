import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const data1 = [
  {
    id: 1,
    icon: (
      <>
        <AiFillHtml5 />
        <FaCss3Alt />
      </>
    ),
    title: "HTML5 & CSS3",
    proficiency: "Intermediate",
  },
  {
    id: 2,
    icon: (
      <>
        <IoLogoJavascript />
        <SiTypescript />
      </>
    ),
    title: "JavaScript & TypeScript",
    proficiency: "Advanced",
  },
  {
    id: 3,
    icon: (
      <>
        <FaJava />
        <FaPython />
      </>
    ),
    title: "Java & Python",
    proficiency: "Intermediate",
  },
  {
    id: 4,
    icon: <MdComputer />,
    title: "Data Structures & Algorithms",
    proficiency: "Intermediate",
  },
  {
    id: 5,
    icon: <FaReact />,
    title: "ReactJS",
    proficiency: "Advanced",
  },
  {
    id: 6,
    icon: <TbBrandReactNative />,
    title: "React Native",
    proficiency: "Advanced",
  },
  {
    id: 7,
    icon: <SiNextdotjs />,
    title: "NextJS",
    proficiency: "Advanced",
  },
  {
    id: 8,
    icon: <SiRedux />,
    title: "Redux",
    proficiency: "Intermediate",
  },
  {
    id: 10,
    icon: (
      <>
        <FaBootstrap />
        <SiTailwindcss />
        <SiMui />
      </>
    ),
    title: "Bootstrap, Tailwind CSS & MUI",
    proficiency: "Advanced",
  },
  {
    id: 11,
    icon: (
      <>
        <DiNodejs />
        <SiExpress />
      </>
    ),
    title: "NodeJS & ExpressJS",
    proficiency: "Advanced",
  },
  {
    id: 12,
    icon: (
      <>
        <FaAws />
        <IoLogoFirebase />
      </>
    ),
    title: "AWS & Firebase",
    proficiency: "Intermediate",
  },
  {
    id: 13,
    icon: (
      <>
        <SiAdobephotoshop />
        <SiPostman />
      </>
    ),
    title: "Adobe Photoshop & Postman API",
    proficiency: "Advanced",
  },
  {
    id: 14,
    icon: (
      <>
        <FaLinux />
        <FaGitAlt />
      </>
    ),
    title: "Linux & Git",
    proficiency: "Advanced",
  },
];

export default data1;
