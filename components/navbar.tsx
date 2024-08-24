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
        className="bg-black text-white rounded-lg shadow-lg max-w-7xl mx-auto "
        maxWidth="full"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">Zapline</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className="hidden sm:flex basis-3/5 sm:basis-full"
          justify="center"
        >
          <ul className="hidden lg:flex gap-4">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium text-white",
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
              className="text-sm font-normal text-black bg-[#ffbe86] hover:bg-[#ffcba4] rounded-lg"
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
