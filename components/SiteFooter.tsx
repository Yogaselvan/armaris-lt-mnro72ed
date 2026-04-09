"use client";

import { Link, Divider, Image, Spacer } from "@heroui/react";


export function SiteFooter() {
  return (
    <footer className="relative bg-content1 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand + Address */}
          <div className="lg:col-span-1">
            <Image src="https://armaris.lt/wp-content/uploads/2023/06/Untitled-design.png" alt="Armaris.lt" radius="none" removeWrapper className="h-12 w-auto mb-5 object-contain opacity-90" />
            <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">Armaris.lt</h3>
            
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">Navigacija</h4>
            <Link href="/" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">Pradžia</Link>
            <Link href="/vykdomi-projektai" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">Vykdomi projektai</Link>
            <Link href="/igyvendinti-projektai" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">Įgyvendinti projektai</Link>
            <Link href="/namu-projektai" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">Namų projektai</Link>
            <Link href="/kontaktai" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-3">Kontaktai</Link>
          </div>

          {/* Contact Info */}
          

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">Socialiniai tinklai</h4>
              <Link href="https://www.youtube.com/watch?v=ls8CJcvJGHM" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="YouTube">YouTube</Link>
              <Link href="https://www.facebook.com/parduodaminamai" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="Facebook">Facebook</Link>
              <Link href="https://www.youtube.com/channel/UCVKlPflF6iYTPP0UKLZN08g" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="YouTube">YouTube</Link>
              <Link href="https://www.linkedin.com/company/uab-armaris/" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="LinkedIn">LinkedIn</Link>
              <Link href="https://www.facebook.com/QodeInteractive/" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="Facebook">Facebook</Link>
              <Link href="https://www.instagram.com/qodeinteractive/" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="Instagram">Instagram</Link>
              <Link href="https://www.youtube.com/QodeInteractiveVideos" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="YouTube">YouTube</Link>
              <Link href="https://www.linkedin.com/company/qode-themes/" isExternal className="text-default-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 mb-2" aria-label="LinkedIn">LinkedIn</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <Spacer y={8} />
        <Divider />
        <Spacer y={4} />
        <p className="text-center text-xs text-default-400">&copy; 2026 Armaris.lt. Visos teisės saugomos.</p>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
    </footer>
  );
}
