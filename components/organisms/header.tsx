import Link from "next/link";
import { NavLink } from "../atoms/nav-link";

interface LinkProps {
  href: string;
  label: string;
}

interface HeaderProps {
  links: LinkProps[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="bg-gray-700 pb-6">
      <div className="flex justify-between xl:mx-64 md:mx-24 mx-5 pt-8">
        <Link className="text-white font-bold text-2xl" href={"/"}>
          DAFEX
        </Link>
        <div className="flex gap-4 font-semibold">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </header>
  );
};
