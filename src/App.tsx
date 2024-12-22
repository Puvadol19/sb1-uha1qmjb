import React, { useState } from 'react';
import { StockCard } from './components/StockCard';
import { PeriodMetricsCard } from './components/PeriodMetricsCard';
import { StockPriceChart } from './components/StockPriceChart';

// Mock data - replace with real API data
const mockStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc',
    currentValue: 165.00,
    percentageChange: -1.22,
    chartData: [170, 168, 166, 167, 165]
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc',
    currentValue: 174.63,
    percentageChange: -2.56,
    chartData: [180, 178, 176, 175, 174]
  },
  // Add more stocks as needed
];

const mockMetrics = {
  lowestVolumeDay: 37425513,
  highestVolumeDay: 136682597,
  lowestClosePrice: 165.00,
  highestClosePrice: 195.18,
  averageDailyVolume: 61605709,
  currentMarketCap: 2547910200000
};

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState('trimester');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Stocks Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {mockStocks.map((stock) => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StockPriceChart
            data={[
              { date: '2024-01', price: 180, volume: 1000000 },
              { date: '2024-02', price: 175, volume: 1200000 },
              { date: '2024-03', price: 165, volume: 900000 },
            ]}
          />
        </div>
        <div>
          <PeriodMetricsCard metrics={mockMetrics} />
        </div>
      </div>
    </div>
  );
}

export default App;