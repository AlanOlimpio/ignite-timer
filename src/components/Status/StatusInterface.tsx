export const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const;

export interface StatusStyledInterface {
  statusColor: keyof typeof STATUS_COLORS;
}

export interface StatusInterface extends StatusStyledInterface {
  label: string;
}
