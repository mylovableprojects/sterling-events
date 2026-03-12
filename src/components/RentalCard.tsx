"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type RentalCategory = "Tables" | "Chairs" | "Linens" | "Lighting" | "Décor" | "Tableware";

export type RentalItem = {
  _id?: string;
  name: string;
  category: RentalCategory;
  description: string;
  pricePerDay: number;
  imageUrl: string;
  featured?: boolean;
};

type Props = {
  item: RentalItem;
  onInquire?: (item: RentalItem) => void;
};

export function RentalCard({ item, onInquire }: Props) {
  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[var(--navy-light)]/60 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 text-[0.7rem]">
          <span className="rounded-full bg-black/60 px-3 py-1 font-medium tracking-[0.2em] text-[var(--champagne)]/85 uppercase">
            {item.category}
          </span>
          {item.featured && (
            <span className="rounded-full border border-[var(--gold)]/70 bg-black/60 px-3 py-1 text-[0.7rem] tracking-[0.18em] text-[var(--gold)] uppercase">
              Featured
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-4 py-4">
        <div className="space-y-1">
          <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">{item.name}</h3>
          <p className="text-[0.8rem] leading-relaxed text-[var(--champagne)]/80">{item.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2 text-[0.8rem]">
          <span className="text-[var(--gold-light)]">
            from{" "}
            <span className="font-semibold text-[var(--gold)]">
              ${item.pricePerDay.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>{" "}
            / day
          </span>
          <button
            type="button"
            onClick={() => onInquire?.(item)}
            className="text-[0.7rem] tracking-[0.22em] text-[var(--champagne)]/85 underline-offset-4 hover:text-[var(--gold)] hover:underline uppercase"
          >
            Inquire
          </button>
        </div>
      </div>
    </motion.article>
  );
}

