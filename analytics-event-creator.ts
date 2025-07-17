import { EventAnalyticsSource } from "./analytics-event.types";
import type { EventMessage } from "./analytics-event.types";

export function createEvent(trackingName: string, trackingData: Record<string, any>): EventMessage {
  return {
    trackingSource: EventAnalyticsSource.GA4Event,
    trackingName,
    trackingData : {
      ...trackingData,
      module : 'NHSO',
      event_ts: Date.now()
    }
  };
}
