import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="pb-14 pt-8 md:pb-24 md:pt-16">
      <Container>
        <div className="grid min-w-0 items-end gap-8 md:grid-cols-[minmax(0,1fr)_min(38%,22rem)] md:gap-14 lg:grid-cols-[minmax(0,1fr)_min(36%,26rem)]">
          <div className="min-w-0">
            <Reveal>
              <div className="flex items-center gap-4">
                <Portrait
                  className="h-14 w-14 shrink-0 md:hidden"
                  sizes="56px"
                  priority
                />
                <p className="text-sm tracking-[0.18em] uppercase text-ink/70">
                  {site.title}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 font-serif text-[clamp(2.75rem,14vw,9.5rem)] leading-[0.88] tracking-tight text-ink md:mt-6">
                Thomas
                <br />
                Hercule
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-lg leading-snug md:mt-8 md:text-3xl">
                {site.displayTitle}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-base text-ink/85 md:mt-6 md:text-xl">
                {site.positioning}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 text-sm text-ink/70 md:mt-4 md:text-base">
                {site.metaLine}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex cursor-pointer items-center justify-center bg-accent px-6 py-3 text-base font-medium text-paper transition-colors duration-500 hover:bg-ink"
                >
                  Écrire
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-2 py-3 text-base text-ink underline-offset-4 hover:underline"
                >
                  Voir le travail
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="hidden md:block">
            <Portrait
              className="w-full"
              sizes="(max-width: 1024px) 22rem, 26rem"
              priority
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
