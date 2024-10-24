import { createPortal } from 'react-dom';
import { MouseEvent, ReactNode } from 'react';

type ModalProps = {
  rootElement: string;
  children: ReactNode;
  modalController: boolean;
  closeModal: (isVisible: boolean) => void;
};

export const ModalOverlay = ({
  rootElement,
  children,
  modalController,
  closeModal,
}: ModalProps) => {
  const modalRoot = document.getElementById(rootElement);
  if (!modalRoot) return null;

  const closeModalHandler = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    closeModal(false);
  };

  if (!modalController) return;

  return createPortal(
    <div
      onClick={closeModalHandler}
      className="absolute inset-0 bg-black bg-opacity-45 z-50 flex justify-center items-center"
    >
      {children}
    </div>,
    modalRoot,
  );
};
