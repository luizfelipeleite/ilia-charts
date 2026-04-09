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

import { data, options, STATS } from "~/constants/dashboard/Line";

export function meta() {
  return [
    { title: "ília Charts - Line / Area Chart" },
    { name: "description", content: "Interactive line and area chart visualization" },
  ];
}

export default function LineAreaChart() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">
          Line / Area Chart
        </h1>
        <p className="text-gray-500 mt-1">
          Track trends over time with smooth curves and filled areas.
        </p>
      </header>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
        <div className="h-[420px]">
          <Line data={data} options={options} />
        </div>
      </div>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className={`text-2xl font-bold mt-1 ${stat.accent}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
