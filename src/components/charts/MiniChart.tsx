import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface MiniChartProps {
  data: number[];
  isPositive: boolean;
}

export function MiniChart({ data, isPositive }: MiniChartProps) {
  const chartData = data.map((value) => ({ value }));

  return (
    <div className="h-16">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={isPositive ? '#16a34a' : '#dc2626'}
            dot={false}
            strokeWidth={1.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}