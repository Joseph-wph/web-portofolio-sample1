import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="text-3xl leading-tight font-semibold tracking-tight lg:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-xs text-white/60 lg:text-sm">{description}</p>
      )}
    </div>
  );
}
