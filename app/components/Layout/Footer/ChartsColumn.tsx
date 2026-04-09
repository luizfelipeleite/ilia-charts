import { NavLink } from "react-router";
import { CHART_ROUTES } from "~/constants/navigation";

export default function ChartsColumn() {
  return (
    <div className="lg:ml-16">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide uppercase mb-4">
        Charts
      </h3>
      <ul className="space-y-2.5">
        {CHART_ROUTES.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 font-medium"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
