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
        className={clsx("min-h-screen font-sans antialiased", Geist.className)}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen">
            <div className="w-full py-2 text-center font-bold text-white bg-black relative overflow-hidden">
              <div
                className="absolute inset-x-0 top-0 h-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)",
                  height: "200%",
                  transform: "translateY(-50%)",
                }}
              ></div>
              <span className="relative z-10">Launching in 2 days</span>
            </div>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
