import Image from "next/image";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { PORTFOLIO } from "@/constants/content";
import { SECTION_IDS } from "@/constants/site";

export function Portfolio() {
  return (
    <section id={SECTION_IDS.projects} className="container-page py-16 lg:py-24">
      <SectionHeading title={PORTFOLIO.title} description={PORTFOLIO.description} />

      <ul className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {PORTFOLIO.items.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * 0.1}>
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-surface">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="mt-4 text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-xs text-white/50">{item.year}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
