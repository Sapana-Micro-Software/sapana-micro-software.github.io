import Image from "next/image";

import type { Leadership } from "@/lib/content";

export function LeadershipSection(props: { leadership: Leadership }) {
  const {
    leadership: { chiefEngineer },
  } = props;

  return (
    <section
      id="leadership"
      className="scroll-mt-24 bg-zinc-950 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Leadership
        </h2>
        <div className="mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <Image
              src={chiefEngineer.portraitUrl}
              alt={chiefEngineer.portraitAlt}
              width={160}
              height={160}
              className="h-36 w-36 shrink-0 rounded-2xl object-cover object-top ring-2 ring-teal-400/30"
            />
            <div>
              <p className="text-sm font-medium tracking-wide text-teal-200 uppercase">
                {chiefEngineer.role}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {chiefEngineer.name}
              </p>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Profile, background, and selected links live on the personal site
                — reach out there for collaboration aligned with systems
                engineering, Apple platforms, and research-inspired product work.
              </p>
              <a
                href={chiefEngineer.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-semibold text-teal-300 hover:text-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
              >
                Visit shyamalschandra.github.io →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
