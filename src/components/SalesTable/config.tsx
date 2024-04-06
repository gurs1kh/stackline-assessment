import React from 'react';
import { createColumnHelper, CellContext } from '@tanstack/react-table'
import { format } from "date-fns";
import { WeeklySalesData } from '../../features/product/types';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})
const renderCurrency = (row: CellContext<WeeklySalesData, number>) => currencyFormatter.format(row.getValue())

const columnHelper = createColumnHelper<WeeklySalesData>()
export const columns = [
  columnHelper.accessor(row => row.weekEnding, {
    id: 'weekEnding',
    header: () => <span>WEEK ENDING</span>,
    cell: (row) => format(row.getValue(), 'yyyy-MM-dd')
  }),
  columnHelper.accessor(row => row.retailSales, {
    id: 'retailSales',
    header: () => <span>RETAIL SALES</span>,
    cell: renderCurrency,
  }),
  columnHelper.accessor(row => row.wholesaleSales, {
    id: 'wholesaleSales',
    header: () => <span>WHOLESALE SALES</span>,
    cell: renderCurrency,
  }),
  columnHelper.accessor(row => row.unitsSold, {
    id: 'unitsSold',
    header: () => <span>UNITS SOLD</span>,
  }),
  columnHelper.accessor(row => row.retailerMargin, {
    id: 'retailerMargin',
    header: () => <span>RETAILER MARGIN</span>,
    cell: renderCurrency,
  }),
]