// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c6c170cf3eda5492eb5c4c594b50332b@o4508902601392128.ingest.us.sentry.io/4508902604013568",

  // We recommend adjusting this value in production, or using `tracesSampler`
  // for finer control
  tracesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
