import GithubLink from "~/components/ui/GithubLink";
import LogoLink from "~/components/layout/header/LogoLink";

export default function BrandColumn() {
  return (
    <div className="sm:col-span-2 lg:col-span-1">
      <LogoLink />
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
