# GA4-Tools
messageBus to GA4 tools

There are 2 versions of this tool.

The one that already confirmed with P'Koo is GA4-bus.ts
Its worked properly but lack of abstraction and can be improve.

To use GA4-bus.ts
1. Place GA4-bus.ts inside /src/lib/core which should alreafy have gtag.ts 
2. import { trackCustomEvent } from '$lib/core/ga4-bus.ts.txt' to a file of event you're working with.
3. Use function trackCustomEvent at the same place that you've already define gtagEvent.
4. For example
   <Button custom="w-full mt-2 !bg-[#E49435] !hover:bg-[#EB9D3E] !active:bg-[#F0A94D]"
           on:click={() => {
           // GA4-start-click_renew_queue
           trackCustomEvent('click_renew_queue', { sessionId });
           // GA4-end-click_renew_queue
           handleRenewQueue();
            }}>
        <Text custom="!text-xl">{@html captions.warningNotAccept.primaryBtn}</Text>
   </Button>

There is another version that I've refined it but it hasn't confirmed by P'Koo yet.
But the way to implement is still the same maybe with a different function name.
