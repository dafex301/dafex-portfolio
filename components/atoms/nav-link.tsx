"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={
        isActive
          ? "text-gray-100 flex flex-col items-center transition-all"
          : "text-gray-500 opacity-60 hover:opacity-100 hover:text-gray-200 transition-all"
      }
      href={href}
    >
      <div>{label}</div>
      <div
        className={
          isActive
            ? "w-2 h-2 rounded-full bg-yellow-500 opacity-100 transition-all"
            : "opacity-0 transition-all"
        }
      ></div>
    </Link>
  );
};
