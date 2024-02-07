import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Frontend Development",
    desc: "Crafting visually stunning and responsive user interfaces across all devices – mobile, web, tablet, and desktop – ensuring an exceptional user experience. 🚀💻📱",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <FaServer />,
    desc: "Implementing robust security measures to safeguard your product, fortifying it against potential cyber threats. Your app/website's security is our top priority. 🔒🛡️",
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
    desc: "Creating seamless applications for both Apple and Android platforms using React Native, ensuring a consistent and efficient development process for a harmonious user experience. 📱🍎🤖",
  },
  {
    id: 4,
    title: "Blockchain Development",
    icon: <SiHiveBlockchain />,
    desc: "Revolutionizing your business with innovative blockchain solutions, from secure smart contracts to decentralized applications, unlocking the full potential of blockchain technology. ⛓️🔗💡",
  },
];

export default data;
