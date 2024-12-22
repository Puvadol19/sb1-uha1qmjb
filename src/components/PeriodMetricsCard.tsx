import React from 'react';
import { PeriodMetrics } from '../types/stock';
import { MetricItem } from './metrics/MetricItem';
import { formatCurrency, formatVolume, formatMarketCap } from '../utils/formatters';

interface PeriodMetricsCardProps {
  metrics: PeriodMetrics;
}

export function PeriodMetricsCard({ metrics }: PeriodMetricsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Period Metrics</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <MetricItem
            label="Lowest Volume Day Trade"
            value={formatVolume(metrics.lowestVolumeDay)}
          />
          <MetricItem
            label="Highest Volume Day Trade"
            value={formatVolume(metrics.highestVolumeDay)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <MetricItem
            label="Lowest Close Price"
            value={formatCurrency(metrics.lowestClosePrice)}
          />
          <MetricItem
            label="Highest Close Price"
            value={formatCurrency(metrics.highestClosePrice)}
          />
        </div>
        <MetricItem
          label="Average Daily Volume"
          value={formatVolume(metrics.averageDailyVolume)}
        />
        <MetricItem
          label="Current Market Cap"
          value={formatMarketCap(metrics.currentMarketCap)}
        />
      </div>
    </div>
  );
}