import type { DetailItem } from "@/lib/types";

interface DetailGridProps {
  details: readonly DetailItem[];
}

export function DetailGrid({ details }: DetailGridProps) {
  return (
    <dl className="grid gap-6">
      {details.map((item) => (
        <div key={item.label} className="grid gap-1">
          <dt className="font-mono text-xs uppercase tracking-widest text-secondary">
            {item.label}
          </dt>
          {item.values.map((value) => (
            <dd
              key={value}
              className="font-body text-base leading-snug text-primary"
            >
              {value}
            </dd>
          ))}
        </div>
      ))}
    </dl>
  );
}
