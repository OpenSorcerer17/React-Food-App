import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
const Backdrop = ({ onCloseBackdrop }) => {
  return <div className={classes.backdrop} onClick={onCloseBackdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseBackdrop={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
