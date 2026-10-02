import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { getShippedProject, shippedProjects } from "@/lib/projects";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return shippedProjects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getShippedProject(params.id);
  if (!project) return { title: "Project" };
  return { title: project.name, description: project.body };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getShippedProject(params.id);
  if (!project) notFound();

  return (
    <>
      <PageHero title={project.name} crumb="Project" description={project.body} />
      <section className="pb-[120px]">
        <div className="container max-w-[800px]">
          <span className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
            {project.tag}
          </span>
          <p className="mt-8 text-base leading-relaxed text-white/55">
            {project.body}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-body-color-dark">
            Shipped
          </p>
          <Link
            href={project.productHref}
            className="mt-10 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white hover:bg-primary/90"
          >
            View product
          </Link>
        </div>
      </section>
    </>
  );
}
