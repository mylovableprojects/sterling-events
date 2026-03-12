import Link from "next/link";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

type Props = { slug: string };

export function AnswerSpokeLinks({ slug }: Props) {
  const config = ANSWER_SPOKE_CONFIG[slug];
  if (!config) return null;

  return (
    <div className="mt-8 space-y-6">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/resources" className="text-[var(--gold-light)] hover:underline">
          Want the full guide? →
        </Link>
        <Link href="/packages" className="text-[var(--gold-light)] hover:underline">
          See our pricing →
        </Link>
        <Link href={config.serviceHref} className="text-[var(--gold-light)] hover:underline">
          {config.serviceLabel}
        </Link>
      </div>
      <Link href="/contact" className="btn-primary inline-block">
        Get an exact quote for your event
      </Link>
      {config.related.length > 0 && (
        <div className="border-t border-white/10 pt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--champagne)]/70">
            You may also be asking:
          </p>
          <ul className="space-y-2">
            {config.related.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="text-[var(--cream)] hover:text-[var(--gold-light)] hover:underline">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
