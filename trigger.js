import { TriggerClient, eventTrigger } from "@trigger.dev/sdk";

export const client = new TriggerClient({
  id: "trigger-astro-example",
  apiKey: import.meta.env.TRIGGER_API_KEY,
  apiUrl: import.meta.env.TRIGGER_API_URL,
});

client.defineJob({
  id: "simple-astro-job",
  name: "Simple Astro Job",
  version: "1.0.0",
  trigger: eventTrigger({
    name: "astro.event",
  }),
  run: async (payload, io, ctx) => {
    console.log("Running the simplest job with no integrations");
    return { message: payload.message };
  },
});
