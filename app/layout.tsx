import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteMeta } from "@/lib/content";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteMeta.title,
    template: `%s · ${siteMeta.title}`,
  },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.canonicalUrl),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.canonicalUrl,
    siteName: siteMeta.title,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-zinc-100 focus:px-4 focus:py-2 focus:text-zinc-950 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-teal-400"
          href="#main-content"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70"
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
