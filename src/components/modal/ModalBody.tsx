import React, { ReactNode } from 'react';

type ModalBodyProps = { children: ReactNode };

export const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className="p-2">{children}</div>;
};
