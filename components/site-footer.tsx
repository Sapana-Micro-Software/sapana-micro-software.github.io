import { appStoreDeveloper, leadership } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-zinc-100">Sapana Micro Software</p>
          <p className="mt-2 max-w-md text-sm text-zinc-500">
            Production apps on Apple platforms and published research engineering.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href={leadership.chiefEngineer.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            {leadership.chiefEngineer.name}
          </a>
          <a
            href={appStoreDeveloper.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            App Store developer page
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-zinc-600 sm:px-6 lg:px-8">
        © {year} Sapana Micro Software. Static site generated with Next.js and
        Tailwind; hosted on GitHub Pages.
      </p>
    </footer>
  );
}
