"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

type Props = {
  href: string;
  eventName?: string;
  eventLabel?: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className" | "onClick">;

declare global {
  interface Window {
    commitHappens?: {
      track?: (eventName: string, properties?: Record<string, string>) => void;
    };
  }
}

function track(eventName?: string, eventLabel?: string, href?: string) {
  if (!eventName) return;

  const payload = { label: eventLabel ?? "", href: href ?? "" };
  window.commitHappens?.track?.(eventName, payload);
  window.dispatchEvent(new CustomEvent("prettyfly_analytics_event", { detail: { eventName, ...payload } }));
}

export default function TrackedLink({
  href,
  eventName,
  eventLabel,
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
          track(eventName, eventLabel, href);
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
        track(eventName, eventLabel, href);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
