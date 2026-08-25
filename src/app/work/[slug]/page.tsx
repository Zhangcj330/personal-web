import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteMenu from "@/components/SiteMenu";
import WorkPage from "@/components/WorkPage";
import { caseStudyPages, getCaseStudyPage } from "@/data/caseStudyPages";

export function generateStaticParams() {
  return caseStudyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCaseStudyPage(slug);
  if (!page) return {};
  return {
    title: `${page.title.join(" ")} · Chaojie Zhang`,
    description: page.lead,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCaseStudyPage(slug);
  if (!page) notFound();

  return (
    <div className="flex min-h-full flex-col">
      <SiteMenu homeAnchors={false} />
      <main className="flex-1">
        <WorkPage page={page} />
      </main>
    </div>
  );
}
