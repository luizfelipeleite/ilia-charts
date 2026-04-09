import { useEffect, useRef, useCallback } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
);

export function meta() {
  return [
    { title: "ília Charts - Realtime Dashboard" },
    { name: "description", content: "Live realtime data streaming visualization" },
  ];
}

import { MAX_POINTS, INTERVAL_MS, options } from "~/constants/dashboard/Realtime";

function createInitialData(): ChartData<"line"> {
  const labels = Array.from({ length: MAX_POINTS }, (_, i) => `${i}s`);
  return {
    labels,
    datasets: [
      {
        label: "CPU Usage %",
        data: Array.from({ length: MAX_POINTS }, () => 30 + Math.random() * 40),
        borderColor: "rgb(6, 182, 212)",
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Memory Usage %",
        data: Array.from({ length: MAX_POINTS }, () => 50 + Math.random() * 25),
        borderColor: "rgb(236, 72, 153)",
        backgroundColor: "rgba(236, 72, 153, 0.08)",
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };
}



export default function Realtime() {
  const chartRef = useRef<ChartJS<"line"> | null>(null);
  const tickRef = useRef(MAX_POINTS);

  const updateChart = useCallback(() => {
    const chart = chartRef.current;
    if (!chart) return;

    tickRef.current += 1;
    const newLabel = `${tickRef.current}s`;

    chart.data.labels?.push(newLabel);
    chart.data.labels?.shift();

    const cpuDataset = chart.data.datasets[0];
    const memDataset = chart.data.datasets[1];
    if (!cpuDataset || !memDataset) return;

    const cpuData = cpuDataset.data as number[];
    const memData = memDataset.data as number[];

    const lastCpu = cpuData[cpuData.length - 1] ?? 50;
    const lastMem = memData[memData.length - 1] ?? 65;

    cpuData.push(Math.max(5, Math.min(95, lastCpu + (Math.random() - 0.5) * 12)));
    cpuData.shift();

    memData.push(Math.max(20, Math.min(95, lastMem + (Math.random() - 0.48) * 8)));
    memData.shift();

    chart.update("none");
  }, []);

  useEffect(() => {
    const id = setInterval(updateChart, INTERVAL_MS);
    return () => clearInterval(id);
  }, [updateChart]);

  return (
    <div>
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">
            Realtime Dashboard
          </h1>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
        </div>
        <p className="text-gray-500 mt-1">
          Live system metrics streaming every second.
        </p>
      </header>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
        <div className="h-[420px]">
          <Line ref={chartRef} data={createInitialData()} options={options} />
        </div>
      </div>
    </div>
  );
}
