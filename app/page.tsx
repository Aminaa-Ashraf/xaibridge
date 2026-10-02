import Image from "next/image";
import Link from "next/link";
import {
  Check,
  CircleAlert,
  CreditCard,
  Headphones,
  LayoutDashboard,
  Mail,
  Megaphone,
  MessageCircle,
  Star,
} from "lucide-react";
import CtaButtons from "@/components/CtaButtons";
import Typewriter from "@/components/Typewriter";
import { clients, site } from "@/lib/site";
import { products } from "@/lib/products";

const facts = [
  { value: "4 weeks", label: "To launch" },
  { value: "3", label: "Prop firms shipped" },
  { value: "11", label: "Products" },
  { value: "24h", label: "Reply time" },
];

const getCards = [
  {
    title: "Product",
    body: "Evaluation platforms, trader desks, and the trading stack. The software the firm runs day to day.",
    icon: LayoutDashboard,
  },
  {
    title: "Rails",
    body: "Checkout, payouts, and KYC. Wired to the same accounts the desk sees.",
    icon: CreditCard,
  },
  {
    title: "Trustpilot",
    body: "Profile, invite rules, and replies. Starts in week 1 and stays tied to the book.",
    icon: Star,
  },
  {
    title: "Ads",
    body: "Meta and Google, pixels, and SEO on the pages that convert.",
    icon: Megaphone,
  },
];

const why = [
  {
    title: "Fintech work",
    body: "We have shipped for FTM, Global4ex, FundedRoll, and FundedSquad, and for broker desks like XM and Exness. The same stack those teams run day to day.",
  },
  {
    title: "30-day launch",
    body: "Reputation setup starts in week 1. The product is live in four weeks.",
  },
  {
    title: "After go-live",
    body: "Risk, payouts, KYC, support, ads, and Trustpilot replies. Same team that shipped the build.",
  },
];

const ships = [
  {
    title: "The product is live",
    body: "Evaluation platform, trader desks, and the trading stack the desk runs day to day.",
  },
  {
    title: "Rails on the same book",
    body: "Checkout, payouts, and KYC sit on the same accounts the desk sees.",
  },
  {
    title: "Trustpilot and ads",
    body: "Invite rules from week 1. Pixels on the pages that convert.",
  },
];

const process = [
  {
    step: "Step 1",
    week: "Week 1",
    title: "Brief and reputation",
    body: "Rules, brand, and Trustpilot setup. Invite rules after a payout, funded account, or order.",
  },
  {
    step: "Step 2",
    week: "Week 2",
    title: "Product",
    body: "Dashboards, the engine, and the screens traders and staff use.",
  },
  {
    step: "Step 3",
    week: "Week 3",
    title: "Rails and ads",
    body: "KYC, payouts, pixels, and the first creatives.",
  },
  {
    step: "Step 4",
    week: "Week 4",
    title: "Go live",
    body: "First traders, first live accounts, or first paid orders. Ads can spend. Review invites already wired.",
  },
];

const otherShops = [
  "Product from one shop, ads from another",
  "Trustpilot after go-live",
  "Off-the-shelf dashboards",
  "Handoff at launch",
  "Timeline left open",
];

const xaibridgePoints = [
  "Product, Trustpilot, and ads from one team",
  "Trustpilot setup in week 1",
  "Evaluation platforms and trader desks for funded firms",
  "Same team after go-live",
  "Live in four weeks",
];

const quotes = [
  {
    text: "Xaibridge has stood out for their promptness and responsiveness. The client is extremely satisfied with their performance and technical skills. All in all, they're a reliable and committed partner.",
    name: "Parham Akhavan",
    role: "President @Kuduo",
  },
  {
    text: "Responsive and committed, Xaibridge provides quality work in a timely manner. They also ensure that the developers they provide meet the client's needs, leading to an ongoing partnership.",
    name: "Eric Hurst",
    role: "Co-Founder @intellirent",
  },
  {
    text: "AHBYTES helped us hit the ground running on our MVP development, and helped us build out a number of important integrations across payments, authentication and blockchain integrations. I would highly recommend them.",
    name: "Ramesh Doddi",
    role: "CTO @HoneyBricks",
  },
];

function Label({
  children,
  center,
}: {
  children: string;
  center?: boolean;
}) {
  return (
    <p
      className={`mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-primary ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}

export default function HomePage() {
  const loop = [...clients, ...clients];

  return (
    <>
      <section className="home-band-dark relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="container">
          <div className="mx-auto max-w-[960px] text-center">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.32em] text-primary">
              Software house
            </p>
            <h1 className="text-2xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Empowering Digital Innovation
            </h1>
            <h2 className="mb-8 text-xl font-light leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
              <Typewriter />
            </h2>
            <p className="mx-auto max-w-[40rem] text-xl font-light leading-snug tracking-tight text-white sm:text-2xl">
              We build the product you need.
            </p>
            <p className="mx-auto mb-10 mt-3 max-w-[34rem] text-base leading-relaxed text-white/55">
              Development, Trustpilot, and ads. All under one roof.
            </p>

            <div id="products" className="mt-10 w-full">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/product/${p.slug}`}
                    className="rounded-full border border-primary/55 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-primary hover:text-primary sm:px-6 sm:py-3 sm:text-base"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <CtaButtons centered />
            </div>
          </div>
        </div>
      </section>

      <section className="home-band-soft relative overflow-hidden py-14 md:py-16">
        <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
          Names we have worked with
        </p>
        <div className="brand-marquee">
          <div className="brand-marquee-track">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 md:gap-16 md:pr-16"
              >
                {clients.map((c) => (
                  <li key={`${copy}-${c.name}`} className="flex shrink-0 items-center">
                    <span className="relative flex h-12 items-center justify-center sm:h-14 md:h-[3.75rem]">
        <Image
                        src={c.src}
                        alt={c.name}
                        width={220}
                        height={58}
                        className="h-10 w-auto max-w-[11rem] object-contain"
                      />
                    </span>
          </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band-soft py-16 md:py-24">
        <div className="container max-w-[1100px]">
          <Label>What you get</Label>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            One team. One build.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            Development, Trustpilot, and ads stay with us.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {getCards.map((card) => (
              <div key={card.title} className="card-surface p-8">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <card.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/55">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band-soft py-16 md:py-24">
        <div className="container max-w-[1100px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                The facts we can put on the page.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
                FTM, Global4ex, FundedRoll, FundedSquad, XM, Exness. Reputation
                starts in week 1. The product is live in four weeks.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white hover:bg-primary/90"
              >
                Set Meeting
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="card-surface p-8">
                  <div className="text-3xl font-bold tracking-tight text-white">
                    {f.value}
                  </div>
                  <div className="mt-2 text-sm text-white/50">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-band-soft py-16 md:py-24">
        <div className="container max-w-[1100px]">
          <Label>Why Xaibridge</Label>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            A software house that already ships for this market.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            The product, Trustpilot, and ads stay with the team that built them.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {why.map((item) => (
              <div key={item.title} className="card-surface p-8">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/55">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-[1100px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            What ships at go-live.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            The desk can take the first traders. Reviews and ads are already wired.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ships.map((item) => (
              <div key={item.title} className="card-surface p-8">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/55">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-10 text-sm">
            <div>
              <div className="font-semibold text-primary">Week 1</div>
              <div className="text-white/50">Reputation setup</div>
            </div>
            <div>
              <div className="font-semibold text-primary">Week 4</div>
              <div className="text-white/50">Product live</div>
            </div>
            <div>
              <div className="font-semibold text-primary">After launch</div>
              <div className="text-white/50">Same team</div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-band-soft py-16 md:py-24">
        <div className="container max-w-[1100px]">
          <div className="text-center">
            <Label center>Our process</Label>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              How a launch runs.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
              Four weeks. Reputation in week 1. Traders on the book in week 4.
            </p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <div key={s.step} className="text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
                  {s.step} · {s.week}
                </p>
                <div className="mx-auto my-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 text-lg font-semibold text-primary">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-[1100px]">
          <div className="text-center">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              How the work is split.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
              Facts from how we run a launch, not a pitch about other firms.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <h3 className="mb-5 text-center text-xl font-bold text-white/50">
                Other shops
              </h3>
              <ul className="space-y-3">
                {otherShops.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-gray-dark px-5 py-3.5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/50">
                      <CircleAlert className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-center text-xl font-bold text-white">
                Xaibridge
              </h3>
              <ul className="space-y-3">
                {xaibridgePoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-5 py-3.5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-band-soft py-16 md:py-24">
        <div className="container max-w-[1100px]">
          <div className="text-center">
            <h2 className="mx-auto text-3xl font-bold tracking-tight text-white md:text-5xl">
              Clients
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
              Work we have shipped. The quotes below are from product clients.
              Builds include FTM, Global4ex, FundedRoll, FundedSquad, plus XM and
              Exness.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((q) => (
              <blockquote key={q.name} className="card-surface h-full p-8">
                <p className="mb-8 text-base leading-relaxed text-white/70">
                  “{q.text}
                </p>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-white">{q.name}</h3>
                  <p className="text-sm text-white/50">{q.role}</p>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band-dark relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
          <p className="translate-y-1/4 text-center text-[16vw] font-bold leading-none tracking-tight text-white/[0.04]">
            XAIBRIDGE
          </p>
        </div>
        <div className="container relative z-10 max-w-[900px] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Tell us what to build.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/60 md:text-lg">
            Email, WhatsApp, or a meeting.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white hover:bg-primary/90"
          >
            Set Meeting
          </Link>
        </div>
      </section>

      <section className="home-band-soft py-16 md:py-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-10/12 lg:w-8/12">
              <div className="grid gap-6 text-left md:grid-cols-3">
                <a
                  href={`mailto:${site.email}`}
                  className="card-surface p-6 hover:border-primary/40"
                >
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                    <Mail className="h-4 w-4 text-primary" /> Email
                  </div>
                  <p className="text-sm text-white/60">{site.email}</p>
        </a>
        <a
                  href={site.whatsappHref}
                  className="card-surface p-6 hover:border-primary/40"
                >
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                    <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
                  </div>
                  <p className="text-sm text-white/60">{site.whatsapp}</p>
                </a>
                <div className="card-surface p-6">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                    <Headphones className="h-4 w-4 text-primary" /> Live Agent
                  </div>
                  <p className="text-sm text-white/60">Chat with our team</p>
                </div>
              </div>
              <p className="mt-8 text-center text-sm text-white/40">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
    </div>
      </section>
    </>
  );
}
