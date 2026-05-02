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
      className={`border-t border-white/10 bg-[var(--navy)] py-10 md:py-12 ${className}`.trim()}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">{children}</div>
    </section>
  );
}
