import React from 'react';
import { formatTooltipValue } from '../../utils/chartFormatters';

interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
  }>;
  label?: string;
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
      <p className="text-sm text-gray-600">{label}</p>
      {payload.map((item, index) => (
        <p key={index} className="text-sm font-semibold">
          {formatTooltipValue(item.value, item.dataKey)}
        </p>
      ))}
    </div>
  );
}