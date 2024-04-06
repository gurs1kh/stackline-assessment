import React from 'react';
import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table'
import { WeeklySalesData } from '../../features/product/types';
import { columns } from './config';
import './SalesTable.css';

interface SalesTableProps {
  sales: WeeklySalesData[]
}


export const SalesTable = ({ sales }: SalesTableProps) => {
  const table = useReactTable({ columns, data: sales, getCoreRowModel: getCoreRowModel() });

  return (
    <div className='sales-table-container'>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}