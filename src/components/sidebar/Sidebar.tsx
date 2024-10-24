import { useState } from 'react';

import { SidebarItem } from './SidebarItem';
import { PiHouse } from 'react-icons/pi';

const items = [
  {
    text: 'Sidebar Menu Item 1',
    icon: <PiHouse />,
    isActive: true,
  },
  {
    text: 'Sidebar Menu Item 2',
    icon: <PiHouse />,
    isActive: false,
  },
  {
    text: 'Sidebar Menu Item 3',
    icon: <PiHouse />,
    isActive: false,
  },
  {
    text: 'Sidebar Menu Item 4',
    icon: <PiHouse />,
    isActive: false,
  },
  {
    text: 'Sidebar Menu Item 5',
    icon: <PiHouse />,
    isActive: false,
  },
  {
    text: 'Sidebar Menu Item 6',
    icon: <PiHouse />,
    isActive: false,
  },
  {
    text: 'Sidebar Menu Item 7',
    icon: <PiHouse />,
    isActive: false,
  },
];

export const Sidebar = () => {
  const [tabs, setTabs] = useState(items);

  const activeTabHandler = (tabText: string) => {
    const updatedItems = items.map(item =>
      item.text === tabText
        ? { ...item, isActive: true }
        : { ...item, isActive: false },
    );
    setTabs(updatedItems);
  };

  return (
    <aside className="grid__layout__sidebar shadow-2xl">
      {tabs.map((item, index) => (
        <SidebarItem
          text={item.text}
          isActive={item.isActive}
          onClick={activeTabHandler}
          icon={item.icon}
          key={index}
        />
      ))}
    </aside>
  );
};
