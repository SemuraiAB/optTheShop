/**
* This is the Gadget API client library for:
*
*               _        _   _                    _                 
*    ___  _ __ | |_     | |_| |__   ___       ___| |__   ___  _ __  
*   / _ \| '_ \| __|____| __| '_ \ / _ \_____/ __| '_ \ / _ \| '_ \ 
*  | (_) | |_) | ||_____| |_| | | |  __/_____\__ \ | | | (_) | |_) |
*   \___/| .__/ \__|     \__|_| |_|\___|     |___/_| |_|\___/| .__/ 
*        |_|                                                 |_|    
*
* Built for environment "Development" at version 13200
* API docs: https://docs.gadget.dev/api/opt-the-shop
* Edit this app here: https://opt-the-shop.gadget.app/edit
*/
export {
  BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord,
  GadgetRecordList, GadgetValidationError, InvalidRecordError
} from "@gadgetinc/api-client-core";

export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";

export * from "./Client.js";
export * from "./types.js";

declare global {
  interface Window {
    gadgetConfig: {
      apiKeys: {
        shopify: string;
      };
      environment: string;
      env: Record<string, any>;
      authentication?: {
        signInPath: string;
        redirectOnSuccessfulSignInPath: string;
      }
    };
  }
}
