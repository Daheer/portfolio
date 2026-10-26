import { ThemeProvider } from "@/components/theme-provider";
import { websiteMetadata } from "@/lib/data";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://daheer.github.io"),
  title: websiteMetadata.title,
  description: websiteMetadata.description,
  creator: "Dahiru Ibrahim Dahiru",
  openGraph: {
    title: websiteMetadata.title,
    description: websiteMetadata.description,
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary",
    title: websiteMetadata.title,
    description: websiteMetadata.description,
  },
  icons: {
    icon: "/portfolio/logo-2.0-with-text-light.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
