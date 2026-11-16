import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { WorkList } from "@/components/work/WorkList";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Travail",
  description:
    "Apps web et mobile : SFCO2, Run For Peace, HiProf, Colas, Rexel, Roland-Garros, Yomoni et plus.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <section className="pb-24 pt-10 md:pt-16">
      <Container>
        <h1 className="font-serif text-[clamp(2.5rem,12vw,4.5rem)] tracking-tight">
          Le travail
        </h1>
        <div className="mt-10">
          <WorkList projects={projects} />
        </div>
      </Container>
    </section>
  );
}
