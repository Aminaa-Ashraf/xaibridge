export type ProductStep = {
  n: string;
  kicker: string;
  title: string;
  body: string;
};

export type ProductRun = {
  cadence: string;
  title: string;
  body: string;
};

export type ProductInclude = {
  title: string;
  body: string;
};

export type Product = {
  slug: string;
  name: string;
  blurb: string;
  hero: string;
  steps: ProductStep[];
  running: ProductRun[];
  included: ProductInclude[];
};

export const products: Product[] = [
  {
    slug: "prop-firm-platform",
    name: "Prop Firm Platform",
    blurb: "Evaluations, funded accounts, and the desk that runs them.",
    hero: "A funded-trader firm: traders buy a challenge, pass the rules, and trade a funded account. Reputation setup starts in week 1. Launch completes in 30 days, including digital marketing. After that the desk runs.",
    steps: [
      {
        n: "01",
        kicker: "Week 1",
        title: "Reputation setup",
        body: "Trustpilot profile, who can reply, and the invite rules after a payout or funded account. Trust and FAQ pages started with the brand.",
      },
      {
        n: "02",
        kicker: "Week 1",
        title: "Rules and stack",
        body: "Challenge phases, profit targets, drawdown, consistency, and account sizes. Risk limits. MT5, cTrader, or Match-Trader chosen. Brand and the first marketing pages.",
      },
      {
        n: "03",
        kicker: "Week 2",
        title: "Engine and dashboards",
        body: "Evaluation automation, trader views, staff tools, and live accounts on the chosen platform. Checkout and challenge purchase.",
      },
      {
        n: "04",
        kicker: "Week 3",
        title: "Rails",
        body: "KYC at signup, payout requests, and PSP wiring.",
      },
      {
        n: "05",
        kicker: "Week 3",
        title: "Digital marketing setup",
        body: "Meta and Google accounts, pixels, and conversion events. First creatives and audiences for the challenge. SEO on the public firm pages.",
      },
      {
        n: "06",
        kicker: "Week 4",
        title: "Go live",
        body: "First traders on live accounts. Ads can spend. Review invites already wired from week 1 go out. Staff can see breaches, failed payments, and KYC resubmits.",
      },
    ],
    running: [
      {
        cadence: "Daily",
        title: "Risk and trading ops",
        body: "Breaches, drawdown, consistency, and account status. Funded accounts that should stay open, and ones that should close.",
      },
      {
        cadence: "Payout cycle",
        title: "Finance",
        body: "Trader withdrawals on the published calendar. PSP reconciliation. Failed payments and staff approval.",
      },
      {
        cadence: "Ongoing",
        title: "KYC and compliance",
        body: "Identity at signup, reviews on funded accounts, and AML flags before a payout leaves.",
      },
      {
        cadence: "Ongoing",
        title: "Support",
        body: "Tickets, challenge disputes, and the queue the desk actually works.",
      },
      {
        cadence: "Ongoing",
        title: "Digital marketing",
        body: "Meta and Google spend, CPA, and creatives. SEO on the challenge and trust pages.",
      },
      {
        cadence: "Ongoing",
        title: "Reputation",
        body: "Trustpilot replies and review invites after payout or funded. Complaints checked against the book.",
      },
      {
        cadence: "Monthly",
        title: "Product",
        body: "Pass rate, tiers, and rule changes. What the evaluation is doing to the book.",
      },
    ],
    included: [
      { title: "Evaluation platforms", body: "Challenge rules, funded accounts, and automation." },
      { title: "Trader dashboards", body: "Trader and staff views for live accounts." },
      { title: "Trading platform integration", body: "MT5, cTrader, and Match-Trader." },
      { title: "Custom development", body: "Challenge engines, staff tools, and roles." },
      { title: "Web and app development", body: "The firm site and the trader app." },
      { title: "UX/UI", body: "Dashboards, checkout, and trader flows." },
      { title: "SaaS", body: "Multi-tenant software with roles and billing." },
      { title: "Payments and payouts", body: "PSPs, reconciliation, and trader withdrawals." },
      { title: "KYC / AML onboarding", body: "Identity checks before a challenge or funded account." },
      { title: "WordPress", body: "Marketing site the team can edit." },
      { title: "Meta and Google ads", body: "Paid acquisition for the challenges." },
      { title: "SEO", body: "Search for the public firm site." },
      { title: "Trustpilot", body: "Trustpilot, review invites, and replies." },
    ],
  },
  {
    slug: "forex-broker-platform",
    name: "Forex Broker Platform",
    blurb: "Client portals, staff tools, and the public site.",
    hero: "A broker needs a client area, a desk that can see accounts, and a public site. Reputation setup starts in week 1. Launch completes in 30 days, including digital marketing. Then deposits, IB, and day-to-day desk work.",
    steps: [
      {
        n: "01",
        kicker: "Week 1",
        title: "Reputation setup",
        body: "Trustpilot profile, who can reply, and invite rules after a live account. Trust pages started with the public site.",
      },
      {
        n: "02",
        kicker: "Week 1",
        title: "Rules and stack",
        body: "Account types, IB, reporting, and what the trader sees versus what the desk sees.",
      },
      {
        n: "03",
        kicker: "Week 2",
        title: "Portal and platforms",
        body: "Client portal, staff tools, and the MT5, cTrader, or Match-Trader connection.",
      },
      {
        n: "04",
        kicker: "Week 3",
        title: "Rails",
        body: "Deposits, withdrawals, identity at account opening, and the marketing site.",
      },
      {
        n: "05",
        kicker: "Week 3",
        title: "Digital marketing setup",
        body: "Meta and Google accounts, pixels, and conversion events for new accounts. SEO on the broker site.",
      },
      {
        n: "06",
        kicker: "Week 4",
        title: "Go live",
        body: "First live accounts. Ads can spend. Review invites already wired from week 1 go out. Desk can see deposits, IB, and failed KYC.",
      },
    ],
    running: [
      { cadence: "Daily", title: "Deposits and withdrawals", body: "Money in, money out, and the queue finance works. Failed payments stay visible to the desk." },
      { cadence: "Ongoing", title: "IB", body: "Introducing brokers, client ownership, and reporting the desk uses." },
      { cadence: "Daily", title: "Risk", body: "Exposure, account status, and what the platform is doing to the book." },
    ],
    included: [
      { title: "Client portals", body: "Client portals, staff tools, and the public site." },
      { title: "Trading platform integration", body: "MT5, cTrader, and Match-Trader wired into the rest of the product." },
      { title: "Payments and KYC", body: "Deposits, withdrawals, and identity at account opening." },
      { title: "Digital marketing", body: "Meta, Google, pixels, and SEO on the pages that convert." },
    ],
  },
  {
    slug: "trading-stack",
    name: "Trading Stack",
    blurb: "MT5, cTrader, and Match-Trader wired into the rest of the product.",
    hero: "MT5, cTrader, or Match-Trader connected to dashboards and the desk. Standing that up completes in 30 days. Then servers, account groups, and exposure.",
    steps: [
      { n: "01", kicker: "Week 1", title: "Servers and accounts", body: "Servers, account groups, symbols, and who owns risk. Which platform the firm already runs, or which one to stand up." },
      { n: "02", kicker: "Week 2", title: "Live accounts", body: "Live accounts in the trader and staff views. Evaluation rules reading real equity and drawdown." },
      { n: "03", kicker: "Week 3", title: "Risk on the same screens", body: "Positions, equity, and limits where the desk works. Payouts and KYC sitting on the same accounts." },
      { n: "04", kicker: "Week 4", title: "Go live", body: "First live book. Staff can open, stop, and move accounts without a ticket to the vendor." },
    ],
    running: [
      { cadence: "Daily", title: "Platform ops", body: "Uptime, symbols, and account groups. Who can open an account on which server." },
      { cadence: "Daily", title: "Risk", body: "Exposure, equity, and limits in the same place the desk works. Breaches that should stop an account." },
      { cadence: "Ongoing", title: "Incidents", body: "A platform outage, a bad fill, a group that should not have been live. Staff tools to see it and close it." },
    ],
    included: [
      { title: "Trading platform integration", body: "MT5, cTrader, and Match-Trader." },
      { title: "Custom development", body: "Bridges, account provisioning, and staff tools." },
      { title: "Evaluation platforms", body: "Rules that read live equity and drawdown." },
    ],
  },
  {
    slug: "payments-kyc",
    name: "Payments & KYC",
    blurb: "Checkout, trader withdrawals, and identity at onboarding.",
    hero: "Challenge checkout, payouts against live equity, and KYC before a funded account or a live broker login. Wiring the vendors completes in 30 days. Then the finance and compliance desk uses them every week.",
    steps: [
      { n: "01", kicker: "Week 1", title: "Vendors", body: "Current PSPs, payout calendar, who can approve a withdrawal, and which KYC vendor the firm will use." },
      { n: "02", kicker: "Week 2", title: "Checkout and onboarding", body: "Challenge or deposit checkout. Payout queue reading platform equity. Identity check at signup, before a live account." },
      { n: "03", kicker: "Week 3", title: "Staff tools", body: "Staff approval, failed payments, KYC resubmits, and reconciliation files." },
      { n: "04", kicker: "Week 4", title: "Go live", body: "First successful checkout, first KYC pass, first payout that leaves. Failures are visible to staff." },
    ],
    running: [
      { cadence: "Payout cycle", title: "Withdrawals", body: "Requests against live equity. Staff approval. Money that left and money that did not." },
      { cadence: "Ongoing", title: "Reconciliation", body: "PSP files versus the book. Failed charges and retries." },
      { cadence: "Ongoing", title: "KYC", body: "Resubmits, funded-account checks, and AML flags before a payout." },
    ],
    included: [
      { title: "Payments and payouts", body: "PSPs, reconciliation, and trader withdrawals." },
      { title: "KYC / AML onboarding", body: "Identity before a challenge, funded account, or live login." },
      { title: "Custom development", body: "Payout rules, approval flows, and vendor adapters." },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    blurb: "Meta and Google, pixels, and SEO on the pages that convert.",
    hero: "Paid ads and search for a prop firm or broker. Accounts, pixels, and first creatives complete in 30 days. Then spend, CPA, and the pages that rank.",
    steps: [
      { n: "01", kicker: "Week 1", title: "Accounts and tracking", body: "Meta and Google accounts. Pixels on signup, checkout, or challenge purchase. The conversion the desk actually wants." },
      { n: "02", kicker: "Week 2", title: "Creatives and audiences", body: "First ads, audiences, and landing pages. Challenge or account opening." },
      { n: "03", kicker: "Week 3", title: "SEO", body: "Public pages: trust, FAQ, and challenge. Titles, internals, and what should rank." },
      { n: "04", kicker: "Week 4", title: "Go live", body: "First spend. Events fire. Staff can see CPA and which ad sent the last signup or order." },
    ],
    running: [
      { cadence: "Daily", title: "Spend", body: "Budget, cost per challenge, account, or order. Pause what is not converting." },
      { cadence: "Ongoing", title: "Creatives", body: "New ads, fatigued ones, and landing pages that match the offer." },
      { cadence: "Ongoing", title: "SEO", body: "Search on the public site. Challenge pages, trust pages, product pages." },
    ],
    included: [
      { title: "Meta and Google ads", body: "Paid acquisition and conversion events." },
      { title: "SEO", body: "Search for the public site." },
      { title: "WordPress", body: "Landing and trust pages the team can edit." },
    ],
  },
  {
    slug: "trustpilot",
    name: "Trustpilot",
    blurb: "Profile, invites, and replies that match the book.",
    hero: "A Trustpilot profile, who can reply, and invites after a payout, funded account, or delivery. Setup completes in 30 days. Then the desk answers reviews against the book.",
    steps: [
      { n: "01", kicker: "Week 1", title: "Profile and ownership", body: "Trustpilot business profile. Who can reply. The claim and the domains that match the brand." },
      { n: "02", kicker: "Week 2", title: "Invite rules", body: "When an invite goes out: after a payout, a funded account, a live login, or a delivery. Who is excluded." },
      { n: "03", kicker: "Week 3", title: "Trust pages", body: "FAQ, complaints path, and the public pages that sit next to the profile." },
      { n: "04", kicker: "Week 4", title: "Go live", body: "Invites fire from payout, funded, or order-delivered. Staff see what went out and what bounced. First replies. A review is tied back to the trader or order." },
    ],
    running: [
      { cadence: "Daily", title: "Replies", body: "New reviews. Who answers. What can be said without arguing the book in public." },
      { cadence: "Ongoing", title: "Invites", body: "Volume after payout, funded, or delivery. Bounces and people who should not get an invite." },
      { cadence: "Ongoing", title: "Complaints", body: "A one-star that matches a failed payout, a closed account, or a late order. Desk sees both sides." },
    ],
    included: [
      { title: "Trustpilot", body: "Trustpilot profile, invites, and replies." },
      { title: "Invite rules", body: "Invite rules wired to payouts, funded accounts, or orders." },
      { title: "Trust pages", body: "Trust and FAQ pages." },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    blurb: "Catalog, checkout, and the orders desk.",
    hero: "A store with catalog, cart, checkout, and order status. Reputation setup starts in week 1. Launch completes in 30 days, including ads. Then the desk packs and refunds.",
    steps: [
      {
        n: "01",
        kicker: "Week 1",
        title: "Catalog and brand",
        body: "Products, variants, shipping rules, and the public pages. Trustpilot profile started with the brand.",
      },
      {
        n: "02",
        kicker: "Week 2",
        title: "Checkout",
        body: "Cart, payment gateway, and the confirmation the buyer sees. Order lands on the desk.",
      },
      {
        n: "03",
        kicker: "Week 3",
        title: "Desk tools",
        body: "Stock, refunds, failed payments, and the queue staff work. Pixels on purchase.",
      },
      {
        n: "04",
        kicker: "Week 4",
        title: "Go live",
        body: "First paid order. Ads can spend. Review invites after delivery already wired.",
      },
    ],
    running: [
      {
        cadence: "Daily",
        title: "Orders",
        body: "New, packed, refunded. Failed charges and the ones that need a retry.",
      },
      {
        cadence: "Daily",
        title: "Stock",
        body: "What is live. What should come down. New SKUs.",
      },
      {
        cadence: "Ongoing",
        title: "Catalog and ads",
        body: "Prices, landing pages, and the creatives that send traffic to checkout.",
      },
    ],
    included: [
      { title: "Web and app development", body: "Store, cart, and the buyer account." },
      { title: "UX/UI", body: "Catalog, checkout, and order status." },
      { title: "Payments and payouts", body: "Checkout and refunds on the gateway you pick." },
      { title: "Custom development", body: "Stock rules, shipping, and staff tools." },
      { title: "WordPress", body: "Store or catalog the team can edit." },
      { title: "Meta and Google ads", body: "Paid traffic to product and checkout pages." },
      { title: "SEO", body: "Search for product pages." },
      { title: "Reputation", body: "Review invites after delivery." },
    ],
  },
  {
    slug: "llc-ltd",
    name: "LLC & LTD",
    blurb: "US LLC and UK LTD, filed, with the papers a bank asks for.",
    hero: "A US LLC or a UK LTD. Name check, filing, EIN or Companies House number, and the pack a bank or PSP asks for. Filing completes in 30 days. Then annual returns and address changes.",
    steps: [
      { n: "01", kicker: "Week 1", title: "Name and jurisdiction", body: "US LLC or UK LTD. Name availability. Members or directors. Registered agent or registered office." },
      { n: "02", kicker: "Week 2", title: "File", body: "Articles, the filing itself, and the confirmation the registry sends back." },
      { n: "03", kicker: "Week 3", title: "Tax and bank pack", body: "EIN or UTR. Operating agreement or articles. The documents a bank or processor asks for." },
      { n: "04", kicker: "Week 4", title: "Papers in hand", body: "Certificate, numbers, and a copy the desk can send. Ready to open a bank or PSP account." },
    ],
    running: [
      { cadence: "Annual", title: "Filings", body: "Annual report or confirmation statement. Address and officer changes." },
      { cadence: "Ongoing", title: "Bank and PSP", body: "Extra papers when a bank or processor asks. Who can sign." },
      { cadence: "Ongoing", title: "Records", body: "Minutes, membership, and the file you need next year." },
    ],
    included: [
      { title: "Custom development", body: "The pack and checklists the desk reuses." },
      { title: "Filings", body: "Filings, address changes, and what a bank asked for." },
      { title: "KYC / AML onboarding", body: "Identity papers that sit with the company file." },
    ],
  },
  {
    slug: "payment-gateways",
    name: "Payment Gateways",
    blurb: "Stripe, PayPal, and the processors checkout already uses.",
    hero: "Stripe, PayPal, or the PSP a store, firm, or broker already has. Checkout, webhooks, and refunds. Wiring completes in 30 days. Then failed charges and reconciliation.",
    steps: [
      { n: "01", kicker: "Week 1", title: "Processors", body: "Which processors. Test keys. What a successful charge should look like on the book." },
      { n: "02", kicker: "Week 2", title: "Checkout", body: "Pay button, webhooks, and the order or invoice that marks paid." },
      { n: "03", kicker: "Week 3", title: "Refunds and failures", body: "Staff can refund. Failed charges retry or show on the desk." },
      { n: "04", kicker: "Week 4", title: "Go live", body: "First live charge. First refund. Processor files match the book." },
    ],
    running: [
      { cadence: "Daily", title: "Failures", body: "Declines, 3DS, and retries. Charges that never hit the book." },
      { cadence: "Ongoing", title: "Reconciliation", body: "Processor files versus orders or invoices. Money that left and money that did not." },
      { cadence: "Ongoing", title: "Methods", body: "Cards, wallets, or a second processor. Keys rotated when they should be." },
    ],
    included: [
      { title: "Payments and payouts", body: "Stripe, PayPal, and the PSP you already run." },
      { title: "Custom development", body: "Webhooks, refunds, and staff approval." },
      { title: "Web and app development", body: "Checkout on the store, firm, or broker site." },
    ],
  },
  {
    slug: "crms",
    name: "CRMs",
    blurb: "Leads, pipeline, and the desk that works them.",
    hero: "A CRM for the desk: stages, owners, and leads from ads or WhatsApp. Standing it up completes in 30 days. Then the pipeline the team works every day.",
    steps: [
      { n: "01", kicker: "Week 1", title: "Pipeline", body: "Stages, owners, and which leads matter. Fields the desk already tracks by hand." },
      { n: "02", kicker: "Week 2", title: "Sources", body: "Forms, ads, and WhatsApp into the CRM. No spreadsheet in between." },
      { n: "03", kicker: "Week 3", title: "Desk screens", body: "Lead view, stage moves, and task lists." },
      { n: "04", kicker: "Week 4", title: "Go live", body: "First lead in. First stage move. Staff can see who owns what." },
    ],
    running: [
      { cadence: "Daily", title: "Pipeline", body: "New leads, stuck deals, and who should call." },
      { cadence: "Daily", title: "Follow-up", body: "Tasks that were due. Messages that did not go out." },
      { cadence: "Ongoing", title: "Setup", body: "New stages, new sources, what the desk started tracking last week." },
    ],
    included: [
      { title: "Custom development", body: "Pipeline, roles, and the adapters to ads and WhatsApp." },
      { title: "SaaS", body: "Multi-user CRM with owners and permissions." },
      { title: "Digital marketing", body: "Leads from ads land on the right owner." },
    ],
  },
  {
    slug: "custom-ai-bots",
    name: "Custom AI Bots",
    blurb: "Support and sales bots on the site, WhatsApp, and email.",
    hero: "A bot that answers from your docs and the book. Site chat, WhatsApp, or email. Handoff to a human when it should. Build completes in 30 days. Then the desk edits replies.",
    steps: [
      { n: "01", kicker: "Week 1", title: "Sources", body: "FAQ, product docs, and what the bot must not invent. Who owns a wrong answer." },
      { n: "02", kicker: "Week 2", title: "Channels", body: "Site widget, WhatsApp, or email. The first replies on those channels." },
      { n: "03", kicker: "Week 3", title: "Handoff", body: "When a human takes over. Tickets in the queue the desk already uses." },
      { n: "04", kicker: "Week 4", title: "Go live", body: "Bot is on. Staff can see transcripts and correct a bad answer." },
    ],
    running: [
      { cadence: "Daily", title: "Quality", body: "Wrong answers. Prompts to fix. Sources that were missing." },
      { cadence: "Ongoing", title: "Handoff", body: "Queues that still need a person. Bots that talked past the question." },
    ],
    included: [
      { title: "Custom development", body: "The bot, the prompts, and the adapters to WhatsApp and email." },
      { title: "Web and app development", body: "Site widget and the transcript view for staff." },
      { title: "UX/UI", body: "Chat, handoff, and the screen where staff correct an answer." },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
