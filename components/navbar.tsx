import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <div className="w-full px-6 py-4">
      <NextUINavbar
        className="max-w-[1024px] mx-auto bg-black text-white rounded-full shadow-lg border border-gray-800"
        maxWidth="full"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-2"
              href="/"
            >
              <Logo />
              <p className="font-bold text-white text-xl">Zapline</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className="hidden sm:flex basis-3/5 sm:basis-full"
          justify="center"
        >
          <ul className="hidden lg:flex gap-6">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:font-medium text-white hover:text-[#E1FF41] rounded-full px-4 py-2 transition-colors text-lg"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden md:flex">
            <Button
              as={Link}
              className="text-base font-medium rounded-full bg-[#E1FF41] text-black hover:bg-white hover:text-black transition-colors px-6 py-3"
              href={siteConfig.links.waitlist}
              variant="flat"
            >
              Join Waitlist
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};
