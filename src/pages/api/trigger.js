import { createAstroRoute } from "triggerdev-astro-plugin";
import { client } from "../../../trigger.js";

export const post = createAstroRoute(client);
