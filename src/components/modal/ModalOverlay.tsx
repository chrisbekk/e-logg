import { createPortal } from 'react-dom';

type ModalProps = { rootElement: string; children: ReactNode };

export const ModalOverlay = ({ rootElement, children }: ModalProps) => {
  const modalRoot = document.getElementById(rootElement);
  if (!modalRoot) return null;
  return createPortal(
    <div className="absolute inset-0 black ">{children}</div>,
    modalRoot,
  );
};
