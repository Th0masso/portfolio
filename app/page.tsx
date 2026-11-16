import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { StackMarquee } from "@/components/home/StackMarquee";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />
      <StackMarquee />
      <SelectedWork projects={featured} />
      <AboutTeaser />
    </>
  );
}
