import { HamburgerIcon, CloseIcon } from "~/components/ui/Icons";
import GithubLink from "~/components/ui/GithubLink";

interface HeaderActionsProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (val: boolean) => void;
}

export default function HeaderActions({
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderActionsProps) {
  return (
    <>
      {/* ── Desktop Right Side ── */}
      <div className="hidden md:flex items-center gap-3">
        <GithubLink />
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
    </>
  );
}
