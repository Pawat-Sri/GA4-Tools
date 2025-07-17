export enum EventAnalyticsSource {
  GA4Event = "GA4Event",
  PrometheusEvent = "PrometheusEvent",
}

export type EventMessage = {
  trackingSource: EventAnalyticsSource;
  trackingName: string;
  trackingData: Record<string, any>;
};
