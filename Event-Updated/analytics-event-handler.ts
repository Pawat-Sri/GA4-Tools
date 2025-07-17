import type { AnalyticsEventBus } from "./analytics-event-bus.interface";
import { EventAnalyticsSource, type EventMessage } from "./analytics-event.types";

export function handleAnalyticsEvent(eventBus: AnalyticsEventBus) {
  return eventBus.getEventFromBus().subscribe((event: EventMessage) => {
    if (event.trackingSource === EventAnalyticsSource.GA4Event) {
      sendToGA4(event);
    }
  });
}

function sendToGA4(event: EventMessage) {
  console.log(`Sending ${event.trackingName} to GA4`, event.trackingData);
  window?.gtag && window.gtag("event", event.trackingName, event.trackingData);
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
