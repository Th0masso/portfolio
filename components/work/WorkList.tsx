"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";
import { IndexMorph } from "@/components/motion/IndexMorph";
import { WorkRow } from "./WorkRow";

type WorkListProps = {
  projects: Project[];
};

export function WorkList({ projects }: WorkListProps) {
  const [active, setActive] = useState(0);
  const safeIndex = Math.min(active, Math.max(projects.length - 1, 0));
  const activeYear = projects[safeIndex]?.year ?? 2999;

  if (projects.length === 0) {
    return (
      <p className="border-t border-ink/10 py-16 text-ink/70">
        Aucun projet pour le moment.
      </p>
    );
  }

  return (
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
  );
}
