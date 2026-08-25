"use client";

import { useEffect, useState } from "react";
import "./LogoLoop.css";

interface LogoItemProps {
  name: string;
  logo: string;
}

// Falls back to a text badge if the logo file hasn't been added to
// public/logos/ yet, so the loop never shows a broken image. Uses a
// client-side preload check (rather than <img onError>) because with SSR
// the browser can start loading — and error on — the <img> before React
// hydrates and attaches the handler, missing a fast 404.
function LogoItem({ name, logo }: LogoItemProps) {
  const [status, setStatus] = useState<"loading" | "ok" | "failed">("loading");

  useEffect(() => {
    let cancelled = false;
    const image = new window.Image();
    image.onload = () => {
      if (!cancelled) setStatus("ok");
    };
    image.onerror = () => {
      if (!cancelled) setStatus("failed");
    };
    image.src = logo;
    return () => {
      cancelled = true;
    };
  }, [logo]);

  const slug = name.toLowerCase().replace(/\s+/g, "-");

  if (status === "ok") {
    return (
      <div className={`logo-loop__item logo-loop__item--${slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative
            logo strip; a plain <img> avoids next/image's fixed sizing
            requirements for a variable-width marquee. */}
        <img src={logo} alt={name} className="logo-loop__logo" />
      </div>
    );
  }

  return (
    <div className="logo-loop__item">
      <span
        className="logo-loop__fallback"
        style={{ visibility: status === "loading" ? "hidden" : "visible" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function LogoLoop({
  items,
}: {
  items: { name: string; logo: string }[];
}) {
  return (
    <div className="logo-loop">
      <div className="logo-loop__track">
        {[...items, ...items].map((item, index) => (
          <LogoItem key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
