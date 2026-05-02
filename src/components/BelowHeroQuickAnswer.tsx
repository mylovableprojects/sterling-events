import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Extra classes on the outer `<section>` */
  className?: string;
};

/**
 * Full-width band directly under the gradient hero — for summary / quick-answer
 * content so the hero stays headline + actions only.
 */
export function BelowHeroQuickAnswer({ children, className = "" }: Props) {
  return (
    <section
      className={`relative z-[1] border-t border-white/10 bg-[var(--navy)] py-10 md:py-12 ${className}`.trim()}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex w-full flex-col items-center gap-6">{children}</div>
      </div>
    </section>
  );
}
