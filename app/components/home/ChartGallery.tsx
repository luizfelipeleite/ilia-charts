import { Link } from "react-router";
import { chartItems } from "~/constants/home";

export function ChartGallery() {
  return (
    <section>
      <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
        Chart Gallery
      </h2>
      <p className="text-gray-500 mb-8">
        Click to explore each chart type.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {chartItems.map((item) => (
          <Link
            key={item.label}
            to={item.route}
            className={`group flex flex-col rounded-2xl border ${item.border} bg-gradient-to-b ${item.color} p-4 hover:shadow-md hover:scale-[1.02] transition-all`}
          >
            <div className="h-24 mb-3">{item.preview}</div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {item.label}
              </span>
              <span className="text-xs text-gray-400 group-hover:text-indigo-500 transition-colors">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
