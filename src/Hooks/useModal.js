import {useState} from "react";

function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const [showingModal, setShowingModal] = useState(null);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return {
    openModal,
    toggleModal,
    showingModal,
    setShowingModal,
  }
}

export {useModal}