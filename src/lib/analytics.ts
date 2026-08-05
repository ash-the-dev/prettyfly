export type WipTrackProperties = {
  category?: string;
  path?: string;
  value?: number;
  isConversion?: boolean;
  [key: string]: unknown;
};

declare global {
  interface Window {
    __wipTrack?: (eventName: string, properties?: WipTrackProperties) => void;
  }
}

const conversionEvents = new Set([
  "contact_click",
  "website_health_checker_click",
  "commit_happens_outbound_click",
]);

export function wipTrack(eventName: string, properties: WipTrackProperties = {}) {
  if (typeof window === "undefined") return;

  const isConversion = properties.isConversion ?? conversionEvents.has(eventName);

  window.__wipTrack?.(eventName, {
    ...properties,
    category: properties.category ?? (isConversion ? "conversion" : "engagement"),
    path: properties.path ?? window.location.pathname,
    isConversion,
  });
}
