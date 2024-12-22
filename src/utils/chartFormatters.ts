export const formatDateTick = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short',
    day: 'numeric'
  });
};

export const formatTooltipValue = (value: number, label: string): string => {
  switch (label) {
    case 'price':
      return `$${value.toFixed(2)}`;
    case 'volume':
      return value.toLocaleString();
    default:
      return value.toString();
  }
};