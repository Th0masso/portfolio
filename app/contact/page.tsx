import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { Portrait } from "@/components/Portrait";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Écrire à ${site.name} (${site.email}). Missions React, Node, data.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="pb-24 pt-10 md:pt-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="text-sm tracking-[0.18em] uppercase text-ink/60">
              Contact
            </p>
            <h1 className="mt-3 font-serif text-[clamp(2.5rem,12vw,4.5rem)] tracking-tight md:mt-4">
              Écrire
            </h1>
          </div>
          <Portrait className="h-20 w-20 shrink-0 sm:h-28 sm:w-28" sizes="7rem" />
        </div>
        <p className="mt-6 max-w-xl text-base text-ink/80 md:text-lg">
          {site.availability}. Un mail suffit. Décrivez le besoin, le calendrier,
          le budget si vous l’avez.
        </p>
        <p className="mt-4">
          <a
            href={`mailto:${site.email}`}
            className="break-all text-base underline-offset-4 hover:underline md:text-lg"
          >
            {site.email}
          </a>
        </p>
        <ContactForm />
        <CalendlyEmbed />
      </Container>
    </section>
  );
}
