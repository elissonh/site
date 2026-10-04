import { useEffect } from "react";

import styles from './Modal.module.css';

export default function Modal({ id, onClose, children, ...props }) {
  useEffect(() => {
    function handleEscKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscKeyDown);
    return () => document.removeEventListener("keydown", handleEscKeyDown);
  }, [onClose]);

  return (
    <>
      <div
        className={styles.backLayer}
        onClick={onClose}
      />
      <div className={styles.modal} {...props}>
        {children}
      </div>
    </>
  );
}