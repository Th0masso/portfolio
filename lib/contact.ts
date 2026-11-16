import { z } from "zod";
import { site } from "@/content/site";

export const missionTypes = ["site", "app", "data", "autre"] as const;

export type MissionType = (typeof missionTypes)[number];

export const missionTypeLabels: Record<MissionType, string> = {
  site: "Site",
  app: "App",
  data: "Data",
  autre: "Autre",
};

export const budgetOptions = [
  "À préciser",
  "Moins de 5 k€",
  "5–15 k€",
  "15–40 k€",
  "40 k€ et plus",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis.").max(120),
  email: z.string().trim().email("Email invalide."),
  type: z.enum(missionTypes),
  budget: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "Dix caractères minimum.").max(5000),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export function buildMailto(data: ContactPayload): string {
  const subject = encodeURIComponent(`Mission ${data.type} : ${data.name}`);
  const body = encodeURIComponent(
    [
      `Nom : ${data.name}`,
      `Email : ${data.email}`,
      `Type : ${missionTypeLabels[data.type]}`,
      `Budget : ${data.budget || "non précisé"}`,
      "",
      data.message,
    ].join("\n"),
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}
