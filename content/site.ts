export const CALENDLY_URL: string | null = null;

export const site = {
  name: "Thomas Hercule",
  title: "Ingénieur développeur freelance",
  displayTitle: "Ingénieur développeur, React et Node",
  subtitle: "React · Node.js · 4 ans",
  positioning:
    "Software engineer depuis 4 ans. Je conçois et développe des applications web et mobile, surtout en React et Node.js, de la conception jusqu’à la mise en production.",
  metaLine: "4 ans · React et Node · France, remote",
  email: "contact@thomas-hercule.fr",
  url: "https://thomas-hercule.fr",
  portrait: "/thomas-hercule.png",
  location: "France, remote",
  availability: "Ouvert aux missions",
  footerCredit: "Site conçu et développé par mes soins",
  stackMarquee: [
    "React",
    "Node.js",
    "React Native",
    "Symfony",
    "AWS",
    "Docker",
    "Angular",
    "Go",
  ],
  linkedin: "https://linkedin.com/in/thomas-hercule",
} as const;

export const nav = [
  { href: "/work", label: "Travail" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;
