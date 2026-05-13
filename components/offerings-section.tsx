import type { DeveloperListing, ProductHighlight } from "@/lib/content";

export function OfferingsSection(props: {
  developer: DeveloperListing;
  highlights: ProductHighlight[];
}) {
  const { developer, highlights } = props;

  return (
    <section
      id="offerings"
      className="scroll-mt-24 border-b border-white/10 bg-zinc-950 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Apps &amp; products
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            {developer.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-zinc-50">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.tagline}
              </p>
              <a
                href={developer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
              >
                View on App Store →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-teal-400/25 bg-gradient-to-r from-teal-400/10 via-cyan-400/5 to-transparent p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium tracking-wide text-teal-200 uppercase">
                Developer listing
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {developer.title}
              </p>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                See every release across iPhone, iPad, Mac, Watch, and more on the
                official developer page.
              </p>
            </div>
            <a
              href={developer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-zinc-950 px-6 py-3 text-sm font-semibold text-teal-300 ring-1 ring-teal-400/40 transition hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              Open App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
