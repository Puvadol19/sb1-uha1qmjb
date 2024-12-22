export const calculatePriceChange = (currentPrice: number, previousPrice: number): number => {
  return ((currentPrice - previousPrice) / previousPrice) * 100;
};

export const getMinMaxValues = (data: number[]): { min: number; max: number } => {
  return {
    min: Math.min(...data),
    max: Math.max(...data)
  };
};