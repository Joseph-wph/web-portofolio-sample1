import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { ASSETS } from "@/constants/assets";
import { TESTIMONIALS_CONTENT } from "@/constants/content";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

const VARIANT_CLASSES: Record<Testimonial["variant"], string> = {
  feature: "bg-linear-to-b from-primary-400/60 to-black lg:row-span-2 lg:min-h-[420px]",
  stat: "bg-surface lg:col-span-2",
  basic: "bg-surface",
};

export function Testimonials() {
  return (
    <section className="container-page py-16 lg:py-24">
      <SectionHeading
        title={TESTIMONIALS_CONTENT.title}
        description={TESTIMONIALS_CONTENT.description}
      />

      <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {TESTIMONIALS_CONTENT.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08} className={VARIANT_CLASSES[item.variant]}>
            <TestimonialCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between gap-6 border border-white/10 p-5 lg:p-6",
      )}
    >
      <div>
        {item.stat && <p className="text-3xl font-bold lg:text-4xl">{item.stat}</p>}
        {item.title && <p className="mt-1 text-sm font-semibold">{item.title}</p>}
        <Stars count={item.rating} />
        <blockquote className="mt-4 text-xs leading-5 text-white/65">{item.quote}</blockquote>
      </div>

      <figcaption className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={ASSETS.images.testimonials.avatar}
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-full object-cover"
          />
          <div>
            <p className="text-xs font-semibold">{item.author}</p>
            <p className="text-[11px] text-white/50">{item.position}</p>
          </div>
        </div>
        <Quote className="size-6 text-white/20" aria-hidden />
      </figcaption>
    </figure>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="mt-3 flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-star text-star" />
      ))}
    </div>
  );
}
