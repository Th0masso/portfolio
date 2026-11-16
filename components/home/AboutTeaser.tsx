import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/motion/Reveal";

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="about-teaser">
      <Container>
        <div className="grid min-w-0 items-center gap-8 md:grid-cols-[12rem_1fr] md:gap-14 lg:grid-cols-[14rem_1fr]">
          <Reveal>
            <Portrait
              className="mx-auto w-28 sm:w-36 md:mx-0 md:w-full"
              sizes="(max-width: 768px) 9rem, 14rem"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="min-w-0 max-w-3xl">
              <h2
                id="about-teaser"
                className="font-serif text-[clamp(1.85rem,6vw,3rem)] tracking-tight"
              >
                À propos
              </h2>
              <p className="mt-6 text-base md:mt-8 md:text-xl">
                4 ans chez Theodo puis en freelance : React, Node.js, parfois du
                mobile. SFCO2 (Safran), Run for Peace, plateformes métier. France,
                remote. Ouvert aux missions.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-8">
                <Link
                  href="/about"
                  className="text-base underline-offset-4 hover:underline"
                >
                  Plus sur moi
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-base text-ink/80 hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
