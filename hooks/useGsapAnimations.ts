"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check if user prefers reduced motion.
 * All GSAP animations are skipped when this returns true.
 */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ─── Hero Animation Sequence ────────────────────────────────────────────

/**
 * Orchestrated hero load sequence:
 * 1. Background fades in with subtle scale-down (1.05 → 1)
 * 2. Navigation slides down
 * 3. Headline reveals word-by-word
 * 4. Subtext and CTA fade up
 */
export function useHeroAnimation(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Background scale-down
      const heroBg = containerRef.current?.querySelector("[data-hero-bg]");
      if (heroBg) {
        gsap.set(heroBg, { scale: 1.05, opacity: 0 });
        tl.to(heroBg, { scale: 1, opacity: 1, duration: 0.8 });
      }

      // Hero text reveal
      const heroTitle = containerRef.current?.querySelector("[data-hero-title]");
      if (heroTitle) {
        // Split into words
        const text = heroTitle.textContent || "";
        heroTitle.innerHTML = text
          .split(" ")
          .map((w) => `<span class="inline-block overflow-hidden"><span class="inline-block" style="transform:translateY(100%);opacity:0">${w}</span></span>`)
          .join(" ");
        const words = heroTitle.querySelectorAll("span > span");
        tl.to(words, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, "-=0.3");
      }

      // Subtext + CTA fade up
      const heroSub = containerRef.current?.querySelectorAll("[data-hero-sub]");
      if (heroSub?.length) {
        gsap.set(heroSub, { y: 30, opacity: 0 });
        tl.to(heroSub, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 }, "-=0.2");
      }
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}

// ─── Scroll Reveal ──────────────────────────────────────────────────────

/**
 * Fade-up reveal for any element with [data-reveal] attribute.
 * Cards stagger in with 0.15s delay between siblings.
 */
export function useScrollReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Individual reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      });

      // Staggered card reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((container) => {
        const children = container.children;
        gsap.fromTo(children,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.2)",
            scrollTrigger: { trigger: container, start: "top 80%", toggleActions: "play none none none" },
          }
        );
      });

      // Section headings — clip-path reveal
      gsap.utils.toArray<HTMLElement>("[data-reveal-heading]").forEach((el) => {
        gsap.fromTo(el,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          {
            clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.8, ease: "power3.inOut",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      });

      // Image parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(el,
          { y: -30 },
          {
            y: 30, ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
          }
        );
      });

      // Counter animation
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = parseInt(el.getAttribute("data-counter") || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 2, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}

// ─── Micro-interactions ─────────────────────────────────────────────────

/**
 * Button hover: scale 1.05 + gradient shift
 * Card hover: lift y:-8 + shadow expansion + border glow
 */
export function useMicroInteractions(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Card hover lift
      gsap.utils.toArray<HTMLElement>("[data-hover-lift]").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.3)", duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.1)", duration: 0.3, ease: "power2.out" });
        });
      });

      // Nav link underline animation
      gsap.utils.toArray<HTMLElement>("[data-nav-underline]").forEach((link) => {
        const line = link.querySelector("[data-underline]");
        if (!line) return;
        gsap.set(line, { scaleX: 0, transformOrigin: "left" });
        link.addEventListener("mouseenter", () => {
          gsap.to(line, { scaleX: 1, duration: 0.3, ease: "power2.out" });
        });
        link.addEventListener("mouseleave", () => {
          gsap.to(line, { scaleX: 0, duration: 0.2, ease: "power2.in" });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}

// ─── Pinned/Horizontal Scroll Section ───────────────────────────────────

/**
 * Creates a horizontal scroll section pinned during scroll.
 * The container should have a [data-horizontal-scroll] attribute
 * and an inner wrapper with overflow visible.
 */
export function useHorizontalScroll(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const section = containerRef.current?.querySelector("[data-horizontal-scroll]") as HTMLElement | null;
      const wrapper = section?.querySelector("[data-horizontal-wrapper]") as HTMLElement | null;
      if (!section || !wrapper) return;

      const scrollWidth = wrapper.scrollWidth - section.clientWidth;

      gsap.to(wrapper, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}
