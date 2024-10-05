import { Hero } from "@/components/Hero/Hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Wrappers/Container";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Hero data={heroData} />
    </Container>
  );
}

const heroData = {
  id: 1,
  __component: "layout.hero",
  heading: "Empowering Digital Transformation",
  text: "Innofab entwickelt standardisierte sowie maßgeschneiderte Webseiten und individuelle IT-Lösungen für Startups und KMUs. Wir arbeiten mit persönlich bekannten und ausgewiesenen Entwicklern in Colombo, Sri Lanka zusammen. Unser Konzept verbindet ein nachhaltiges und fair bezahltes Entwicklungsprogramm mit einer professionellen IT-Agentur. Wir richten uns an klein- und mittelständische Unternehmen sowie Startups mit begrenztem Budget ",
  cta: {
    id: 7,
    href: "#",
    text: "Start Now",
    external: true,
  },
  image: {
    id: 2,
    url: "/img/hero.svg",
    alternativeText: "hero image",
    name: "hero.png",
  },
};
