export const formatCurrency = (value: number): string => {
  return `$${value.toFixed(2)}`;
};

export const formatPercentage = (value: number): string => {
  return `${Math.abs(value).toFixed(2)}%`;
};

export const formatVolume = (value: number): string => {
  return value.toLocaleString();
};

export const formatMarketCap = (value: number): string => {
  return `$${(value / 1e9).toFixed(2)}B`;
};