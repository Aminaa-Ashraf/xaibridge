import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { shippedProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        crumb="Project"
        description="Work we have shipped for funded-trader firms and brokers."
      />
      <section className="pb-[120px] pt-[0px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {shippedProjects.map((p) => (
              <div
                key={p.id}
                className="mt-5 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gray-dark">
                  <Link href={p.href} className="relative block aspect-[37/22] w-full">
                    <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      {p.tag}
                    </span>
                    <div className="flex h-full w-full items-end bg-black p-6">
                      <span className="text-3xl font-light tracking-tight text-white">
                        {p.name}
                      </span>
                    </div>
                  </Link>
                  <div className="p-6 sm:p-8">
                    <h3>
                      <Link
                        href={p.href}
                        className="mb-4 block text-xl font-bold text-white hover:text-primary sm:text-2xl"
                      >
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mb-6 border-b border-white/10 pb-6 text-base font-medium text-body-color-dark">
                      {p.body}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-body-color-dark">
                      Shipped
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
