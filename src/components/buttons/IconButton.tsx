import React, { ReactNode } from 'react';

type IconButtonProps = { children: ReactNode; onClick: () => void };

export const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <button onClick={onClick} className="relative">
      {children}
    </button>
  );
};
