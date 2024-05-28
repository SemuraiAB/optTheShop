import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFile } from "@gadget-client/opt-the-shop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFileServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly type: true;
    readonly alt: true;
    readonly shopifyCreatedAt: true;
    readonly duration: true;
    readonly fileErrors: true;
    readonly fileStatus: true;
    readonly image: true;
    readonly originalFileSize: true;
    readonly originalSource: true;
    readonly preview: true;
    readonly sources: true;
    readonly url: true;
    readonly shopId: true;
    readonly shop: false;
    readonly test: true;
};
/** Context of the `create` action on the `shopifyFile` model. */
export interface CreateShopifyFileActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFile` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFile, DefaultShopifyFileServerSelection>>;
    /**
    * @deprecated Use 'return' instead.
    */
    scope: ActionExecutionScope;
    /**
    * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
    */
    trigger: ActionTrigger;
    /**
    * An object containing the incoming data(this models fields) passed by triggers or user inputs.
    */
    params: {};
    /**
    * @private The context of this action.
    */
    context: CreateShopifyFileActionContext;
}
/** Context of the `update` action on the `shopifyFile` model. */
export interface UpdateShopifyFileActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFile` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFile, DefaultShopifyFileServerSelection>>;
    /**
    * @deprecated Use 'return' instead.
    */
    scope: ActionExecutionScope;
    /**
    * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
    */
    trigger: ActionTrigger;
    /**
    * An object containing the incoming data(this models fields) passed by triggers or user inputs.
    */
    params: {};
    /**
    * @private The context of this action.
    */
    context: UpdateShopifyFileActionContext;
}
/** Context of the `delete` action on the `shopifyFile` model. */
export interface DeleteShopifyFileActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFile` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFile, DefaultShopifyFileServerSelection>>;
    /**
    * @deprecated Use 'return' instead.
    */
    scope: ActionExecutionScope;
    /**
    * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
    */
    trigger: ActionTrigger;
    /**
    * An object containing the incoming data(this models fields) passed by triggers or user inputs.
    */
    params: {};
    /**
    * @private The context of this action.
    */
    context: DeleteShopifyFileActionContext;
}
