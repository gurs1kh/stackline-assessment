import React, { useRef } from 'react';
import { WeeklySalesData } from '../features/product/types';
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  styler,
  // @ts-ignore
} from 'react-timeseries-charts';
// @ts-ignore
import { TimeSeries } from "pondjs";
import { useParentSize } from '@cutting/use-get-parent-size'
import './SalesGraph.css';

interface SalesGraphProps {
  sales: WeeklySalesData[]
}


export const SalesGraph = ({ sales }: SalesGraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { width, height } = useParentSize(containerRef);
  const chartDimensionProps = {
    height: height && height - 50,
    width: width && width - 50,
  }

  if (!sales.length) return null

  const retailSales = sales.map((weeklySales) => ([weeklySales.weekEnding, weeklySales.retailSales]))
  const wholesaleSales = sales.map((weeklySales) => ([weeklySales.weekEnding, weeklySales.wholesaleSales]))

  const retailSeries = new TimeSeries({
    name: 'sales',
    columns: ["time", "value"],
    points: retailSales,
  });

  const wholesaleSeries = new TimeSeries({
    name: 'sales',
    columns: ["time", "value"],
    points: wholesaleSales,
  });

  const retailStyle = styler([{ key: "value", color: "#3AA3F6", width: 3 }]);
  const wholesaleStyle = styler([{ key: "value", color: "#97A2BC", width: 3 }]);

  return (
    <div className='sales-graph-container' ref={containerRef}>
      <ChartContainer timeRange={retailSeries.range()} format="%b '%y" {...chartDimensionProps}>
        <ChartRow {...chartDimensionProps}>
          <YAxis
            id="sales"
            label="Sales"
            min={retailSeries.min()}
            max={retailSeries.max()}
            format="$,"
          />
          <Charts>
            <LineChart
              axis="sales"
              interpolation="curveBasis"
              series={retailSeries}
              style={retailStyle}
              
            />
            <LineChart
              axis="sales"
              interpolation="curveBasis"
              series={wholesaleSeries}
              style={wholesaleStyle}
            />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </div>
  )
}

