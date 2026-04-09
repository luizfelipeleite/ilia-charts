import { useState } from "react";
import { NavLink } from "react-router";
import Logo from "~/assets/images/logo.svg";

import { CHART_ROUTES, NAV_LINKS } from "~/constants/navigation";

import {
  ChartIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  GithubIcon,
} from "~/components/ui/Icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chartsDropdownOpen, setChartsDropdownOpen] = useState(false);
  const [mobileChartsOpen, setMobileChartsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16 lg:h-18">
          {/* ── Logo ── */}
          <NavLink
            to="/"
            className="flex items-center gap-3 shrink-0 group"
          >
            <img
              src={Logo}
              width={40}
              height={40}
              alt="Logo ília Charts"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold tracking-tight">
              ília Charts
            </span>
          </NavLink>

          {/* ── Desktop Nav ── */}
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

          {/* ── Desktop Right Side ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/luizfelipeleite/ilia-charts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>

          {/* ── Mobile Menu Button ── */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
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
      </header>
    </>
  );
}