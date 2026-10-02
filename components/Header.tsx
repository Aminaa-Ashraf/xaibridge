"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { nav, site } from "@/lib/site";
import { products } from "@/lib/products";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
      pathname === href
        ? "text-white"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 flex w-full items-center ${
        scrolled
          ? "bg-bg-color-dark/95 shadow-sticky-dark backdrop-blur-md"
          : "bg-bg-color-dark"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-72 max-w-full px-4 xl:mr-12">
            <Link href="/" className="header-logo block w-full py-3">
              <Logo className="h-12 w-[200px]" />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <nav className="hidden lg:flex lg:space-x-12">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              ))}
              <div className="group relative">
                <button
                  type="button"
                  onClick={() => setProductsOpen((v) => !v)}
                  className="flex cursor-pointer items-center py-2 text-base text-white/70 hover:text-white lg:py-6"
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {productsOpen && (
                  <div className="absolute left-0 top-full z-50 w-64 rounded-sm border border-white/10 bg-[#111] py-2 shadow-xl">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/product/${p.slug}`}
                        className="block px-4 py-2.5 text-sm text-white/70 hover:text-primary"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden items-center justify-end gap-3 md:flex">
              <a
                href={site.appSignIn}
                className="rounded-sm border border-primary/40 px-6 py-3 text-base font-medium text-white transition hover:border-primary hover:text-primary"
              >
                Sign In
              </a>
              <a
                href={site.appSignUp}
                className="rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition hover:bg-primary/80"
              >
                Sign Up
              </a>
            </div>

            <button
              type="button"
              className="rounded-lg px-3 py-[6px] text-white ring-primary focus:ring-2 lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="absolute left-0 top-full w-full border-t border-white/10 bg-bg-color-dark lg:hidden">
          <div className="container flex flex-col gap-1 py-5">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
            <p className="pt-2 text-[11px] uppercase tracking-[0.2em] text-primary">
              Products
            </p>
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className="py-1.5 text-sm text-white/70 hover:text-primary"
              >
                {p.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={site.appSignIn}
                className="rounded-sm border border-primary/40 px-8 py-3 text-center text-base font-medium text-white"
              >
                Sign In
              </a>
              <a
                href={site.appSignUp}
                className="rounded-sm bg-primary px-8 py-3 text-center text-base font-medium text-white"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
