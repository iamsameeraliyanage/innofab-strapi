import { Container } from "@/components/Wrappers/Container";
import { PageProps } from "@/types/types";
import React from "react";

const pages = {
  data: [
    {
      id: 1,
      slug: "features",
    },
    {
      id: 2,
      slug: "pricing",
    },
    {
      id: 3,
      slug: "company",
    },
  ],
};

interface StaticParamsProps {
  id: number;
  slug: string;
}

export async function generateStaticParams() {
  return pages.data.map((page: Readonly<StaticParamsProps>) => ({
    slug: page.slug,
  }));
}

export default function DynamicPageRoute(props: Readonly<PageProps>) {
  const slug = props.params?.slug;
  return (
    <Container>
      <div>Dynamic Page: {slug}</div>
    </Container>
  );
}
