import { ReactNode } from 'react';

export type tSidebarItem = { text: string; icon: ReactNode; isActive: boolean };

export type tTableItem = {
  id: string;
  date: string;
  title: string;
  category: string;
  comment: string;
};
