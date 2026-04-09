import { NavLink } from "react-router";
import Logo from "~/assets/images/logo.svg";
import GithubLink from "~/components/ui/GithubLink";

export default function BrandColumn() {
  return (
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
        <GithubLink />
      </div>
    </div>
  );
}
