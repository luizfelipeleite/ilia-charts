export const MAX_POINTS = 30;
export const INTERVAL_MS = 1_000;

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 300 },
  interaction: { mode: "index" as const, intersect: false },
  plugins: {
    legend: { position: "top" as const, labels: { usePointStyle: true } },
    tooltip: {
      backgroundColor: "rgba(15, 23, 42, 0.9)",
      padding: 12,
      cornerRadius: 8,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#94a3b8", maxTicksLimit: 10 },
    },
    y: {
      min: 0,
      max: 100,
      grid: { color: "rgba(148, 163, 184, 0.1)" },
      ticks: {
        color: "#94a3b8",
        callback: (value: string | number) => `${value}%`,
      },
    },
  },
} as const;
