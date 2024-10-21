type HeaderProps = { title: string };

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="grid__layout__header p-4">
      <div>
        <h1 className="font-semibold text-2xl">{title}</h1>
      </div>
    </header>
  );
};
