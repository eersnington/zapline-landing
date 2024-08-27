import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { GeistSans as Geist } from "geist/font/sans";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-white font-sans antialiased",
          Geist.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen">
            <div className="w-full py-2 text-center font-bold text-white bg-gradient-to-r from-[#ffbe86] to-[#bc72f9] via-[#F97272]">
              Launching in 2 days
            </div>
            <div className="bg-gradient-to-r from-[#fccde1] via-[#fcc2c2] to-[#e4befd]">
              <Navbar />
            </div>
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
