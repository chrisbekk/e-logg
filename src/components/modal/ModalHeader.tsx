import React, { ReactNode } from 'react';

type ModalHeaderProps = { headerTitle: string; children: ReactNode };

export const ModalHeader = ({ headerTitle, children }: ModalHeaderProps) => {
  return (
    <div className="border-b border-custom_500_gray pb-2 flex items-center justify-between">
      <h1 className="text-xl font-light">{headerTitle}</h1>
      {children}
    </div>
  );
};
