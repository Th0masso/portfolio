"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import {
  budgetOptions,
  contactSchema,
  missionTypeLabels,
  missionTypes,
  type ContactPayload,
} from "@/lib/contact";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "mailto" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [fieldError, setFieldError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      setFieldError(parsed.error.issues[0]?.message ?? "Champs invalides.");
      return;
    }

    setStatus({ kind: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data satisfies ContactPayload),
      });
      const json = (await response.json()) as {
        ok?: boolean;
        mailto?: string;
        error?: string;
      };

      if (json.ok) {
        setStatus({ kind: "sent" });
        form.reset();
        return;
      }

      if (json.mailto) {
        window.location.href = json.mailto;
        setStatus({ kind: "mailto" });
        return;
      }

      setStatus({
        kind: "error",
        message: json.error ?? "Impossible d’envoyer le message.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Réseau indisponible. Écrivez-moi directement.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-xl" noValidate>
      <div className="grid gap-8">
        <Field label="Nom" name="name" autoComplete="name" required />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <label className="grid gap-2">
          <Label text="Type" required />
          <select
            name="type"
            required
            defaultValue="app"
            className="min-h-11 border-0 border-b border-ink/30 bg-transparent py-2 text-base text-ink focus:border-ink focus:outline-none md:text-lg"
          >
            {missionTypes.map((type) => (
              <option key={type} value={type}>
                {missionTypeLabels[type]}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm tracking-wide text-ink/70">Budget</span>
          <select
            name="budget"
            defaultValue={budgetOptions[0]}
            className="min-h-11 border-0 border-b border-ink/30 bg-transparent py-2 text-base text-ink focus:border-ink focus:outline-none md:text-lg"
          >
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <Label text="Message" required />
          <textarea
            name="message"
            required
            minLength={10}
            rows={6}
            className="min-h-28 w-full resize-y border-0 border-b border-ink/30 bg-transparent py-2 text-base text-ink focus:border-ink focus:outline-none md:text-lg"
          />
        </label>
      </div>

      {fieldError ? (
        <p className="mt-6 text-sm text-accent" role="alert">
          {fieldError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status.kind === "submitting"}
        className="mt-10 inline-flex w-full cursor-pointer items-center justify-center bg-accent px-6 py-3.5 text-base font-medium text-paper transition-colors duration-500 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status.kind === "submitting" ? "Envoi…" : "Envoyer"}
      </button>

      <div className="mt-6 text-base text-ink/80" aria-live="polite">
        {status.kind === "sent" ? (
          <p>Message reçu. Je vous réponds rapidement.</p>
        ) : null}
        {status.kind === "mailto" ? (
          <p>
            Votre client mail devrait s’ouvrir. Si rien ne se passe, écrivez à{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        ) : null}
        {status.kind === "error" ? (
          <p className="text-accent">
            {status.message}{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <span className="text-sm tracking-wide text-ink/70">
      {text}
      {required ? (
        <>
          <span className="ml-0.5 text-accent" aria-hidden="true">
            *
          </span>
          <span className="sr-only"> (obligatoire)</span>
        </>
      ) : null}
    </span>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <Label text={label} required={required} />
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="min-h-11 w-full border-0 border-b border-ink/30 bg-transparent py-2 text-base text-ink focus:border-ink focus:outline-none md:text-lg"
      />
    </label>
  );
}
