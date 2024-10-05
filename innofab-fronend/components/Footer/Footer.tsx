import React from "react";

import Link from "next/link";

import Image from "next/image";
import { Container } from "../Wrappers/Container";

async function loader() {
  const data = {
    footer: {
      id: 1,
      description:
        "Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source.",
      logoLink: {
        id: 2,
        text: "Innofab",
        href: "/",
        image: {
          id: 1,
          url: "/img/innofab-logo.svg",
          alternativeText: null,
          name: "innofab-logo",
        },
      },
      colOneLinks: [
        { id: 9, href: "/", text: "Home", external: false },
        { id: 10, href: "/features", text: "Features", external: false },
        { id: 11, href: "/pricing", text: "Pricing", external: false },
        { id: 12, href: "/company", text: "Company", external: false },
        { id: 13, href: "/blog", text: "Blog", external: false },
      ],
      colTwoLinks: [],
      socialLinks: {
        id: 1,
        heading: "Follow us!",
        socialLink: [
          {
            id: 14,
            href: "https://www.facebook.com",
            text: "Facebook",
            external: true,
          },
          {
            id: 15,
            href: "http://www.youtube.com",
            text: "YouTube",
            external: true,
          },
          {
            id: 16,
            href: "http://www.github.com",
            text: "GitHub",
            external: true,
          },
          {
            id: 17,
            href: "http://www.twitter.com",
            text: "Twitter",
            external: true,
          },
        ],
      },
    },
  };
  return data;
}

interface FooterData {
  footer: {
    id: number;
    description: string;
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
    colOneLinks: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    colTwoLinks: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    socialLinks: {
      id: number;
      heading: string;
      socialLink: SocialLink[];
    };
  };
}

interface SocialLink {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

export async function Footer() {
  const data = (await loader()) as FooterData;
  if (!data.footer) return null;
  const footer = data.footer;

  //   console.dir(footer, { depth: null });
  if (!data) return null;

  const { logoLink, colOneLinks, colTwoLinks, socialLinks, description } =
    footer;
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link href={logoLink.href}>
                <Image
                  src={logoLink.image.url}
                  alt={logoLink.image.alternativeText || logoLink.image.name}
                  width={200}
                  height={100}
                />
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              {description}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {colOneLinks &&
                colOneLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  >
                    {item.text}
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {colTwoLinks &&
                colTwoLinks.map((item, index) => (
                  <span
                    key={index}
                    // href={item.href}
                    className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  >
                    {item.text}
                  </span>
                ))}
            </div>
          </div>
          <div>
            <div>{socialLinks.heading}</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {socialLinks.socialLink &&
                socialLinks.socialLink.map((item, index) => (
                  <div key={index}>
                    <span className="sr-only">{item.text}</span>
                    icon
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}.
        </div>
      </Container>
    </div>
  );
}
