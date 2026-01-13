import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { withBasePath } from "@/lib/paths";
import { resourceMap, resources } from "@/lib/resources";
import { siteConfig } from "@/lib/site-config";

type ResourcePageProps = {
  params: {
    slug: string;
  };
};

const defaultOgImage = "/pink_black.png";
const baseDescription =
  "Official HackTJ 13.0 resources, brand assets, and reference material.";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export function generateMetadata({ params }: ResourcePageProps): Metadata {
  const resource = resourceMap.get(params.slug);

  if (!resource) {
    return {
      title: `Resource unavailable · HackTJ ${siteConfig.iteration}`,
      description: baseDescription,
    };
  }

  const fullTitle = `${resource.title} · HackTJ ${siteConfig.iteration}`;
  const preview = resource.previewImage ?? defaultOgImage;
  const description = resource.description || baseDescription;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      images: [preview],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [preview],
    },
  };
}

export default function ResourcePage({ params }: ResourcePageProps) {
  const resource = resourceMap.get(params.slug);

  if (!resource) {
    notFound();
  }

  const assetHref = withBasePath(resource.assetPath);

  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
          >
            ← Back to HackTJ {siteConfig.iteration}
          </Link>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/60">
              Official Resource
            </p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{resource.title}</h1>
            <p className="mt-4 max-w-3xl text-base text-white/70">{resource.description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={assetHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gray-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5"
            >
              Open Original
            </a>
            <a
              href={assetHref}
              download
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Download
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-[32px] border border-white/10 bg-black/20 p-4 shadow-[0_35px_80px_rgba(0,0,0,0.55)]">
          {resource.type === "pdf" ? (
            <iframe
              src={assetHref}
              title={resource.title}
              className="h-[75vh] w-full rounded-3xl border border-white/10 bg-white"
            />
          ) : (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#02060c]">
              <Image
                src={resource.assetPath}
                alt={resource.title}
                fill
                className="object-contain p-6"
                sizes="(min-width: 1024px) 960px, 100vw"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
