import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Xaibridge | Empowering Digital Innovation",
    template: "%s | Xaibridge",
  },
  description: site.description,
  keywords: [
    "software development",
    "digital innovation",
    "custom applications",
    "technology solutions",
  ],
  openGraph: {
    title: "Xaibridge | Empowering Digital Innovation",
    description: site.description,
    url: site.url,
    type: "website",
    images: [
      {
        url: "https://xaibridge.com/xaibridge.png",
        width: 1200,
        height: 630,
        alt: "Xaibridge - Empowering Digital Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empowering Digital Innovation | Xaibridge",
    description: site.description,
    images: ["https://xaibridge.com/xaibridge.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
