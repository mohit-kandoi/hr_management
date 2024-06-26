'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import { rows, columns } from './data';

// const rows = [
//   {
//     key: '1',
//     name: 'Tony Reichert',
//     role: 'CEO',
//     status: 'Active',
//   },
//   {
//     key: '2',
//     name: 'Zoey Lang',
//     role: 'Technical Lead',
//     status: 'Paused',
//   },
//   {
//     key: '3',
//     name: 'Jane Fisher',
//     role: 'Senior Developer',
//     status: 'Active',
//   },
//   {
//     key: '4',
//     name: 'William Howard',
//     role: 'Community Manager',
//     status: 'Vacation',
//   },
// ];

// const columns = [
//   {
//     key: 'name',
//     label: 'NAME',
//   },
//   {
//     key: 'role',
//     label: 'ROLE',
//   },
//   {
//     key: 'status',
//     label: 'STATUS',
//   },
// ];

export default function TableOfRecruitingStaff() {
  return (
    <Table
      classNames={{
        thead: 'bg-white',
        th: 'bg-blue-50',
      }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
