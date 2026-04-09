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
import { DashboardHeader } from "~/components/dashboard/DashboardHeader";
import { DashboardCard } from "~/components/dashboard/DashboardCard";
import { StatsGrid } from "~/components/dashboard/StatsGrid";
import { StatCard } from "~/components/dashboard/StatCard";

export function meta() {
  return [
    { title: "ília Charts - Bar Chart" },
    { name: "description", content: "Interactive bar chart visualization" },
  ];
}

export default function BarChart() {
  return (
    <div>
      <DashboardHeader
        title="Bar Chart"
        description="Compare categorical data with grouped vertical bars."
      />

      <DashboardCard>
        <div className="h-[420px]">
          <Bar data={data} options={options} />
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

