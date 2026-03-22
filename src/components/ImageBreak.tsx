"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  overlayText?: string;
};

export function ImageBreak({ src, alt, overlayText }: Props) {
  return (
    <section className="relative">
      <motion.div
        className="image-break relative"
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            priority={false}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        {overlayText && (
          <div className="relative z-10 flex h-full items-center justify-center px-4">
            <div className="max-w-3xl rounded-[1.5rem] border border-white/20 bg-black/45 px-6 py-6 text-center md:px-10 md:py-8">
              <p className="font-[var(--font-display)] text-lg italic text-[var(--champagne)]/95 md:text-2xl">
                {overlayText}
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

