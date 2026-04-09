import type { Metadata } from "next";
import { Providers } from "./providers";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Armaris.lt",
  description: "Armaris.lt",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <SiteNavbar />
          <main className="pt-16">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
