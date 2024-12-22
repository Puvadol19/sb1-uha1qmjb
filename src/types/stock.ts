export interface Stock {
  symbol: string;
  name: string;
  currentValue: number;
  percentageChange: number;
  chartData: number[];
}

export interface PeriodMetrics {
  lowestVolumeDay: number;
  highestVolumeDay: number;
  lowestClosePrice: number;
  highestClosePrice: number;
  averageDailyVolume: number;
  currentMarketCap: number;
}