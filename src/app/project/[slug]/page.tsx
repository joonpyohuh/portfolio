import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailView from "@/components/ProjectDetail";
import SerialBadge from "@/components/SerialBadge";
import { isProjectSlug, projects, type ProjectSlug } from "@/lib/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return (Object.keys(projects) as ProjectSlug[]).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const slug = params.slug;
  if (!isProjectSlug(slug)) return { title: "Project" };
  const p = projects[slug];
  return {
    title: p.name,
    description: p.tagline,
  };
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  if (!isProjectSlug(slug)) notFound();
  const project = projects[slug];

  return (
    <>
      <SerialBadge />
      <ProjectDetailView project={project} />
    </>
  );
}
