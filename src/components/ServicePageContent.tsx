"use client";

import { Fragment } from "react";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { PageHeroEmbedded } from "@/components/PageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { QuickAnswerBox } from "@/components/QuickAnswerBox";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABlock } from "@/components/CTABlock";
import { ServicePageLayout, type ServicePageSections } from "@/components/ServicePageLayout";
import { ServiceImagePlaceholder } from "@/components/ServiceImagePlaceholder";
import { PhotoGrid } from "@/components/PhotoGrid";
import { RentalHighlightGrid } from "@/components/RentalHighlightGrid";
import Link from "next/link";
import type { ServicePageData } from "@/lib/servicePages";

const BASE = "https://www.sterlingeventrentals.com";

type Props = {
  data: ServicePageData;
  slug: string;
};

export function ServicePageContent({ data, slug }: Props) {
  const canonical = `/services/${slug}`;
  const hasTentSizeTable = Boolean(data.tentSizeTable);
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: canonical, label: data.label },
  ];

  const sections: ServicePageSections = {
    hero: (
      <PageHeroEmbedded
        breadcrumbs={<BreadcrumbNav items={crumbs} baseUrl={BASE} schemaId="ld-breadcrumbs-service" />}
        eyebrow={`Services · ${data.label}`}
        title={data.h1}
        subhead={data.heroSubheadline}
        backgroundImage={
          data.heroImageSrc
            ? {
                src: data.heroImageSrc,
                alt: data.heroImageAlt ?? `${data.label} — event rental photography`,
              }
            : undefined
        }
      />
    ),

    quickAnswer: (
      <BelowHeroQuickAnswer>
        <QuickAnswerBox>{data.quickAnswer}</QuickAnswerBox>
      </BelowHeroQuickAnswer>
    ),

    whatWeDo: (
      <div className="mx-auto max-w-6xl space-y-8 px-4 text-[var(--charcoal)]">
        {data.introParagraph && (
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--charcoal)]/90">
            {data.introParagraph}
          </p>
        )}
        {data.section2PhotoGridLabels && (
          <PhotoGrid count={data.section2PhotoGridLabels.length} labels={data.section2PhotoGridLabels} srcs={data.section2PhotoGridSrcs} />
        )}
        {slug === "games-entertainment" && (
          <div className="mt-10">
            <RentalHighlightGrid audience="games-entertainment" />
          </div>
        )}
      </div>
    ),

    sizesAndIncluded: (
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:gap-12 ${
          hasTentSizeTable ? "lg:items-start" : "lg:items-stretch"
        }`}
      >
        <div className="flex-1 space-y-6 text-[var(--champagne)]/90">
          <h2 className="heading-2 text-[var(--cream)]">
            {data.tentSizeTable ? "Tent sizes for every event" : "Sizes & what's included"}
          </h2>
          {data.tentSizeTable && (
            <>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[280px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[var(--gold)]/40">
                      <th className="py-2 pr-4 font-semibold text-[var(--cream)]">Guest Count</th>
                      <th className="py-2 pr-4 font-semibold text-[var(--cream)]">Recommended Tent Size</th>
                      <th className="py-2 font-semibold text-[var(--cream)]">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.tentSizeTable.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-white/10">
                        <td className="py-3 pr-4 text-[var(--champagne)]/90">{row.guestCount}</td>
                        <td className="py-3 pr-4 text-[var(--champagne)]/90">{row.size}</td>
                        <td className="py-3 text-[var(--champagne)]/90">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-relaxed text-[var(--champagne)]/85">
                <strong>Note:</strong> {data.tentSizeTable.note}
              </p>
            </>
          )}
          {data.whatsIncluded && data.whatsIncluded.length > 0 && (
            <ul className="list-disc space-y-1 pl-5 text-base leading-relaxed text-[var(--champagne)]/85">
              {data.whatsIncluded.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          <p className="text-base leading-relaxed text-[var(--champagne)]/85">
            Setup fee is separate from rental cost — quoted upfront.
          </p>
        </div>
        <div className={hasTentSizeTable ? "w-full lg:w-5/12" : "w-full lg:w-1/2 lg:min-h-[320px]"}>
          <ServiceImagePlaceholder
            label={data.section3ImageLabel ?? `${data.label} — setup`}
            aspectRatio="4/3"
            className={
              hasTentSizeTable
                ? "rounded-2xl"
                : "h-full min-h-[280px] rounded-2xl object-cover lg:min-h-full"
            }
            src={data.section3ImageSrc}
          />
        </div>
      </div>
    ),

    whoItsFor: (
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="heading-2 mb-8 text-[var(--charcoal)]">Who we work with</h2>
        <div className={`grid gap-6 sm:grid-cols-2 ${data.section4InlinePhotoLabel ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {data.whoItsFor?.map((item, i) => (
            <Fragment key={i}>
              <div className="rounded-2xl bg-white p-8 text-[var(--navy)] shadow-sm">
                <p className="text-base leading-relaxed">{item}</p>
              </div>
              {i === 1 && data.section4InlinePhotoLabel && (
                <div className="w-full sm:col-span-2 lg:col-span-1">
                  <ServiceImagePlaceholder
                    label={data.section4InlinePhotoLabel}
                    aspectRatio="4/3"
                    className="h-full min-h-[200px] rounded-2xl"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    ),

    trustStrip: (
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 border-y border-[var(--gold)]/20 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-[var(--gold)]/30">
          {data.trustStrip?.map((item, i) => (
            <div key={i} className="flex gap-3 sm:px-6">
              <span
                className="h-8 w-8 shrink-0 rounded-full border-2 border-[var(--gold)]/50 bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] font-[var(--font-display)] text-sm font-semibold"
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--cream)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-[var(--champagne)]/85">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    howItWorks: (
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:gap-12">
        <div className="flex-1 space-y-6 text-[var(--charcoal)]">
          {data.processBlock && (
            <>
              <h2 className="heading-2 text-[var(--charcoal)]">
                {data.processBlock.headline}
              </h2>
              <ol className="grid gap-6 sm:grid-cols-1">
                {data.processBlock.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="h-10 w-10 shrink-0 rounded-full border-2 border-[var(--gold)]/50 bg-[var(--gold)]/10 flex items-center justify-center text-[var(--navy)] font-[var(--font-display)] text-lg font-semibold"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-[var(--font-display)] font-semibold text-[var(--navy)]">
                        Step {i + 1} — {step.title}
                      </h3>
                      <p className="mt-1 text-base leading-relaxed text-[var(--charcoal)]/85">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/85">
                <strong>Note:</strong> {data.processBlock.note}
              </p>
            </>
          )}
          {!data.processBlock && data.processSteps?.length > 0 && (
            <>
              <h2 className="heading-2 text-[var(--charcoal)]">How it works</h2>
              <ol className="list-decimal space-y-1 pl-5 text-base leading-relaxed text-[var(--charcoal)]/85">
                {data.processSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <ServiceImagePlaceholder
            label={data.section6ImageLabel ?? `${data.label} — process`}
            aspectRatio="4/3"
            className="rounded-2xl"
            src={data.section6ImageSrc}
          />
        </div>
      </div>
    ),

    faq: (
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="heading-2 mb-6 text-[var(--cream)]">Common questions</h2>
        <FAQAccordion items={data.faqs} schemaId="ld-faq-service" variant="default" />
      </div>
    ),

    ctaClose: (
      <div className="mx-auto max-w-3xl space-y-8 px-4 text-center">
        {data.ctaHeadline && (
          <h2 className="heading-2 text-[var(--cream)]">{data.ctaHeadline}</h2>
        )}
        {data.ctaSubheadline && (
          <p className="text-base leading-relaxed text-[var(--champagne)]/90">
            {data.ctaSubheadline}
          </p>
        )}
        <CTABlock
          primary={{ href: "/contact", label: data.ctaCopy }}
          secondary={data.secondaryCta ? [data.secondaryCta] : undefined}
          subCopy="Share your event details for a tailored recommendation."
          layout="column"
        />
        <div className="space-y-6 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--champagne)]/70">
            You may also need:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {data.siblingServices.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[var(--gold)]/40 bg-[var(--navy)]/80 px-4 py-2 text-sm text-[var(--champagne)] hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/10"
              >
                {link.label} →
              </Link>
            ))}
          </div>
          {data.ctaFooterLinks && data.ctaFooterLinks.length > 0 && (
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm">
              {data.ctaFooterLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--gold-light)] hover:underline"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    ),
  };

  return <ServicePageLayout sections={sections} />;
}
