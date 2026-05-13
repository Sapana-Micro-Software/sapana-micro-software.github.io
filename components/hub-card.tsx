import type { HubKind } from "@/lib/content";

function kindLabel(kind: HubKind) {
  if (kind === "repository") return "Repository";
  if (kind === "research") return "Research hub";
  return "Product";
}

export function HubCard(props: {
  title: string;
  description: string;
  href: string;
  kind: HubKind;
  tags?: string[];
}) {
  const { title, description, href, kind, tags } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-sm transition hover:border-teal-400/35 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
    >
      <span className="mb-3 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-teal-200/90 uppercase">
        {kindLabel(kind)}
      </span>
      <h3 className="text-lg font-semibold tracking-tight text-zinc-50 group-hover:text-white">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
        {description}
      </p>
      {tags && tags.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="rounded-md bg-zinc-900/80 px-2 py-0.5 text-xs text-zinc-400 ring-1 ring-white/10">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-300 group-hover:text-teal-200">
        Open
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </a>
  );
}
