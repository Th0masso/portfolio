import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectBadge } from "./ProjectBadge";

type CaseStudyProps = {
  project: Project;
  next: Project | null;
};

export function CaseStudy({ project, next }: CaseStudyProps) {
  const image = project.images[0];

  return (
    <article>
      <header className="border-b border-ink/10 pb-16 pt-10 md:pb-24 md:pt-16">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="text-sm tracking-wide text-ink/60">
                {project.client} · {project.year}
                {project.duration ? ` · ${project.duration}` : ""}
              </p>
              {project.badge ? <ProjectBadge label={project.badge} /> : null}
            </div>
            <h1 className="mt-4 break-words font-serif text-[clamp(2.25rem,10vw,6rem)] leading-[0.92] tracking-tight">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base md:mt-6 md:text-xl">
              {project.summary}
              {project.duration ? (
                <span className="whitespace-nowrap">
                  {"\u00A0"}({project.duration})
                </span>
              ) : null}
            </p>
            <dl className="mt-8 grid gap-5 text-base sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              <div>
                <dt className="text-sm text-ink/55">Rôle</dt>
                <dd className="mt-1">{project.role}</dd>
              </div>
              <div>
                <dt className="text-sm text-ink/55">Année</dt>
                <dd className="mt-1">{project.year}</dd>
              </div>
              {project.duration ? (
                <div>
                  <dt className="text-sm text-ink/55">Durée</dt>
                  <dd className="mt-1">{project.duration}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-sm text-ink/55">Stack</dt>
                <dd className="mt-1 break-words">{project.stack.join(" · ")}</dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </header>

      {image ? (
        <div className="relative aspect-[4/3] w-full bg-ink sm:aspect-[16/9] md:aspect-[16/8]">
          <Image
            src={image}
            alt={`${project.title}, ${project.client}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      ) : (
        <div
          className="flex min-h-[40vh] items-end bg-ink px-5 py-10 text-paper md:px-10"
          aria-hidden
        >
          <span className="font-serif text-[22vw] leading-none tracking-tight opacity-90">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}

      <Container className="py-16 md:py-24">
        {project.nda ? (
          <p className="mb-12 max-w-2xl border-l-2 border-accent pl-4 text-base text-ink/75">
            {project.nda}
          </p>
        ) : null}

        <div className="grid gap-16 md:gap-20">
          <Section title="Problème" body={project.problem} />
          <Section title="Approche" body={project.approach} />
          {project.outcome ? (
            <Section title="Résultat" body={project.outcome} />
          ) : null}
        </div>

        {project.url ? (
          <p className="mt-16">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-lg underline-offset-4 hover:underline"
            >
              Voir le site
            </a>
          </p>
        ) : null}

        {next ? (
          <p className="mt-24 border-t border-ink/10 pt-10">
            <span className="block text-sm text-ink/55">Projet suivant</span>
            <Link
              href={`/work/${next.slug}`}
              className="mt-2 inline-block break-words font-serif text-[clamp(1.75rem,7vw,2.5rem)] tracking-tight hover:text-ink/70"
            >
              {next.title}
            </Link>
          </p>
        ) : null}
      </Container>
    </article>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <section className="grid gap-4 md:grid-cols-[12rem_1fr] md:gap-12">
        <h2 className="text-sm tracking-[0.16em] uppercase text-ink/55">
          {title}
        </h2>
        <p className="max-w-2xl text-lg md:text-xl">{body}</p>
      </section>
    </Reveal>
  );
}
