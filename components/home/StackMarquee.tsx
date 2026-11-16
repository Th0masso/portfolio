import { site } from "@/content/site";

export function StackMarquee() {
  const items = [...site.stackMarquee, ...site.stackMarquee];

  return (
    <section
      aria-label="Stack"
      className="overflow-hidden border-y border-ink/10 py-5"
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-serif text-2xl tracking-tight text-ink md:text-4xl"
          >
            {item}
            <span className="ml-10 text-accent" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
