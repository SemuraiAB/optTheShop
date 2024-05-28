/**
* This is the Gadget server side types library for:
*
*               _        _   _                    _
*    ___  _ __ | |_     | |_| |__   ___       ___| |__   ___  _ __
*   / _ \| '_ \| __|____| __| '_ \ / _ \_____/ __| '_ \ / _ \| '_ \
*  | (_) | |_) | ||_____| |_| | | |  __/_____\__ \ | | | (_) | |_) |
*   \___/| .__/ \__|     \__|_| |_|\___|     |___/_| |_|\___/| .__/
*        |_|                                                 |_|
*
* Built for environment `Development` at version 13200
* Framework version: ^0.3.1
* Edit this app here: https://opt-the-shop.gadget.dev/edit
*/
import type { Client } from "@gadget-client/opt-the-shop";
import { Logger } from "./AmbientContext";
export * from "./metadataFileTypes";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./auth";
export * from "./effects";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
export * from "./ActionOptions";
export * from "./models/Session";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyProductImage";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/ShopifyFile";
/**
 * An instance of the Gadget logger
 */
declare let logger: Logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { api, logger };
