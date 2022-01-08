import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from '../styles/Modal.module.css'

const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);
  
    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };
  
    const modalContent = show ? (
      <a href="" className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <a href="" className={styles.close}>
              x
            </a>
          </div>
          <div className={styles.text}>
            {title && <h1 className={styles.title}>{title}</h1>}
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </a>
    ) : null;
  
    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
  };

  export default Modal;