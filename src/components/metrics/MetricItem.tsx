import React from 'react';

interface MetricItemProps {
  label: string;
  value: string;
}

export function MetricItem({ label, value }: MetricItemProps) {
  return (
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}