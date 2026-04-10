import { NavLink } from "react-router";
import Logo from "~/assets/images/logo.svg";

export default function LogoLink() {
  return (
    <NavLink to="/" className="flex items-center gap-3 shrink-0 group">
      <img
        src={Logo}
        width={40}
        height={40}
        alt="Logo ília Charts"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-xl font-bold tracking-tight">ília Charts</span>
    </NavLink>
  );
}
