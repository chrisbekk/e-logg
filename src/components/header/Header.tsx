type HeaderProps = { title: string };

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="grid__layout__header">
      <div>
        <h1 className="font-semibold text-2xl">{title}</h1>
      </div>
    </header>
  );
};
