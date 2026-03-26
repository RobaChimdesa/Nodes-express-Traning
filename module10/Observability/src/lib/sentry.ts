import * as Sentry from "@sentry/node";

// Initialize once at startup so all downstream imports share the same client.
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  // Keep high sampling in dev so it is easy to validate instrumentation.
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV || "development",
  release: "observability-lab@1.0.0",
  integrations: [Sentry.expressIntegration()],
});

export default Sentry;

