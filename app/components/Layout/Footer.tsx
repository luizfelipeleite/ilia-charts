import { NavLink } from "react-router";
import Logo from "~/assets/images/logo.svg";

import { CHART_ROUTES } from "~/constants/navigation";

import { TECH_STACK } from "~/constants/footer";
import { GithubIcon } from "~/components/ui/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/60 dark:border-white/10 bg-gray-50/50 dark:bg-gray-950">
      {/* ── Main Footer Content ── */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <NavLink to="/" className="inline-flex items-center gap-3 group">
              <img
                src={Logo}
                width={36}
                height={36}
                alt="Logo ília Charts"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-lg font-bold tracking-tight">
                ília Charts
              </span>
            </NavLink>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Explore interactive data visualizations powered by Chart.js and React.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com/luizfelipeleite/ilia-charts"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Charts Column */}
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

          {/* Tech Stack Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide uppercase mb-4">
              Built with
            </h3>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-200/60 dark:border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} ília Charts. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1.5">
              Made by Luiz Felipe Leite
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}