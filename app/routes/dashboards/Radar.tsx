import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

import { DIMENSIONS, data, options } from "~/constants/dashboard/Radar";
import { DashboardHeader } from "~/components/dashboard/DashboardHeader";
import { DashboardCard } from "~/components/dashboard/DashboardCard";

export function meta() {
  return [
    { title: "ília Charts - Radar Chart" },
    { name: "description", content: "Interactive radar chart visualization" },
  ];
}

export default function RadarChart() {
  return (
    <div>
      <DashboardHeader
        title="Radar Chart"
        description="Compare multi-dimensional metrics across software quality attributes."
      />

      <DashboardCard>
        <div className="h-[480px] flex items-center justify-center">
          <Radar data={data} options={options} />
        </div>
      </DashboardCard>

      <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {DIMENSIONS.map((dim, i) => {
          const current = data.datasets[0]?.data[i] ?? 0;
          const previous = data.datasets[1]?.data[i] ?? 0;
          const delta = current - previous;
          return (
            <div
              key={dim}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-center"
            >
              <p className="text-xs text-gray-500">{dim}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {current}
              </p>
              <p
                className={`text-xs mt-1 font-medium ${delta >= 0 ? "text-emerald-500" : "text-red-500"}`}
              >
                {delta >= 0 ? `+${delta}` : delta}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
