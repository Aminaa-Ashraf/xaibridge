import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPage() {
  return (
    <section className="py-16 md:py-24">
      <article className="container max-w-3xl space-y-6 text-white/65">
        <h1 className="text-4xl font-semibold text-white">Refund Policy</h1>
        <p className="text-sm text-white/40">Last Updated: August 12, 2024</p>
        <p>
          At <span className="text-white">Xaibridge</span>, we are committed to
          delivering high-quality web and IT solutions that meet our clients
          expectations. To ensure transparency, please review our refund policy
          below.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">
          1. Changes and Revisions
        </h2>
        <p>
          We value client satisfaction and are open to making reasonable revisions
          to the completed work. Any requested changes or modifications will be
          assessed, and we will work to address them within the scope of the
          original agreement.
        </p>
        <p>
          If additional work is required beyond the original scope, it will be
          subject to a new agreement and additional charges.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">
          2. Project Delays or Cancellations
        </h2>
        <p>
          If a project is delayed or canceled by the client after work has
          commenced, a refund will not be provided for the work completed up to
          that point. Any payments made for the initial stages of the project are
          non-refundable.
        </p>
        <p>
          If Xaibridge is unable to complete a project due to unforeseen
          circumstances on our end, we will issue a full or partial refund,
          depending on the amount of work completed.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">
          3. No Refunds for Completed Work
        </h2>
        <p>
          Once a project has been completed as per the agreed-upon terms,
          timeline, and specifications, no refunds will be issued. This includes
          all development, design, and IT services provided by Xaibridge.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">4. Exceptions</h2>
        <p>
          Refunds may be considered on a case-by-case basis in exceptional
          circumstances, such as if the work delivered is significantly different
          from the agreed-upon specifications or if there is a breach of contract
          by Xaibridge.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Refund Policy, email{" "}
          <a href={`mailto:${site.email}`} className="text-primary">
            {site.email}
          </a>
          .
        </p>
      </article>
    </section>
  );
}
