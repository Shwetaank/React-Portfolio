import React from "react";
import { FaTag, FaServer } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";

const categoryIcons = {
  default: FaTag,
  "Vanilla JS": IoLogoJavascript,
  Frontend: FaReact,
  Backend: FaServer,
  "Mobile App": MdOutlinePhoneAndroid,
  "Block Chain Dev": SiHiveBlockchain,
};

const CategoryButton = ({ category, className, onChangeCategory }) => {
  const Icon = categoryIcons[category] || categoryIcons.default;

  return (
    <button className={className} onClick={() => onChangeCategory(category)}>
      <Icon /> {category}
    </button>
  );
};

export default CategoryButton;
