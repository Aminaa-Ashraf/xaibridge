import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const linkClass =
  "mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary";

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-gray-dark pt-16 md:pt-20 lg:pt-24">
      <div className="container relative">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[420px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Logo className="h-16 w-[260px]" />
              </Link>
              <p className="mb-6 text-base leading-relaxed text-body-color-dark">
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                <div className="grid gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-base text-body-color-dark hover:underline hover:text-primary"
                  >
                    {site.email}
                  </a>
                  <a
                    href={site.social.discord}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-base text-body-color-dark hover:text-primary"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.07.07 0 0 0-.079.035c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.08.08 0 0 0-.079-.035A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028 14 14 0 0 0 1.226-1.994.07.07 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.08.08 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.08.08 0 0 1 .078.01c.12.098.246.198.373.292a.08.08 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.08.08 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.08.08 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418" />
                    </svg>
                    Discord
                  </a>
                </div>
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-sm bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo/footer-qr.svg"
                    alt="Xaibridge QR"
                    className="h-20 w-20"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-white">Useful Links</h2>
              <ul>
                <li>
                  <a href="/llc-registration.pdf" className={linkClass}>
                    LLC Registration
                  </a>
                </li>
                <li>
                  <Link href="/product/llc-ltd" className={linkClass}>
                    LLC & LTD
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-white">Terms</h2>
              <ul>
                <li>
                  <Link href="/privacy" className={linkClass}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className={linkClass}>
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-white">Support & Help</h2>
              <ul>
                <li>
                  <Link href="/support" className={linkClass}>
                    Open Support Ticket
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={linkClass}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#959CB183] to-transparent" />

        <div className="py-8">
          <div className="flex items-center">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="mr-6 text-body-color-dark hover:text-primary"
            >
              <svg width="9" height="18" viewBox="0 0 9 18" className="fill-current">
                <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
              </svg>
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="mr-6 text-body-color-dark hover:text-primary"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" className="fill-current">
                <path d="M17.2477 2.2376C17.0446 1.48982 16.4545 0.899652 15.7067 0.696566C14.3453 0.333496 9.00002 0.333496 9.00002 0.333496C9.00002 0.333496 3.65474 0.333496 2.29333 0.696566C1.54554 0.899652 0.955397 1.48982 0.752311 2.2376C0.389252 3.599 0.389252 6.8335 0.389252 6.8335C0.389252 6.8335 0.389252 10.068 0.752311 11.4294C0.955397 12.1772 1.54554 12.7673 2.29333 12.9704C3.65474 13.3335 9.00002 13.3335 9.00002 13.3335C9.00002 13.3335 14.3453 13.3335 15.7067 12.9704C16.4545 12.7673 17.0446 12.1772 17.2477 11.4294C17.6108 10.068 17.6108 6.8335 17.6108 6.8335C17.6108 6.8335 17.6108 3.599 17.2477 2.2376ZM7.22224 9.72238V3.94461L11.8334 6.8335L7.22224 9.72238Z" />
              </svg>
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-body-color-dark hover:text-primary"
            >
              <svg width="17" height="16" viewBox="0 0 17 16" className="fill-current">
                <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-14 z-[-1] opacity-80">
        <svg width="55" height="99" viewBox="0 0 55 99" fill="none">
          <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
        </svg>
      </div>
    </footer>
  );
}
