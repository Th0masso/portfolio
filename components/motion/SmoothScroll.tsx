"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setEnabled(!media.matches);
      document.documentElement.classList.toggle("lenis-enabled", !media.matches);
    };
    update();
    media.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      document.documentElement.classList.remove("lenis-enabled");
    };
  }, []);

  if (!enabled) return children;

  return (
    <ReactLenis root options={{ lerp: 0.12, duration: 1.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
