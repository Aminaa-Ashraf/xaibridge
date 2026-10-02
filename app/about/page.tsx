import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const builds = [
  "Evaluation platforms",
  "Trader desks",
  "Payouts and KYC",
  "Trustpilot",
  "Meta and Google ads",
  "30-day launch",
];

const pillars = [
  {
    title: "30-day launch",
    body: "Reputation setup starts in week 1. The product is live in four weeks. First traders, first live accounts, or first paid orders.",
  },
  {
    title: "After go-live",
    body: "The desk keeps running: risk, payouts, KYC, support, ads, and Trustpilot replies. Same team that shipped the build.",
  },
  {
    title: "One roof",
    body: "Development, Trustpilot, and ads stay with us.",
  },
];

const team = [
  {
    name: "Ali Hassan Rajput",
    role: "Co-Founder @CEO",
    src: "/images/about/alihassan.webp",
    linkedin: "https://www.linkedin.com/in/ali-hassan-ah-bytes",
  },
  {
    name: "Ali Hamza Kamboh",
    role: "Co-Founder @CTO",
    src: "/images/about/ahkamboh.webp",
    linkedin: "https://www.linkedin.com/in/ahkamboh",
  },
  {
    name: "M. Moiz Hassan",
    role: "Co-Founder @COO",
    src: "/images/about/moizhassan.webp",
    linkedin: "https://www.linkedin.com/in/mmoizhassan/",
  },
];

function LinkedInIcon() {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" className="fill-current">
      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.0745 13.1089H11.8004V9.55183C11.8004 8.7061 11.7754 7.58674 10.6035 7.58674C9.40661 7.58674 9.23166 8.53198 9.23166 9.47721V13.1089H6.95758V5.7709H9.1317V6.79076H9.15669C9.48161 6.21553 10.2534 5.62076 11.3251 5.62076C13.5236 5.62076 13.9245 7.03969 13.9245 9.12966V13.1089H14.0745Z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A software house for fintech"
        crumb="About"
        description="Xaibridge builds evaluation platforms, trader desks, KYC, payouts, Trustpilot, and ads. We have shipped for FTM, Global4ex, FundedRoll, FundedSquad, XM, Exness, and other firms in this market."
      />

      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container max-w-[1100px]">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            What we build
          </p>
          <h2 className="max-w-3xl text-3xl font-light tracking-tight text-white md:text-5xl">
            A software house for fintech.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            Xaibridge builds the product the desk runs: evaluations, trader
            dashboards, KYC, payouts, Trustpilot, and ads. We have shipped for
            FTM, Global4ex, FundedRoll, FundedSquad, and broker desks like XM and
            Exness.
          </p>
          <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {builds.map((item) => (
              <li
                key={item}
                className="border-t border-white/10 pt-4 text-lg font-light tracking-tight text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-[1100px]">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {pillars.map((item) => (
              <div key={item.title}>
                <h3 className="mb-3 text-xl font-light tracking-tight text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-white/55">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10">
        <h2 className="mb-5 text-center text-2xl font-bold text-white sm:text-3xl">
          Leadership Team
        </h2>
        <div className="container mx-auto grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="group relative overflow-hidden rounded-sm bg-dark duration-300"
            >
              <div className="relative block aspect-[27/24] w-full">
                <Image
                  src={m.src}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                <h3 className="mb-4 block text-xl font-bold text-white group-hover:text-primary sm:text-2xl">
                  {m.name}
                </h3>
                <p className="mb-6 border-b border-white/10 pb-6 text-base font-medium text-body-color-dark">
                  {m.role}
                </p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${m.name} LinkedIn`}
                  className="text-body-color-dark duration-300 hover:text-primary"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-10 sm:pb-20">
        <h2 className="mb-5 text-center text-2xl font-bold text-white sm:text-3xl">
          Our Global Presence
        </h2>
        <div className="container mx-auto grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
          {site.offices.map((o) => (
            <div key={o.title} className="text-left">
              <div className="mb-2 text-lg font-semibold text-white">{o.title}</div>
              <p className="text-base text-white/50">
                {o.company}
                <br />
                {o.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
