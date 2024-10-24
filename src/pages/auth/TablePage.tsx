import React from 'react';
import { PageWrapper } from '../PageWrapper';
import { TablePageHeader } from '../../components/tablePage/TablePageHeader';
import { BaseButton } from '../../components/buttons/BaseButton';
import { Table } from '../../components/tablePage/Table';
import { FaPlus } from 'react-icons/fa6';

const tableItems = [
  {
    id: '01',
    date: '2024JAN21',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '02',
    date: '2023MAR21',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '03',
    date: '2022JAN22',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '04',
    date: '2024AUG01',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '05',
    date: '2020DES21',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '06',
    date: '2021JAN04',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '07',
    date: '2024JAN21',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '08',
    date: '2024JAN11',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '09',
    date: '2024JAN12',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '10',
    date: '2018APR01',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '11',
    date: '2022NOV31',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '12',
    date: '2024JAN21',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '13',
    date: '2024JAN21',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '14',
    date: '2012NOV19',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '15',
    date: '2016MAR12',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '16',
    date: '2012JAN21',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
  {
    id: '17',
    date: '2014JAN21',
    title: 'A Table Item Title',
    category: 'Organization',
    location: 'Norway',
    comment:
      'This is a comment about the current list item. This current list item has the following comment. ',
  },
];

export const TablePage = () => {
  return (
    <PageWrapper>
      <div className="min-h-32 pt-36 bg-custom_700_blue rounded-lg relative">
        <TablePageHeader title="Table Header" subtitle="Here goes the subtitle">
          <BaseButton
            clickHandler={() => {
              console.log('CLICK');
            }}
            text="Add"
            icon={<FaPlus />}
          />
        </TablePageHeader>
        <Table
          headerCols={['ID', 'DTG', 'Title', 'Category', 'Comment']}
          items={tableItems}
        />
      </div>
    </PageWrapper>
  );
};
