import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import Image from "next/image";

const NavBar = () => {
  const logoLink = {
    text: "Innofab",
    href: "/",
    image: {
      id: 1,
      url: "/img/innofab-logo.svg",
      alternativeText: null,
      name: "innofab-logo",
    },
  };
  return (
    <NavigationMenu className="justify-between w-full max-w-full py-2 px-4">
      <NavigationMenuList>
        {/* Logo */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-xl font-bold">
              <Image
                src={logoLink.image.url}
                alt={logoLink.image.alternativeText || logoLink.image.name}
                width={200}
                height={100}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList>
        {/* About Us */}
        <NavigationMenuItem>
          <Link href="/aboutus" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Our Team */}
        <NavigationMenuItem>
          <Link href="/ourteam" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Our Team
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Prices */}
        <NavigationMenuItem>
          <Link href="/prices" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Prices
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <LanguageToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
