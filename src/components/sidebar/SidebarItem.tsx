import { ReactNode } from 'react';

type SidebarItemProps = {
  icon: ReactNode;
  text: string;
  isActive: boolean;
  onClick: (text: string) => void;
};
export const SidebarItem = ({
  icon,
  text,
  isActive,
  onClick,
}: SidebarItemProps) => {
  const handleClick = () => {
    onClick(text);
  };

  return (
    <button
      onClick={handleClick}
      className={`${isActive ? 'bg-custom_500_purple text-white' : 'text-custom_500_gray'} flex items-center gap-3 h-12  w-full rounded-sm pl-4`}
    >
      <p className="text-2xl">{icon}</p>
      <p className="font-light text-sm">{text}</p>
    </button>
  );
};
