import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dafex Portfolio",
  description: "Portfolio that shows my projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          links={[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
