"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip, Image, Spacer, Avatar, ScrollShadow } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";
import { ArrowRight, Building2, Check, ChevronRight, Clock, Globe, Mail, MapPin, MessageSquare, Phone, Send, Star, Users } from "lucide-react";

export default function Kontaktai() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section className="py-20 lg:py-28 bg-background" data-hero-bg>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center" data-hero-title>
            <Chip variant="flat" color="primary" size="lg">
              Susisiekite
            </Chip>
            <Spacer y={4} />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Kontaktai
            </h1>
            <Spacer y={4} />
            <p className="text-lg text-default-500 max-w-2xl mx-auto" data-hero-sub>
              Turite klausimų? Susisiekite su mumis naudodami žemiau esančią formą ir mes atsakysime kuo greičiau.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-content1" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-reveal-stagger>
            <Card shadow="md" isHoverable data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="pb-0">
                <Chip variant="flat" color="primary" size="sm">
                  Parašykite mums
                </Chip>
                <Spacer y={2} />
                <h2 className="text-2xl font-bold text-foreground">Siųsti žinutę</h2>
                <p className="text-default-500">Užpildykite formą ir mes su jumis susisieksime</p>
              </CardHeader>
              <CardBody>
                <form className="flex flex-col gap-4">
                  <Input
                    type="text"
                    label="Vardas"
                    variant="bordered"
                    color="primary"
                    startContent={<MessageSquare className="w-4 h-4 text-default-400" />}
                  />
                  <Input
                    type="email"
                    label="El. paštas"
                    variant="bordered"
                    color="primary"
                    startContent={<Mail className="w-4 h-4 text-default-400" />}
                  />
                  <Input
                    type="tel"
                    label="Telefonas"
                    variant="bordered"
                    color="primary"
                    startContent={<Phone className="w-4 h-4 text-default-400" />}
                  />
                  <Textarea
                    label="Žinutė"
                    variant="bordered"
                    color="primary"
                    minRows={4}
                    startContent={<MessageSquare className="w-4 h-4 text-default-400 self-start mt-3" />}
                  />
                  <Spacer y={4} />
                  <Button
                    color="primary"
                    size="lg"
                    type="submit"
                    variant="shadow"
                    endContent={<Send className="w-4 h-4" />}
                  >
                    Siųsti
                  </Button>
                </form>
              </CardBody>
            </Card>

            <div className="flex flex-col gap-8">
              <Card shadow="md" isHoverable data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
                <CardHeader>
                  <Chip variant="flat" color="secondary" size="sm">
                    Sekite mus
                  </Chip>
                  <Spacer y={2} />
                  <h2 className="text-2xl font-bold text-foreground">Socialiniai tinklai</h2>
                  <p className="text-default-500">Prisijunkite prie mūsų bendruomenės</p>
                </CardHeader>
                <CardBody>
                  <div className="grid grid-cols-2 gap-4" data-reveal-stagger>
                    <Button
                      variant="bordered"
                      color="primary"
                      startContent={<Facebook className="w-5 h-5" />}
                      as={Link}
                      href="https://www.facebook.com/parduodaminamai"
                      showAnchorIcon={false}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="bordered"
                      color="primary"
                      startContent={<Linkedin className="w-5 h-5" />}
                      as={Link}
                      href="https://www.linkedin.com/company/uab-armaris/"
                      showAnchorIcon={false}
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="bordered"
                      color="primary"
                      startContent={<Youtube className="w-5 h-5" />}
                      as={Link}
                      href="https://www.youtube.com/channel/UCVKlPflF6iYTPP0UKLZN08g"
                      showAnchorIcon={false}
                    >
                      YouTube
                    </Button>
                    <Button
                      variant="bordered"
                      color="primary"
                      startContent={<Globe className="w-5 h-5" />}
                      as={Link}
                      href="https://armaris.lt"
                      showAnchorIcon={false}
                    >
                      Svetainė
                    </Button>
                  </div>
                </CardBody>
              </Card>

              <Card shadow="md" isHoverable data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
                <CardHeader>
                  <Chip variant="flat" color="secondary" size="sm">
                    Informacija
                  </Chip>
                  <Spacer y={2} />
                  <h2 className="text-2xl font-bold text-foreground">Armaris.lt</h2>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-10 rounded-full">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-default-400">Įmonė</p>
                        <p className="text-foreground font-medium">UAB Armaris</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-10 rounded-full">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-default-400">Svetainė</p>
                        <Link href="https://armaris.lt" showAnchorIcon color="primary">
                          armaris.lt
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Chip variant="flat" color="primary" size="lg">
              Dažniausiai užduodami klausimai
            </Chip>
            <Spacer y={4} />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Dažni klausimai</h2>
            <Spacer y={8} />
            <div className="max-w-3xl mx-auto">
              <div className="bg-content1/60 backdrop-blur-xl border border-default-100 rounded-lg p-6">
                <p className="text-default-500 text-center">
                  Turite klausimų apie mūsų paslaugas? Susisiekite su mumis ir mes mielai atsakysime į visus jūsų klausimus. Galite užpildyti kontaktinę formą arba sekti mus socialiniuose tinkluose.
                </p>
                <Spacer y={6} />
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    color="primary"
                    variant="shadow"
                    startContent={<MessageSquare className="w-4 h-4" />}
                  >
                    Užduoti klausimą
                  </Button>
                  <Button
                    color="primary"
                    variant="bordered"
                    startContent={<ArrowRight className="w-4 h-4" />}
                  >
                    Peržiūrėti paslaugas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-content2" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center" data-reveal-heading>
            <Chip variant="flat" color="primary" size="lg">
              Mūsų darbai
            </Chip>
            <Spacer y={4} />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Peržiūrėkite mūsų projektus</h2>
            <Spacer y={4} />
            <p className="text-default-500 max-w-2xl mx-auto">
              Susipažinkite su mūsų įgyvendintais projektais ir įsitikinkite mūsų kokybe
            </p>
          </div>
          <Spacer y={8} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal-stagger>
            <Card shadow="md" isHoverable isPressable data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="absolute z-10 pb-0 pt-6">
                <Chip variant="dot" color="primary">
                  Namų projektai
                </Chip>
              </CardHeader>
              <CardBody className="p-0">
                <Image
                  src="https://armaris.lt/wp-content/uploads/2020/05/home-1-rev-img-1.png"
                  alt="Namų projektai"
                  isBlurred
                  radius="lg"
                  classNames={{
                    img: "w-full h-full object-cover",
                    wrapper: "w-full aspect-video",
                  }}
                />
              </CardBody>
              <CardFooter className="absolute bottom-0 z-10 bg-content1/80 backdrop-blur-xl border-t border-divider">
                <div>
                  <p className="text-foreground font-bold">Įvairūs namų projektai</p>
                  <p className="text-default-500 text-small">Aukštos kokybės namų statybos sprendimai</p>
                </div>
              </CardFooter>
            </Card>

            <Card shadow="md" isHoverable isPressable data-hover-lift className="bg-content1/60 backdrop-blur-xl border border-default-100">
              <CardHeader className="absolute z-10 pb-0 pt-6">
                <Chip variant="dot" color="secondary">
                  Statybos darbai
                </Chip>
              </CardHeader>
              <CardBody className="p-0">
                <Image
                  src="https://armaris.lt/wp-content/uploads/2020/06/90564160_234420907948244_3547620218874363904_n-768x432.jpg.webp"
                  alt="Statybos darbai"
                  isBlurred
                  isZoomed
                  radius="lg"
                  classNames={{
                    img: "w-full h-full object-cover",
                    wrapper: "w-full aspect-video",
                  }}
                />
              </CardBody>
              <CardFooter className="absolute bottom-0 z-10 bg-content1/80 backdrop-blur-xl border-t border-divider">
                <div>
                  <p className="text-foreground font-bold">Profesionalios paslaugos</p>
                  <p className="text-default-500 text-small">Patirtis ir kokybė kiekviename projekte</p>
                </div>
              </CardFooter>
            </Card>
          </div>
          <Spacer y={8} />
          <div className="text-center">
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              endContent={<ArrowRight className="w-4 h-4" />}
            >
              Peržiūrėti visus projektus
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-content1" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Pasiruošę pradėti projektą?
            </h2>
            <p className="text-foreground/80 max-w-xl mx-auto mb-6">
              Susisiekite su mumis šiandien ir gaukite nemokamą konsultaciją dėl jūsų statybos projekto
            </p>
            <Button
              color="secondary"
              variant="shadow"
              size="lg"
              className="font-bold"
              endContent={<ArrowRight className="w-4 h-4" />}
            >
              Susisiekti dabar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}