import { useState } from "react";
import { NavLink } from "react-router";

import { CHART_ROUTES, NAV_LINKS } from "~/constants/navigation";
import { ChartIcon, ChevronDownIcon } from "~/components/ui/Icons";

export default function DesktopNav() {
  const [chartsDropdownOpen, setChartsDropdownOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
      {NAV_LINKS.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
            }`
          }
        >
          {label}
        </NavLink>
      ))}

      {/* Charts Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setChartsDropdownOpen(true)}
        onMouseLeave={() => setChartsDropdownOpen(false)}
      >
        <button
          type="button"
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
            chartsDropdownOpen
              ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
          }`}
          onClick={() => setChartsDropdownOpen(!chartsDropdownOpen)}
          aria-expanded={chartsDropdownOpen}
          aria-haspopup="true"
        >
          <ChartIcon className="w-4 h-4" />
          Charts
          <ChevronDownIcon
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              chartsDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown panel */}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
            chartsDropdownOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="w-64 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 shadow-xl shadow-black/5 dark:shadow-black/30 p-2">
            {CHART_ROUTES.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                  }`
                }
                onClick={() => setChartsDropdownOpen(false)}
              >
                <span className="text-base">{icon}</span>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
