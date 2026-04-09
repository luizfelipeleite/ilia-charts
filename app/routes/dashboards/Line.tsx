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
import { DashboardHeader } from "~/components/dashboard/DashboardHeader";
import { DashboardCard } from "~/components/dashboard/DashboardCard";
import { StatsGrid } from "~/components/dashboard/StatsGrid";
import { StatCard } from "~/components/dashboard/StatCard";

export function meta() {
  return [
    { title: "ília Charts - Line / Area Chart" },
    { name: "description", content: "Interactive line and area chart visualization" },
  ];
}

export default function LineAreaChart() {
  return (
    <div>
      <DashboardHeader
        title="Line / Area Chart"
        description="Track trends over time with smooth curves and filled areas."
      />

      <DashboardCard>
        <div className="h-[420px]">
          <Line data={data} options={options} />
        </div>
      </DashboardCard>

      <StatsGrid>
        {STATS.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            accent={stat.accent}
          />
        ))}
      </StatsGrid>
    </div>
  );
}

