import { TableHeader } from './TableHeader';
import { TableItem } from './TableItem';
import { tTableItem } from '../../types/types';

type TableProps = { headerCols: string[]; items: tTableItem[] };

export const Table = ({ headerCols, items }: TableProps) => {
  return (
    <div className="mx-[56px] pb-20">
      <TableHeader cols={headerCols} />
      {items.map((item, index) => (
        <TableItem key={index} data={item} />
      ))}
    </div>
  );
};
