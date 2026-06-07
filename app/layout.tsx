import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/lib/profile";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.domain),
  title: {
    default: "Ghanshyam Dharmik | Software Developer, AI Builder & Automation Engineer",
    template: "%s | Ghanshyam Dharmik",
  },
  description: profile.description,
  keywords: ["Ghanshyam Dharmik", "GDharmik9", "React Developer", "Next.js", "AI Builder", "Automation Engineer", "Portfolio"],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    title: "Ghanshyam Dharmik | Premium Developer Portfolio",
    description: profile.description,
    url: profile.domain,
    siteName: "Ghanshyam Dharmik Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@GDharmik9",
    title: "Ghanshyam Dharmik | Software Developer",
    description: profile.description,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased dark:bg-ink dark:text-slate-100`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
