import { NavLink } from "react-router";
import Logo from "~/assets/images/logo.svg";

const NAV_ITEMS = [
  { to: "/dashboard/realtime", label: "Realtime Dashboard", end: false },
] as const;

export default function Header() {
  return (
    <header className="container py-10">
      <div className="flex gap-50 items-center">
        <NavLink to="/" className="flex items-center gap-4">
          <img src={Logo} width={70} height={70} alt="Logo ília Charts" />
          <span className="text-2xl font-bold">ília Charts</span>
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className="flex gap-10">
            {NAV_ITEMS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    isActive ? "font-bold underline" : "hover:underline"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}