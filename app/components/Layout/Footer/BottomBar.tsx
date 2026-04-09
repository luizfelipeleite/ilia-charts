export default function BottomBar() {
  const currentYear = new Date().getFullYear();

  return (
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
  );
}
