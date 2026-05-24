import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import classNames from "classnames";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

const description =
  "Brandon Main is a software engineer in Atlanta, GA, specializing in full-stack development with C#/.NET, TypeScript, React, and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandonmain.com"),
  title: {
    default: "Brandon Main — Software Engineer",
    template: "%s — Brandon Main",
  },
  description,
  authors: [{ name: "Brandon Main" }],
  openGraph: {
    title: "Brandon Main — Software Engineer",
    description,
    url: "https://brandonmain.com",
    siteName: "Brandon Main",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Brandon Main — Software Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={classNames(inter.className, "overscroll-none")}>
        {children}
      </body>
    </html>
  );
}
