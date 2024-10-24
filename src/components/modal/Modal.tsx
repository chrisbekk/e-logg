import React, { ReactNode } from 'react';

type ModalProps = { children: ReactNode };

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="bg-custom_800_blue rounded-md p-6 text-white min-w-96 shadow-2xl">
      <div className="">{children}</div>
    </div>
  );
};
