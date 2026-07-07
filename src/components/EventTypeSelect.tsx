"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

const OPTIONS = [
  { value: "", label: "Select one" },
  { value: "Wedding", label: "Wedding" },
  { value: "Corporate", label: "Corporate" },
  { value: "Social", label: "Social / Private" },
] as const;

type Props = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  className: string;
};

/** Custom listbox — avoids native `<select>` white OS popup + light text on Windows. */
export function EventTypeSelect({ id, value, onChange, className }: Props) {
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const selected = OPTIONS.find((o) => o.value === value);
  const displayLabel = selected?.label ?? "Select one";
  const isPlaceholder = !value;

  const openList = useCallback(() => {
    const idx = OPTIONS.findIndex((o) => o.value === value);
    setHighlightIndex(idx >= 0 ? idx : 0);
    setOpen(true);
  }, [value]);

  const selectOption = useCallback(
    (index: number) => {
      onChange(OPTIONS[index]?.value ?? "");
      setOpen(false);
    },
    [onChange],
  );

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openList();
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setHighlightIndex((i) => Math.min(i + 1, OPTIONS.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightIndex((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        selectOption(highlightIndex);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative" onKeyDown={onKeyDown}>
      <button
        type="button"
        id={id}
        role="combobox"
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-activedescendant={open ? `${id}-option-${highlightIndex}` : undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        className={`${className} flex cursor-pointer items-center justify-between gap-2 text-left`}
      >
        <span className={isPlaceholder ? "text-[var(--champagne)]/40" : "text-[var(--cream)]"}>
          {displayLabel}
        </span>
        <span aria-hidden className="shrink-0 text-[var(--champagne)]/60">
          ▾
        </span>
      </button>

      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={id}
          className="absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-xl border border-white/20 bg-[var(--navy)] py-1 shadow-lg"
        >
          {OPTIONS.map((opt, i) => {
            const isSelected = value === opt.value;
            const isHighlighted = highlightIndex === i;
            return (
              <li
                key={opt.value || "empty"}
                id={`${id}-option-${i}`}
                role="option"
                aria-selected={isSelected}
                className={`cursor-pointer px-4 py-2.5 text-base text-[var(--cream)] transition-colors ${
                  isHighlighted ? "bg-[var(--gold)]/20 text-[var(--gold-light)]" : ""
                } ${isSelected ? "font-medium" : ""}`}
                onMouseEnter={() => setHighlightIndex(i)}
                onClick={() => selectOption(i)}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
