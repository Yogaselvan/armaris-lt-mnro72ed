"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip, Image, Spacer, Tabs, Tab, Accordion, AccordionItem, Tooltip, Avatar, Progress, ScrollShadow } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";
import { ArrowRight, Building2, Check, ChevronRight, Clock, Mail, MapPin, Phone, Star, Users } from "lucide-react";

export default function VykdomiProjektai() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section data-hero-bg className="py-20 lg:py-28 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center" data-hero-title>
            <Chip variant="flat" color="primary" className="mb-4">
              Vykdomi projektai
            </Chip>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Mūsų einamieji projektai
            </h1>
            <p className="text-default-500 text-lg max-w-2xl mx-auto" data-hero-sub>
              Šiuo metu įgyvendiname keletą stambių projektų, kurie demonstruoja mūsų kompetenciją profesionalių paslaugų srityje.
            </p>
          </div>
          <Spacer y={12} />
          <div className="flex justify-center gap-4" data-hero-sub>
            <Button variant="shadow" color="primary" size="lg" endContent={<ArrowRight className="w-4 h-4" />}>
              Susisiekti su mumis
            </Button>
            <Button variant="bordered" color="primary" size="lg">
              Peržiūrėti portfolio
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Chip variant="flat" color="primary" className="mb-4">
              Projektų apžvalga
            </Chip>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-reveal-heading>
              Aktyvūs projektai
            </h2>
            <p className="text-default-500 text-lg max-w-2xl mx-auto">
              Kiekvienas projektas yra vykdomas laikantis aukščiausių kokybės standartų ir laiku pristatomas klientams.
            </p>
          </div>
          <Spacer y={8} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal-stagger>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Verslo klientų aptarnavimas</h3>
                  <p className="text-default-500 text-sm">Vykdomas projektas</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-default-500">
                  Teikiame kompleksines profesionalių paslaugų sprendimus verslo klientams, užtikrinant kokybišką bendradarbiavimą ir rezultatus.
                </p>
              </CardBody>
              <CardFooter>
                <Link showAnchorIcon href="#" color="primary" className="text-primary">
                  Sužinoti daugiau
                </Link>
              </CardFooter>
            </Card>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Individualūs sprendimai</h3>
                  <p className="text-default-500 text-sm">Vykdomas projektas</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-default-500">
                  Kiekvienam klientui pritaikome individualius sprendimus, atsižvelgdami į specifinius poreikius ir tikslus.
                </p>
              </CardBody>
              <CardFooter>
                <Link showAnchorIcon href="#" color="primary" className="text-primary">
                  Sužinoti daugiau
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-content1" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Chip variant="flat" color="primary" className="mb-4">
              Projektų eigą
            </Chip>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-reveal-heading>
              Kaip mes dirbame
            </h2>
            <p className="text-default-500 text-lg max-w-2xl mx-auto">
              Mūsų darbo procesas užtikrina skaidrumą ir kokybę kiekviename projekto etape.
            </p>
          </div>
          <Spacer y={8} />
          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Konsultacija" title="Pradinė konsultacija" className="bg-content1/60 backdrop-blur-xl border border-default-100 rounded-lg">
              <p className="text-default-500 pb-4">Susipažįstame su jūsų poreikiais ir tikslais, kad galėtume pasiūlyti geriausius sprendimus.</p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Planavimas" title="Projekto planavimas" className="bg-content1/60 backdrop-blur-xl border border-default-100 rounded-lg">
              <p className="text-default-500 pb-4">Sudarome detalaus plano su aiškiomis užduotimis ir terminais.</p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Įgyvendinimas" title="Įgyvendinimas" className="bg-content1/60 backdrop-blur-xl border border-default-100 rounded-lg">
              <p className="text-default-500 pb-4">Aktyviai dirbame prie projekto, nuolat informuodami jus apie eigą.</p>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Pristatymas" title="Projekto pristatymas" className="bg-content1/60 backdrop-blur-xl border border-default-100 rounded-lg">
              <p className="text-default-500 pb-4">Baigę projektą, pristatome rezultatus ir suteikiame paramą.</p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Chip variant="flat" color="primary" className="mb-4">
              Galerija
            </Chip>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-reveal-heading>
              Mūsų darbai
            </h2>
            <p className="text-default-500 text-lg max-w-2xl mx-auto">
              Peržiūrėkite mūsų įvykdytų ir vykdomų projektų pavyzdžius.
            </p>
          </div>
          <Spacer y={8} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal-stagger>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100 overflow-hidden">
              <Image
                isBlurred
                isZoomed
                width="100%"
                alt="Projekto pavyzdys 1"
                src="https://armaris.lt/wp-content/uploads/2020/07/gallery-1.jpg.webp"
                radius="lg"
                className="w-full object-cover"
              />
            </Card>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100 overflow-hidden">
              <Image
                isBlurred
                isZoomed
                width="100%"
                alt="Projekto pavyzdys 2"
                src="https://armaris.lt/wp-content/uploads/2020/07/gallery-2.jpg.webp"
                radius="lg"
                className="w-full object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-content2" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Chip variant="flat" color="primary" className="mb-4">
              Kontaktai
            </Chip>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-reveal-heading>
              Susisiekite su mumis
            </h2>
            <p className="text-default-500 text-lg max-w-2xl mx-auto">
              Turite klausimų apie vykdomus projektus? Susisiekite su mumis jau šiandien.
            </p>
          </div>
          <Spacer y={8} />
          <div className="flex flex-wrap justify-center gap-4" data-reveal-stagger>
            <Button variant="shadow" color="primary" size="lg" startContent={<Phone className="w-4 h-4" />}>
              Susisiekti telefonu
            </Button>
            <Button variant="bordered" color="primary" size="lg" startContent={<Mail className="w-4 h-4" />}>
              Siųsti el. laišką
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-content1 border-t border-divider">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Tooltip content="Facebook">
                <Button isIconOnly variant="light" as={Link} href="https://www.facebook.com/parduodaminamai" target="_blank">
                  <Facebook className="w-5 h-5 text-default-500" />
                </Button>
              </Tooltip>
              <Tooltip content="YouTube">
                <Button isIconOnly variant="light" as={Link} href="https://www.youtube.com/channel/UCVKlPflF6iYTPP0UKLZN08g" target="_blank">
                  <Youtube className="w-5 h-5 text-default-500" />
                </Button>
              </Tooltip>
              <Tooltip content="LinkedIn">
                <Button isIconOnly variant="light" as={Link} href="https://www.linkedin.com/company/uab-armaris/" target="_blank">
                  <Linkedin className="w-5 h-5 text-default-500" />
                </Button>
              </Tooltip>
              <Tooltip content="Instagram">
                <Button isIconOnly variant="light" as={Link} href="https://www.instagram.com/qodeinteractive/" target="_blank">
                  <Instagram className="w-5 h-5 text-default-500" />
                </Button>
              </Tooltip>
            </div>
            <p className="text-default-400 text-sm text-center">
              © 2024 Armaris.lt. Visos teisės saugomos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}