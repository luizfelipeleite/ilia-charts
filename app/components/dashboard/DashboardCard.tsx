import type { ReactNode } from "react";

interface DashboardCardProps {
  children: ReactNode;
}

export function DashboardCard({ children }: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
      {children}
    </div>
  );
}
