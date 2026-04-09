export const LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels: LABELS,
  datasets: [
    {
      label: "Revenue",
      data: [12_000, 19_000, 8_000, 15_000, 22_000, 18_000, 25_000],
      backgroundColor: "rgba(99, 102, 241, 0.7)",
      borderColor: "rgb(99, 102, 241)",
      borderWidth: 1,
      borderRadius: 6,
    },
    {
      label: "Expenses",
      data: [9_000, 14_000, 6_000, 12_000, 17_000, 13_000, 19_000],
      backgroundColor: "rgba(236, 72, 153, 0.7)",
      borderColor: "rgb(236, 72, 153)",
      borderWidth: 1,
      borderRadius: 6,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" as const, labels: { usePointStyle: true } },
    title: { display: false },
    tooltip: {
      backgroundColor: "rgba(15, 23, 42, 0.9)",
      titleFont: { size: 13 },
      bodyFont: { size: 12 },
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
        callback: (value: string | number) => `$${Number(value).toLocaleString()}`,
      },
    },
  },
} as const;

export const STATS = [
  { label: "Total Revenue", value: "$119,000", accent: "text-indigo-500" },
  { label: "Total Expenses", value: "$90,000", accent: "text-pink-500" },
  { label: "Net Profit", value: "$29,000", accent: "text-emerald-500" },
] as const;
