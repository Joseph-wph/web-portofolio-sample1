import { Check, X } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { COMPARISON } from "@/constants/content";

export function Comparison() {
  const { columns, rows } = COMPARISON;

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-primary-400/15 to-transparent"
        aria-hidden
      />
      <div className="container-page relative">
        <SectionHeading title={COMPARISON.title} description={COMPARISON.description} />

        <Reveal className="mt-10 overflow-x-auto border border-white/10 lg:mt-14">
          <table className="w-full min-w-[320px] border-collapse text-left text-xs lg:text-sm">
            <colgroup>
              <col className="w-[46%]" />
              <col className="w-[27%]" />
              <col className="w-[27%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-4 font-semibold lg:px-8">{columns.skill}</th>
                <th className="bg-primary-400 px-4 py-4 font-semibold lg:px-8">{columns.withMe}</th>
                <th className="px-4 py-4 font-semibold lg:px-8">{columns.other}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.skill} className="border-b border-white/10 last:border-b-0">
                  <td className="px-4 py-3.5 text-white/90 lg:px-8">{row.skill}</td>
                  <td className="bg-primary-400 px-4 py-3.5 lg:px-8">
                    <StatusIcon positive={row.withMe} />
                  </td>
                  <td className="px-4 py-3.5 lg:px-8">
                    <StatusIcon positive={row.other} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

function StatusIcon({ positive }: { positive: boolean }) {
  return positive ? (
    <span className="grid size-5 place-items-center rounded-full bg-white text-primary-400">
      <Check className="size-3.5" strokeWidth={3} />
      <span className="sr-only">Yes</span>
    </span>
  ) : (
    <span className="grid size-5 place-items-center rounded-full bg-white/20 text-white/70">
      <X className="size-3.5" strokeWidth={3} />
      <span className="sr-only">No</span>
    </span>
  );
}
