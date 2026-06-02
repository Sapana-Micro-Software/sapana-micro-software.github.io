import Image from "next/image";

import { siteAssets } from "@/lib/content";

const nav = [
  { href: "#offerings", label: "Apps" },
  { href: "#research", label: "Research" },
  { href: "#leadership", label: "Leadership" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 font-semibold tracking-tight text-zinc-50 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
        >
          <Image
            src={siteAssets.logoUrl}
            alt={siteAssets.logoAlt}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full ring-1 ring-white/10"
            priority
          />
          <span className="hidden sm:inline">Sapana Micro Software</span>
          <span className="sm:hidden">Sapana</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
