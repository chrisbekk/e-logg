import React, { ReactNode } from 'react';

type TableHeaderProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export const TablePageHeader = ({
  title,
  subtitle,
  children,
}: TableHeaderProps) => {
  return (
    <div className="bg-custom_500_purple rounded-lg h-20 absolute left-4 right-4 -top-6 px-10 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-thin">{title}</h1>
        <h2 className="text-sm">{subtitle}</h2>
      </div>
      {children}
    </div>
  );
};
