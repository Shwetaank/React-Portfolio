import { FaReact } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { IoLogoAndroid} from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Frontend Development",
    desc: "Your product will not only boast an aesthetically pleasing design but also ensure optimal accessibility across all devices, including mobile, web, tablet, and desktop platforms.",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <FaServer />,
    desc: "Ensuring the security of your business/product is a paramount consideration, woven into the fabric of the project from its very initiation. I am committed to fortifying your app/website against potential threats, providing a robust defense against cyber attacks.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: (
      <>
        <IoLogoAndroid />
        <FaApple />
      </>
    ),
    desc: "I possess the expertise to create applications for both Apple and Android platforms using React Native. This approach enables a streamlined and consistent development process, ensuring a harmonious experience on both major mobile platforms.",
  },
  {
    id: 4,
    title: "Blockchain Development",
    icon: <SiHiveBlockchain />,
    desc: "Revolutionize your business with my blockchain expertise. From secure smart contracts to decentralized applications, I deliver innovative solutions, transforming the way you leverage blockchain technology.",
  },
];

export default data;
