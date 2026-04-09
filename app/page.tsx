"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip, Image, Spacer, Tabs, Tab, Accordion, AccordionItem, Tooltip, Avatar, Progress, ScrollShadow } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";
import { ArrowRight, Award, Building2, Calendar, Check, ChevronRight, Clock, Globe, Heart, Mail, MapPin, Menu, MessageSquare, Phone, Send, Shield, Star, Target, Users, Zap } from "lucide-react";

export default function ArmarisHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section data-hero-bg className="relative min-h-screen overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{backgroundImage: "url('https://armaris.lt/wp-content/uploads/2020/05/home-1-rev-img-2.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-primary/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-screen">
          <div className="max-w-3xl">
            <Chip variant="flat" color="primary" className="mb-6" data-hero-sub>
              Profesionalios paslaugos nuo 2010 metų
            </Chip>
            <h1 data-hero-title className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Kuriname erdves, <br />
              <span className="text-primary">kuriose norisi gyventi</span>
            </h1>
            <p data-hero-sub className="text-xl text-default-500 mb-10 max-w-xl">
              Armaris.lt siūlo aukštos kokybės interjero dizaino ir remonto paslaugas. 
              Kiekvienas projektas – tai unikalus sprendimas jūsų poreikiams.
            </p>
            <div data-hero-sub className="flex flex-wrap gap-4">
              <Button 
                variant="shadow" 
                color="primary" 
                size="lg" 
                radius="full"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Nemokama konsultacija
              </Button>
              <Button 
                variant="bordered" 
                color="primary" 
                size="lg" 
                radius="full"
                as={Link}
                href="#portfolio"
              >
                Peržiūrėti darbus
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Chip variant="flat" color="primary">Kodėl rinktis mus</Chip>
            <Spacer y={4} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ką siūlome savo klientams
            </h2>
            <Spacer y={4} />
            <p className="text-default-500 max-w-2xl mx-auto">
              Daugiau nei dešimt metų patirties interjero dizino ir remonto srityje. 
              Kokybė ir klientų pasitenkinimas – mūsų pagrindinės vertybės.
            </p>
          </div>
          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-stagger>
            <Card isHoverable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Premium kokybė</h3>
                <p className="text-default-500">Naudojame tik aukščiausios kokybės medžiagas ir naujausias technologijas</p>
              </CardBody>
            </Card>
            <Card isHoverable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Laiku įvykdome</h3>
                <p className="text-default-500">Laikomės sutartų terminų ir informuojame apie eigą kiekviename etape</p>
              </CardBody>
            </Card>
            <Card isHoverable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Garantija</h3>
                <p className="text-default-500">Suteikiame garantiją atliktiems darbams ir naudojamoms medžiagoms</p>
              </CardBody>
            </Card>
            <Card isHoverable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Individualus požiūris</h3>
                <p className="text-default-500">Kiekvienas projektas unikalus – dirbame pagal jūsų viziją ir poreikius</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-content1" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-reveal-stagger>
            <div>
              <Chip variant="flat" color="primary">Mūsų paslaugos</Chip>
              <Spacer y={4} />
              <h2 data-reveal-heading className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Interjero dizainas ir remontas
              </h2>
              <p className="text-default-500 mb-8">
                Siūlome visas interjero dizino ir remonto paslaugas – nuo pirminės konsultacijos 
                iki galutinio projekto įgyvendinimo. Mūsų komanda užtikrina kokybę kiekviename darbų etape.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="text-foreground">Nemokamas projekto įvertinimas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="text-foreground">3D vizualizacijos prieš darbų pradžią</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="text-foreground">Statybos darbai su garantija</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="text-foreground">Montavimo ir pridavimo darbai</span>
                </div>
              </div>
              <Button 
                variant="shadow" 
                color="primary" 
                size="lg" 
                radius="full"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Sužinoti daugiau
              </Button>
            </div>
            <div className="relative">
              <Image
                isBlurred
                radius="lg"
                shadow="md"
                src="https://armaris.lt/wp-content/uploads/2020/05/home-1-rev-img-1.png"
                alt="Interjero dizainas"
                className="w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-foreground">10+</div>
                <div className="text-foreground/80 text-sm">Metų patirties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 lg:py-28 bg-background" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Chip variant="flat" color="primary">Mūsų darbai</Chip>
            <Spacer y={4} />
            <h2 data-reveal-heading className="text-3xl md:text-4xl font-bold text-foreground">
              Įgyvendinti projektai
            </h2>
            <Spacer y={4} />
            <p className="text-default-500 max-w-2xl mx-auto">
              Peržiūrėkite mūsų sėkmingai įgyvendintus projektus. Kiekvienas iš jų – 
              tai unikalus interjero sprendimas pagal kliento poreikius.
            </p>
          </div>
          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-stagger>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="absolute z-10 top-0">
                <Chip variant="flat" color="primary" size="sm">Gyvenamasis</Chip>
              </CardHeader>
              <CardBody className="p-0 overflow-hidden">
                <Image
                  isBlurred
                  isZoomed
                  radius="lg"
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-1.jpg.webp"
                  alt="Gyvenamojo interjero projektas"
                  className="w-full h-64 object-cover"
                />
              </CardBody>
              <CardFooter className="absolute bottom-0 bg-content1/80 backdrop-blur-xl border-t border-divider">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">Modernus butas</span>
                </div>
              </CardFooter>
            </Card>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="absolute z-10 top-0">
                <Chip variant="flat" color="primary" size="sm">Biuras</Chip>
              </CardHeader>
              <CardBody className="p-0 overflow-hidden">
                <Image
                  isBlurred
                  isZoomed
                  radius="lg"
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-2.jpg.webp"
                  alt="Biuro interjero projektas"
                  className="w-full h-64 object-cover"
                />
              </CardBody>
              <CardFooter className="absolute bottom-0 bg-content1/80 backdrop-blur-xl border-t border-divider">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">Verslo centras</span>
                </div>
              </CardFooter>
            </Card>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="absolute z-10 top-0">
                <Chip variant="flat" color="primary" size="sm">Gyvenamasis</Chip>
              </CardHeader>
              <CardBody className="p-0 overflow-hidden">
                <Image
                  isBlurred
                  isZoomed
                  radius="lg"
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-3.jpg.webp"
                  alt="Namų interjero projektas"
                  className="w-full h-64 object-cover"
                />
              </CardBody>
              <CardFooter className="absolute bottom-0 bg-content1/80 backdrop-blur-xl border-t border-divider">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">Privatus namas</span>
                </div>
              </CardFooter>
            </Card>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="absolute z-10 top-0">
                <Chip variant="flat" color="primary" size="sm">Komercinis</Chip>
              </CardHeader>
              <CardBody className="p-0 overflow-hidden">
                <Image
                  isBlurred
                  isZoomed
                  radius="lg"
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-4.jpg.webp"
                  alt="Komercinės patalpos"
                  className="w-full h-64 object-cover"
                />
              </CardBody>
              <CardFooter className="absolute bottom-0 bg-content1/80 backdrop-blur-xl border-t border-divider">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">Parduotuvė</span>
                </div>
              </CardFooter>
            </Card>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="absolute z-10 top-0">
                <Chip variant="flat" color="primary" size="sm">Restauravimas</Chip>
              </CardHeader>
              <CardBody className="p-0 overflow-hidden">
                <Image
                  isBlurred
                  isZoomed
                  radius="lg"
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-5.jpg.webp"
                  alt="Restauruotas interjeras"
                  className="w-full h-64 object-cover"
                />
              </CardBody>
              <CardFooter className="absolute bottom-0 bg-content1/80 backdrop-blur-xl border-t border-divider">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">Senovinis butas</span>
                </div>
              </CardFooter>
            </Card>
            <Card isHoverable isPressable shadow="md" data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="absolute z-10 top-0">
                <Chip variant="flat" color="primary" size="sm">Virtuvė</Chip>
              </CardHeader>
             CardBody>
                <Image
                  isBlurred
                  isZoomed
                  radius="lg"
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-6.jpg.webp"
                  alt="Virtuvės interjeras"
                  className="w-full h-64 object-cover"
                />
              </CardBody>
              <CardFooter className="absolute bottom-0 bg-content1/80 backdrop-blur-xl border-t border-divider">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">Modulinė virtuvė</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-content2" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Chip variant="flat" color="primary">Proceso žingsniai</Chip>
            <Spacer y={4} />
            <h2 data-reveal-heading className="text-3xl md:text-4xl font-bold text-foreground">
              Kaip mes dirbame
            </h2>
            <Spacer y={4} />
            <p className="text-default-500 max-w-2xl mx-auto">
              Mūsų darbo procesas – skaidrus ir efektyvus. Nuo pirmo susitikimo iki projekto perdavimo.
            </p>
          </div>
          <Accordion variant="splitted" selectionMode="multiple">
            <AccordionItem 
              key="1" 
              aria-label="Pirminė konsultacija"
              title={<span className="text-foreground font-semibold">Pirminė konsultacija</span>}
              startContent={<MessageSquare className="w-6 h-6 text-primary" />}
            >
              <div className="text-default-500 pb-4">
                Susitinkame su jumis, išklausome jūsų poreikius, pageidavimus ir biudžetą. 
                Aptariame galimybes ir preliminarų projekto laiką.
              </div>
            </AccordionItem>
            <AccordionItem 
              key="2" 
              aria-label="Projekto parengimas"
              title={<span className="text-foreground font-semibold">Projekto parengimas</span>}
              startContent={<Lightbulb className="w-6 h-6 text-primary" />}
            >
              <div className="text-default-500 pb-4">
                Paruošiame detalius brėžinius, 3D vizualizacijas ir medžiagų sąmatą. 
                Kartu su jumis tiksliname sprendimus iki galutinio patvirtinimo.
              </div>
            </AccordionItem>
            <AccordionItem 
              key="3" 
              aria-label="Statybos darbai"
              title={<span className="text-foreground font-semibold">Statybos darbai</span>}
              startContent={<Building2 className="w-6 h-6 text-primary" />}
            >
              <div className="text-default-500 pb-4">
                Atliekame visus remonto ir įrengimo darbus pagal patvirtintą projektą. 
                Nuolat informuojame apie eigą ir laiku sprendžiame iškylančius klausimus.
              </div>
            </AccordionItem>
            <AccordionItem 
              key="4" 
              aria-label="Galutinis pridavimas"
              title={<span className="text-foreground font-semibold">Galutinis pridavimas</span>}
              startContent={<Check className="w-6 h-6 text-primary" />}
            >
              <div className="text-default-500 pb-4">
                Atlikus visus darbus, atliekame galutinę patikrą, perduodame objektą ir 
                suteikiame garantiją atliktiems darbams.
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Chip variant="flat" color="primary">DUK</Chip>
            <Spacer y={4} />
            <h2 data-reveal-heading className="text-3xl md:text-4xl font-bold text-foreground">
              Dažniausiai užduodami klausimai
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion variant="splitted" selectionMode="multiple">
              <AccordionItem 
                key="faq1" 
                aria-label="Kiek laiko trunka interjero dizino projektas?"
                title={<span className="text-foreground font-semibold">Kiek laiko trunka interjero dizino projektas?</span>}
              >
                <div className="text-default-500 pb-4">
                  Vidutinis interjero dizino projektas trunka nuo 2 iki 6 savaičių, 
                  priklausomai nuo projekto dydžio ir sudėtingumo. Statybos darbai – 
                  nuo 1 iki 4 mėnesių.
                </div>
              </AccordionItem>
              <AccordionItem 
                key="faq2" 
                aria-label="Kokia yra interjero dizino paslaugų kaina?"
                title={<span className="text-foreground font-semibold">Kokia yra interjero dizino paslaugų kaina?</span>}
              >
                <div className="text-default-500 pb-4">
                  Kaina priklauso nuo projekto apimties, patalpų dydžio ir jūsų poreikių. 
                  Siūlome nemokamą pirminę konsultaciją, kurios metu pateiksime preliminarų įvertinimą.
                </div>
              </AccordionItem>
              <AccordionItem 
                key="faq3" 
                aria-label="Ar teikiate garantiją atliktiems darbams?"
                title={<span className="text-foreground font-semibold">Ar teikiate garantiją atliktiems darbams?</span>}
              >
                <div className="text-default-500 pb-4">
                  Taip, suteikiame garantiją visiems atliktiems darbams. Garantijos laikotarpis 
                  priklauso nuo atliktų darbų tipo ir paprastai svyruoja nuo 1 iki 5 metų.
                </div>
              </AccordionItem>
              <AccordionItem 
                key="faq4" 
                aria-label="Ar galite dirbti su mano biudžetu?"
                title={<span className="text-foreground font-semibold">Ar galite dirbti su mano biudžetu?</span>}
              >
                <div className="text-default-500 pb-4">
                  Žinoma! Kiekvieną projektą pritaikome prie kliento biudžeto. Galime 
                  pasiūlyti įvairius sprendimus – nuo ekonomiškų iki premium kategorijos.
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-content1" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-reveal-stagger>
            <div>
              <Chip variant="flat" color="primary">Susisiekite</Chip>
              <Spacer y={4} />
              <h2 data-reveal-heading className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Turite klausimų? <br />
                <span className="text-primary">Parašykite mums</span>
              </h2>
              <p className="text-default-500 mb-8">
                Užpildykite formą ir mes su jumis susisieksime per artimiausias 24 valandas. 
                Konsultacija nemokama!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-default-400 text-sm">Telefonas</div>
                    <div className="text-foreground font-medium">+370 600 00000</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-default-400 text-sm">El. paštas</div>
                    <div className="text-foreground font-medium">info@armaris.lt</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-default-400 text-sm">Adresas</div>
                    <div className="text-foreground font-medium">Vilnius, Lietuva</div>
                  </div>
                </div>
              </div>
            </div>
            <Card data-hover-lift isHoverable shadow="md" className="bg-content1/60 backdrop-blur-xl border border-default-100" shadow="md">
              <CardBody className="p-8">
                <div className="space-y-6">
                  <Input
                    label="Vardas"
                    variant="bordered"
                    color="primary"
                    startContent={<Users className="w-4 h-4 text-default-400" />}
                  />
                  <Input
                    label="El. paštas"
                    type="email"
                    variant="bordered"
                    color="primary"
                    startContent={<Mail className="w-4 h-4 text-default-400" />}
                  />
                  <Input
                    label="Telefonas"
                    type="tel"
                    variant="bordered"
                    color="primary"
                    startContent={<Phone className="w-4 h-4 text-default-400" />}
                  />
                  <Textarea
                    label="Žinutė"
                    variant="bordered"
                    color="primary"
                    minRows={4}
                  />
                  <Button 
                    variant="shadow" 
                    color="primary" 
                    size="lg" 
                    radius="full"
                    className="w-full"
                    endContent={<Send className="w-4 h-4" />}
                  >
                    Siųsti užklausą
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-content2 border-t border-divider" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" data-reveal-stagger>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Armaris.lt</h3>
              <p className="text-default-500">
                Profesionalios interjero dizino ir remonto paslaugos Lietuvoje. 
                Kurkime kartu jūsų svajonių erdvę.
              </p>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Paslaugos</h4>
              <div className="space-y-2">
                <Link className="block text-default-500 hover:text-primary" showAnchorIcon>
                  Interjero dizinas
                </Link>
                <Link className="block text-default-500 hover:text-primary" showAnchorIcon>
                  Kapitalinis remontas
                </Link>
                <Link className="block text-default-500 hover:text-primary" showAnchorIcon>
                  Baldų gamyba
                </Link>
                <Link className="block text-default-500 hover:text-primary" showAnchorIcon>
                  Konsultacijos
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Nuorodos</h4>
              <div className="space-y-2">
                <Link className="block text-default-500 hover:text-primary" showAnchorIcon>
                  Apie mus
                </Link>
                <Link className="block text-default-500 hover:text-primary" showAnchorIcon>
                  Portfolio
                </Link>
                <Link className="block text-default-500 hover:text-primary" showAnchorIcon>
                  Kontaktai
                </Link>
                <Link className="block text-default-500 hover:text-primary" showAnchorIcon>
                  Privatumo politika
                </Link>
              </div>
            </div>
          </div>
          <Divider className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-default-400 text-sm">
              © 2024 Armaris.lt. Visos teisės saugomos.
            </p>
            <div className="flex gap-4">
              <Tooltip content="Facebook">
                <Button isIconOnly variant="light" size="sm" as={Link} href="https://www.facebook.com/parduodaminamai">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </Button>
              </Tooltip>
              <Tooltip content="LinkedIn">
                <Button isIconOnly variant="light" size="sm" as={Link} href="https://www.linkedin.com/company/uab-armaris/">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Button>
              </Tooltip>
              <Tooltip content="YouTube">
                <Button isIconOnly variant="light" size="sm" as={Link} href="https://www.youtube.com/channel/UCVKlPflF6iYTPP0UKLZN08g">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}