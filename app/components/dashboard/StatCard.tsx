export interface StatCardProps {
  label: string;
  value: string | number;
  accent?: string;
}

export function StatCard({ label, value, accent }: StatCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${accent ?? "text-gray-900 dark:text-white"}`}>
        {value}
      </p>
    </div>
  );
}
