import React, { ReactNode } from 'react';

type ModalFooterProps = { children: ReactNode };

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="border-t border-custom_500_gray pt-2">{children}</div>;
};
