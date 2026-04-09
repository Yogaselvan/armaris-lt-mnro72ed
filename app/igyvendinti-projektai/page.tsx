"use client";
import { Button, Card, CardBody, Chip, Spacer, Divider } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);
  return (
    <div ref={containerRef}>
      <section data-hero-bg className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Chip color="primary" variant="flat" size="sm" className="mb-4">Armaris.lt</Chip>
          <h1 data-hero-title className="text-foreground font-bold tracking-tight">igyvendinti-projektai</h1>
          <Spacer y={4} />
          <p data-hero-sub className="text-default-500 text-lg max-w-xl">Armaris.lt</p>
          <Spacer y={6} />
          <Button as="a" href="/contact" color="primary" variant="shadow" radius="full" size="lg">
            Susisiekti <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>
      <section data-reveal className="py-20 px-6 bg-content1">
        <div className="max-w-7xl mx-auto">
          <Divider className="mb-8 max-w-[96px]" />
          <h2 data-reveal-heading className="text-foreground font-bold mb-4">igyvendinti-projektai</h2>
          <p className="text-default-500 leading-relaxed max-w-3xl text-lg">Armaris.lt</p>
        </div>
      </section>
    </div>
  );
}
