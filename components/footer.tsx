import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Logo />
            <p className="mt-2 text-sm">
              Zapline - Elevate your CX with AI-powered voicebot
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm hover:text-[#E1FF41]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm hover:text-[#E1FF41]" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-[#E1FF41]" href="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-[#E1FF41]" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  target="_blank"
                  className="text-sm hover:text-[#E1FF41]"
                  href={siteConfig.links.twitter}
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="text-sm hover:text-[#E1FF41]"
                  href={siteConfig.links.linkedin}
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Zapline. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link
              className="text-sm text-gray-400 hover:text-white"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-gray-400 hover:text-white"
              href="/terms"
            >
              Terms of Service
            </Link>
          </div>
          <Button
            as={Link}
            className="text-base font-medium rounded-full bg-[#E1FF41] text-black hover:bg-white hover:text-black transition-colors px-6 py-3"
            href={siteConfig.links.waitlist}
            variant="flat"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </footer>
  );
};
