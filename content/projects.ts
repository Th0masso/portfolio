export const projectTypes = ["Web", "Data", "SaaS", "Product", "Mobile"] as const;

export type ProjectType = (typeof projectTypes)[number];

export type Project = {
  slug: string;
  client: string;
  title: string;
  year: number;
  duration: string | null;
  type: ProjectType[];
  role: string;
  summary: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string | null;
  url: string | null;
  nda: string | null;
  featured: boolean;
  /** Ex. "Theodo" ; null si pas de badge */
  badge: string | null;
  images: string[];
};

/** Ordre source : plus récents en premier (tri défensif aussi dans lib/projects). */
export const projects: Project[] = [
  {
    slug: "run-for-peace",
    client: "Run For Peace",
    title: "Run For Peace",
    year: 2026,
    duration: null,
    type: ["Web", "Product"],
    role: "Conception et développement",
    summary:
      "Application web du marathon Run for Peace, du cadrage jusqu’à la mise en production.",
    problem:
      "Besoin d’un outil d’inscription, d’achat de billets et de suivi de course, branché sur l’écosystème des coureurs.",
    approach:
      "Cadrage puis développement en Node, React et Framer. SSO Strava, billetterie, données de courses et balises à valider sur une carte interactive.",
    stack: ["Node.js", "React", "Framer"],
    outcome: "Application livrée pour l’événement.",
    url: null,
    nda: null,
    featured: true,
    badge: null,
    images: ["/projects/run-for-peace-1.jpg"],
  },
  {
    slug: "rexel",
    client: "Rexel",
    title: "E-commerce électriciens",
    year: 2026,
    duration: "4 mois",
    type: ["Web"],
    role: "Software engineer",
    summary: "Site e-commerce pour électriciens chez Rexel.",
    problem:
      "Faire évoluer un parcours e-commerce métier sur un stack Angular et Spring Boot déjà en place.",
    approach:
      "Quatre mois de développement web et d’architecture technique, Angular au front et Spring Boot au back.",
    stack: ["Angular", "Spring Boot"],
    outcome: null,
    url: null,
    nda: "Contexte confidentiel, extraits anonymisés.",
    featured: false,
    badge: "Theodo",
    images: ["/projects/rexel-1.jpg"],
  },
  {
    slug: "sfco2",
    client: "Safran",
    title: "SFCO2",
    year: 2025,
    duration: "1 an",
    type: ["Web", "Data", "Mobile"],
    role: "Software engineer",
    summary:
      "Plateforme d’optimisation du carburant aérien pour les compagnies (web, mobile et data).",
    problem:
      "Piloter carburant et émissions à partir de volumes importants de données de vol, hétérogènes et continues.",
    approach:
      "Développement web et mobile, architecture, conception fonctionnelle, tests, code reviews et audit de sécurité. Node.js, React, React Native, AWS et Serverless Stack.",
    stack: ["Node.js", "React", "React Native", "AWS", "Serverless Stack"],
    outcome:
      "Produit utilisé pour piloter la conso carburant. L’offre Safran annonce jusqu’à environ 3 % d’économie (chiffre produit, pas un résultat personnel).",
    url: null,
    nda: "Contexte confidentiel, extraits anonymisés.",
    featured: true,
    badge: "Theodo",
    images: ["/projects/sfco2-1.png"],
  },
  {
    slug: "hiprof",
    client: "HiProf",
    title: "HiProf",
    year: 2024,
    duration: "2 mois",
    type: ["Web", "SaaS"],
    role: "Software engineer",
    summary:
      "Plateforme de tutorat : visioconférence, réservation et calendrier.",
    problem:
      "Besoin d’une plateforme de tutorat complète, conçue et développée vite, avec des ressources limitées et un seul designer.",
    approach:
      "Conception et développement en WeWeb et scripting pour livrer la visioconférence, la réservation et le calendrier dans les délais.",
    stack: ["WeWeb", "Scripting"],
    outcome: "Projet livré, en ligne.",
    url: "https://www.hiprof.com/",
    nda: null,
    featured: true,
    badge: "Theodo",
    images: ["/projects/hiprof-1.jpg"],
  },
  {
    slug: "roland-garros",
    client: "Roland-Garros",
    title: "Plateforme de gestion alimentaire",
    year: 2024,
    duration: "4 mois",
    type: ["Web", "Product"],
    role: "Software engineer",
    summary: "Plateforme de gestion alimentaire pour Roland-Garros.",
    problem:
      "Pendant le tournoi, la restauration et la logistique ont besoin d’un parcours clair et d’une stack qui tient le jour J.",
    approach:
      "Développement web, architecture et conception fonctionnelle en Go et React.",
    stack: ["Go", "React"],
    outcome: null,
    url: null,
    nda: "Contexte confidentiel, extraits anonymisés.",
    featured: false,
    badge: "Theodo",
    images: [],
  },
  {
    slug: "llphant",
    client: "Open source",
    title: "LLPhant",
    year: 2024,
    duration: "1 mois",
    type: ["Web"],
    role: "Software engineer",
    summary: "Contributions à LLPhant, framework PHP pour utiliser les LLM.",
    problem:
      "Manque d’abstractions claires en PHP pour brancher des modèles, orchestrer des workflows et tester sans tout reconstruire.",
    approach:
      "Amélioration de l’orchestration et des tests. Redis (base et vecteurs) et intégration OpenAI API.",
    stack: ["PHP", "Redis", "OpenAI API"],
    outcome: null,
    url: "https://github.com/LLPhant/LLPhant",
    nda: null,
    featured: false,
    badge: "Theodo",
    images: ["/projects/llphant-1.png"],
  },
  {
    slug: "colas",
    client: "Colas",
    title: "Commande de bitume",
    year: 2023,
    duration: "1 an",
    type: ["Web"],
    role: "Software engineer",
    summary: "Système de commande de bitume pour les chantiers routiers Colas.",
    problem:
      "Les équipes chantier et logistique avaient besoin d’un parcours de commande de bitume fiable, de bout en bout.",
    approach:
      "Un an de développement web, architecture, conception fonctionnelle et audit de sécurité. Symfony, React et Azure DevOps.",
    stack: ["Symfony", "React", "Azure DevOps"],
    outcome: null,
    url: null,
    nda: "Contexte confidentiel, extraits anonymisés.",
    featured: false,
    badge: "Theodo",
    images: ["/projects/colas-1.jpg"],
  },
  {
    slug: "yomoni",
    client: "Yomoni",
    title: "Gestion de portefeuille",
    year: 2022,
    duration: "5 mois",
    type: ["Mobile"],
    role: "Software engineer",
    summary: "Application mobile de gestion de portefeuille pour Yomoni.",
    problem:
      "Donner accès au portefeuille depuis le mobile, avec une authentification forte.",
    approach:
      "Cinq mois de développement mobile, architecture, conception fonctionnelle et authentification biométrique.",
    stack: ["React Native"],
    outcome: null,
    url: null,
    nda: "Contexte confidentiel, extraits anonymisés.",
    featured: false,
    badge: "Theodo",
    images: ["/projects/yomoni-1.png"],
  },
  {
    slug: "gmao-ifmh",
    client: "IFMH",
    title: "Qb7 GMAO",
    year: 2022,
    duration: "1 an",
    type: ["Web"],
    role: "Web developer",
    summary: "Qb7, GMAO hospitalière : web, mobile et visionneuse BIM.",
    problem:
      "Les équipes de maintenance avaient besoin d’un outil fiable pour suivre les interventions à l’hôpital.",
    approach:
      "Un an de développement web et de conception fonctionnelle en Symfony et React.",
    stack: ["Symfony", "React"],
    outcome: null,
    url: null,
    nda: null,
    featured: false,
    badge: null,
    images: ["/projects/gmao-ifmh-1.png"],
  },
];
