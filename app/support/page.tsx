import type { Metadata } from "next";
import ContactChannels from "@/components/ContactChannels";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact" };

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        crumb="Contact"
        description="We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals."
      />
      <ContactChannels />
    </>
  );
}
