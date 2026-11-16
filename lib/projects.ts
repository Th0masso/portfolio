import { projects, type Project } from "@/content/projects";

/** Plus récents en premier ; ordre source conservé à année égale. */
export function sortProjectsByYear(list: Project[]): Project[] {
  return [...list].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return projects.indexOf(a) - projects.indexOf(b);
  });
}

export function getAllProjects(): Project[] {
  return sortProjectsByYear(projects);
}

export function getFeaturedProjects(): Project[] {
  return sortProjectsByYear(projects.filter((project) => project.featured));
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project | null {
  const ordered = getAllProjects();
  const index = ordered.findIndex((project) => project.slug === slug);
  if (index === -1) return null;
  return ordered[(index + 1) % ordered.length] ?? null;
}
