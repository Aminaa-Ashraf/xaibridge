import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <article className="container max-w-3xl space-y-6 text-white/65">
        <h1 className="text-4xl font-semibold text-white">Privacy Policy</h1>
        <p className="text-sm text-white/40">Last Updated: August 12, 2024</p>
        <p>
          At <span className="text-white">Xaibridge</span>, we are committed to
          protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, and
          safeguard your data when you interact with our website and services.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">
          1. Information We Collect
        </h2>
        <p>
          <strong className="text-white">Personal Information:</strong> When you
          contact us, request a quote, or engage our services, we may collect
          personal details such as your name, email address, phone number, and
          company name.
        </p>
        <p>
          <strong className="text-white">Technical Information:</strong> We may
          collect data about your device, IP address, browser type, and usage
          patterns to improve our website and services.
        </p>
        <p>
          <strong className="text-white">Cookies:</strong> Our website uses
          cookies to enhance your experience. You can control cookie preferences
          through your browser settings.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>To provide and manage our services, including web development and IT solutions.</li>
          <li>To communicate with you regarding your projects, inquiries, or requests.</li>
          <li>To improve our website, services, and user experience.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
        <h2 className="pt-4 text-2xl font-semibold text-white">
          3. Data Sharing and Disclosure
        </h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your data with trusted service providers
          who assist us in delivering our services, subject to confidentiality
          agreements. We may also disclose your information if required by law or
          to protect our rights.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">4. Data Security</h2>
        <p>
          We take reasonable measures to protect your data from unauthorized
          access, alteration, or disclosure. However, no method of transmission
          over the internet or electronic storage is 100% secure.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. You can also opt out of marketing communications at any
          time.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">
          6. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the revised date. We encourage you to
          review this policy periodically.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-white">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, email{" "}
          <a href={`mailto:${site.email}`} className="text-primary">
            {site.email}
          </a>
          .
        </p>
      </article>
    </section>
  );
}
