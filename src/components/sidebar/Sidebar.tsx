import { SidebarItem } from './SidebarItem';

import { tSidebarItem } from '../../types/types';

type SidebarProps = {
  tabsArray: tSidebarItem[];
  setTabs: (tabText: string) => void;
};

export const Sidebar = ({ tabsArray, setTabs }: SidebarProps) => {
  return (
    <aside className="grid__layout__sidebar shadow-2xl">
      {tabsArray.map((tab, index) => (
        <SidebarItem
          text={tab.text}
          isActive={tab.isActive}
          onClick={setTabs}
          icon={tab.icon}
          key={index}
        />
      ))}
    </aside>
  );
};
