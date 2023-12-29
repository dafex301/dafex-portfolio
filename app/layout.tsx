import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "DaFeX %s",
    default: "DaFeX",
  },
  description: "DaFeX's personal website",
  metadataBase: new URL("https://dafex.tech/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-700`}>
        <Header
          links={[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: "/blogs", label: "Blogs" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
