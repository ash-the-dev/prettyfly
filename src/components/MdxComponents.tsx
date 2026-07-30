import Link from "next/link";
import type { ReactNode } from "react";

function normalizeSteps(steps?: string[] | string) {
  if (Array.isArray(steps)) return steps.filter(Boolean);
  if (typeof steps === "string") {
    return steps
      .split("|")
      .map((step) => step.trim())
      .filter(Boolean);
  }
  return [];
}

export function FlowDiagram({ steps }: { steps?: string[] | string }) {
  const items = normalizeSteps(steps);

  if (!items.length) return null;

  return (
    <figure className="my-10 rounded-2xl border-2 border-black bg-neutral-100 p-5">
      <svg viewBox={`0 0 760 ${items.length * 92}`} role="img" aria-label={`Diagram: ${items.join(" then ")}`} className="h-auto w-full">
        {items.map((step, index) => {
          const y = 24 + index * 92;
          return (
            <g key={`${step}-${index}`}>
              <rect x="40" y={y} width="680" height="52" rx="12" fill={index % 2 === 0 ? "#F45BCF" : "#67E8F9"} stroke="#000" strokeWidth="3" />
              <text x="380" y={y + 33} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="800" fill="#070707">
                {step}
              </text>
              {index < items.length - 1 ? (
                <path d={`M380 ${y + 58} L380 ${y + 86}`} stroke="#000" strokeWidth="4" markerEnd="url(#arrow)" />
              ) : null}
            </g>
          );
        })}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#000" />
          </marker>
        </defs>
      </svg>
      <figcaption className="mt-3 text-sm font-bold text-neutral-600">Original Pretty Fly diagram for this article.</figcaption>
    </figure>
  );
}

export const mdxComponents = {
  h2: ({ children }: { children: ReactNode }) => {
    const text = String(children);
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    return <h2 id={id}>{children}</h2>;
  },
  a: ({ href = "", children }: { href?: string; children: ReactNode }) => {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <Link href={href}>{children}</Link>;
  },
  FlowDiagram,
};
