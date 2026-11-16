import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <p className="font-serif text-6xl text-ink/30">404</p>
        <h1 className="mt-6 font-serif text-4xl tracking-tight md:text-6xl">
          Page introuvable
        </h1>
        <p className="mt-6 max-w-md text-lg text-ink/75">
          Cette URL n’existe pas. Retour au travail, ou écrivez-moi.
        </p>
        <div className="mt-10 flex gap-6">
          <Link href="/work" className="underline underline-offset-4">
            Travail
          </Link>
          <Link href="/contact" className="underline underline-offset-4">
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
