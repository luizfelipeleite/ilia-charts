import { TECH_STACK } from "~/constants/footer";

export default function TechStackColumn() {
  return (
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
  );
}
