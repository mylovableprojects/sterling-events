"use client";

import { ReactNode } from "react";
import { m } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
};

export function ScrollReveal({ children, className }: Props) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}

