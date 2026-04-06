import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yacht Supply | Premium Marine Supplies & Hardware",
  description:
    "Curated marine supplies and hardware for boat owners who care about quality. Premium yacht supply and marine parts coming soon.",
  keywords: ["yacht supply", "marine supplies", "boat hardware", "marine parts", "yacht parts"],
  authors: [{ name: "Yacht Supply" }],
  openGraph: {
    title: "Yacht Supply | Premium Marine Supplies & Hardware",
    description:
      "Curated marine supplies and hardware for boat owners who care about quality. Coming soon.",
    url: "https://yachtsupply.com",
    siteName: "Yacht Supply",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacht Supply | Premium Marine Supplies & Hardware",
    description:
      "Curated marine supplies and hardware for boat owners who care about quality. Coming soon.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-navy text-white antialiased">
        {children}
      </body>
    </html>
  );
}
