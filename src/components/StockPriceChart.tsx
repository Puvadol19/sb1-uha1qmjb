import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartTooltip } from './charts/ChartTooltip';
import { formatDateTick } from '../utils/chartFormatters';
import { CHART_COLORS, CHART_DIMENSIONS } from '../constants/chartConfig';

interface StockPriceChartProps {
  data: Array<{
    date: string;
    price: number;
    volume: number;
  }>;
}

export function StockPriceChart({ data }: StockPriceChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Stock Price Trends</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid 
              strokeDasharray={CHART_DIMENSIONS.gridDash.join(' ')}
              stroke={CHART_COLORS.grid}
            />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatDateTick}
            />
            <YAxis />
            <Tooltip content={<ChartTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke={CHART_COLORS.primary}
              strokeWidth={CHART_DIMENSIONS.strokeWidth}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}