"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { ProjectBadge } from "./ProjectBadge";

type WorkRowProps = {
  project: Project;
  index: number;
  onInView?: (index: number) => void;
};

export function WorkRow({ project, index, onInView }: WorkRowProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!onInView || !ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) onInView(index);
      },
      { threshold: 0.35, rootMargin: "-10% 0px -30% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [index, onInView]);

  const image = project.images[0];
  const href = `/work/${project.slug}`;

  return (
    <article
      ref={ref}
      className="group border-t border-ink/10 py-8 last:border-b md:py-16"
    >
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-end gap-4 md:gap-10">
        <div className="min-w-0">
          <p className="font-serif text-xl text-ink/50 md:hidden">
            {project.year}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 md:mt-0">
            <p className="text-sm tracking-wide text-ink/60">{project.client}</p>
            {project.badge ? <ProjectBadge label={project.badge} /> : null}
          </div>
          <h3 className="mt-2 break-words font-serif text-[clamp(1.75rem,7vw,4.5rem)] leading-[0.95] tracking-tight text-ink">
            <Link
              href={href}
              className="bg-gradient-to-r from-accent to-accent bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px] focus-visible:bg-[length:100%_2px]"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-3 max-w-xl text-base text-ink/75 md:mt-4 md:text-lg">
            <Link href={href} className="text-inherit no-underline">
              {project.summary}
              {project.duration ? (
                <span className="whitespace-nowrap">
                  {"\u00A0"}({project.duration})
                </span>
              ) : null}
            </Link>
          </p>
        </div>
        <Link
          href={href}
          className={cn(
            "relative block h-20 w-20 shrink-0 overflow-hidden bg-ink text-paper sm:h-24 sm:w-28 md:h-28 md:w-40",
          )}
          tabIndex={-1}
          aria-hidden
        >
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 112px, 160px"
            />
          ) : (
            <span className="flex h-full items-end p-2 font-serif text-3xl leading-none md:p-3 md:text-5xl">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          )}
        </Link>
      </div>
    </article>
  );
}
