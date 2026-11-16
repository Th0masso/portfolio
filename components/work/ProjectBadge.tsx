"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

type ProjectBadgeProps = {
  label: string;
};

const TOOLTIPS: Record<string, string> = {
  Theodo: "Theodo est une ESN. J’y étais software engineer pendant 3 ans.",
};

export function ProjectBadge({ label }: ProjectBadgeProps) {
  const tip = TOOLTIPS[label] ?? label;
  const tipId = useId();
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex max-w-full">
      <button
        type="button"
        className="bg-accent px-2 py-0.5 text-[0.65rem] font-medium tracking-[0.14em] uppercase text-paper"
        aria-describedby={open ? tipId : undefined}
        title={tip}
        onClick={() => setOpen((value) => !value)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        {label}
      </button>
      <span
        id={tipId}
        role="tooltip"
        className={cn(
          "pointer-events-none absolute bottom-full left-0 z-20 mb-2 max-w-[min(16rem,calc(100vw-2.5rem))] bg-ink px-3 py-2 text-left text-xs font-normal normal-case tracking-normal text-paper shadow-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
      >
        {tip}
      </span>
    </span>
  );
}
