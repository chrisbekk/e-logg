import { HeaderMenu } from './HeaderMenu';

type HeaderProps = { title: string };

//NOTE: THE HORIZONTAL PADDING ON THE HEADER IS THE SAME AS THE SPACING FOR THE MAIN WINDOW!!

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="grid__layout__header bg-custom_800_blue">
      <div className="h-full flex items-center justify-between px-10">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <HeaderMenu />
      </div>
    </header>
  );
};
