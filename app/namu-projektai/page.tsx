"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip, Image, Spacer, Tabs, Tab, Accordion, AccordionItem, Tooltip, Avatar, Progress, ScrollShadow } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";
import { ArrowRight, Building2, Check, ChevronDown, ChevronRight, Clock, ExternalLink, Home, Mail, MapPin, Menu, Phone, Send, Star, Users } from "lucide-react";

export default function NamuProjektai() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section className="min-h-screen bg-background" data-hero-bg>
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="flex flex-col items-center text-center">
            <Chip variant="flat" color="primary" size="lg" data-reveal>
              Namų projektai
            </Chip>
            <Spacer y={6} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground" data-hero-title>
              Individualūs namų projektai
            </h1>
            <Spacer y={6} />
            <p className="text-default-500 text-lg md:text-xl max-w-3xl" data-hero-sub>
              Kurkime kartu svajonių namus. Mūsų komanda siūlo profesionalius namų projektus, pritaikytus jūsų poreikiams ir gyvenimo būdui.
            </p>
            <Spacer y={8} />
            <div className="flex flex-wrap gap-4" data-hero-sub>
              <Button
                variant="shadow"
                color="primary"
                size="lg"
                radius="full"
                endContent={<ArrowRight className="w-5 h-5" />}
                as={Link}
                href="#portfolio"
              >
                Peržiūrėti projektus
              </Button>
              <Button
                variant="bordered"
                color="primary"
                size="lg"
                radius="full"
                as={Link}
                href="#kontaktai"
              >
                Susisiekti
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-content1" id="portfolio" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Chip variant="flat" color="secondary" size="lg" data-reveal>
              Portfolio
            </Chip>
            <Spacer y={4} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-reveal-heading>
              Mūsų įgyvendinti projektai
            </h2>
            <Spacer y={4} />
            <p className="text-default-500 text-lg max-w-2xl mx-auto" data-reveal>
              Kiekvienas projektas yra unikalus - mes deriname funkcionalumą su estetika, kad sukurtume namus, kuriuose norisi gyventi.
            </p>
          </div>
          <Spacer y={8} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal-stagger>
            <Card
              isHoverable
              isPressable
              shadow="md"
              data-hover-lift
              className="bg-content1/60 backdrop-blur-xl border border-default-100"
            >
              <Card data-hover-lift isHoverable shadow="md"Header className="p-0 relative overflow-hidden">
                <Image
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-5.jpg.webp"
                  alt="Namų projektas - virtuvės erdvė"
                  isBlurred
                  isZoomed
                  radius="lg"
                  className="w-full h-64 object-cover"
                  shadow="md"
                />
              </CardHeader>
              <Card data-hover-lift isHoverable shadow="md"Body>
                <Chip variant="flat" color="primary" size="sm" className="mb-3">
                  Virtuvės projektas
                </Chip>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Moderni virtuvės zona
                </h3>
                <p className="text-default-500">
                  Erdvi ir funkcinali virtuvė su aukštos kokybės medžiagomis. Integruoti buitiniai prietaisai ir optimalus apšvietimas.
                </p>
              </CardBody>
              <Card data-hover-lift isHoverable shadow="md"Footer className="bg-content2/50 backdrop-blur-md">
                <Link
                  showAnchorIcon
                  anchorIcon={<ChevronRight className="w-4 h-4" />}
                  href="/portfolio/virtuve"
                  color="primary"
                  className="font-medium"
                >
                  Peržiūrėti projektą
                </Link>
              </CardFooter>
            </Card>

            <Card
              isHoverable
              isPressable
              shadow="md"
              data-hover-lift
              className="bg-content1/60 backdrop-blur-xl border border-default-100"
            >
              <Card data-hover-lift isHoverable shadow="md"Header className="p-0 relative overflow-hidden">
                <Image
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-6.jpg.webp"
                  alt="Namų projektas - svetainės erdvė"
                  isBlurred
                  isZoomed
                  radius="lg"
                  className="w-full h-64 object-cover"
                  shadow="md"
                />
              </CardHeader>
              <Card data-hover-lift isHoverable shadow="md"Body>
                <Chip variant="flat" color="primary" size="sm" className="mb-3">
                  Svetainės projektas
                </Chip>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Elegantiška svetainė
                </h3>
                <p className="text-default-500">
                  Stilinga svetainės zona su derančiomis baldų detalėmis. Klasikinis dizainas su moderniais akcentais.
                </p>
              </CardBody>
              <Card data-hover-lift isHoverable shadow="md"Footer className="bg-content2/50 backdrop-blur-md">
                <Link
                  showAnchorIcon
                  anchorIcon={<ChevronRight className="w-4 h-4" />}
                  href="/portfolio/svetaine"
                  color="primary"
                  className="font-medium"
                >
                  Peržiūrėti projektą
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-reveal-stagger>
            <div>
              <Chip variant="flat" color="primary" size="lg" data-reveal>
                Procesas
              </Chip>
              <Spacer y={4} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-reveal-heading>
                Kaip mes dirbame
              </h2>
              <Spacer y={4} />
              <p className="text-default-500 text-lg" data-reveal>
                Nuo pirmųjų susitikimo iki projekto įgyvendinimo - kiekviename etape užtikriname kokybę ir skaidrumą.
              </p>
              <Spacer y={8} />
              <Accordion variant="splitted" data-reveal-stagger>
                <AccordionItem
                  key="1"
                  aria-label="Konsultacija"
                  title="Nemokama konsultacija"
                  startContent={<Building2 className="w-5 h-5 text-primary" />}
                  indicator={<ChevronDown className="w-5 h-5 text-default-400" />}
                >
                  <p className="text-default-500 pl-12">
                    Susitikime aptarsime jūsų poreikius, pageidavimus ir biudžetą. Nemokama pradinė konsultacija padeda geriau suprasti projektą.
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Matavimai"
                  title="Išsamūs matavimai"
                  startContent={<Users className="w-5 h-5 text-primary" />}
                  indicator={<ChevronDown className="w-5 h-5 text-default-400" />}
                >
                  <p className="text-default-500 pl-12">
                    Atliksime tikslius patalpos matavimus, kad projektas būtų pritaikytas kiekvienam centimetrui.
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Projektas"
                  title="Individualus projektas"
                  startContent={<Home className="w-5 h-5 text-primary" />}
                  indicator={<ChevronDown className="w-5 h-5 text-default-400" />}
                >
                  <p className="text-default-500 pl-12">
                    Paruošime unikalų projektą su trimatėmis vizualizacijomis, kad galėtumėte pamatyti rezultatą iš anksto.
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Gamyba"
                  title=" Kokybės gamyba"
                  startContent={<Check className="w-5 h-5 text-primary" />}
                  indicator={<ChevronDown className="w-5 h-5 text-default-400" />}
                >
                  <p className="text-default-500 pl-12">
                    Gaminsime baldus naudodami aukščiausios kokybės medžiagas ir šiuolaikines technologijas.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
            <div data-reveal>
              <Card
                isHoverable
                shadow="md"
                data-hover-lift
                className="bg-content1/60 backdrop-blur-xl border border-default-100"
              >
                <Card data-hover-lift isHoverable shadow="md"Body className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        Nemokamas vizitinės patalpos įvertinimas
                      </h3>
                      <p className="text-default-500">Per 24 valandas</p>
                    </div>
                  </div>
                  <Divider className="my-4" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-default-500">Profesionalūs specialistai</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-default-500">Individualus požiūris</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-default-500">Nemokamos vizualizacijos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-default-500">Lūkesčių viršijimas</span>
                    </div>
                  </div>
                  <Spacer y={6} />
                  <Button
                    variant="shadow"
                    color="primary"
                    size="lg"
                    radius="full"
                    className="w-full"
                    endContent={<ArrowRight className="w-5 h-5" />}
                    as={Link}
                    href="#kontaktai"
                  >
                    Užsakyti konsultaciją
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-content2" id="kontaktai" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Chip variant="flat" color="primary" size="lg" data-reveal>
              Kontaktai
            </Chip>
            <Spacer y={4} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-reveal-heading>
              Susisiekite su mumis
            </h2>
            <Spacer y={4} />
            <p className="text-default-500 text-lg max-w-2xl mx-auto" data-reveal>
              Turite klausimų ar norite užsakyti projektą? Susisiekite su mumis ir mes mielai padėsime įgyvendinti jūsų svajones.
            </p>
          </div>
          <Spacer y={8} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-reveal-stagger>
            <Card
              isHoverable
              shadow="md"
              data-hover-lift
              className="bg-content1/60 backdrop-blur-xl border border-default-100"
            >
              <Card data-hover-lift isHoverable shadow="md"Body className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Siųsti žinutę
                </h3>
                <div className="space-y-4">
                  <Input
                    label="Vardas ir pavardė"
                    variant="bordered"
                    color="primary"
                    startContent={
                      <Users className="w-4 h-4 text-default-400" />
                    }
                    radius="md"
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary",
                    }}
                  />
                  <Input
                    label="El. paštas"
                    variant="bordered"
                    color="primary"
                    type="email"
                    startContent={
                      <Mail className="w-4 h-4 text-default-400" />
                    }
                    radius="md"
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary",
                    }}
                  />
                  <Input
                    label="Telefono numeris"
                    variant="bordered"
                    color="primary"
                    type="tel"
                    startContent={
                      <Phone className="w-4 h-4 text-default-400" />
                    }
                    radius="md"
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary",
                    }}
                  />
                  <Textarea
                    label="Žinutė"
                    variant="bordered"
                    color="primary"
                    radius="md"
                    minRows={4}
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary",
                    }}
                  />
                  <Spacer y={4} />
                  <Button
                    variant="shadow"
                    color="primary"
                    size="lg"
                    radius="full"
                    className="w-full"
                    endContent={<Send className="w-5 h-5" />}
                  >
                    Siųsti žinutę
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div className="space-y-6" data-reveal-stagger>
              <Card
                isHoverable
                shadow="md"
                data-hover-lift
                className="bg-content1/60 backdrop-blur-xl border border-default-100"
              >
                <Card data-hover-lift isHoverable shadow="md"Body className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Darbo laikas</h4>
                      <p className="text-default-500">I-IV: 8:00 - 17:00</p>
                      <p className="text-default-500">V: 8:00 - 16:00</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card
                isHoverable
                shadow="md"
                data-hover-lift
                className="bg-content1/60 backdrop-blur-xl border border-default-100"
              >
                <Card data-hover-lift isHoverable shadow="md"Body className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Telefonas</h4>
                      <Link
                        href="tel:+37000000000"
                        color="primary"
                        className="text-lg"
                      >
                        +370 000 00000
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card
                isHoverable
                shadow="md"
                data-hover-lift
                className="bg-content1/60 backdrop-blur-xl border border-default-100"
              >
                <Card data-hover-lift isHoverable shadow="md"Body className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">El. paštas</h4>
                      <Link
                        href="mailto:info@armaris.lt"
                        color="primary"
                        className="text-lg"
                      >
                        info@armaris.lt
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card
                isHoverable
                shadow="md"
                data-hover-lift
                className="bg-content1/60 backdrop-blur-xl border border-default-100"
              >
                <Card data-hover-lift isHoverable shadow="md"Body className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Buveinė</h4>
                      <p className="text-default-500">Lietuva</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Spacer y={4} />
              <div data-reveal>
                <h4 className="font-bold text-foreground mb-4">Sekite mus</h4>
                <div className="flex gap-3">
                  <Tooltip content="Facebook" placement="bottom">
                    <Button
                      isIconOnly
                      variant="light"
                      radius="full"
                      as={Link}
                      href="https://www.facebook.com/parduodaminamai"
                      target="_blank"
                    >
                      <Facebook className="w-5 h-5 text-default-500 hover:text-primary transition-colors" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="LinkedIn" placement="bottom">
                    <Button
                      isIconOnly
                      variant="light"
                      radius="full"
                      as={Link}
                      href="https://www.linkedin.com/company/uab-armaris/"
                      target="_blank"
                    >
                      <Linkedin className="w-5 h-5 text-default-500 hover:text-primary transition-colors" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="YouTube" placement="bottom">
                    <Button
                      isIconOnly
                      variant="light"
                      radius="full"
                      as={Link}
                      href="https://www.youtube.com/watch?v=ls8CJcvJGHM"
                      target="_blank"
                    >
                      <Youtube className="w-5 h-5 text-default-500 hover:text-primary transition-colors" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="Instagram" placement="bottom">
                    <Button
                      isIconOnly
                      variant="light"
                      radius="full"
                      as={Link}
                      href="https://www.instagram.com/qodeinteractive/"
                      target="_blank"
                    >
                      <Instagram className="w-5 h-5 text-default-500 hover:text-primary transition-colors" />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-content1 border-t border-divider" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Home className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Armaris.lt</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/"
                color="foreground"
                className="hover:text-primary transition-colors"
              >
                Pradžia
              </Link>
              <Link
                href="/paslaugos"
                color="foreground"
                className="hover:text-primary transition-colors"
              >
                Paslaugos
              </Link>
              <Link
                href="/portfolio"
                color="foreground"
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/apie-mus"
                color="foreground"
                className="hover:text-primary transition-colors"
              >
                Apie mus
              </Link>
              <Link
                href="#kontaktai"
                color="foreground"
                className="hover:text-primary transition-colors"
              >
                Kontaktai
              </Link>
            </div>
            <p className="text-default-400 text-sm">
              © 2024 Armaris.lt. Visos teisės saugomos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}