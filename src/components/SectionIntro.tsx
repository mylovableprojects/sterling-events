"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  quickAnswer?: ReactNode;
};

export function SectionIntro({ eyebrow, title, quickAnswer }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
      className="space-y-4 md:max-w-2xl"
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h1 className="hero-headline text-[var(--cream)]">{title}</h1>
      {quickAnswer && (
        <div className="max-w-2xl rounded-xl bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          {quickAnswer}
        </div>
      )}
    </motion.div>
  );
}

