import type { ReactNode } from "react";

interface DashboardHeaderProps {
  title: string;
  description: string;
  badge?: ReactNode;
}

export function DashboardHeader({ title, description, badge }: DashboardHeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">
          {title}
        </h1>
        {badge}
      </div>
      <p className="text-gray-500 mt-1">{description}</p>
    </header>
  );
}
