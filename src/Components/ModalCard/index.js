import React from "react";
function ModalCard({ children }) {
  return (
    <div className="modal__background">
      <div className="modal__card">
        {children}
      </div>
    </div>
  );
}

export { ModalCard };