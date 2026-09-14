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
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 z-1"
          onClick={onClose}
        />
        {children}
      </div>
    </>
  );
}