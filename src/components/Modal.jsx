import React, { Fragment } from "react";
import Card from "./card";

const Modal = ({ className, children }) => {
  return (
    <Fragment>
      <section id="backdrop"></section>
      <Card className={className}>{children}</Card>
    </Fragment>
  );
};

export default Modal;
