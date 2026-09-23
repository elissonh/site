import { useEffect } from "react";

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
      <div id={id} {...props}>
        {children}
      </div>
    </>
  );
}