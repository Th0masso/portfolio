import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-ink/10">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between md:py-14">
        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${site.email}`}
            className="break-all text-base text-ink hover:underline md:text-xl"
          >
            {site.email}
          </a>
          <p className="text-sm text-ink/70">
            © {year} {site.name}
          </p>
        </div>
        <p className="text-sm text-ink/70">{site.footerCredit}</p>
        <Link
          href="/contact"
          className="text-sm text-ink underline-offset-4 hover:underline"
        >
          Écrire
        </Link>
      </Container>
    </footer>
  );
}
