import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

import { data, options, STATS } from "~/constants/dashboard/Bar";

export function meta() {
  return [
    { title: "ília Charts - Bar Chart" },
    { name: "description", content: "Interactive bar chart visualization" },
  ];
}

export default function BarChart() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">
          Bar Chart
        </h1>
        <p className="text-gray-500 mt-1">
          Compare categorical data with grouped vertical bars.
        </p>
      </header>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
        <div className="h-[420px]">
          <Bar data={data} options={options} />
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
