"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";

type Props = {
  slug: string;
  title: string;
  lastCrumbLabel: string;
};

/** Shared hero layout for `/answers/[slug]` spoke pages — matches home `PageHero`. */
export function AnswerPageHero({ slug, title, lastCrumbLabel }: Props) {
  return (
    <PageHero
      eyebrow="Answers"
      title={title}
      breadcrumbs={
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/answers", label: "Answers" },
            { href: `/answers/${slug}`, label: lastCrumbLabel },
          ]}
        />
      }
    />
  );
}
