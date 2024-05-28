import { Client } from "@gadget-client/opt-the-shop";

export const api = new Client({ environment: window.gadgetConfig.environment });
