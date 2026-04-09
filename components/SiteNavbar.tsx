"use client";

import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  NavbarMenuToggle, NavbarMenu, NavbarMenuItem,
  Button, Link,
} from "@heroui/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to content
      </a>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBlurred
        shouldHideOnScroll
        maxWidth="xl"
        classNames={{
          base: `${isScrolled ? "bg-background/80 shadow-lg shadow-black/10" : "bg-background/40"} border-b border-divider transition-all duration-500`,
          wrapper: "max-w-7xl px-6",
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-foreground" />
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-3 no-underline group">
              <img src="https://armaris.lt/wp-content/uploads/2023/06/Untitled-design.png" alt="Armaris.lt" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span className="font-bold text-lg text-foreground tracking-tight">Armaris.lt</span>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link href="/" className={`text-sm font-medium transition-colors duration-200 ${pathname === "/" ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}>
            Pradžia
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/vykdomi-projektai"}>
          <Link href="/vykdomi-projektai" className={`text-sm font-medium transition-colors duration-200 ${pathname === "/vykdomi-projektai" ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}>
            Vykdomi projektai
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/igyvendinti-projektai"}>
          <Link href="/igyvendinti-projektai" className={`text-sm font-medium transition-colors duration-200 ${pathname === "/igyvendinti-projektai" ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}>
            Įgyvendinti projektai
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/namu-projektai"}>
          <Link href="/namu-projektai" className={`text-sm font-medium transition-colors duration-200 ${pathname === "/namu-projektai" ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}>
            Namų projektai
          </Link>
        </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <Button
              as={Link}
              href="/kontaktai"
              color="primary"
              variant="shadow"
              radius="full"
              size="sm"
              className="font-semibold"
            >
              Kontaktai
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="pt-8 bg-background/95 backdrop-blur-2xl">
        <NavbarMenuItem key="0">
          <Link className="w-full text-foreground" href="/" size="lg">Pradžia</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="1">
          <Link className="w-full text-foreground" href="/vykdomi-projektai" size="lg">Vykdomi projektai</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="2">
          <Link className="w-full text-foreground" href="/igyvendinti-projektai" size="lg">Įgyvendinti projektai</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="3">
          <Link className="w-full text-foreground" href="/namu-projektai" size="lg">Namų projektai</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="4">
          <Link className="w-full text-foreground" href="/kontaktai" size="lg">Kontaktai</Link>
        </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
