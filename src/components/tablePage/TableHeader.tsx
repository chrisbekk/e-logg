type TableHeaderProps = { cols: string[] };

export const TableHeader = ({ cols }: TableHeaderProps) => {
  return (
    <div className="grid grid-flow-col grid-cols-5 border-b border-custom_500_gray pb-4 px-1">
      {cols.map(col => (
        <p className="font-thin text-custom_500_gray">{col}</p>
      ))}
    </div>
  );
};
