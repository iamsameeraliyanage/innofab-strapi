import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import Image from "next/image";
import { getStrapiURL } from "@/utils/utils";
import qs from "qs";
import { StrapiImage } from "../StrapiImage/StrapiImage";

async function loader() {
  const { fetchData } = await import("@/services/services");

  const path = "/api/global";
  const baseUrl = getStrapiURL();
  const query = qs.stringify({
    populate: {
      topnav: {
        populate: {
          logoLink: {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
            },
          },
          link: {
            populate: true,
          },
        },
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;

  const data = await fetchData(url.href);

  return data;
}

const NavBar = async () => {
  const navbarData: NavbarData = await loader();
  if (!navbarData) return null;

  const topNavData = navbarData.topnav;
  const navData = topNavData.link;

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}

        <Link href="/" className="block">
          <StrapiImage
            src={topNavData.logoLink.image.url}
            alt={
              topNavData.logoLink.image.alternativeText ||
              topNavData.logoLink.image.name
            }
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
interface LogoImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  name: string;
}

interface LogoLink {
  id: number;
  text: string;
  href: string;
  image: LogoImage;
}

interface Link {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

interface TopNav {
  id: number;
  logoLink: LogoLink;
  link: Link[];
}

interface NavbarData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  topnav: TopNav;
}
