<img width="344" height="44" alt="image" src="https://github.com/user-attachments/assets/b0e45471-d7c0-41b7-817a-6aa8ba2109bc" /># GA4-Tools
messageBus to GA4 tools

There are 2 versions of this tool.

The one that already confirmed with P'Koo is GA4-bus.ts
Its worked properly but lack of abstraction and can be improve.

To use GA4-bus.ts
1. Place GA4-bus.ts inside /src/lib/core which should alreafy have gtag.ts 
2. import { trackCustomEvent } from '$lib/core/ga4-bus.ts.txt' to a file of event you're working with.
3. Use function trackCustomEvent at the same place that you've already define gtagEvent.
4. You need to define the event name, for example:   trackCustomEvent('reserve_beneficiary_not_available');
   
There is another version that I've refined it but it hasn't confirmed by P'Koo yet.
But the way to implement is still the same maybe with a different function name.
