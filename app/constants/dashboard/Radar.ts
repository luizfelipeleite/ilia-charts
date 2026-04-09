export const DIMENSIONS = [
  "Performance",
  "Reliability",
  "Usability",
  "Security",
  "Scalability",
  "Maintainability",
];

export const data = {
  labels: DIMENSIONS,
  datasets: [
    {
      label: "Current Release",
      data: [92, 85, 88, 78, 90, 82],
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      borderColor: "rgb(16, 185, 129)",
      borderWidth: 2,
      pointBackgroundColor: "rgb(16, 185, 129)",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 4,
    },
    {
      label: "Previous Release",
      data: [75, 80, 70, 82, 68, 76],
      backgroundColor: "rgba(139, 92, 246, 0.15)",
      borderColor: "rgb(139, 92, 246)",
      borderWidth: 2,
      pointBackgroundColor: "rgb(139, 92, 246)",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 4,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" as const, labels: { usePointStyle: true } },
    tooltip: {
      backgroundColor: "rgba(15, 23, 42, 0.9)",
      padding: 12,
      cornerRadius: 8,
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      ticks: { stepSize: 20, color: "#94a3b8", backdropColor: "transparent" },
      grid: { color: "rgba(148, 163, 184, 0.15)" },
      angleLines: { color: "rgba(148, 163, 184, 0.15)" },
      pointLabels: { color: "#94a3b8", font: { size: 12 } },
    },
  },
} as const;
