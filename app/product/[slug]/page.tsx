import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaButtons from "@/components/CtaButtons";
import { getProduct, products } from "@/lib/products";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product" };
  return { title: product.name, description: product.hero };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <section className="pb-24 pt-12 md:pb-32 md:pt-16">
      <div className="container max-w-[1100px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
          <Link href="/#products" className="hover:underline">
            Products
          </Link>
          <span className="mx-2 text-white/20">/</span>
          {product.name}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
          {product.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
          {product.hero}
        </p>
        <div className="mt-8">
          <CtaButtons />
        </div>

        <div className="mt-20 border-t border-white/10 pt-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            Roadmap
          </p>
          <h2 className="mt-3 text-3xl font-light tracking-tight text-white md:text-4xl">
            Launch and running
          </h2>

          <div className="mt-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/35">
              30-day launch
            </p>
            <p className="mt-2 max-w-xl text-sm text-white/45">
              Live in four weeks.
            </p>
            <ol className="mt-6 border-t border-white/10">
              {product.steps.map((s, i) => (
                <li
                  key={`${s.n}-${s.title}`}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-white/10 py-8 lg:grid-cols-[3.5rem_minmax(10rem,14rem)_1fr] lg:gap-x-10 lg:py-10"
                >
                  <span className="font-mono text-[11px] tabular-nums text-white/30">
                    {s.n || pad(i + 1)}
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                      {s.kicker}
                    </p>
                    <h3 className="mt-2 text-2xl font-light tracking-tight text-white">
                      {s.title}
                    </h3>
                  </div>
                  <p className="col-start-2 mt-3 text-sm leading-relaxed text-white/50 lg:col-start-3 lg:mt-0 lg:pt-6">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/35">
              Running
            </p>
            <p className="mt-2 max-w-xl text-sm text-white/45">
              After go-live. Same team.
            </p>
            <ol className="mt-6 border-t border-white/10">
              {product.running.map((r, i) => (
                <li
                  key={r.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-white/10 py-8 lg:grid-cols-[3.5rem_minmax(10rem,14rem)_1fr] lg:gap-x-10 lg:py-10"
                >
                  <span className="font-mono text-[11px] tabular-nums text-white/30">
                    {pad(i + 1)}
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                      {r.cadence}
                    </p>
                    <h3 className="mt-2 text-2xl font-light tracking-tight text-white">
                      {r.title}
                    </h3>
                  </div>
                  <p className="col-start-2 mt-3 text-sm leading-relaxed text-white/50 lg:col-start-3 lg:mt-0 lg:pt-6">
                    {r.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            Included
          </p>
          <h2 className="mt-3 text-3xl font-light tracking-tight text-white md:text-4xl">
            Services that ship with this
          </h2>
          <ul className="mt-10 border-t border-white/10">
            {product.included.map((item) => (
              <li
                key={item.title}
                className="grid gap-1 border-b border-white/10 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:items-baseline sm:gap-8"
              >
                <span className="text-lg font-light tracking-tight text-white">
                  {item.title}
                </span>
                <span className="text-sm leading-relaxed text-white/45">
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            Other products
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className="group border border-white/10 p-6 transition-colors hover:border-primary"
              >
                <h3 className="text-xl font-light tracking-tight text-white transition-colors group-hover:text-primary">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {p.blurb}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
