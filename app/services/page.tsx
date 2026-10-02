import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Products" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Open a product for the full launch and how it runs after."
        crumb="Products"
      />
      <section className="pb-[120px]">
        <div className="container max-w-[1100px]">
          <p className="max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            A software house. We have built for FTM, Global4ex, FundedRoll,
            FundedSquad, XM, Exness, and other desks in this market.
          </p>
          <div className="-mx-4 mt-12 flex flex-wrap justify-center">
            {products.map((p) => (
              <div key={p.slug} className="mt-5 w-full px-4 md:w-1/2 xl:w-1/3">
                <Link
                  href={`/product/${p.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-gray-dark"
                >
                  <div className="relative aspect-[37/22] bg-gradient-to-t from-black via-[#0c0c0c] to-[#161616] p-6">
                    <span className="absolute right-6 top-6 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      Product
                    </span>
                    <span className="absolute bottom-6 left-6 text-2xl font-light tracking-tight text-white">
                      {p.name}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="mb-4 text-xl font-bold text-white group-hover:text-primary sm:text-2xl">
                      {p.name}
                    </h3>
                    <p className="text-base font-medium text-body-color-dark">
                      {p.blurb}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-12 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white hover:bg-primary/90"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
