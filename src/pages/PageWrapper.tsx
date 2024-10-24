import React, { ReactNode } from 'react';

type PageWrapperProps = { children: ReactNode };

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className="">{children}</div>;
};
