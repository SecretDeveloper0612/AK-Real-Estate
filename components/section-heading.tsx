interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      } mb-12 md:mb-20 animate-fade-up`}
    >
      {label && (
        <span
          className={`text-[11px] uppercase tracking-[0.25em] ${
            light ? "text-neutral-400" : "text-neutral-500"
          } mb-5 block font-medium`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-5xl lg:text-[3.5rem] font-serif ${
          light ? "text-white" : "text-neutral-900"
        } leading-[1.1] text-balance font-medium`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg ${
            light ? "text-neutral-400" : "text-neutral-500"
          } leading-relaxed font-light max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
