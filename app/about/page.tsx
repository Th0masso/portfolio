import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Ingénieur développeur freelance, React et Node, 4 ans. Theodo, Safran SFCO2, Run for Peace. France, remote.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="pb-24 pt-10 md:pt-16">
      <Container>
        <div className="grid min-w-0 items-end gap-8 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-14 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <Reveal>
            <div className="flex items-center gap-4 md:block">
              <Portrait
                className="h-16 w-16 shrink-0 md:hidden"
                sizes="64px"
                priority
              />
              <div className="min-w-0">
                <p className="text-sm tracking-[0.18em] uppercase text-ink/60">
                  À propos
                </p>
                <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2rem,9vw,4.5rem)] tracking-tight md:mt-4">
                  Ingénieur développeur, pas une agence.
                </h1>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="hidden md:block">
            <Portrait className="w-full" sizes="18rem" priority />
          </Reveal>
        </div>
        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-[1fr_1fr] md:gap-20">
          <Reveal>
            <div className="space-y-6 text-lg md:text-xl">
              <p>
                Software engineer avec 4 ans d’expérience en web et mobile. Je
                travaille surtout avec React et Node.js, de la conception à la
                mise en production. Code propre, architecture claire, produits
                qui tiennent dans la durée.
              </p>
              <p>
                Chez Theodo (2022 → 2026), développement full-stack sur des
                produits web et parfois mobiles : features, qualité (CI/CD, code
                review), audits de sécurité, DevX. Passage notable sur SFCO2
                (Safran) : optimisation carburant aérien, Node.js / AWS, React,
                React Native.
              </p>
              <p>
                Aujourd’hui en freelance. Diplômé ISEP (ingénieur du numérique),
                avec un Erasmus à l’École polytechnique de Cracovie. Français
                natif, anglais B2.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h2 className="text-sm tracking-[0.16em] uppercase text-ink/55">
                Stack
              </h2>
              <ul className="mt-4 space-y-2 text-lg">
                <li>Backend : Node.js, Symfony (PHP), Go</li>
                <li>Frontend : React, React Native, Angular</li>
                <li>Data : SQL, NoSQL (Dynamo, Elastic)</li>
                <li>DevOps : Docker, AWS, Azure</li>
              </ul>
              <h2 className="mt-10 text-sm tracking-[0.16em] uppercase text-ink/55">
                Je ne vends pas
              </h2>
              <ul className="mt-4 space-y-3 text-lg">
                <li>Design pur</li>
                <li>Publicité / ads</li>
                <li>No-code only</li>
              </ul>
              <p className="mt-10 text-lg">
                Si vous avez besoin d’un produit qui part en prod,{" "}
                <Link href="/contact" className="underline underline-offset-4">
                  écrivez-moi
                </Link>
                .
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-block text-lg hover:underline"
              >
                {site.email}
              </a>
              <p className="mt-4 text-base text-ink/70">
                {site.location} · {site.availability}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
