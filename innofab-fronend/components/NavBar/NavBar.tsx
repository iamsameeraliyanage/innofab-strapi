import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import Image from "next/image";

const navBarData: NavbarData = {
  id: 1,
  title: "Global Setting Page",
  description: "Responsible for global website settings.",
  createdAt: "2024-05-20T16:59:58.446Z",
  updatedAt: "2024-05-21T05:03:11.112Z",
  publishedAt: "2024-05-20T16:59:59.488Z",
  topnav: {
    id: 1,
    logoLink: {
      id: 1,
      text: "Innofab",
      href: "/",
      image: {
        id: 1,
        url: "/img/innofab-logo.svg",
        alternativeText: null,
        name: "innofab-logo",
      },
    },
    link: [
      { id: 1, href: "/", text: "Home", external: false },
      { id: 3, href: "/features", text: "Features", external: false },
      { id: 4, href: "/pricing", text: "Pricing", external: false },
      { id: 5, href: "/company", text: "Company", external: false },
      { id: 2, href: "/blog", text: "Blog", external: false },
    ],
    cta: {
      id: 6,
      href: "#",
      text: "Get Started",
      external: true,
    },
  },
  meta: {},
};

const NavBar = () => {
  const data = navBarData;
  if (!data) return null;
  const navData = data.topnav.link;
  const logoData = data.topnav.logoLink;

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}

        <Link href="/" legacyBehavior passHref>
          <Image
            src={logoData.image.url}
            alt={logoData.image.alternativeText || logoData.image.name}
            width={150}
            height={80}
          />
        </Link>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navData.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <div>
            <ThemeToggle />
          </div>
          <div>
            <LanguageToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

interface NavbarData {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  topnav: {
    id: number;
    logoLink: {
      id: number;
      text: string;
      href: string;
      image: {
        id: number;
        url: string;
        alternativeText: string | null;
        name: string;
      };
    };
    link: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    cta: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    };
  };
  meta: Record<string, any>;
}
