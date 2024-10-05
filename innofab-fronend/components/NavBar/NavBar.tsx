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

const NavBar = () => {
  return (
    <NavigationMenu className="justify-between w-full max-w-full py-2 px-4">
      <NavigationMenuList>
        {/* Logo */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-xl font-bold">
              Logo
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
