import { contactSchema, buildMailto } from "@/lib/contact";
import { site } from "@/content/site";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Champs invalides." },
      { status: 400 },
    );
  }

  const mailto = buildMailto(parsed.data);
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;

  if (!key) {
    return Response.json({ ok: false, mailto });
  }

  const text = [
    `Nom : ${parsed.data.name}`,
    `Email : ${parsed.data.email}`,
    `Type : ${parsed.data.type}`,
    `Budget : ${parsed.data.budget || "non précisé"}`,
    "",
    parsed.data.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <noreply@thomas-hercule.fr>",
      to: [to],
      reply_to: parsed.data.email,
      subject: `Mission ${parsed.data.type} : ${parsed.data.name}`,
      text,
    }),
  });

  if (!res.ok) {
    return Response.json(
      {
        ok: false,
        mailto,
        error: "Envoi indisponible, ouverture du client mail.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
