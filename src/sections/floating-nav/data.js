import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { AiFillAppstore, AiFillMessage } from "react-icons/ai";

const data = [
  {
    id: 1,
    link: "#",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    link: "#about",
    icon: <BsPersonFill />,
  },
  {
    id: 3,
    link: "#Certificates",
    icon: <IoSchoolSharp />,
  },
  {
    id: 4,
    link: "#services",
    icon: <MdHomeRepairService />,
  },
  {
    id: 5,
    link: "#blog",
    icon: <FaBlogger />,
  },
  {
    id: 6,
    link: "#portfolio",
    icon: <AiFillAppstore />,
  },
  {
    id: 7,
    link: "#contact",
    icon: <AiFillMessage />,
  },
];

export default data;
