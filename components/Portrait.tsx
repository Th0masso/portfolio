import Image from "next/image";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type PortraitProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function Portrait({
  className,
  sizes = "320px",
  priority = false,
}: PortraitProps) {
  return (
    <div className={cn("relative aspect-square overflow-hidden bg-ink/5", className)}>
      <Image
        src={site.portrait}
        alt={site.name}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
