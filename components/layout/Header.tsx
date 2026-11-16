"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (wasOpen.current && !open) {
      buttonRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
      <Container className="flex h-14 items-center justify-between gap-4 md:h-20 md:gap-6">
        <Link
          href="/"
          className="flex items-baseline gap-3 text-ink"
          aria-label={`${site.name}, accueil`}
        >
          <span className="font-serif text-xl tracking-tight" aria-hidden>
            TH
          </span>
          <span className="hidden text-sm tracking-wide md:inline">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm tracking-wide lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-ink/80 transition-colors duration-500 hover:text-ink",
                  active && "text-ink",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden cursor-pointer bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors duration-500 hover:bg-ink sm:inline-flex"
          >
            Écrire
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpenFor(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Fermer" : "Menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-px w-5 bg-ink transition-transform duration-500",
                  open && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-ink transition-transform duration-500",
                  open && "-translate-y-[4px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>
      <MobileNav
        open={open}
        onClose={() => setOpenFor(null)}
        id="nav-mobile"
      />
    </header>
  );
}
