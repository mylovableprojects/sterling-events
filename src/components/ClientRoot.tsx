"use client";

import { ReactNode, useEffect, useRef } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

export function ClientRoot({ children }: Props) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const node = document.createElement("div");
    node.className = "cursor-gold";
    document.body.appendChild(node);
    cursorRef.current = node;

    const handleMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      if (frame.current == null) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    const tick = () => {
      const node = cursorRef.current;
      if (!node) return;

      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;

      node.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      frame.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame.current != null) cancelAnimationFrame(frame.current);
      if (cursorRef.current) document.body.removeChild(cursorRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#10142a_0,_#02030a_55%,_#010108_100%)] text-[var(--cream)]">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}

