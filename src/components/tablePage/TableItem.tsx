import React from 'react';
import { tTableItem } from '../../types/types';

type TableItemProps = { data: tTableItem };

export const TableItem = ({ data }: TableItemProps) => {
  return (
    <div className="grid grid-flow-col grid-cols-5 border-b border-custom_500_gray pt-4 pb-4 px-1">
      <p className="text-custom_500_gray text-sm">{data.id}</p>
      <p className="text-custom_500_gray text-sm">{data.date}</p>
      <p className="text-custom_500_gray text-sm">{data.title}</p>
      <p className="text-custom_500_gray text-sm">{data.category}</p>
      <p className="text-custom_500_gray text-sm">{data.comment}</p>
    </div>
  );
};
