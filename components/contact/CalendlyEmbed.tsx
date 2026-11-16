import { CALENDLY_URL } from "@/content/site";

export function CalendlyEmbed() {
  if (!CALENDLY_URL) return null;

  return (
    <div className="mt-16">
      <h2 className="font-serif text-3xl tracking-tight">Un créneau</h2>
      <p className="mt-3 text-base text-ink/70">
        Si c’est plus simple, prenez 20 minutes.
      </p>
      <iframe
        src={CALENDLY_URL}
        title="Prendre un créneau"
        className="mt-6 h-[700px] w-full border-0"
      />
    </div>
  );
}
