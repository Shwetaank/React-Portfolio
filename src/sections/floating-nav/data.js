import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
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
    link: "#services",
    icon: <MdHomeRepairService />,
  },
  {
    id: 4,
    link: "#blog",
    icon: <FaBlogger />,
  },
  {
    id: 5,
    link: "#portfolio",
    icon: <AiFillAppstore />,
  },
  {
    id: 6,
    link: "#contact",
    icon: <AiFillMessage />,
  },
];

export default data;
