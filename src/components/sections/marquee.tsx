"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";
import { MARQUEE_ITEMS } from "@/constants/content";

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map((item) => (
        <Fragment key={item}>
          <span className="text-3xl font-bold tracking-tight whitespace-nowrap text-white/70 lg:text-5xl">
            {item}
          </span>
          <Asterisk className="size-10 shrink-0 text-primary-200 lg:size-14" strokeWidth={2.5} />
        </Fragment>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Services" className="overflow-hidden bg-primary-400 py-5 lg:py-6">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </motion.div>
    </section>
  );
}
