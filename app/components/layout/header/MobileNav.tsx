import { useState } from "react";
import { NavLink } from "react-router";

import { CHART_ROUTES, NAV_LINKS } from "~/constants/navigation";
import { ChartIcon, ChevronDownIcon } from "~/components/ui/Icons";

interface MobileNavProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (val: boolean) => void;
}

export default function MobileNav({ 
  mobileMenuOpen, 
  setMobileMenuOpen 
}: MobileNavProps) {
  const [mobileChartsOpen, setMobileChartsOpen] = useState(false);

  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? "max-h-[600px] border-t border-gray-200/60 dark:border-white/10" : "max-h-0"
      }`}
    >
      <nav className="container py-4 space-y-1" aria-label="Mobile navigation">
        {NAV_LINKS.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}

        {/* Mobile Charts Accordion */}
        <div>
          <button
            type="button"
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            onClick={() => setMobileChartsOpen(!mobileChartsOpen)}
            aria-expanded={mobileChartsOpen}
          >
            <span className="flex items-center gap-2">
              <ChartIcon className="w-4 h-4" />
              Charts
            </span>
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform duration-200 ${
                mobileChartsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              mobileChartsOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="pl-4 space-y-0.5 pb-2">
              {CHART_ROUTES.map(({ to, label, icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileChartsOpen(false);
                  }}
                >
                  <span>{icon}</span>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
