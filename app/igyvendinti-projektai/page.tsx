"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip, Image, Spacer, Tabs, Tab, Accordion, AccordionItem, Tooltip, Avatar, Progress, ScrollShadow } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";
import { ArrowRight, Building2, Check, ChevronDown, ChevronRight, Clock, Heart, Mail, MapPin, Menu, Phone, Search, Send, Star, Users } from "lucide-react";

export default function IvyvendintiProjektai() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section className="py-20 lg:py-28 bg-background" data-hero-bg>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center" data-hero-title>
            <Chip color="primary" variant="flat" size="lg">
              Portfolio
            </Chip>
            <Spacer y={4} />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Įgyvendinti projektai
            </h1>
            <Spacer y={4} />
            <p className="text-lg text-default-500" data-hero-sub>
              Kiekvienas projektas – tai unikalus dizaino sprendimas, atitinkantis kliento poreikius ir viziją. Susipažinkite su mūsų įgyvendintais darbais.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-content1" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-reveal-heading>
            <Chip color="secondary" variant="dot">
              Mūsų darbai
            </Chip>
            <Spacer y={4} />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Atlikti projektai
            </h2>
            <Spacer y={4} />
            <p className="text-default-500 max-w-2xl mx-auto">
              Profesionalių paslaugų srityje kiekvienas projektas yra įgyvendinamas laikantis aukščiausių kokybės standartų.
            </p>
          </div>
          <Spacer y={8} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal-stagger>
            <Card isHoverable shadow="md" isPressable className="bg-content1/60 backdrop-blur-xl border border-default-100" data-hover-lift>
              <CardHeader className="flex gap-3 p-0">
                <Image
                  alt="Įgyvendintas projektas - biuro interjeras"
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-3.jpg.webp"
                  isBlurred
                  isZoomed
                  radius="lg"
                  shadow="md"
                  className="w-full object-cover h-64"
                />
              </CardHeader>
              <CardBody className="pb-6">
                <Spacer y={4} />
                <div className="flex gap-2 mb-3">
                  <Chip color="primary" variant="flat" size="sm">
                    Interjero sprendimai
                  </Chip>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Biuro patalpų įrengimas
                </h3>
                <p className="text-default-500 text-sm">
                  Modernus biuro interjero sprendimas, sukuriantis funkcionalią ir estetiškai patrauklią darbo aplinką.
                </p>
              </CardBody>
              <CardFooter className="pt-0">
                <Link
                  as={Button}
                  variant="light"
                  color="primary"
                  endContent={<ArrowRight className="w-4 h-4" />}
                  size="sm"
                >
                  Peržiūrėti projektą
                </Link>
              </CardFooter>
            </Card>
            <Card isHoverable shadow="md" isPressable className="bg-content1/60 backdrop-blur-xl border border-default-100" data-hover-lift>
              <CardHeader className="flex gap-3 p-0">
                <Image
                  alt="Įgyvendintas projektas - komercinės patalpos"
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-4.jpg.webp"
                  isBlurred
                  isZoomed
                  radius="lg"
                  shadow="md"
                  className="w-full object-cover h-64"
                />
              </CardHeader>
              <CardBody className="pb-6">
                <Spacer y={4} />
                <div className="flex gap-2 mb-3">
                  <Chip color="secondary" variant="flat" size="sm">
                    Komercinės patalpos
                  </Chip>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Komercinių patalpų dizainas
                </h3>
                <p className="text-default-500 text-sm">
                  Profesionalus komercinių patalpų įrengimas, atitinkantis verslo poreikius ir keliamus reikalavimus.
                </p>
              </CardBody>
              <CardFooter className="pt-0">
                <Link
                  as={Button}
                  variant="light"
                  color="primary"
                  endContent={<ArrowRight className="w-4 h-4" />}
                  size="sm"
                >
                  Peržiūrėti projektą
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-reveal-stagger>
            <div data-reveal-heading>
              <Chip color="primary" variant="dot">
                Kontaktai
              </Chip>
              <Spacer y={4} />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Susisiekite su mumis
              </h2>
              <Spacer y={4} />
              <p className="text-default-500">
                Turite klausimų apie mūsų paslaugas ar norite aptarti būsimą projektą? Susisiekite su mumis bet kuriuo patogiu būdu.
              </p>
              <Spacer y={8} />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-default-400">El. paštas</p>
                    <Link href="mailto:info@armaris.lt" className="text-foreground hover:text-primary transition-colors">
                      info@armaris.lt
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-default-400">Telefonas</p>
                    <Link href="tel:+37000000000" className="text-foreground hover:text-primary transition-colors">
                      +370 000 00000
                    </Link>
                  </div>
                </div>
              </div>
              <Spacer y={8} />
              <div className="flex gap-3">
                <Tooltip content="Facebook">
                  <Button isIconOnly variant="light" radius="full" as={Link} href="https://www.facebook.com/parduodaminamai" target="_blank" showAnchorIcon>
                    <Facebook className="w-5 h-5" />
                  </Button>
                </Tooltip>
                <Tooltip content="LinkedIn">
                  <Button isIconOnly variant="light" radius="full" as={Link} href="https://www.linkedin.com/company/uab-armaris/" target="_blank" showAnchorIcon>
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </Tooltip>
                <Tooltip content="YouTube">
                  <Button isIconOnly variant="light" radius="full" as={Link} href="https://www.youtube.com/channel/UCVKlPflF6iYTPP0UKLZN08g" target="_blank" showAnchorIcon>
                    <Youtube className="w-5 h-5" />
                  </Button>
                </Tooltip>
                <Tooltip content="Instagram">
                  <Button isIconOnly variant="light" radius="full" as={Link} href="https://www.instagram.com/qodeinteractive/" target="_blank" showAnchorIcon>
                    <Instagram className="w-5 h-5" />
                  </Button>
                </Tooltip>
              </div>
            </div>
            <div data-reveal>
              <Card data-hover-lift isHoverable shadow="md" className="bg-content1/60 backdrop-blur-xl border border-default-100 p-2">
                <CardBody>
                  <form className="flex flex-col gap-4">
                    <Input
                      label="Vardas"
                      variant="bordered"
                      color="primary"
                      startContent={
                        <Users className="w-4 h-4 text-default-400" />
                      }
                    />
                    <Input
                      label="El. paštas"
                      type="email"
                      variant="bordered"
                      color="primary"
                      startContent={
                        <Mail className="w-4 h-4 text-default-400" />
                      }
                    />
                    <Input
                      label="Telefonas"
                      type="tel"
                      variant="bordered"
                      color="primary"
                      startContent={
                        <Phone className="w-4 h-4 text-default-400" />
                      }
                    />
                    <Textarea
                      label="Jūsų žinutė"
                      variant="bordered"
                      color="primary"
                      minRows={4}
                    />
                    <Spacer y={2} />
                    <Button
                      variant="shadow"
                      color="primary"
                      size="lg"
                      endContent={<Send className="w-4 h-4" />}
                      className="w-full"
                    >
                      Siųsti užklausą
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-content2" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Avatar
                isBordered
                color="primary"
                name="Armaris.lt"
                size="lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Armaris.lt</h3>
                <p className="text-sm text-default-500">Profesionalios paslaugos</p>
              </div>
            </div>
            <Divider className="md:hidden" />
            <div className="flex flex-wrap justify-center gap-4">
              <Link as={Button} href="/" variant="light" size="sm">
                Pradžia
              </Link>
              <Link as={Button} href="/paslaugos" variant="light" size="sm">
                Paslaugos
              </Link>
              <Link as={Button} href="/apie-mus" variant="light" size="sm">
                Apie mus
              </Link>
              <Link as={Button} href="/kontaktai" variant="light" size="sm">
                Kontaktai
              </Link>
            </div>
          </div>
          <Spacer y={6} />
          <Divider />
          <Spacer y={6} />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-sm text-default-400">
              © 2024 Armaris.lt. Visos teisės saugomos.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/parduodaminamai" target="_blank" showAnchorIcon size="sm" variant="light">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/company/uab-armaris/" target="_blank" showAnchorIcon size="sm" variant="light">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCVKlPflF6iYTPP0UKLZN08g" target="_blank" showAnchorIcon size="sm" variant="light">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}