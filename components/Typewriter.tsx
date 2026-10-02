"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Prop Firm Platforms",
  "Forex Broker Desks",
  "Trading Stacks",
  "Payments & KYC",
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[index];
    const delay = deleting ? 40 : text === full ? 1600 : 70;

    const id = window.setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setDeleting(true);
        return;
      }
      const next = full.slice(0, text.length - 1);
      setText(next);
      if (!next) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }
    }, delay);

    return () => window.clearTimeout(id);
  }, [text, deleting, index]);

  return (
    <span className="inline-block min-h-[1.15em]">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-primary align-middle">
        &nbsp;
      </span>
    </span>
  );
}
