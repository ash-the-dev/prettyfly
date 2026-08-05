"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

import { wipTrack } from "@/lib/analytics";

type Props = {
  href: string;
  eventName?: string;
  eventLabel?: string;
  category?: string;
  isConversion?: boolean;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className" | "onClick">;

function track(
  eventName?: string,
  options?: { eventLabel?: string; href?: string; category?: string; isConversion?: boolean },
) {
  if (!eventName) return;

  wipTrack(eventName, {
    category: options?.category,
    isConversion: options?.isConversion,
    path: typeof window !== "undefined" ? window.location.pathname : undefined,
    label: options?.eventLabel ?? "",
    href: options?.href ?? "",
  });
}

export default function TrackedLink({
  href,
  eventName,
  eventLabel,
  category,
  isConversion,
  children,
  className,
  target,
  rel,
  onClick,
  ...props
}: Props) {
  const isExternal = href.startsWith("http");
  const safeRel = rel ?? (isExternal ? "noopener noreferrer" : undefined);

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={safeRel}
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          track(eventName, { eventLabel, href, category, isConversion });
          onClick?.(event);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => {
        track(eventName, { eventLabel, href, category, isConversion });
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
