"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SKILLS, TOOLS } from "@/constants/content";
import { SECTION_IDS } from "@/constants/site";

export function Tools() {
  return (
    <section id={SECTION_IDS.skill} className="container-page py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col justify-between gap-8 lg:pr-12">
          <div>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight lg:max-w-[260px] lg:text-4xl">
              {TOOLS.title}
            </h2>
            <p className="mt-4 max-w-xs text-xs leading-5 text-white/60">{TOOLS.description}</p>
          </div>
          <Button asChild variant="primary" size="lg" className="w-full lg:w-[365px]">
            <a href={`#${SECTION_IDS.contact}`}>
              <Mail />
              {TOOLS.cta}
            </a>
          </Button>
        </div>

        <ul className="flex flex-col lg:border-l lg:border-white/25 lg:pl-0">
          {SKILLS.map((skill) => (
            <li key={skill.name} className="px-0 py-5 lg:px-8">
              <div className="flex items-center gap-4">
                <Image src={skill.icon} alt="" width={24} height={24} className="size-6" />
                <span className="flex-1 text-sm">{skill.name}</span>
                <span className="text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="mt-4 h-px w-full bg-white/15">
                <motion.div
                  className="h-px bg-primary-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
