"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { IndexMorph } from "@/components/motion/IndexMorph";
import { Reveal } from "@/components/motion/Reveal";
import { WorkRow } from "@/components/work/WorkRow";

type SelectedWorkProps = {
  projects: Project[];
};

export function SelectedWork({ projects }: SelectedWorkProps) {
  const [active, setActive] = useState(0);
  const activeYear = projects[active]?.year ?? projects[0]?.year ?? 2999;

  return (
    <section className="py-20 md:py-28" aria-labelledby="work-heading">
      <Container>
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 md:mb-10">
            <h2
              id="work-heading"
              className="min-w-0 font-serif text-[clamp(1.85rem,6vw,3rem)] tracking-tight"
            >
              Travail sélectionné
            </h2>
            <Link
              href="/work"
              className="shrink-0 text-sm text-ink underline-offset-4 hover:underline"
            >
              Tout voir
            </Link>
          </div>
        </Reveal>
        <div className="relative md:grid md:grid-cols-[7.5rem_1fr] md:gap-8 lg:grid-cols-[9.5rem_1fr]">
          <div className="sticky top-28 hidden h-fit pt-8 md:block">
            <IndexMorph year={activeYear} />
          </div>
          <div>
            {projects.map((project, index) => (
              <WorkRow
                key={project.slug}
                project={project}
                index={index}
                onInView={setActive}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
