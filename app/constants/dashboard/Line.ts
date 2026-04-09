export const LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels: LABELS,
  datasets: [
    {
      label: "Page Views",
      data: [3200, 4100, 3800, 5200, 4900, 6100, 5800],
      borderColor: "rgb(6, 182, 212)",
      backgroundColor: "rgba(6, 182, 212, 0.15)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 7,
      pointBackgroundColor: "rgb(6, 182, 212)",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
    },
    {
      label: "Unique Visitors",
      data: [1800, 2400, 2100, 3100, 2900, 3600, 3200],
      borderColor: "rgb(99, 102, 241)",
      backgroundColor: "rgba(99, 102, 241, 0.08)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 7,
      pointBackgroundColor: "rgb(99, 102, 241)",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
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
      ticks: { color: "#94a3b8" },
    },
    y: {
      grid: { color: "rgba(148, 163, 184, 0.1)" },
      ticks: {
        color: "#94a3b8",
        callback: (value: string | number) => Number(value).toLocaleString(),
      },
    },
  },
} as const;

export const STATS = [
  { label: "Avg Page Views", value: "4,729", accent: "text-cyan-500" },
  { label: "Avg Visitors", value: "2,729", accent: "text-indigo-500" },
  { label: "Peak Day", value: "Saturday", accent: "text-emerald-500" },
] as const;
