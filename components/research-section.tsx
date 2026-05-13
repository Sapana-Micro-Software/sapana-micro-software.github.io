import type { HubLink } from "@/lib/content";

import { HubCard } from "@/components/hub-card";

export function ResearchSection(props: { hubs: HubLink[] }) {
  const { hubs } = props;

  return (
    <section
      id="research"
      className="scroll-mt-24 border-b border-white/10 bg-zinc-950 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Research &amp; technical hubs
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Canonical documentation sites and repositories — each hub stays on its
            own Pages deployment while this site ties everything together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {hubs.map((hub) => (
            <HubCard key={hub.href} {...hub} />
          ))}
        </div>
      </div>
    </section>
  );
}
