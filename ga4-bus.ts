import { MessageBus } from '@bull-shark/tdh-lib-mason/message-bus';
import { gtagEvent } from '$lib/core/gtag';

// Create event channel
const ga4Channel = new MessageBus();

// Subscribe GA4 handler
ga4Channel.subscribe((message: any) => {
  if (message.type === 'ga4_event') {
    gtagEvent(message.eventName, message.eventData);
  }
});

//public API for tracking custom events
export function trackCustomEvent(eventName: string, params: object = {}) {
  ga4Channel.dispatch({
    type: 'ga4_event',
    eventName,
    eventData: {
      ...params,
      module: 'NHSO',
      event_ts: Date.now()
    }
  });
}

// Export for testing or manual mocking
export { ga4Channel };
