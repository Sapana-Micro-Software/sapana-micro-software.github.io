import Image from "next/image";

import { siteAssets } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(45,212,191,0.22), transparent 55%), radial-gradient(circle at 85% 25%, rgba(56,189,248,0.12), transparent 40%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-medium tracking-widest text-teal-300/90 uppercase">
            Systems · Apple platforms · Research engineering
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Rigorous software for production apps and research-grade systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Sapana Micro Software ships polished experiences on Apple platforms and
            publishes open technical hubs spanning numerics, probabilistic
            inference, genomics, and agentic architectures — built with
            correctness, performance, and clarity at the center.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/Sapana-Micro-Software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              Organization on GitHub
            </a>
            <a
              href="#offerings"
              className="inline-flex items-center justify-center rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-400/20 transition hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              Browse offerings
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-teal-400/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              Research hubs
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-teal-400/15 blur-2xl"
            />
            <Image
              src={siteAssets.logoUrl}
              alt={siteAssets.logoAlt}
              width={280}
              height={280}
              className="relative h-52 w-52 rounded-full shadow-2xl shadow-teal-900/40 ring-2 ring-white/15 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
