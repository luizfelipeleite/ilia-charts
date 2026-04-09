import type { ReactNode } from "react";

interface StatsGridProps {
  children: ReactNode;
}

export function StatsGrid({ children }: StatsGridProps) {
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {children}
    </section>
  );
}
