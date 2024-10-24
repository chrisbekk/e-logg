import { useContext, useState, useMemo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';

import '../index.css';
import { Header } from '../components/header/Header';
import { Sidebar } from '../components/sidebar/Sidebar';
import { tSidebarItem } from '../types/types';
import { PiHouse } from 'react-icons/pi';
///// DUMMY SIDEBAR DATA
const items: tSidebarItem[] = [
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

export const Layout = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(authContext);

  const [tabsArray, setTabsArray] = useState<tSidebarItem[]>(items);
  const activeTab = useMemo(
    () => tabsArray.find(tab => tab.isActive),
    [tabsArray],
  );
  const activeTabHandler = (tabText: string) => {
    const updatedItems = tabsArray.map(tab =>
      tab.text === tabText
        ? { ...tab, isActive: true }
        : { ...tab, isActive: false },
    );
    setTabsArray(updatedItems);
  };

  return (
    <div className="grid__layout__container font-helvetica font-light bg-custom_800_blue text-white subpixel-antialiased">
      <Header title={activeTab?.text || 'Default Title'} />
      <Sidebar tabsArray={tabsArray} setTabs={activeTabHandler} />
      <main className="grid__layout__main">
        <Outlet />
      </main>
    </div>
  );
};
