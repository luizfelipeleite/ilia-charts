import BrandColumn from "./BrandColumn";
import ChartsColumn from "./ChartsColumn";
import TechStackColumn from "./TechStackColumn";
import BottomBar from "./BottomBar";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/60 dark:border-white/10 bg-gray-50/50 dark:bg-gray-950">
      {/* ── Main footer Content ── */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <BrandColumn />
          <ChartsColumn />
          <TechStackColumn />
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <BottomBar />
    </footer>
  );
}