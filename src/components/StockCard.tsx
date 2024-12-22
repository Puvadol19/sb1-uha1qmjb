import React from 'react';
import { Stock } from '../types/stock';
import { MiniChart } from './charts/MiniChart';
import { formatCurrency, formatPercentage } from '../utils/formatters';

interface StockCardProps {
  stock: Stock;
}

export function StockCard({ stock }: StockCardProps) {
  const isPositive = stock.percentageChange >= 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{stock.name}</h3>
          <p className="text-xs text-gray-500">{stock.symbol}</p>
        </div>
        <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '▲' : '▼'} {formatPercentage(stock.percentageChange)}
        </span>
      </div>
      
      <MiniChart data={stock.chartData} isPositive={isPositive} />
      
      <p className="text-lg font-semibold mt-2">
        {formatCurrency(stock.currentValue)}
      </p>
    </div>
  );
}