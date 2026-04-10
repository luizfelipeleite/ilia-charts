import { useState } from "react";

import LogoLink from "./LogoLink";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HeaderActions from "./HeaderActions";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 lg:h-18">
        <LogoLink />

        <DesktopNav />

        <HeaderActions
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>

      <MobileNav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </header>
  );
}