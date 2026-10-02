export const shippedProjects = [
  {
    id: "1",
    tag: "Prop firm",
    name: "FTM",
    body: "Prop firm platform. Evaluations, trader desks, payouts, and the stack the desk runs.",
    href: "/project/1",
    productHref: "/product/prop-firm-platform",
  },
  {
    id: "2",
    tag: "Broker",
    name: "Global4ex",
    body: "Broker and funded-trader stack. Trading accounts, KYC, and the desk tools staff use.",
    href: "/project/2",
    productHref: "/product/forex-broker-platform",
  },
  {
    id: "3",
    tag: "Prop firm",
    name: "FundedRoll",
    body: "Evaluation-model firm. Challenges, funded accounts, and payouts on the same book.",
    href: "/project/3",
    productHref: "/product/prop-firm-platform",
  },
  {
    id: "4",
    tag: "Broker",
    name: "XM",
    body: "Forex broker. Client portal, trading accounts, KYC, and the desk tools staff use.",
    href: "/project/4",
    productHref: "/product/forex-broker-platform",
  },
] as const;

export function getShippedProject(id: string) {
  return shippedProjects.find((p) => p.id === id);
}
