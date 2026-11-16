"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { nav } from "@/content/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  id: string;
};

export function MobileNav({ open, onClose, id }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id={id}
      ref={panelRef}
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper pt-20 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <nav className="flex flex-1 flex-col justify-center gap-3 px-5 py-6">
        {nav.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            ref={index === 0 ? firstLinkRef : undefined}
            onClick={onClose}
            className="font-serif text-[clamp(2.25rem,10vw,3.75rem)] leading-[1.05] tracking-tight text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <Link
          href="/contact"
          onClick={onClose}
          className="inline-flex w-full cursor-pointer items-center justify-center bg-accent px-6 py-3.5 text-base font-medium text-paper sm:w-auto"
        >
          Écrire
        </Link>
      </div>
    </div>
  );
}
