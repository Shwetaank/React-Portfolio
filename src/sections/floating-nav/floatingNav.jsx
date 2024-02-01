import "./floatingNav.css";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";
import data from "./data";
const floatingNav = () => {
  return (
    <>
      <ul id="floating__Nav">
        <Scrollspy
          offset={-400}
          className="scrollspy"
          items={[
            "header",
            "about",
            "Certificates",
            "services",
            "blog",
            "portfolio",
            "contact",
          ]}
          currentClassName="active"
        >
          {data.map((item) => (
            <Nav key={item.id} item={item} />
          ))}
        </Scrollspy>
      </ul>
      ;
    </>
  );
};

export default floatingNav;
